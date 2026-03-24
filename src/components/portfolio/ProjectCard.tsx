'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  locale: string;
}

const projectGradients: Record<string, { gradient: string; icon: string; bg: string }> = {
  oceanman: {
    gradient: 'from-blue-600 via-cyan-500 to-teal-400',
    icon: '🤖',
    bg: 'from-blue-950/80 to-cyan-950/80',
  },
  facturabot: {
    gradient: 'from-violet-600 via-purple-500 to-pink-500',
    icon: '📄',
    bg: 'from-violet-950/80 to-purple-950/80',
  },
  portfolio: {
    gradient: 'from-orange-500 via-amber-400 to-yellow-400',
    icon: '🌐',
    bg: 'from-orange-950/80 to-amber-950/80',
  },
};

const defaultGradient = {
  gradient: 'from-blue-500 via-violet-500 to-purple-600',
  icon: '⚡',
  bg: 'from-blue-950/80 to-violet-950/80',
};

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  const t = useTranslations('portfolio');
  const visual = projectGradients[project.slug] ?? defaultGradient;

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-violet-500/30 transition-colors duration-300"
    >
      {/* Thumbnail */}
      <div className={`relative h-44 bg-gradient-to-br ${visual.bg} overflow-hidden`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <>
            {/* Animated gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${visual.bg} opacity-90`} />
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            {/* Glow orb */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br ${visual.gradient} opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500`}
            />
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${visual.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-3xl">{visual.icon}</span>
              </div>
            </div>
            {/* Top color strip */}
            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${visual.gradient}`} />
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-violet-500 transition-colors shrink-0 mt-0.5" />
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground font-medium border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-3.5 h-3.5" />
              {t('source_code')}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {t('live_demo')}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
