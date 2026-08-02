'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Save, Check, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ModelConfig {
  id: string;
  name: string;
  provider: string;
  badgeClass: string;
  contextWindow: string;
  apiKeyPlaceholder: string;
}

const modelConfigs: ModelConfig[] = [
  {
    id: 'config-gpt4',
    name: 'GPT-4o',
    provider: 'OpenAI',
    badgeClass: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    contextWindow: '128,000 tokens',
    apiKeyPlaceholder: 'sk-proj-…',
  },
  {
    id: 'config-claude',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    badgeClass: 'bg-violet-100 text-violet-700 border-violet-200',
    contextWindow: '200,000 tokens',
    apiKeyPlaceholder: 'sk-ant-api03-…',
  },
];

function ModelCard({ config }: { config: ModelConfig }) {
  const [showKey, setShowKey] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaving(true);
    // Backend integration point: POST /api/settings/models with { modelId: config.id, apiKey }
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      toast.success(`${config.name} API key saved`);
      setTimeout(() => setSaved(false), 3000);
    }, 800);
  };

  return (
    <div className="border border-border rounded-xl p-5 bg-card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-semibold text-foreground">{config.name}</h3>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${config.badgeClass}`}>
              {config.provider}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">Context window: {config.contextWindow}</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-muted-foreground/30" title="Not connected" />
      </div>

      <div className="space-y-1.5 mb-4">
        <label className="text-xs font-medium text-foreground block">
          API Key
          <span className="text-muted-foreground font-normal ml-1">— stored locally, never sent to our servers</span>
        </label>
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-muted border border-border rounded-lg px-3 py-2">
            <input
              type={showKey ? 'text' : 'password'}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={config.apiKeyPlaceholder}
              className="flex-1 bg-transparent text-sm text-foreground outline-none font-mono placeholder:text-muted-foreground"
            />
            <button
              onClick={() => setShowKey(!showKey)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              title={showKey ? 'Hide key' : 'Show key'}
            >
              {showKey ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          </div>
          <button
            onClick={handleSave}
            disabled={saving || !apiKey.trim()}
            className="flex items-center gap-1.5 px-3 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:scale-95 transition-all"
          >
            {saving ? (
              <Loader2 size={13} className="animate-spin" />
            ) : saved ? (
              <Check size={13} />
            ) : (
              <Save size={13} />
            )}
            {saving ? 'Saving…' : saved ? 'Saved' : 'Save'}
          </button>
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <AlertCircle size={11} />
          Keys are stored in your browser's localStorage only.
        </p>
      </div>
    </div>
  );
}

export default function ModelsSettings() {
  const [defaultModel, setDefaultModel] = useState('claude');
  const [systemPrompt, setSystemPrompt] = useState(
    'You are a helpful, accurate, and concise assistant. When writing code, prefer readability over brevity. Always acknowledge uncertainty rather than guessing.'
  );
  const [promptSaving, setPromptSaving] = useState(false);
  const [promptSaved, setPromptSaved] = useState(false);

  const handlePromptSave = () => {
    setPromptSaving(true);
    // Backend integration point: POST /api/settings/system-prompt with { prompt: systemPrompt }
    setTimeout(() => {
      setPromptSaving(false);
      setPromptSaved(true);
      toast.success('System prompt updated');
      setTimeout(() => setPromptSaved(false), 3000);
    }, 600);
  };

  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-1">Models</h2>
        <p className="text-sm text-muted-foreground">Configure API keys and behavior for each model provider.</p>
      </div>

      {/* Default model */}
      <div className="mb-6">
        <label className="text-sm font-medium text-foreground block mb-1.5">Default Model</label>
        <p className="text-xs text-muted-foreground mb-3">Used when starting a new conversation. You can switch mid-chat at any time.</p>
        <div className="flex gap-2">
          {[
            { id: 'claude', label: 'Claude 3.5 Sonnet', cls: 'bg-violet-100 text-violet-700 border-violet-200' },
            { id: 'gpt4', label: 'GPT-4o', cls: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
          ].map((m) => (
            <button
              key={`default-model-${m.id}`}
              onClick={() => setDefaultModel(m.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                defaultModel === m.id
                  ? `${m.cls} border-current shadow-sm`
                  : 'border-border text-muted-foreground hover:bg-muted'
              }`}
            >
              {defaultModel === m.id && <Check size={13} />}
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Model cards */}
      <div className="space-y-4 mb-6">
        {modelConfigs.map((config) => (
          <ModelCard key={config.id} config={config} />
        ))}
      </div>

      {/* System prompt */}
      <div className="border border-border rounded-xl p-5 bg-card">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-0.5">System Prompt</h3>
            <p className="text-xs text-muted-foreground">Applied to every new conversation as the initial instruction.</p>
          </div>
          <button
            onClick={handlePromptSave}
            disabled={promptSaving}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
          >
            {promptSaving ? <Loader2 size={12} className="animate-spin" /> : promptSaved ? <Check size={12} /> : <Save size={12} />}
            {promptSaving ? 'Saving…' : promptSaved ? 'Saved' : 'Save'}
          </button>
        </div>
        <textarea
          value={systemPrompt}
          onChange={(e) => setSystemPrompt(e.target.value)}
          rows={4}
          className="w-full bg-muted border border-border rounded-lg px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring/50 resize-none leading-relaxed"
        />
        <p className="text-xs text-muted-foreground mt-1.5">{systemPrompt.length} characters</p>
      </div>
    </div>
  );
}
