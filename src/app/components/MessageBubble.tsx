'use client';

import React, { useState } from 'react';
import { Copy, Check, BookmarkPlus, RotateCcw, ExternalLink, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import { Message } from './mockMessages';
import CodeBlock from './CodeBlock';

const modelMeta: Record<string, { label: string; avatarClass: string; initial: string }> = {
  gpt4: {
    label: 'GPT-4o',
    avatarClass: 'bg-gradient-to-br from-[#810100] to-[#630000]',
    initial: 'G',
  },
  claude: {
    label: 'Claude',
    avatarClass: 'bg-gradient-to-br from-[#630000] to-[#1B1717]',
    initial: 'C',
  },
};

export interface Citation {
  id: number;
  title: string;
  url: string;
  snippet: string;
}

interface MessageBubbleProps {
  message: Message;
  onOpenArtifact?: (title: string, content: string, language?: string) => void;
}

// Renders inline [1] [2] citation markers that expand on click
function CitationMarker({ num, citation }: { num: number; citation: Citation }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center w-4 h-4 text-[10px] font-semibold rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors mx-0.5 align-middle leading-none"
        title={citation.title}
      >
        {num}
      </button>
      {open && (
        <span className="absolute bottom-full left-0 mb-1.5 z-50 w-64 bg-card border border-border rounded-xl shadow-lg p-3 block">
          <span className="flex items-start justify-between gap-2 mb-1">
            <span className="text-xs font-medium text-foreground leading-snug line-clamp-2">{citation.title}</span>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground shrink-0 mt-0.5">
              <ChevronDown size={12} />
            </button>
          </span>
          <span className="text-xs text-muted-foreground leading-relaxed line-clamp-3 block mb-2">{citation.snippet}</span>
          <a
            href={citation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <ExternalLink size={10} />
            {citation.url.replace(/^https?:\/\//, '').split('/')[0]}
          </a>
        </span>
      )}
    </span>
  );
}

// Parses text for [n] citation markers and replaces with CitationMarker components
function renderContentWithCitations(content: string, citations?: Citation[]) {
  const paragraphs = content.split('\n\n');
  return paragraphs.map((paragraph, pIdx) => {
    // Split by bold, inline code, and citation markers
    const parts = paragraph.split(/(\*\*[^*]+\*\*|`[^`]+`|\[\d+\])/g);
    const rendered = parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={`b-${pIdx}-${i}`}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={`c-${pIdx}-${i}`} className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
            {part.slice(1, -1)}
          </code>
        );
      }
      const citMatch = part.match(/^\[(\d+)\]$/);
      if (citMatch && citations) {
        const num = parseInt(citMatch[1], 10);
        const cit = citations.find((c) => c.id === num);
        if (cit) return <CitationMarker key={`cit-${pIdx}-${i}`} num={num} citation={cit} />;
      }
      return <React.Fragment key={`t-${pIdx}-${i}`}>{part}</React.Fragment>;
    });
    return (
      <p key={`para-${pIdx}`} className="mb-3 last:mb-0">
        {rendered}
      </p>
    );
  });
}

export default function MessageBubble({ message, onOpenArtifact }: MessageBubbleProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const isUser = message.role === 'user';
  const meta = message.model ? modelMeta[message.model] : null;

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    setSaved(true);
    toast.success('Saved as artifact');
    setTimeout(() => setSaved(false), 3000);
  };

  // User message — subtle right-aligned, no bubble balloon
  if (isUser) {
    return (
      <div className="flex justify-end group">
        <div className="max-w-[72%]">
          {message.attachments && message.attachments.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2 justify-end">
              {message.attachments.map((att) => (
                <div
                  key={att.id}
                  className="flex items-center gap-1.5 bg-muted border border-border rounded-lg px-2.5 py-1.5 text-xs text-foreground"
                >
                  <span className="font-medium">{att.name}</span>
                  <span className="text-muted-foreground">{att.size}</span>
                </div>
              ))}
            </div>
          )}
          {/* Plain text, right-aligned, minimal styling — no speech balloon */}
          <div className="text-sm text-foreground leading-relaxed text-right">
            {message.content}
          </div>
          <div className="flex items-center justify-end gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs text-muted-foreground">{message.timestamp}</span>
          </div>
        </div>
      </div>
    );
  }

  // AI message — document-style, avatar + plain text, no bubble
  return (
    <div className="flex gap-4 group">
      {/* Avatar */}
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0 mt-0.5 ${
          meta?.avatarClass ?? 'bg-muted'
        }`}
      >
        {meta?.initial ?? 'A'}
      </div>

      <div className="flex-1 min-w-0">
        {/* Model name + timestamp — minimal header */}
        <div className="flex items-center gap-2 mb-2">
          {meta && (
            <span className="text-xs font-semibold text-foreground">{meta.label}</span>
          )}
          <span className="text-xs text-muted-foreground">{message.timestamp}</span>
          {/* Functional-only streaming indicator — no animation */}
          {message.streaming && (
            <span className="text-xs text-muted-foreground">Responding…</span>
          )}
        </div>

        {/* Document-style prose — no bubble, just text */}
        <div className="text-sm text-foreground leading-relaxed">
          {renderContentWithCitations(message.content, message.citations)}
        </div>

        {/* Inline citations list — compact, below content */}
        {message.citations && message.citations.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {message.citations.map((cit) => (
              <a
                key={cit.id}
                href={cit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground border border-border rounded-md px-2 py-0.5 hover:border-primary/40 transition-colors"
              >
                <span className="font-semibold text-primary">{cit.id}</span>
                <span className="truncate max-w-[120px]">{cit.title}</span>
              </a>
            ))}
          </div>
        )}

        {/* Code blocks — with "Open in panel" button */}
        {message.codeBlocks && message.codeBlocks.length > 0 && (
          <div className="mt-3 space-y-3">
            {message.codeBlocks.map((block, bIdx) => (
              <div key={`code-wrap-${message.id}-${bIdx}`}>
                <CodeBlock
                  language={block.language}
                  code={block.code}
                  onOpenArtifact={
                    onOpenArtifact
                      ? () => onOpenArtifact(`Code · ${block.language}`, block.code, block.language)
                      : undefined
                  }
                />
              </div>
            ))}
          </div>
        )}

        {/* Action row — visible on hover */}
        <div className="flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            title="Copy message"
          >
            {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            title="Save as artifact"
          >
            <BookmarkPlus size={13} className={saved ? 'text-primary' : ''} />
            {saved ? 'Saved' : 'Save'}
          </button>
          <button
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            title="Regenerate response"
          >
            <RotateCcw size={13} />
            Regenerate
          </button>
        </div>
      </div>
    </div>
  );
}
