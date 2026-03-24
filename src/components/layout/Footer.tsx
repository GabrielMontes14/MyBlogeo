import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Github, Linkedin, Mail, MapPin, Zap, ExternalLink } from 'lucide-react';

interface FooterProps {
  locale: string;
}

export default async function Footer({ locale }: FooterProps) {
  const t = await getTranslations({ locale });

  const navLinks = [
    { href: `/${locale}`, label: t('nav.home') },
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/portfolio`, label: t('nav.portfolio') },
    { href: `/${locale}/blog`, label: t('nav.blog') },
    { href: `/${locale}/contact`, label: t('nav.contact') },
  ];

  const socials = [
    { href: 'https://github.com/GabrielMontes14', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/gabriel-montes-diaz-93a345374/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.upwork.com/freelancers/~010d3322f0c682c3a9', icon: ExternalLink, label: 'Upwork' },
    { href: 'mailto:gabo.montes.diaz@gmail.com', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-lg w-fit">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="gradient-text">Gabriel Montes</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              <span>Montería, Colombia</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('footer.links.title')}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('footer.social.title')}
            </h3>
            <div className="flex flex-col gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <social.icon className="w-4 h-4 group-hover:text-violet-500 transition-colors" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Gabriel Eduardo Montes Díaz. {t('footer.rights')}
          </p>
          <p className="text-xs text-muted-foreground">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
