import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import PostCard from '@/components/blog/PostCard';
import { getAllPosts } from '@/lib/posts';

interface BlogPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: BlogPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blog' });
  return { title: t('title') };
}

export default async function BlogPage({ params: { locale } }: BlogPageProps) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = getAllPosts(locale);

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-widest mb-3">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">{t('title')}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
          </AnimatedSection>

          {posts.length === 0 ? (
            <AnimatedSection className="text-center py-20">
              <p className="text-muted-foreground text-lg">No articles yet. Check back soon!</p>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 0.1}>
                  <PostCard post={post} locale={locale} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
