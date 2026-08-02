'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, MoreHorizontal, Share2, Download, Pencil, Trash2, BookmarkPlus, Command } from 'lucide-react';

interface ChatHeaderProps {
  onOpenCommandPalette?: () => void;
}

export default function ChatHeader({ onOpenCommandPalette }: ChatHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('React Server Components deep dive');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header className="h-14 flex items-center justify-between px-5 border-b border-border bg-card shrink-0">
      <div className="flex items-center gap-2 min-w-0">
        {editing ? (
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e?.target?.value)}
            onBlur={() => setEditing(false)}
            onKeyDown={(e) => e?.key === 'Enter' && setEditing(false)}
            className="text-sm font-medium bg-muted border border-border rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-ring w-72"
          />
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate max-w-xs"
            title="Click to rename"
          >
            {title}
          </button>
        )}
        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full shrink-0">
          18 messages
        </span>
      </div>
      <div className="flex items-center gap-1">
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
        </button>

        {/* Cmd+K palette trigger */}
        {onOpenCommandPalette && (
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors text-xs"
            title="Command palette (⌘K)"
          >
            <Command size={14} />
            <kbd className="font-mono text-[10px] hidden sm:inline">⌘K</kbd>
          </button>
        )}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" title="Save artifact">
          <BookmarkPlus size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" title="Share conversation">
          <Share2 size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" title="Export conversation">
          <Download size={16} />
        </button>
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            title="More options"
          >
            <MoreHorizontal size={16} />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-9 w-44 bg-card border border-border rounded-xl shadow-lg z-50 py-1 fade-in">
              <button
                onClick={() => { setEditing(true); setMenuOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors"
              >
                <Pencil size={14} />
                Rename chat
              </button>
              <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors">
                <Download size={14} />
                Export as Markdown
              </button>
              <hr className="border-border my-1" />
              <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors">
                <Trash2 size={14} />
                Delete conversation
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
