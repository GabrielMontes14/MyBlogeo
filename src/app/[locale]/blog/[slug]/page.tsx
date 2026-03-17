import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

interface PostPageProps {
  params: { locale: string; slug: string };
}

export async function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
  const slugs = getAllPostSlugs(locale);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { locale, slug } }: PostPageProps): Promise<Metadata> {
  const result = getPostBySlug(slug, locale);
  if (!result) return {};
  return {
    title: result.post.title,
    description: result.post.excerpt,
  };
}

export default async function PostPage({ params: { locale, slug } }: PostPageProps) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blog' });
  const result = getPostBySlug(slug, locale);

  if (!result) notFound();

  const { post, content } = result;

  return (
    <div className="pt-16">
      <article className="section-padding">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t('back_to_blog')}
          </Link>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 mb-5">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {t('published')} {formatDate(post.date, locale)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              5 {t('min_read')}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
          </div>

          <div className="prose prose-base dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-violet-500 prose-a:no-underline hover:prose-a:underline prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-card prose-pre:border prose-pre:border-border">
            <MDXRemote source={content} />
          </div>
        </div>
      </article>
    </div>
  );
}
