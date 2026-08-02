'use client';

import React, { useState } from 'react';
import { Check, Save, Loader2, FileText, FileJson, File } from 'lucide-react';
import { toast } from 'sonner';

const formatOptions = [
  { id: 'markdown', label: 'Markdown (.md)', icon: FileText, desc: 'Best for readability and re-importing into editors' },
  { id: 'json', label: 'JSON (.json)', desc: 'Full structured data with metadata, model info, and timestamps', icon: FileJson },
  { id: 'txt', label: 'Plain Text (.txt)', desc: 'Simple, universal — no formatting', icon: File },
];

export default function ExportSettings() {
  const [defaultFormat, setDefaultFormat] = useState('markdown');
  const [filenamePattern, setFilenamePattern] = useState('chatflow-{title}-{date}');
  const [includeMetadata, setIncludeMetadata] = useState(true);
  const [includeTimestamps, setIncludeTimestamps] = useState(true);
  const [includeModelInfo, setIncludeModelInfo] = useState(true);
  const [saving, setSaving] = useState(false);

  const previewFilename = filenamePattern?.replace('{title}', 'react-server-components')?.replace('{date}', '2026-08-01')?.replace('{model}', 'claude');

  const handleSave = () => {
    setSaving(true);
    // Backend integration point: POST /api/settings/export
    setTimeout(() => {
      setSaving(false);
      toast?.success('Export settings saved');
    }, 600);
  };

  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-1">Export</h2>
        <p className="text-sm text-muted-foreground">Configure how conversations and artifacts are exported.</p>
      </div>
      {/* Default format */}
      <div className="border border-border rounded-xl p-5 bg-card mb-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">Default Export Format</h3>
        <div className="space-y-2">
          {formatOptions?.map((fmt) => (
            <button
              key={`fmt-${fmt?.id}`}
              onClick={() => setDefaultFormat(fmt?.id)}
              className={`w-full flex items-start gap-3 px-4 py-3 rounded-xl border text-left transition-all ${
                defaultFormat === fmt?.id
                  ? 'border-primary bg-primary/5' :'border-border hover:bg-muted'
              }`}
            >
              <fmt.icon size={16} className={defaultFormat === fmt?.id ? 'text-primary mt-0.5' : 'text-muted-foreground mt-0.5'} />
              <div className="flex-1">
                <p className={`text-sm font-medium ${defaultFormat === fmt?.id ? 'text-primary' : 'text-foreground'}`}>
                  {fmt?.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{fmt?.desc}</p>
              </div>
              {defaultFormat === fmt?.id && <Check size={14} className="text-primary mt-0.5 shrink-0" />}
            </button>
          ))}
        </div>
      </div>
      {/* Filename pattern */}
      <div className="border border-border rounded-xl p-5 bg-card mb-4">
        <h3 className="text-sm font-semibold text-foreground mb-1">Filename Pattern</h3>
        <p className="text-xs text-muted-foreground mb-3">
          Available variables: <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">{'{title}'}</code>{' '}
          <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">{'{date}'}</code>{' '}
          <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">{'{model}'}</code>
        </p>
        <input
          value={filenamePattern}
          onChange={(e) => setFilenamePattern(e?.target?.value)}
          className="w-full bg-muted border border-border rounded-lg px-3 py-2.5 text-sm font-mono text-foreground outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring/50"
        />
        <p className="text-xs text-muted-foreground mt-2">
          Preview: <span className="font-mono text-foreground">{previewFilename}.{defaultFormat === 'markdown' ? 'md' : defaultFormat}</span>
        </p>
      </div>
      {/* Include options */}
      <div className="border border-border rounded-xl p-5 bg-card mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-4">Include in Export</h3>
        <div className="space-y-3">
          {[
            { id: 'metadata', label: 'Conversation metadata', desc: 'Title, folder, creation date', value: includeMetadata, onChange: setIncludeMetadata },
            { id: 'timestamps', label: 'Message timestamps', desc: 'Time each message was sent', value: includeTimestamps, onChange: setIncludeTimestamps },
            { id: 'modelInfo', label: 'Model information', desc: 'Which model generated each response', value: includeModelInfo, onChange: setIncludeModelInfo },
          ]?.map((opt) => (
            <label key={`export-opt-${opt?.id}`} className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={opt?.value}
                onChange={(e) => opt?.onChange(e?.target?.checked)}
                className="mt-0.5 accent-primary"
              />
              <div>
                <p className="text-sm font-medium text-foreground">{opt?.label}</p>
                <p className="text-xs text-muted-foreground">{opt?.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={handleSave}
        disabled={saving}
        className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
      >
        {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
        {saving ? 'Saving…' : 'Save Export Settings'}
      </button>
    </div>
  );
}
