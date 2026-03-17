'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  locale: string;
}

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  const t = useTranslations('portfolio');

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-violet-500/30 transition-colors duration-300"
    >
      {/* Header gradient strip */}
      <div className="h-1.5 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6 flex flex-col flex-1">
        {/* Title & icon */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
            {project.title}
          </h3>
          {(project.github || project.demo) && (
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-violet-500 transition-colors shrink-0 mt-0.5" />
          )}
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
