import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Bio from '@/components/about/Bio';
import Skills from '@/components/about/Skills';
import Timeline from '@/components/about/Timeline';

interface AboutPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: AboutPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: t('title') };
}

export default function AboutPage({ params: { locale } }: AboutPageProps) {
  setRequestLocale(locale);
  return (
    <div className="pt-16">
      <Bio locale={locale} />
      <Skills locale={locale} />
      <Timeline locale={locale} />
    </div>
  );
}
