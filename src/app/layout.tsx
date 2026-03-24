import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://my-blogeo.vercel.app'),
  title: {
    default: 'Gabriel Montes | AI Automation Specialist',
    template: '%s | Gabriel Montes',
  },
  description:
    'AI Automation Specialist & Software Developer. I build multi-agent AI systems that replace manual operations with intelligent, scalable, and autonomous processes.',
  keywords: ['AI Automation', 'Multi-Agent Systems', 'N8N', 'Software Development', 'AI Developer', 'Colombia'],
  authors: [{ name: 'Gabriel Eduardo Montes Díaz' }],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    alternateLocale: 'en_US',
    siteName: 'Gabriel Montes Portfolio',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
