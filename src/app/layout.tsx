import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
import '../styles/tailwind.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'ChatFlow — Multi-Model AI Chat, Beautifully Organized',
  description:
    'Switch between GPT-4 and Claude mid-conversation, organize chats into folders, upload files, and export responses — no account required.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${ibmPlexMono.variable}`}>
      <body className={dmSans.className}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'var(--card)',
              color: 'var(--card-foreground)',
              border: '1px solid var(--border)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
            },
          }}
        />
      </body>
    </html>
  );
}
