'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Download, Maximize2 } from 'lucide-react';
import { toast } from 'sonner';

interface ArtifactPanelProps {
  open: boolean;
  title: string;
  content: string;
  language?: string;
  onClose: () => void;
}

export default function ArtifactPanel({ open, title, content, language, onClose }: ArtifactPanelProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const ext = language ?? 'txt';
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `artifact.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Downloaded');
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop — only on mobile */}
      <div
        className="fixed inset-0 bg-black/20 z-30 md:hidden"
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`
          fixed md:relative top-0 right-0 h-full z-40
          flex flex-col bg-card border-l border-border
          transition-all duration-200
          ${expanded ? 'w-full md:w-[640px]' : 'w-[90vw] md:w-[420px]'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            {language && (
              <span className="text-xs font-mono bg-muted px-2 py-0.5 rounded text-muted-foreground shrink-0">
                {language}
              </span>
            )}
            <span className="text-sm font-medium text-foreground truncate">{title}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={handleCopy}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="Copy content"
            >
              {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            </button>
            <button
              onClick={handleDownload}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="Download"
            >
              <Download size={14} />
            </button>
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title={expanded ? 'Shrink panel' : 'Expand panel'}
            >
              <Maximize2 size={14} />
            </button>
            <button
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="Close panel"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto scrollbar-thin">
          {language ? (
            <pre className="p-4 text-xs leading-relaxed font-mono text-foreground whitespace-pre-wrap break-words">
              <code>{content}</code>
            </pre>
          ) : (
            <div className="p-4 text-sm text-foreground leading-relaxed whitespace-pre-wrap">
              {content}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
