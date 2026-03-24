import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { MapPin, ExternalLink, Download } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

interface BioProps {
  locale: string;
}

export default async function Bio({ locale }: BioProps) {
  const t = await getTranslations({ locale, namespace: 'about' });

  const stats = [
    { value: '5+', label: t('stats.projects') },
    { value: '2+', label: t('stats.experience') },
    { value: '10+', label: t('stats.clients') },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar + stats */}
          <AnimatedSection direction="right">
            <div className="flex flex-col">
              {/* Avatar */}
              <div className="relative w-64 h-64 mx-auto lg:mx-0 rounded-3xl overflow-hidden border-2 border-violet-500/30 shadow-xl shadow-violet-500/10">
                <Image
                  src="/images/gabriel-profile.png"
                  alt="Gabriel Montes"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Location badge */}
              <div className="mt-4 inline-flex bg-card border border-border rounded-2xl p-3 shadow-lg">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-violet-500" />
                  <span className="font-medium">Montería, Colombia</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-2xl bg-card border border-border">
                    <div className="text-2xl font-black gradient-text mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Bio text */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-widest mb-3">
                  {t('subtitle')}
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t('title')}</h2>
                <p className="text-muted-foreground leading-relaxed text-base">{t('bio')}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:gabo.montes.diaz@gmail.com"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Contactar
                </a>
                <a
                  href="/gabriel-montes-cv.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm font-semibold hover:bg-muted transition-all hover:-translate-y-0.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  {t('download_cv')}
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-montes-diaz-93a345374/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm font-semibold hover:bg-muted transition-all hover:-translate-y-0.5"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
