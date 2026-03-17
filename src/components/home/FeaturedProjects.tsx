import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import ProjectCard from '@/components/portfolio/ProjectCard';
import type { Project } from '@/types';

interface FeaturedProjectsProps {
  locale: string;
}

export default async function FeaturedProjects({ locale }: FeaturedProjectsProps) {
  const t = await getTranslations({ locale });

  const projects: Project[] = [
    {
      id: '1',
      slug: 'oceanman',
      title: 'Oceanman',
      description: t('projects.oceanman.description'),
      stack: ['Node.js', 'Python', 'N8N', 'Supabase', 'Docker', 'Railway'],
      github: 'https://github.com/GabrielMontes14/Oceanman',
      featured: true,
    },
    {
      id: '2',
      slug: 'facturabot',
      title: 'FacturaBot',
      description: t('projects.facturabot.description'),
      stack: ['Python', 'AI', 'Automation', 'Telegram API'],
      featured: true,
    },
    {
      id: '3',
      slug: 'portfolio',
      title: 'Portfolio',
      description: t('projects.portfolio.description'),
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/GabrielMontes14',
      featured: true,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t('featured.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-xl">{t('featured.subtitle')}</p>
          </div>
          <Link
            href={`/${locale}/portfolio`}
            className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            {t('featured.view_all')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} locale={locale} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
