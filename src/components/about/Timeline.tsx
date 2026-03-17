import { getTranslations } from 'next-intl/server';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const timelineEs = [
  {
    year: '2024 – Presente',
    role: 'AI Automation Specialist',
    company: 'Freelance / Upwork',
    description:
      'Diseño e implemento arquitecturas de automatización basadas en agentes de IA para clientes internacionales. Construyo sistemas multi-agente con N8N, Python y APIs de LLMs.',
  },
  {
    year: '2023 – 2024',
    role: 'Software Developer',
    company: 'Proyectos independientes',
    description:
      'Desarrollo de aplicaciones web y bots con Python y Node.js. Integración de APIs y automatización de procesos empresariales para PYMEs.',
  },
  {
    year: '2022 – 2023',
    role: 'Intérprete Bilingüe ES/EN',
    company: 'Independiente',
    description:
      'Interpretación simultánea y consecutiva español–inglés para empresas, conferencias y clientes internacionales. Traducción de documentos técnicos y legales.',
  },
];

const timelineEn = [
  {
    year: '2024 – Present',
    role: 'AI Automation Specialist',
    company: 'Freelance / Upwork',
    description:
      'Design and implement AI agent-based automation architectures for international clients. Build multi-agent systems with N8N, Python, and LLM APIs.',
  },
  {
    year: '2023 – 2024',
    role: 'Software Developer',
    company: 'Independent projects',
    description:
      'Development of web applications and bots with Python and Node.js. API integration and business process automation for SMBs.',
  },
  {
    year: '2022 – 2023',
    role: 'Bilingual Interpreter ES/EN',
    company: 'Independent',
    description:
      'Simultaneous and consecutive Spanish–English interpretation for companies, conferences, and international clients. Technical and legal document translation.',
  },
];

interface TimelineProps {
  locale: string;
}

export default async function Timeline({ locale }: TimelineProps) {
  const t = await getTranslations({ locale, namespace: 'about' });
  const items = locale === 'es' ? timelineEs : timelineEn;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('experience_title')}</h2>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-blue-500 to-transparent" />

            <div className="space-y-8">
              {items.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <div className="relative pl-14">
                    <div className="absolute left-[17px] top-1.5 w-[17px] h-[17px] rounded-full border-2 border-violet-500 bg-background flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-violet-500" />
                    </div>

                    <div className="p-5 rounded-2xl border border-border bg-card hover:border-violet-500/30 transition-colors">
                      <span className="text-xs font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-wider">
                        {item.year}
                      </span>
                      <h3 className="text-base font-bold mt-1 mb-0.5">{item.role}</h3>
                      <p className="text-sm text-muted-foreground font-medium mb-3">{item.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
