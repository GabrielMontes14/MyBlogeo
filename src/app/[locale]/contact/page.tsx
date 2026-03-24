import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Mail, MapPin, Clock, ExternalLink, Github, Linkedin } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/contact/ContactForm';

interface ContactPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: ContactPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: t('title') };
}

export default async function ContactPage({ params: { locale } }: ContactPageProps) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contact' });

  const infoItems = [
    {
      icon: Mail,
      label: t('info.email_label'),
      value: 'gabo.montes.diaz@gmail.com',
      href: 'mailto:gabo.montes.diaz@gmail.com',
    },
    {
      icon: MapPin,
      label: t('info.location_label'),
      value: 'Montería, Colombia',
    },
    {
      icon: ExternalLink,
      label: t('info.availability_label'),
      value: t('info.availability_value'),
      href: 'https://www.upwork.com/freelancers/~010d3322f0c682c3a9',
    },
    {
      icon: Clock,
      label: t('info.response_label'),
      value: t('info.response_value'),
    },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/GabrielMontes14' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-montes-diaz-93a345374/' },
    { icon: ExternalLink, label: 'Upwork', href: 'https://www.upwork.com/freelancers/~010d3322f0c682c3a9' },
    { icon: Mail, label: 'Email', href: 'mailto:gabo.montes.diaz@gmail.com' },
  ];

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-widest mb-3">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">{t('title')}</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t('subtitle')}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Info column */}
            <AnimatedSection className="lg:col-span-2 space-y-4" direction="right">
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-violet-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('mailto') ? undefined : '_blank'}
                        rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                        className="text-sm font-medium hover:text-violet-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="p-4 rounded-2xl border border-border bg-card">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Social</p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      title={social.label}
                      className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Form column */}
            <AnimatedSection className="lg:col-span-3" direction="left" delay={0.1}>
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
