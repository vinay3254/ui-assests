'use client';

import React, { useState } from 'react';
import { Sun, Moon, Monitor, Check, Save, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 ${
        checked ? 'bg-primary' : 'bg-muted-foreground/30'
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
          checked ? 'translate-x-4' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

export default function InterfaceSettings() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');
  const [fontSize, setFontSize] = useState(14);
  const [density, setDensity] = useState<'compact' | 'comfortable' | 'spacious'>('comfortable');
  const [sidebarDefault, setSidebarDefault] = useState<'expanded' | 'collapsed'>('expanded');
  const [streamingEnabled, setStreamingEnabled] = useState(true);
  const [codeLineNumbers, setCodeLineNumbers] = useState(true);
  const [timestampsVisible, setTimestampsVisible] = useState(true);
  const [modelBadgesVisible, setModelBadgesVisible] = useState(true);
  const [saving, setSaving] = useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'light';
      setTheme(saved);
    }
  }, []);

  const changeTheme = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark' || (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSave = () => {
    setSaving(true);
    // Backend integration point: POST /api/settings/interface
    setTimeout(() => {
      setSaving(false);
      toast.success('Interface settings saved');
    }, 700);
  };

  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-1">Interface</h2>
        <p className="text-sm text-muted-foreground">Customize the appearance and behavior of ChatFlow.</p>
      </div>

      {/* Theme */}
      <div className="border border-border rounded-xl p-5 bg-card mb-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">Theme</h3>
        <div className="flex gap-2">
          {[
            { id: 'light' as const, label: 'Light', icon: Sun },
            { id: 'dark' as const, label: 'Dark', icon: Moon },
            { id: 'system' as const, label: 'System', icon: Monitor },
          ].map((t) => (
            <button
              key={`theme-${t.id}`}
              onClick={() => changeTheme(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                theme === t.id
                  ? 'border-primary bg-primary/5 text-primary' :'border-border text-muted-foreground hover:bg-muted'
              }`}
            >
              {theme === t.id ? <Check size={13} /> : <t.icon size={13} />}
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Font size */}
      <div className="border border-border rounded-xl p-5 bg-card mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">Font Size</h3>
          <span className="text-sm font-mono-data text-primary font-medium">{fontSize}px</span>
        </div>
        <input
          type="range"
          min={12}
          max={18}
          step={1}
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>12px — Compact</span>
          <span>18px — Large</span>
        </div>
      </div>

      {/* Message density */}
      <div className="border border-border rounded-xl p-5 bg-card mb-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">Message Density</h3>
        <div className="flex gap-2">
          {(['compact', 'comfortable', 'spacious'] as const).map((d) => (
            <button
              key={`density-${d}`}
              onClick={() => setDensity(d)}
              className={`flex-1 py-2.5 rounded-xl border text-sm font-medium capitalize transition-all ${
                density === d
                  ? 'border-primary bg-primary/5 text-primary' :'border-border text-muted-foreground hover:bg-muted'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar default */}
      <div className="border border-border rounded-xl p-5 bg-card mb-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">Sidebar Default State</h3>
        <div className="flex gap-2">
          {(['expanded', 'collapsed'] as const).map((s) => (
            <button
              key={`sidebar-${s}`}
              onClick={() => setSidebarDefault(s)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium capitalize transition-all ${
                sidebarDefault === s
                  ? 'border-primary bg-primary/5 text-primary' :'border-border text-muted-foreground hover:bg-muted'
              }`}
            >
              {sidebarDefault === s && <Check size={13} />}
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Toggle options */}
      <div className="border border-border rounded-xl p-5 bg-card mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-4">Display Options</h3>
        <div className="space-y-4">
          {[
            { id: 'streaming', label: 'Streaming responses', desc: 'Show AI responses as they generate, character by character', value: streamingEnabled, onChange: setStreamingEnabled },
            { id: 'lineNumbers', label: 'Code line numbers', desc: 'Show line numbers inside code blocks', value: codeLineNumbers, onChange: setCodeLineNumbers },
            { id: 'timestamps', label: 'Message timestamps', desc: 'Show the time each message was sent', value: timestampsVisible, onChange: setTimestampsVisible },
            { id: 'modelBadges', label: 'Model badges', desc: 'Show which model generated each response', value: modelBadgesVisible, onChange: setModelBadgesVisible },
          ].map((opt) => (
            <div key={`opt-${opt.id}`} className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">{opt.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{opt.desc}</p>
              </div>
              <Toggle checked={opt.value} onChange={opt.onChange} />
            </div>
          ))}
        </div>
      </div>

      {/* Save */}
      <button
        onClick={handleSave}
        disabled={saving}
        className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
      >
        {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
        {saving ? 'Saving…' : 'Save Interface Settings'}
      </button>
    </div>
  );
}
