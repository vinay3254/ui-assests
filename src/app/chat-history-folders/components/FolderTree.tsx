'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  Briefcase,
  FlaskConical,
  Code2,
  PenLine,
  FolderPlus,
  ChevronRight,
} from 'lucide-react';
import { Folder } from './mockHistoryData';

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare size={15} />,
  Briefcase: <Briefcase size={15} />,
  FlaskConical: <FlaskConical size={15} />,
  Code2: <Code2 size={15} />,
  PenLine: <PenLine size={15} />,
};

interface FolderTreeProps {
  folders: Folder[];
  activeFolder: string;
  onSelect: (id: string) => void;
}

export default function FolderTree({ folders, activeFolder, onSelect }: FolderTreeProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="w-56 shrink-0 border-r border-border h-full flex flex-col bg-muted/30">
      <div className="flex items-center justify-between px-4 h-14 border-b border-border shrink-0">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-sm font-semibold text-foreground"
        >
          <ChevronRight
            size={14}
            className={`transition-transform text-muted-foreground ${expanded ? 'rotate-90' : ''}`}
          />
          Folders
        </button>
        <button
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          title="Create new folder"
        >
          <FolderPlus size={15} />
        </button>
      </div>

      {expanded && (
        <div className="flex-1 overflow-y-auto scrollbar-thin py-2 px-2">
          {folders.map((folder) => (
            <button
              key={folder.id}
              onClick={() => onSelect(folder.id)}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors mb-0.5 ${
                activeFolder === folder.id
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <span className={`w-6 h-6 flex items-center justify-center rounded-md shrink-0 ${folder.color}`}>
                {iconMap[folder.icon] || <MessageSquare size={15} />}
              </span>
              <span className="flex-1 text-left truncate">{folder.name}</span>
              <span className="text-xs font-mono-data text-muted-foreground">{folder.count}</span>
            </button>
          ))}
        </div>
      )}

      {/* Storage indicator */}
      <div className="px-4 py-3 border-t border-border shrink-0">
        <p className="text-xs text-muted-foreground mb-1.5">Local storage</p>
        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary/60 rounded-full" style={{ width: '38%' }} />
        </div>
        <p className="text-xs text-muted-foreground mt-1">24 chats · 1.2 MB</p>
      </div>
    </div>
  );
}
