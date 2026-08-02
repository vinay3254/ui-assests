'use client';

import React, { useState } from 'react';
import { Copy, Check, PanelRight } from 'lucide-react';
import { toast } from 'sonner';

interface CodeBlockProps {
  language: string;
  code: string;
  onOpenArtifact?: () => void;
}

export default function CodeBlock({ language, code, onOpenArtifact }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Code copied');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border overflow-hidden bg-muted/40">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/60 border-b border-border">
        <span className="text-xs font-medium text-muted-foreground font-mono">{language}</span>
        <div className="flex items-center gap-2">
          {onOpenArtifact && (
            <button
              onClick={onOpenArtifact}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              title="Open in side panel"
            >
              <PanelRight size={13} />
              Open in panel
            </button>
          )}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            title="Copy code"
          >
            {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed code-block text-foreground scrollbar-thin">
        <code>{code}</code>
      </pre>
    </div>
  );
}
