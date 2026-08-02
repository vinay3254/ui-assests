'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Monitor,
  Download,
  Keyboard,
  Info,
  ChevronRight,
} from 'lucide-react';
import ModelsSettings from './ModelsSettings';
import InterfaceSettings from './InterfaceSettings';
import ExportSettings from './ExportSettings';
import ShortcutsSettings from './ShortcutsSettings';
import AboutSettings from './AboutSettings';

const categories = [
  { id: 'models', label: 'Models', icon: Cpu, description: 'API keys & defaults' },
  { id: 'interface', label: 'Interface', icon: Monitor, description: 'Appearance & behavior' },
  { id: 'export', label: 'Export', icon: Download, description: 'Format & filename' },
  { id: 'shortcuts', label: 'Shortcuts', icon: Keyboard, description: 'Keyboard reference' },
  { id: 'about', label: 'About', icon: Info, description: 'Version & credits' },
];

export default function SettingsLayout() {
  const [active, setActive] = useState('models');

  const renderPanel = () => {
    switch (active) {
      case 'models': return <ModelsSettings />;
      case 'interface': return <InterfaceSettings />;
      case 'export': return <ExportSettings />;
      case 'shortcuts': return <ShortcutsSettings />;
      case 'about': return <AboutSettings />;
      default: return <ModelsSettings />;
    }
  };

  return (
    <div className="flex h-full">
      {/* Left nav */}
      <div className="w-56 shrink-0 border-r border-border h-full flex flex-col bg-muted/20">
        <div className="px-4 h-14 flex items-center border-b border-border shrink-0">
          <h1 className="text-base font-semibold text-foreground">Settings</h1>
        </div>
        <nav className="flex-1 overflow-y-auto scrollbar-thin py-3 px-2">
          {categories?.map((cat) => (
            <button
              key={`settings-nav-${cat?.id}`}
              onClick={() => setActive(cat?.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors mb-0.5 text-left ${
                active === cat?.id
                  ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <cat.icon size={16} />
              <div className="flex-1 min-w-0">
                <p className="font-medium leading-none">{cat?.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">{cat?.description}</p>
              </div>
              {active === cat?.id && <ChevronRight size={13} />}
            </button>
          ))}
        </nav>
      </div>
      {/* Right panel */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {renderPanel()}
      </div>
    </div>
  );
}
