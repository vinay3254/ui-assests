export type ModelId = 'gpt4' | 'claude';

export interface Conversation {
  id: string;
  title: string;
  preview: string;
  model: ModelId;
  folder: string;
  messageCount: number;
  pinned: boolean;
  archived: boolean;
  date: string;
  dateRaw: string;
}

export interface Folder {
  id: string;
  name: string;
  color: string;
  icon: string;
  count: number;
}

export const folders: Folder[] = [
  { id: 'folder-all', name: 'All Chats', color: 'bg-slate-100 text-slate-600', icon: 'MessageSquare', count: 24 },
  { id: 'folder-work', name: 'Work Projects', color: 'bg-blue-100 text-blue-700', icon: 'Briefcase', count: 8 },
  { id: 'folder-research', name: 'Research', color: 'bg-amber-100 text-amber-700', icon: 'FlaskConical', count: 5 },
  { id: 'folder-code', name: 'Code & Dev', color: 'bg-emerald-100 text-emerald-700', icon: 'Code2', count: 7 },
  { id: 'folder-writing', name: 'Writing', color: 'bg-rose-100 text-rose-700', icon: 'PenLine', count: 4 },
];

export const conversations: Conversation[] = [
  {
    id: 'conv-001',
    title: 'React Server Components deep dive',
    preview: 'Server Components are actually better for SEO than traditional client-side React…',
    model: 'claude',
    folder: 'folder-code',
    messageCount: 18,
    pinned: true,
    archived: false,
    date: 'Aug 1, 2026',
    dateRaw: '2026-08-01',
  },
  {
    id: 'conv-002',
    title: 'Q3 investor update — draft review',
    preview: 'The revenue growth section needs more context around the churn numbers you shared…',
    model: 'claude',
    folder: 'folder-work',
    messageCount: 11,
    pinned: true,
    archived: false,
    date: 'Aug 1, 2026',
    dateRaw: '2026-08-01',
  },
  {
    id: 'conv-003',
    title: 'System design interview prep',
    preview: 'For a distributed rate limiter, you have two main approaches: token bucket and sliding window…',
    model: 'gpt4',
    folder: 'folder-code',
    messageCount: 34,
    pinned: true,
    archived: false,
    date: 'Jul 30, 2026',
    dateRaw: '2026-07-30',
  },
  {
    id: 'conv-004',
    title: 'Summarize quarterly report PDF',
    preview: 'The report highlights a 23% YoY increase in enterprise accounts, offset by higher CAC in SMB…',
    model: 'claude',
    folder: 'folder-work',
    messageCount: 6,
    pinned: false,
    archived: false,
    date: 'Jul 31, 2026',
    dateRaw: '2026-07-31',
  },
  {
    id: 'conv-005',
    title: 'Python async/await patterns',
    preview: 'asyncio.gather() is your friend for concurrent I/O-bound tasks. Here\'s the difference…',
    model: 'gpt4',
    folder: 'folder-code',
    messageCount: 22,
    pinned: false,
    archived: false,
    date: 'Jul 31, 2026',
    dateRaw: '2026-07-31',
  },
  {
    id: 'conv-006',
    title: 'Marketing copy for SaaS landing page',
    preview: 'Here are three headline variations that emphasize the value proposition differently…',
    model: 'claude',
    folder: 'folder-writing',
    messageCount: 15,
    pinned: false,
    archived: false,
    date: 'Jul 30, 2026',
    dateRaw: '2026-07-30',
  },
  {
    id: 'conv-007',
    title: 'Competitive analysis: Notion vs Linear',
    preview: 'The core differentiation lies in Notion\'s flexibility vs Linear\'s opinionated workflow…',
    model: 'gpt4',
    folder: 'folder-research',
    messageCount: 9,
    pinned: false,
    archived: false,
    date: 'Jul 29, 2026',
    dateRaw: '2026-07-29',
  },
  {
    id: 'conv-008',
    title: 'SQL query optimization — slow reports',
    preview: 'The N+1 query problem in your ORM is likely the culprit. Add eager loading with JOIN…',
    model: 'gpt4',
    folder: 'folder-code',
    messageCount: 12,
    pinned: false,
    archived: false,
    date: 'Jul 29, 2026',
    dateRaw: '2026-07-29',
  },
  {
    id: 'conv-009',
    title: 'Blog post: future of AI in product design',
    preview: 'The most compelling argument is that AI shifts designers from pixel-pushing to intent…',
    model: 'claude',
    folder: 'folder-writing',
    messageCount: 19,
    pinned: false,
    archived: false,
    date: 'Jul 28, 2026',
    dateRaw: '2026-07-28',
  },
  {
    id: 'conv-010',
    title: 'CRISPR gene editing mechanisms',
    preview: 'Cas9 acts as molecular scissors guided by a synthetic RNA sequence to the target DNA…',
    model: 'claude',
    folder: 'folder-research',
    messageCount: 28,
    pinned: false,
    archived: false,
    date: 'Jul 27, 2026',
    dateRaw: '2026-07-27',
  },
  {
    id: 'conv-011',
    title: 'Pricing strategy for B2B SaaS',
    preview: 'Value-based pricing outperforms cost-plus in B2B when you can quantify the ROI clearly…',
    model: 'gpt4',
    folder: 'folder-work',
    messageCount: 14,
    pinned: false,
    archived: false,
    date: 'Jul 26, 2026',
    dateRaw: '2026-07-26',
  },
  {
    id: 'conv-012',
    title: 'TypeScript generics explained',
    preview: 'Generics let you write type-safe code without sacrificing flexibility. Think of them as…',
    model: 'claude',
    folder: 'folder-code',
    messageCount: 16,
    pinned: false,
    archived: false,
    date: 'Jul 25, 2026',
    dateRaw: '2026-07-25',
  },
  {
    id: 'conv-013',
    title: 'Quantum computing primer for engineers',
    preview: 'Qubits exploit superposition and entanglement to perform certain computations exponentially…',
    model: 'gpt4',
    folder: 'folder-research',
    messageCount: 21,
    pinned: false,
    archived: false,
    date: 'Jul 24, 2026',
    dateRaw: '2026-07-24',
  },
  {
    id: 'conv-014',
    title: 'Performance review self-assessment draft',
    preview: 'I led the migration to the new design system, reducing component duplication by 40%…',
    model: 'claude',
    folder: 'folder-work',
    messageCount: 8,
    pinned: false,
    archived: false,
    date: 'Jul 23, 2026',
    dateRaw: '2026-07-23',
  },
  {
    id: 'conv-015',
    title: 'Docker + Kubernetes production setup',
    preview: 'For a production-grade K8s setup, you need: resource limits on all pods, readiness probes…',
    model: 'gpt4',
    folder: 'folder-code',
    messageCount: 31,
    pinned: false,
    archived: false,
    date: 'Jul 22, 2026',
    dateRaw: '2026-07-22',
  },
];
