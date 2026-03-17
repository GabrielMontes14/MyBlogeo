'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Bot, Brain, Code2, Workflow } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const servicesMeta = [
  { Icon: Brain, titleKey: 'items.automation.title', descKey: 'items.automation.description', iconColor: '#3b82f6', bg: 'bg-blue-500/10' },
  { Icon: Bot, titleKey: 'items.multiagent.title', descKey: 'items.multiagent.description', iconColor: '#8b5cf6', bg: 'bg-violet-500/10' },
  { Icon: Code2, titleKey: 'items.bots.title', descKey: 'items.bots.description', iconColor: '#06b6d4', bg: 'bg-cyan-500/10' },
  { Icon: Workflow, titleKey: 'items.workflow.title', descKey: 'items.workflow.description', iconColor: '#f97316', bg: 'bg-orange-500/10' },
] as const;

export default function Services() {
  const t = useTranslations('services');

  return (
    <section className="section-padding bg-muted/30 dark:bg-muted/10">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesMeta.map((service, i) => {
            const { Icon } = service;
            return (
              <AnimatedSection key={service.titleKey} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative group p-6 rounded-2xl border border-border bg-card h-full overflow-hidden cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className={`w-11 h-11 rounded-xl ${service.bg} flex items-center justify-center mb-5`}>
                    <Icon className="w-5 h-5" style={{ color: service.iconColor }} />
                  </div>

                  <h3 className="text-base font-semibold mb-2 leading-snug">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
