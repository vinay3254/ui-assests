'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import {
  MessageSquare,
  FolderOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  Pin,
  Clock,
  Zap,
} from 'lucide-react';

const navItems = [
  { key: 'nav-chat', href: '/', icon: MessageSquare, label: 'Chat', badge: null },
  { key: 'nav-history', href: '/chat-history-folders', icon: FolderOpen, label: 'History', badge: '24' },
  { key: 'nav-settings', href: '/settings', icon: Settings, label: 'Settings', badge: null },
];

const recentConversations = [
  { id: 'conv-001', title: 'React Server Components deep dive', model: 'gpt4', time: '2m ago' },
  { id: 'conv-002', title: 'Summarize quarterly report PDF', model: 'claude', time: '1h ago' },
  { id: 'conv-003', title: 'Python async/await patterns', model: 'gpt4', time: '3h ago' },
  { id: 'conv-004', title: 'Marketing copy for SaaS landing', model: 'claude', time: 'Yesterday' },
  { id: 'conv-005', title: 'SQL query optimization tips', model: 'gpt4', time: 'Yesterday' },
];

const modelColors: Record<string, string> = {
  gpt4: 'bg-[#810100] text-[#EDEBDD]',
  claude: 'bg-[#630000] text-[#EDEBDD]',
};
const modelLabels: Record<string, string> = {
  gpt4: 'GPT-4',
  claude: 'Claude',
};

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`sidebar-transition flex flex-col h-full bg-card border-r border-border shrink-0 relative z-20 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="flex items-center h-14 px-3 border-b border-border shrink-0">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2 flex-1 min-w-0">
            <AppLogo size={28} />
            <span className="font-semibold text-base text-foreground truncate">ChatFlow</span>
          </Link>
        )}
        {collapsed && (
          <div className="flex justify-center w-full">
            <AppLogo size={28} />
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors ${
            collapsed ? 'absolute -right-3 top-4 bg-card border border-border shadow-sm' : 'ml-1'
          }`}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
        </button>
      </div>

      {/* New Chat Button */}
      <div className={`px-3 pt-3 pb-2 shrink-0 ${collapsed ? 'flex justify-center' : ''}`}>
        <Link
          href="/"
          className={`flex items-center gap-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm transition-all hover:opacity-90 active:scale-95 ${
            collapsed ? 'w-10 h-10 justify-center' : 'w-full px-3 py-2'
          }`}
          title="New Chat"
        >
          <Plus size={16} />
          {!collapsed && <span>New Chat</span>}
        </Link>
      </div>

      {/* Search — only expanded */}
      {!collapsed && (
        <div className="px-3 pb-2 shrink-0">
          <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2 text-sm text-muted-foreground">
            <Search size={14} />
            <span>Search conversations…</span>
          </div>
        </div>
      )}

      {/* Nav Items */}
      <nav className="px-2 shrink-0">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium transition-colors mb-0.5 relative group ${
                active
                  ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:bg-muted hover:text-foreground'
              } ${collapsed ? 'justify-center' : ''}`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon size={18} />
              {!collapsed && <span className="flex-1">{item.label}</span>}
              {!collapsed && item.badge && (
                <span className="text-xs bg-muted text-muted-foreground rounded-full px-1.5 py-0.5 font-mono-data">
                  {item.badge}
                </span>
              )}
              {collapsed && item.badge && (
                <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-primary rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Recent Conversations — only expanded */}
      {!collapsed && (
        <div className="flex-1 overflow-y-auto scrollbar-thin px-2 mt-3">
          <div className="flex items-center gap-1.5 px-2 mb-2">
            <Clock size={12} className="text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Recent
            </span>
          </div>
          {recentConversations.map((conv) => (
            <Link
              key={conv.id}
              href="/"
              className="flex flex-col gap-0.5 px-2 py-2 rounded-lg hover:bg-muted transition-colors cursor-pointer group mb-0.5"
            >
              <div className="flex items-start justify-between gap-1">
                <span className="text-sm text-foreground leading-snug line-clamp-1 flex-1">
                  {conv.title}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${modelColors[conv.model]}`}
                >
                  {modelLabels[conv.model]}
                </span>
                <span className="text-xs text-muted-foreground">{conv.time}</span>
              </div>
            </Link>
          ))}

          {/* Pinned section */}
          <div className="flex items-center gap-1.5 px-2 mt-4 mb-2">
            <Pin size={12} className="text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Pinned
            </span>
          </div>
          <Link
            href="/"
            className="flex flex-col gap-0.5 px-2 py-2 rounded-lg hover:bg-muted transition-colors cursor-pointer mb-0.5"
          >
            <span className="text-sm text-foreground line-clamp-1">System design interview prep</span>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${modelColors['claude']}`}>
                Claude
              </span>
              <span className="text-xs text-muted-foreground">3 days ago</span>
            </div>
          </Link>
        </div>
      )}

      {/* Footer */}
      <div
        className={`px-2 py-3 border-t border-border shrink-0 flex items-center ${
          collapsed ? 'justify-center' : 'gap-2'
        }`}
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#810100] to-[#630000] flex items-center justify-center shrink-0">
          <Zap size={13} className="text-white" />
        </div>
        {!collapsed && (
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground truncate">Public Session</p>
            <p className="text-xs text-muted-foreground">No account needed</p>
          </div>
        )}
      </div>
    </aside>
  );
}
