'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, MessageSquare, Settings, Zap, Brain, FolderOpen, Plus, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  group: string;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

const recentChats = [
  { id: 'chat-1', title: 'React Server Components deep dive', time: '2 min ago' },
  { id: 'chat-2', title: 'TypeScript generics explained', time: '1 hr ago' },
  { id: 'chat-3', title: 'Next.js App Router migration', time: 'Yesterday' },
  { id: 'chat-4', title: 'Tailwind CSS v4 changes', time: '2 days ago' },
];

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const buildCommands = useCallback((): CommandItem[] => {
    const nav: CommandItem[] = [
      {
        id: 'new-chat',
        label: 'New Chat',
        description: 'Start a fresh conversation',
        icon: <Plus size={15} />,
        action: () => { router.push('/'); onClose(); },
        group: 'Actions',
      },
      {
        id: 'history',
        label: 'Chat History & Folders',
        description: 'Browse all past conversations',
        icon: <FolderOpen size={15} />,
        action: () => { router.push('/chat-history-folders'); onClose(); },
        group: 'Actions',
      },
      {
        id: 'settings',
        label: 'Settings',
        description: 'Models, interface, shortcuts',
        icon: <Settings size={15} />,
        action: () => { router.push('/settings'); onClose(); },
        group: 'Actions',
      },
    ];

    const models: CommandItem[] = [
      {
        id: 'model-claude',
        label: 'Switch to Claude 3.5 Sonnet',
        description: 'Long context · Thoughtful',
        icon: <Brain size={15} className="text-violet-500" />,
        action: () => { onClose(); },
        group: 'Models',
      },
      {
        id: 'model-gpt4',
        label: 'Switch to GPT-4o',
        description: 'Fast · Versatile',
        icon: <Zap size={15} className="text-emerald-500" />,
        action: () => { onClose(); },
        group: 'Models',
      },
    ];

    const chats: CommandItem[] = recentChats.map((c) => ({
      id: c.id,
      label: c.title,
      description: c.time,
      icon: <MessageSquare size={15} />,
      action: () => { router.push('/'); onClose(); },
      group: 'Recent Chats',
    }));

    return [...nav, ...models, ...chats];
  }, [router, onClose]);

  const allCommands = buildCommands();

  const filtered = query.trim()
    ? allCommands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.description?.toLowerCase().includes(query.toLowerCase())
      )
    : allCommands;

  // Group items
  const groups = filtered.reduce<Record<string, CommandItem[]>>((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {});

  const flatFiltered = Object.values(groups).flat();

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, flatFiltered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      flatFiltered[activeIdx]?.action();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!open) return null;

  let flatIdx = 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Palette */}
      <div
        className="relative w-full max-w-xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search size={16} className="text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chats, actions, models…"
            className="flex-1 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
          <kbd className="text-xs text-muted-foreground bg-muted border border-border rounded px-1.5 py-0.5 font-mono shrink-0">
            esc
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto scrollbar-thin py-1">
          {flatFiltered.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-muted-foreground">
              No results for &ldquo;{query}&rdquo;
            </div>
          ) : (
            Object.entries(groups).map(([groupName, items]) => (
              <div key={groupName}>
                <div className="px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {groupName}
                </div>
                {items.map((item) => {
                  const idx = flatIdx++;
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setActiveIdx(idx)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        isActive ? 'bg-muted' : 'hover:bg-muted/50'
                      }`}
                    >
                      <span className={`shrink-0 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {item.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm text-foreground block truncate">{item.label}</span>
                        {item.description && (
                          <span className="text-xs text-muted-foreground block truncate">{item.description}</span>
                        )}
                      </div>
                      {isActive && (
                        <ArrowRight size={13} className="text-muted-foreground shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer hint */}
        <div className="flex items-center gap-3 px-4 py-2 border-t border-border bg-muted/30">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <kbd className="bg-muted border border-border rounded px-1 py-0.5 font-mono text-[10px]">↑↓</kbd>
            navigate
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <kbd className="bg-muted border border-border rounded px-1 py-0.5 font-mono text-[10px]">↵</kbd>
            select
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <kbd className="bg-muted border border-border rounded px-1 py-0.5 font-mono text-[10px]">esc</kbd>
            close
          </span>
        </div>
      </div>
    </div>
  );
}
