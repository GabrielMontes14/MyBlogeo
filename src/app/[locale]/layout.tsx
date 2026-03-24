import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Providers } from '@/components/ui/Providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const locales = ['es', 'en'];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEs = locale === 'es';
  const description = isEs
    ? 'AI Automation Specialist & Software Developer. Diseño sistemas inteligentes que automatizan procesos empresariales con IA y agentes autónomos.'
    : 'AI Automation Specialist & Software Developer. I build intelligent systems that automate business processes with AI and autonomous agents.';

  return {
    title: {
      default: 'Gabriel Montes | AI Automation Specialist',
      template: '%s | Gabriel Montes',
    },
    description,
    keywords: isEs
      ? ['automatización IA', 'agentes IA', 'N8N', 'Python', 'freelance Colombia', 'Upwork', 'software developer']
      : ['AI automation', 'AI agents', 'N8N', 'Python', 'freelance Colombia', 'Upwork', 'software developer'],
    authors: [{ name: 'Gabriel Montes', url: 'https://github.com/GabrielMontes14' }],
    creator: 'Gabriel Montes',
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_CO' : 'en_US',
      siteName: 'Gabriel Montes',
      title: 'Gabriel Montes | AI Automation Specialist',
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Gabriel Montes | AI Automation Specialist',
      description,
    },
    alternates: {
      languages: {
        es: '/es',
        en: '/en',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Navbar locale={locale} />
            <main>{children}</main>
            <Footer locale={locale} />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
