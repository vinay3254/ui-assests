'use client';

import React, { useState, useRef, useCallback } from 'react';
import {
  Send,
  Paperclip,
  Image as ImageIcon,
  ChevronDown,
  X,
  Zap,
  Brain,
  Loader2,
} from 'lucide-react';
import { toast } from 'sonner';

type ModelId = 'gpt4' | 'claude';

const models: { id: ModelId; label: string; description: string; badgeClass: string; icon: React.ReactNode }[] = [
  {
    id: 'claude',
    label: 'Claude 3.5 Sonnet',
    description: 'Long context · Thoughtful',
    badgeClass: 'bg-[#4D4A24] text-[#F9F8EE]',
    icon: <Brain size={14} />,
  },
  {
    id: 'gpt4',
    label: 'GPT-4o',
    description: 'Fast · Versatile',
    badgeClass: 'bg-yellow-100 text-yellow-800',
    icon: <Zap size={14} />,
  },
];

interface PendingFile {
  id: string;
  name: string;
  type: 'image' | 'pdf' | 'other';
  size: string;
}

export default function ChatInput() {
  const [value, setValue] = useState('');
  const [model, setModel] = useState<ModelId>('claude');
  const [modelMenuOpen, setModelMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [pendingFiles, setPendingFiles] = useState<PendingFile[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedModel = models.find((m) => m.id === model)!;

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 200) + 'px';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = useCallback(() => {
    if (!value.trim() && pendingFiles.length === 0) return;
    setSending(true);
    // Backend integration point: POST /api/chat with { message: value, model, attachments: pendingFiles }
    setTimeout(() => {
      setSending(false);
      setValue('');
      setPendingFiles([]);
      if (textareaRef.current) textareaRef.current.style.height = 'auto';
      toast.success('Message sent');
    }, 1200);
  }, [value, pendingFiles]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const newFiles: PendingFile[] = files.map((f, idx) => ({
      id: `file-${Date.now()}-${idx}`,
      name: f.name,
      type: f.type.startsWith('image/') ? 'image' : f.name.endsWith('.pdf') ? 'pdf' : 'other',
      size: f.size > 1024 * 1024 ? `${(f.size / 1024 / 1024).toFixed(1)} MB` : `${Math.round(f.size / 1024)} KB`,
    }));
    setPendingFiles((prev) => [...prev, ...newFiles]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (id: string) => {
    setPendingFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="shrink-0 px-4 pb-4 pt-2 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto">
        {/* Pending files */}
        {pendingFiles.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {pendingFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center gap-1.5 bg-muted border border-border rounded-lg px-2.5 py-1.5 text-xs text-foreground"
              >
                {file.type === 'image' ? <ImageIcon size={12} className="text-primary" /> : <Paperclip size={12} className="text-muted-foreground" />}
                <span className="font-medium max-w-[120px] truncate">{file.name}</span>
                <span className="text-muted-foreground">{file.size}</span>
                <button
                  onClick={() => removeFile(file.id)}
                  className="ml-0.5 text-muted-foreground hover:text-foreground transition-colors"
                  title="Remove file"
                >
                  <X size={11} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Input container */}
        <div className="flex flex-col bg-card border border-border rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-ring/30 focus-within:border-ring/50 transition-all">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything… (Shift+Enter for new line)"
            rows={1}
            className="w-full px-4 pt-3.5 pb-2 text-sm text-foreground bg-transparent resize-none outline-none placeholder:text-muted-foreground leading-relaxed"
            style={{ minHeight: '52px', maxHeight: '200px' }}
          />

          {/* Bottom toolbar */}
          <div className="flex items-center gap-2 px-3 pb-3">
            {/* Model switcher */}
            <div className="relative">
              <button
                onClick={() => setModelMenuOpen(!modelMenuOpen)}
                className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg border transition-colors ${selectedModel.badgeClass} border-current/20 hover:opacity-80`}
              >
                {selectedModel.icon}
                {selectedModel.label}
                <ChevronDown size={11} />
              </button>
              {modelMenuOpen && (
                <div className="absolute bottom-full mb-2 left-0 w-56 bg-card border border-border rounded-xl shadow-lg z-50 py-1 fade-in">
                  {models.map((m) => (
                    <button
                      key={`model-opt-${m.id}`}
                      onClick={() => { setModel(m.id); setModelMenuOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left transition-colors hover:bg-muted ${
                        model === m.id ? 'bg-muted/60' : ''
                      }`}
                    >
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${m.badgeClass}`}>
                        {m.icon}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{m.label}</p>
                        <p className="text-xs text-muted-foreground">{m.description}</p>
                      </div>
                      {model === m.id && (
                        <span className="ml-auto text-xs text-primary font-medium">Active</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* File upload */}
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,.pdf,.txt,.md,.csv,.json,.js,.ts,.tsx,.py"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="Attach files or images"
            >
              <Paperclip size={15} />
            </label>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Char hint */}
            {value.length > 0 && (
              <span className="text-xs text-muted-foreground font-mono-data">
                {value.length}
              </span>
            )}

            {/* Send button */}
            <button
              onClick={handleSend}
              disabled={sending || (!value.trim() && pendingFiles.length === 0)}
              className="w-8 h-8 flex items-center justify-center rounded-xl bg-primary text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:scale-95 transition-all"
              title="Send message (Enter)"
            >
              {sending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-2">
          ChatFlow may produce inaccurate information. Verify important details.
        </p>
      </div>
    </div>
  );
}
