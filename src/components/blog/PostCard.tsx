'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

interface PostCardProps {
  post: BlogPost;
  locale: string;
}

export default function PostCard({ post, locale }: PostCardProps) {
  const t = useTranslations('blog');

  const categoryColors: Record<string, string> = {
    ai: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
    automation: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    development: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  };

  const colorClass = categoryColors[post.category.toLowerCase()] || 'bg-muted text-muted-foreground';

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group"
    >
      <Link href={`/${locale}/blog/${post.slug}`} className="block h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-violet-500/30 transition-colors duration-300">
        {/* Cover image placeholder */}
        <div className="h-48 bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-violet-600/30" />
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <span className="text-3xl">✦</span>
          </div>
        </div>

        <div className="p-5">
          {/* Category */}
          <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold mb-3 ${colorClass}`}>
            {post.category}
          </span>

          {/* Title */}
          <h3 className="text-base font-semibold mb-2 leading-snug group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(post.date, locale)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                5 {t('min_read')}
              </span>
            </div>
            <span className="flex items-center gap-1 font-medium text-violet-500 dark:text-violet-400 group-hover:gap-2 transition-all">
              {t('read_more')}
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
