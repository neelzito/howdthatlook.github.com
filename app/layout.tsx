import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { StructuredData } from '@/components/structured-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://howdthatlook.com'),
  title: {
    default: "HOWDTHATLOOK - AI Photo Transformations | Free LinkedIn Headshots & More",
    template: "%s | HOWDTHATLOOK"
  },
  description: "Get 5 FREE AI photo transformations! Create professional LinkedIn headshots, anime art, restore old photos, and preview interior designs. Results in under 5 minutes - no subscriptions.",
  keywords: [
    "AI headshots",
    "LinkedIn photos", 
    "free photo editor",
    "anime creator",
    "photo restoration",
    "professional photos",
    "AI photo transformations",
    "interior design preview",
    "anime art generator",
    "professional headshots"
  ],
  authors: [{ name: "HOWDTHATLOOK Team" }],
  creator: "HOWDTHATLOOK",
  publisher: "HOWDTHATLOOK",
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
    url: 'https://howdthatlook.com',
    siteName: 'HOWDTHATLOOK',
    title: 'HOWDTHATLOOK - AI Photo Transformations | 5 FREE Credits',
    description: 'Transform your photos with AI magic! Create professional LinkedIn headshots, anime art, restore old photos. Get 5 FREE transformations worth $15.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HOWDTHATLOOK AI Photo Transformations',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOWDTHATLOOK - AI Photo Transformations',
    description: 'Get 5 FREE AI photo transformations! Professional headshots, anime art, photo restoration & more.',
    creator: '@howdthatlook',
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://howdthatlook.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}