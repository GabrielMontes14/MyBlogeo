import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import FeaturedProjects from '@/components/home/FeaturedProjects';

export const metadata: Metadata = {
  title: 'Gabriel Montes | AI Automation Specialist',
};

interface HomePageProps {
  params: { locale: string };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  setRequestLocale(locale);
  return (
    <>
      <Hero locale={locale} />
      <Services />
      <FeaturedProjects locale={locale} />
    </>
  );
}
