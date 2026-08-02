import React from 'react';

const shortcuts = [
  { group: 'Navigation', items: [
    { id: 'sc-new-chat', keys: ['⌘', 'N'], action: 'Start a new chat' },
    { id: 'sc-search', keys: ['⌘', 'K'], action: 'Search conversations' },
    { id: 'sc-history', keys: ['⌘', 'H'], action: 'Open chat history' },
    { id: 'sc-settings', keys: ['⌘', ','], action: 'Open settings' },
    { id: 'sc-sidebar', keys: ['⌘', '\\'], action: 'Toggle sidebar' },
  ]},
  { group: 'Chat', items: [
    { id: 'sc-send', keys: ['Enter'], action: 'Send message' },
    { id: 'sc-newline', keys: ['Shift', 'Enter'], action: 'Insert new line in message' },
    { id: 'sc-upload', keys: ['⌘', 'U'], action: 'Attach file or image' },
    { id: 'sc-switch-model', keys: ['⌘', 'M'], action: 'Switch AI model' },
    { id: 'sc-regenerate', keys: ['⌘', 'R'], action: 'Regenerate last response' },
  ]},
  { group: 'Messages', items: [
    { id: 'sc-copy-last', keys: ['⌘', 'C'], action: 'Copy last AI response' },
    { id: 'sc-save-artifact', keys: ['⌘', 'S'], action: 'Save message as artifact' },
    { id: 'sc-export', keys: ['⌘', 'E'], action: 'Export current conversation' },
    { id: 'sc-collapse', keys: ['⌘', '↑'], action: 'Collapse last message' },
  ]},
];

function Key({ label }: { label: string }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1.5 rounded-md bg-muted border border-border text-xs font-medium font-mono text-foreground shadow-sm">
      {label}
    </kbd>
  );
}

export default function ShortcutsSettings() {
  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-1">Keyboard Shortcuts</h2>
        <p className="text-sm text-muted-foreground">All keyboard shortcuts available in ChatFlow. Custom shortcuts coming soon.</p>
      </div>

      <div className="space-y-5">
        {shortcuts.map((group) => (
          <div key={`shortcut-group-${group.group}`} className="border border-border rounded-xl overflow-hidden bg-card">
            <div className="px-5 py-3 border-b border-border bg-muted/30">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{group.group}</h3>
            </div>
            <div className="divide-y divide-border">
              {group.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between px-5 py-3 hover:bg-muted/40 transition-colors">
                  <span className="text-sm text-foreground">{item.action}</span>
                  <div className="flex items-center gap-1">
                    {item.keys.map((key, kIdx) => (
                      <React.Fragment key={`${item.id}-key-${kIdx}`}>
                        <Key label={key} />
                        {kIdx < item.keys.length - 1 && (
                          <span className="text-xs text-muted-foreground">+</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-6">
        On Windows/Linux, replace ⌘ with Ctrl. Shortcuts work when the chat input is not focused.
      </p>
    </div>
  );
}
