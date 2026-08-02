'use client';

import React, { useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import { mockMessages } from './mockMessages';

interface ChatThreadProps {
  onOpenArtifact: (title: string, content: string, language?: string) => void;
}

export default function ChatThread({ onOpenArtifact }: ChatThreadProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-6">
      <div className="max-w-3xl mx-auto space-y-8">
        {mockMessages?.map((msg) => (
          <MessageBubble key={msg?.id} message={msg} onOpenArtifact={onOpenArtifact} />
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
