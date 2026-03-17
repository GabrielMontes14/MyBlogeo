import { MetadataRoute } from 'next';
import { getAllPostSlugs } from '@/lib/posts';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gabrielmontes.dev';
const locales = ['es', 'en'];
const pages = ['', '/about', '/portfolio', '/blog', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  );

  const blogPosts = locales.flatMap((locale) => {
    const slugs = getAllPostSlugs(locale);
    return slugs.map((slug) => ({
      url: `${baseUrl}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
  });

  return [...staticPages, ...blogPosts];
}
