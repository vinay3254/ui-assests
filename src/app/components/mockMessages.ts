export type MessageRole = 'user' | 'assistant';
export type ModelId = 'gpt4' | 'claude';

export interface Attachment {
  id: string;
  name: string;
  type: 'image' | 'pdf' | 'code';
  size: string;
}

export interface Citation {
  id: number;
  title: string;
  url: string;
  snippet: string;
}

export interface Message {
  id: string;
  role: MessageRole;
  model?: ModelId;
  content: string;
  timestamp: string;
  streaming?: boolean;
  attachments?: Attachment[];
  codeBlocks?: { language: string; code: string }[];
  citations?: Citation[];
}

export const mockMessages: Message[] = [
  {
    id: 'msg-001',
    role: 'user',
    content: 'Can you explain React Server Components and how they differ from Client Components? I want to understand when to use each.',
    timestamp: '2:14 PM',
  },
  {
    id: 'msg-002',
    role: 'assistant',
    model: 'claude',
    timestamp: '2:14 PM',
    content: `React Server Components (RSCs) are a paradigm shift in how React renders UI. Here's the core distinction:

**Server Components** run exclusively on the server. They can directly access databases, file systems, and backend services without exposing secrets to the client. They produce zero JavaScript bundle overhead on the client side. [1]

**Client Components** run in the browser (and are also pre-rendered on the server for the initial HTML). They handle interactivity — state, effects, event listeners, browser APIs. [2]

The key mental model: **Server = data fetching + static rendering. Client = interactivity.**`,
    citations: [
      {
        id: 1,
        title: 'React Server Components – React Docs',
        url: 'https://react.dev/reference/rsc/server-components',
        snippet: 'Server Components are a new type of Component that renders ahead of time, before bundling, in an environment separate from your client app or SSR server.',
      },
      {
        id: 2,
        title: 'Client Components – React Docs',
        url: 'https://react.dev/reference/rsc/client-components',
        snippet: 'Client Components allow you to write interactive UI that is prerendered on the server and can use client JavaScript to run in the browser.',
      },
    ],
  },
  {
    id: 'msg-003',
    role: 'user',
    content: 'Can you show me a concrete example — like a dashboard component that fetches data?',
    timestamp: '2:16 PM',
  },
  {
    id: 'msg-004',
    role: 'assistant',
    model: 'claude',
    timestamp: '2:16 PM',
    content: 'Here\'s a practical example showing the split pattern — a Server Component fetches data, a Client Component handles the interactive parts:',
    codeBlocks: [
      {
        language: 'tsx',
        code: `// DashboardPage.tsx — Server Component (no 'use client')
import { MetricsChart } from './MetricsChart'
; // Client Component
import { db } from '../../lib/db'
; // backend integration point

async function DashboardPage() {
  // This runs on the server — safe to use DB directly
  const metrics = await db.query('SELECT * FROM daily_metrics ORDER BY date DESC LIMIT 30');

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      {/* Pass serializable data to Client Component */}
      <MetricsChart data={metrics} />
    </main>
  );
}

// MetricsChart.tsx — Client Component
'use client';
import { useState } from 'react';
import { AreaChart, Area } from 'recharts';

export function MetricsChart({ data }: { data: Metric[] }) {
  const [range, setRange] = useState<'7d' | '30d'>('7d');
  const filtered = data.slice(range === '7d' ? -7 : -30);

  return (
    <div>
      <button onClick={() => setRange('7d')}>7 days</button>
      <button onClick={() => setRange('30d')}>30 days</button>
      <AreaChart data={filtered}>
        <Area dataKey="value" />
      </AreaChart>
    </div>
  );
}`,
      },
    ],
  },
  {
    id: 'msg-005',
    role: 'user',
    content: 'That makes sense. What about when I need to pass a callback from a Server Component to a Client Component?',
    timestamp: '2:19 PM',
  },
  {
    id: 'msg-006',
    role: 'assistant',
    model: 'gpt4',
    timestamp: '2:19 PM',
    content: `You can't pass functions from Server to Client Components — functions are not serializable across the server/client boundary. This is one of the most common mistakes developers hit when adopting RSCs. [1]

**What you can do instead:**

1. **Move the callback logic into the Client Component itself** — if the action is purely client-side (UI state, animations), it belongs there anyway.

2. **Use Server Actions** — for server-side mutations, define an \`async function\` with \`'use server'\` directive and pass it as a prop. Next.js serializes it as a reference. [2]

3. **Lift shared state up** — if multiple components need to share interaction state, use a Context provider at the Client boundary.

The boundary rule is simple: data flows down (server → client), actions flow up via Server Actions or event handlers within the client tree.`,
    citations: [
      {
        id: 1,
        title: 'Passing props from Server to Client Components',
        url: 'https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns',
        snippet: 'Props passed from Server to Client Components need to be serializable. Values such as functions, Dates, etc, cannot be passed directly to Client Components.',
      },
      {
        id: 2,
        title: 'Server Actions – Next.js Docs',
        url: 'https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations',
        snippet: 'Server Actions are asynchronous functions that are executed on the server. They can be called in Server and Client Components to handle form submissions and data mutations.',
      },
    ],
  },
  {
    id: 'msg-007',
    role: 'user',
    content: 'Perfect. One last question — does using Server Components affect SEO?',
    timestamp: '2:22 PM',
  },
  {
    id: 'msg-008',
    role: 'assistant',
    model: 'gpt4',
    timestamp: '2:22 PM',
    streaming: true,
    content: `Server Components are actually **better for SEO** than traditional client-side React for several reasons: [1]

- The HTML is fully rendered before it reaches the browser — search engine crawlers see complete content immediately
- No JavaScript execution required to read your page's text and structure
- Faster Time to First Byte (TTFB) since the server does the heavy lifting
- Core Web Vitals improve because there's less JavaScript blocking the main thread

The combination of RSCs with Next.js App Router gives you server-rendered HTML with selective client-side hydration — essentially the best of both worlds for SEO and performance.`,
    citations: [
      {
        id: 1,
        title: 'SEO with Next.js App Router',
        url: 'https://nextjs.org/docs/app/building-your-application/optimizing/metadata',
        snippet: 'Next.js has a Metadata API that can be used to define your application metadata for improved SEO and web shareability.',
      },
    ],
  },
];
