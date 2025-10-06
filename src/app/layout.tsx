import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/luxvitae.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { BackToTop } from '@/components/ui/back-to-top';
import { Footer } from '@/components/home/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://live-ecohouse.vercel.app'),
  title: 'Eco House by Lux Vitae | Sustainable Living Made Beautiful',
  description:
    'Lux Vitae offers a new approach to residential design and construction with its sustainable Eco-Houses.',
  keywords: [
    'eco house',
    'sustainable living',
    'green building',
    'eco-friendly homes',
    'sustainable architecture',
    'renewable energy',
    'environmentally friendly',
    'green construction',
    'sustainable design',
    'eco-conscious living',
  ],
  authors: [{ name: 'Lux Vitae' }],
  creator: 'Lux Vitae',
  publisher: 'Lux Vitae',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://live-ecohouse.vercel.app',
    siteName: 'Eco House by Lux Vitae',
    title: 'Eco House by Lux Vitae | Sustainable Living Made Beautiful',
    description:
      'Lux Vitae offers a new approach to residential design and construction with its sustainable Eco-Houses.',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Eco House by Lux Vitae',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eco House by Lux Vitae | Sustainable Living Made Beautiful',
    description:
      'Lux Vitae offers a new approach to residential design and construction with its sustainable Eco-Houses.',
    images: ['/logo.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  manifest: '/site.webmanifest',
  category: 'architecture',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={'min-h-full dark'}>
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
        {/* Global Back to Top Button - appears on all pages */}
        <BackToTop showAfterScroll={300} showLabel={false} />
      </body>
    </html>
  );
}
