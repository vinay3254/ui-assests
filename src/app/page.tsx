'use client';

import React, { useState, useEffect, useCallback } from 'react';
import AppLayout from '@/components/AppLayout';
import ChatHeader from './components/ChatHeader';
import ChatThread from './components/ChatThread';
import ChatInput from './components/ChatInput';
import ArtifactPanel from './components/ArtifactPanel';
import CommandPalette from './components/CommandPalette';
import IdleScreen from './components/IdleScreen';

export default function ChatInterfacePage() {
  const [artifactOpen, setArtifactOpen] = useState(false);
  const [artifactTitle, setArtifactTitle] = useState('');
  const [artifactContent, setArtifactContent] = useState('');
  const [artifactLanguage, setArtifactLanguage] = useState<string | undefined>(undefined);
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);
  const [chatActive, setChatActive] = useState(false);

  const handleOpenArtifact = useCallback((title: string, content: string, language?: string) => {
    setArtifactTitle(title);
    setArtifactContent(content);
    setArtifactLanguage(language);
    setArtifactOpen(true);
  }, []);

  const handleStartChat = useCallback((_message: string) => {
    setChatActive(true);
  }, []);

  // Cmd+K / Ctrl+K global listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <AppLayout>
      <div className="flex h-full overflow-hidden">
        {/* Main chat column */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <ChatHeader onOpenCommandPalette={() => setCmdPaletteOpen(true)} />

          {chatActive ? (
            <>
              <ChatThread onOpenArtifact={handleOpenArtifact} />
              <ChatInput />
            </>
          ) : (
            <IdleScreen onStartChat={handleStartChat} />
          )}
        </div>

        {/* Artifact side panel */}
        <ArtifactPanel
          open={artifactOpen}
          title={artifactTitle}
          content={artifactContent}
          language={artifactLanguage}
          onClose={() => setArtifactOpen(false)}
        />
      </div>

      {/* Cmd+K Command Palette */}
      <CommandPalette
        open={cmdPaletteOpen}
        onClose={() => setCmdPaletteOpen(false)}
      />
    </AppLayout>
  );
}
