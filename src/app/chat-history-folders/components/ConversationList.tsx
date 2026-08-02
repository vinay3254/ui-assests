'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Pin,
  MoreHorizontal,
  Trash2,
  FolderInput,
  Archive,
  MessageSquare,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { Conversation } from './mockHistoryData';

const modelMeta: Record<string, { label: string; cls: string }> = {
  gpt4: { label: 'GPT-4', cls: 'bg-emerald-100 text-emerald-700' },
  claude: { label: 'Claude', cls: 'bg-violet-100 text-violet-700' },
};

interface ConversationListProps {
  pinned: Conversation[];
  unpinned: Conversation[];
  searchQuery: string;
  onSearchChange: (v: string) => void;
  totalCount: number;
}

export default function ConversationList({
  pinned,
  unpinned,
  searchQuery,
  onSearchChange,
  totalCount,
}: ConversationListProps) {
  const [contextMenu, setContextMenu] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'messages'>('date');

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allItems = [...pinned, ...unpinned];

  return (
    <div className="flex-1 flex flex-col min-w-0 h-full">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 h-14 border-b border-border shrink-0">
        <div className="flex-1 flex items-center gap-2 bg-muted rounded-xl px-3 py-2">
          <Search size={14} className="text-muted-foreground shrink-0" />
          <input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search conversations…"
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          {searchQuery && (
            <button onClick={() => onSearchChange('')} className="text-muted-foreground hover:text-foreground">
              <X size={13} />
            </button>
          )}
        </div>
        <div className="flex items-center gap-1">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="text-xs text-muted-foreground bg-muted border border-border rounded-lg px-2 py-1.5 outline-none cursor-pointer"
          >
            <option value="date">Sort: Date</option>
            <option value="title">Sort: Title</option>
            <option value="messages">Sort: Messages</option>
          </select>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors" title="Filter options">
            <SlidersHorizontal size={15} />
          </button>
        </div>
      </div>

      {/* Bulk action bar */}
      {selectedIds.size > 0 && (
        <div className="flex items-center gap-3 px-5 py-2.5 bg-primary/5 border-b border-border fade-in">
          <span className="text-sm font-medium text-primary">{selectedIds.size} selected</span>
          <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground px-2.5 py-1.5 rounded-lg hover:bg-muted transition-colors">
            <Archive size={13} /> Archive
          </button>
          <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground px-2.5 py-1.5 rounded-lg hover:bg-muted transition-colors">
            <FolderInput size={13} /> Move to folder
          </button>
          <button className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 px-2.5 py-1.5 rounded-lg hover:bg-red-50 transition-colors ml-auto">
            <Trash2 size={13} /> Delete {selectedIds.size}
          </button>
          <button onClick={() => setSelectedIds(new Set())} className="text-muted-foreground hover:text-foreground">
            <X size={14} />
          </button>
        </div>
      )}

      {/* Count */}
      <div className="px-5 py-2.5 border-b border-border shrink-0">
        <span className="text-xs text-muted-foreground font-mono-data">{totalCount} conversations</span>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {totalCount === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-8">
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center">
              <MessageSquare size={22} className="text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-foreground">No conversations found</p>
            <p className="text-xs text-muted-foreground">
              {searchQuery ? 'Try a different search term or clear the filter.' : 'Start a new chat to see it here.'}
            </p>
          </div>
        ) : (
          <>
            {/* Pinned */}
            {pinned.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 px-5 py-2 bg-muted/30">
                  <Pin size={11} className="text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Pinned</span>
                </div>
                {pinned.map((conv) => (
                  <ConversationRow
                    key={conv.id}
                    conv={conv}
                    selected={selectedIds.has(conv.id)}
                    onToggleSelect={toggleSelect}
                    contextMenuOpen={contextMenu === conv.id}
                    onContextMenu={(id) => setContextMenu(contextMenu === id ? null : id)}
                  />
                ))}
              </div>
            )}

            {/* All others */}
            {unpinned.length > 0 && (
              <div>
                {pinned.length > 0 && (
                  <div className="flex items-center gap-1.5 px-5 py-2 bg-muted/30">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">All</span>
                  </div>
                )}
                {unpinned.map((conv) => (
                  <ConversationRow
                    key={conv.id}
                    conv={conv}
                    selected={selectedIds.has(conv.id)}
                    onToggleSelect={toggleSelect}
                    contextMenuOpen={contextMenu === conv.id}
                    onContextMenu={(id) => setContextMenu(contextMenu === id ? null : id)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function ConversationRow({
  conv,
  selected,
  onToggleSelect,
  contextMenuOpen,
  onContextMenu,
}: {
  conv: Conversation;
  selected: boolean;
  onToggleSelect: (id: string) => void;
  contextMenuOpen: boolean;
  onContextMenu: (id: string) => void;
}) {
  const meta = modelMeta[conv.model] || { label: conv.model, cls: 'bg-gray-100 text-gray-700' };

  return (
    <div
      className={`group relative flex items-start gap-3 px-5 py-3.5 border-b border-border/60 hover:bg-muted/40 transition-colors cursor-pointer ${
        selected ? 'bg-primary/5' : ''
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onToggleSelect(conv.id)}
        className="mt-1 shrink-0 accent-primary cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      />

      <Link href="/" className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-medium text-foreground line-clamp-1 leading-snug">{conv.title}</p>
          <span className="text-xs text-muted-foreground shrink-0 font-mono-data">{conv.date}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{conv.preview}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${meta.cls}`}>{meta.label}</span>
          <span className="text-xs text-muted-foreground">{conv.messageCount} messages</span>
          {conv.pinned && <Pin size={11} className="text-muted-foreground" />}
        </div>
      </Link>

      {/* Context menu trigger */}
      <div className="relative shrink-0 mt-0.5">
        <button
          onClick={(e) => { e.stopPropagation(); onContextMenu(conv.id); }}
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
          title="More options"
        >
          <MoreHorizontal size={15} />
        </button>
        {contextMenuOpen && (
          <div className="absolute right-0 top-8 w-44 bg-card border border-border rounded-xl shadow-lg z-50 py-1 fade-in">
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors">
              <Pin size={13} /> {conv.pinned ? 'Unpin' : 'Pin to top'}
            </button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors">
              <FolderInput size={13} /> Move to folder
            </button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors">
              <Archive size={13} /> Archive
            </button>
            <hr className="border-border my-1" />
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors">
              <Trash2 size={13} /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
