import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import ProjectCard from '@/components/portfolio/ProjectCard';
import type { Project } from '@/types';

interface PortfolioPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PortfolioPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'portfolio' });
  return { title: t('title') };
}

async function getProjects(locale: string): Promise<Project[]> {
  const t = await getTranslations({ locale, namespace: 'projects' });
  return [
    {
      id: '1',
      slug: 'oceanman',
      title: 'Oceanman',
      description: t('oceanman.description'),
      stack: ['Node.js', 'Python', 'N8N', 'Supabase', 'Docker', 'Railway'],
      github: 'https://github.com/GabrielMontes14/Oceanman',
      featured: true,
    },
    {
      id: '2',
      slug: 'facturabot',
      title: 'FacturaBot',
      description: t('facturabot.description'),
      stack: ['Python', 'AI', 'Automation', 'Telegram API'],
      featured: true,
    },
    {
      id: '3',
      slug: 'portfolio',
      title: 'Portfolio',
      description: t('portfolio.description'),
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'next-intl'],
      github: 'https://github.com/GabrielMontes14',
    },
  ];
}

export default async function PortfolioPage({ params: { locale } }: PortfolioPageProps) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'portfolio' });
  const projects = await getProjects(locale);

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-widest mb-3">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">{t('title')}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
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
    </div>
  );
}
