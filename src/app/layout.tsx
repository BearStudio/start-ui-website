import { cn } from '@/lib/utils';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Rubik } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const rubikFont = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://start-ui.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Start UI - Opinionated UI starters',
  description:
    'Opinionated UI starters from the BearStudio team. Made for the web, mobile applications and Figma. Free and open source, start to use them now to bootstrap your next webapps projects',
  keywords: [
    'Next.js',
    'React',
    'BearStudio',
    'Open Source Starter',
    'Boilerplate',
    'TypeScript',
    'Figma',
    'Design',
  ],
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    site: '@startui_',
    creator: '@startui_',
    images: '/start-ui-visual.png',
  },
  openGraph: {
    url: 'https://start-ui.com/',
    type: 'website',
    locale: 'en_US',
    siteName: 'Start UI',
    images: '/start-ui-visual.png',
  },
  authors: [{ name: 'BearStudio', url: 'https://bearstudio.fr' }],
};

export const viewport: Viewport = {
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          rubikFont.className,
          'flex min-h-screen flex-col bg-gray-950 text-white'
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
