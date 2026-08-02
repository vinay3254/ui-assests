'use client';

import React, { useState, useMemo } from 'react';
import FolderTree from './FolderTree';
import ConversationList from './ConversationList';
import { conversations, folders } from './mockHistoryData';

export default function HistoryLayout() {
  const [activeFolder, setActiveFolder] = useState('folder-all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let list = conversations;
    if (activeFolder !== 'folder-all') {
      list = list?.filter((c) => c?.folder === activeFolder);
    }
    if (searchQuery?.trim()) {
      const q = searchQuery?.toLowerCase();
      list = list?.filter(
        (c) =>
          c?.title?.toLowerCase()?.includes(q) ||
          c?.preview?.toLowerCase()?.includes(q)
      );
    }
    return list;
  }, [activeFolder, searchQuery]);

  const pinned = filtered?.filter((c) => c?.pinned);
  const unpinned = filtered?.filter((c) => !c?.pinned);

  return (
    <div className="flex h-full">
      <FolderTree
        folders={folders}
        activeFolder={activeFolder}
        onSelect={setActiveFolder}
      />
      <ConversationList
        pinned={pinned}
        unpinned={unpinned}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={filtered?.length}
      />
    </div>
  );
}
