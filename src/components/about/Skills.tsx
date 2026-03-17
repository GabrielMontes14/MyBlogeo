import { getTranslations } from 'next-intl/server';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const skillCategories = [
  {
    name: 'AI & Automation',
    skills: ['N8N', 'Make (Integromat)', 'LangChain', 'OpenAI API', 'Anthropic API', 'AutoGen'],
    color: '#8b5cf6',
  },
  {
    name: 'Backend',
    skills: ['Python', 'Node.js', 'FastAPI', 'Express.js', 'REST APIs', 'WebSockets'],
    color: '#3b82f6',
  },
  {
    name: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: '#06b6d4',
  },
  {
    name: 'Infrastructure',
    skills: ['Supabase', 'Docker', 'Railway', 'Vercel', 'PostgreSQL', 'Redis'],
    color: '#f97316',
  },
  {
    name: 'Tools',
    skills: ['Git', 'Telegram API', 'WhatsApp API', 'Discord.py', 'Zapier', 'Airtable'],
    color: '#10b981',
  },
  {
    name: 'Languages',
    skills: ['Spanish (Native)', 'English (Professional)', 'Interpreter ES/EN'],
    color: '#f59e0b',
  },
];

interface SkillsProps {
  locale: string;
}

export default async function Skills({ locale }: SkillsProps) {
  const t = await getTranslations({ locale, namespace: 'about' });

  return (
    <section className="section-padding bg-muted/30 dark:bg-muted/10">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('skills_title')}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.name} delay={i * 0.08}>
              <div className="p-5 rounded-2xl border border-border bg-card h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: category.color }} />
                  <h3 className="text-sm font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-lg bg-muted text-muted-foreground font-medium border border-border hover:border-violet-500/30 hover:text-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
