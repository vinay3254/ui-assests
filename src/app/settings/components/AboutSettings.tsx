import React from 'react';
import { Code2, ExternalLink, Heart } from 'lucide-react';
import AppLogo from '@/components/ui/AppLogo';

const changelog = [
  { id: 'cl-v1.4', version: 'v1.4.0', date: 'Aug 1, 2026', notes: 'Multi-model switching, file upload support, folder organization' },
  { id: 'cl-v1.3', version: 'v1.3.2', date: 'Jul 18, 2026', notes: 'Streaming response improvements, code block copy button' },
  { id: 'cl-v1.2', version: 'v1.2.0', date: 'Jun 30, 2026', notes: 'Export to Markdown and JSON, artifact saving' },
  { id: 'cl-v1.1', version: 'v1.1.0', date: 'Jun 10, 2026', notes: 'Chat history with search, pinned conversations' },
  { id: 'cl-v1.0', version: 'v1.0.0', date: 'May 22, 2026', notes: 'Initial release — single-model chat, local storage history' },
];

export default function AboutSettings() {
  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-1">About ChatFlow</h2>
        <p className="text-sm text-muted-foreground">Version info, credits, and changelog.</p>
      </div>
      {/* App identity */}
      <div className="border border-border rounded-xl p-5 bg-card mb-4 flex items-center gap-4">
        <AppLogo size={48} />
        <div>
          <h3 className="text-base font-semibold text-foreground">ChatFlow</h3>
          <p className="text-sm text-muted-foreground">Version 1.4.0 — August 2026</p>
          <p className="text-xs text-muted-foreground mt-1">
            A premium multi-model AI chat interface. No account required.
          </p>
        </div>
      </div>
      {/* Links */}
      <div className="border border-border rounded-xl p-5 bg-card mb-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">Resources</h3>
        <div className="space-y-2">
          {[
            { id: 'link-github', icon: Code2, label: 'Source Code', href: '#' },
            { id: 'link-docs', icon: ExternalLink, label: 'Documentation', href: '#' },
            { id: 'link-privacy', icon: ExternalLink, label: 'Privacy Policy', href: '#' },
          ]?.map((link) => (
            <a
              key={link?.id}
              href={link?.href}
              className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon size={14} />
              {link?.label}
              <ExternalLink size={11} className="ml-auto" />
            </a>
          ))}
        </div>
      </div>
      {/* Changelog */}
      <div className="border border-border rounded-xl overflow-hidden bg-card mb-4">
        <div className="px-5 py-3 border-b border-border bg-muted/30">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Changelog</h3>
        </div>
        <div className="divide-y divide-border">
          {changelog?.map((entry, idx) => (
            <div key={entry?.id} className="flex items-start gap-4 px-5 py-3.5">
              <div className="flex flex-col items-center gap-1 shrink-0 mt-0.5">
                <span className={`text-xs font-mono font-semibold ${idx === 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                  {entry?.version}
                </span>
                {idx === 0 && (
                  <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-medium">
                    Latest
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground leading-snug">{entry?.notes}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{entry?.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-muted-foreground flex items-center gap-1">
        Built with <Heart size={11} className="text-rose-400 fill-rose-400" /> for anyone who loves a good conversation.
      </p>
    </div>
  );
}
