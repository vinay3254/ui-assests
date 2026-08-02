'use client';

import React, { useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import {
  BarChart2,
  Lightbulb,
  CheckSquare,
  Code2,
  Mic,
  Paperclip,
  Send,
  Sparkles,
  BookOpen,
} from 'lucide-react';

interface SuggestionCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const suggestions: SuggestionCard[] = [
  {
    icon: <BarChart2 size={20} className="text-muted-foreground" />,
    title: 'Synthesize Data',
    description: 'Turn my meeting notes into 5 key bullet points for the team.',
  },
  {
    icon: <Lightbulb size={20} className="text-muted-foreground" />,
    title: 'Creative Brainstorm',
    description: 'Generate 3 taglines for a new sustainable fashion brand.',
  },
  {
    icon: <CheckSquare size={20} className="text-muted-foreground" />,
    title: 'Check Facts',
    description: 'Compare key differences between GDPR and CCPA.',
  },
  {
    icon: <Code2 size={20} className="text-muted-foreground" />,
    title: 'Write Code',
    description: 'Build a React hook for debounced search input.',
  },
];

interface IdleScreenProps {
  onStartChat: (message: string) => void;
}

export default function IdleScreen({ onStartChat }: IdleScreenProps) {
  const [inputValue, setInputValue] = useState('');
  const [voiceActive, setVoiceActive] = useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 160) + 'px';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    onStartChat(inputValue.trim());
  };

  const handleSuggestion = (desc: string) => {
    onStartChat(desc);
  };

  const toggleVoice = () => {
    setVoiceActive((prev) => !prev);
  };

  return (
    <div className="flex flex-col flex-1 overflow-y-auto scrollbar-thin">
      {/* Greeting section */}
      <div className="flex flex-col items-center justify-center pt-14 pb-8 px-6">
        {/* Golden Eagle emblem */}
        <div className="relative mb-8 select-none group flex items-center justify-center" aria-hidden="true">
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center p-1 transition-all duration-300 transform group-hover:scale-105"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(129,1,0,0.45) 0%, rgba(99,0,0,0.25) 70%, transparent 100%)',
              boxShadow:
                '0 0 45px 15px rgba(129,1,0,0.4), 0 0 90px 30px rgba(99,0,0,0.25), inset 0 0 15px rgba(129,1,0,0.35)',
            }}
          >
            <AppLogo size={96} className="w-full h-full rounded-full border border-[#810100]/40 shadow-xl object-cover" />
          </div>
        </div>

        {/* Greeting text */}
        <p
          className="text-2xl font-semibold mb-1"
          style={{ color: 'var(--primary)' }}
        >
          Hello, there
        </p>
        <h1 className="text-3xl font-bold text-foreground text-center leading-tight">
          How can I assist you today?
        </h1>
      </div>

      {/* Input + suggestion area */}
      <div className="w-full max-w-2xl mx-auto px-4 pb-8">
        {/* Input card */}
        <div className="bg-card border border-border rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-ring/30 focus-within:border-ring/50 transition-all mb-3">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything…"
            rows={1}
            className="w-full px-4 pt-4 pb-2 text-sm text-foreground bg-transparent resize-none outline-none placeholder:text-muted-foreground leading-relaxed"
            style={{ minHeight: '56px', maxHeight: '160px' }}
          />

          {/* Toolbar row */}
          <div className="flex items-center gap-2 px-3 pb-3 pt-1">
            {/* Saved prompts */}
            <button className="flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-2.5 py-1.5 rounded-lg transition-colors">
              <Sparkles size={12} />
              Saved prompts
            </button>

            {/* Attach */}
            <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border bg-transparent hover:bg-muted px-2.5 py-1.5 rounded-lg transition-colors">
              <Paperclip size={12} />
              Attach file
            </button>

            <div className="flex-1" />

            {/* Deep research icon */}
            <button
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="Deep research"
            >
              <BookOpen size={15} />
            </button>

            {/* Voice mic button */}
            <button
              onClick={toggleVoice}
              title={voiceActive ? 'Stop voice input' : 'Start voice input'}
              className="w-8 h-8 flex items-center justify-center rounded-xl transition-all"
              style={
                voiceActive
                  ? {
                      background: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      boxShadow: '0 0 0 3px rgba(160,127,58,0.25)',
                    }
                  : {
                      background: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                    }
              }
            >
              <Mic size={15} className={voiceActive ? 'opacity-100' : 'opacity-90'} />
            </button>

            {/* Send */}
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="w-8 h-8 flex items-center justify-center rounded-xl bg-primary text-primary-foreground disabled:opacity-35 disabled:cursor-not-allowed hover:opacity-90 active:scale-95 transition-all"
              title="Send (Enter)"
            >
              <Send size={14} />
            </button>
          </div>
        </div>

        {/* Suggestion cards */}
        <div className="grid grid-cols-2 gap-3 mt-5">
          {suggestions.map((card, i) => (
            <button
              key={i}
              onClick={() => handleSuggestion(card.description)}
              className="group flex flex-col items-start gap-2 p-4 bg-card border border-border rounded-xl text-left hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <div className="text-muted-foreground group-hover:text-primary transition-colors">
                {card.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-0.5">{card.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
