'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  locale: string;
  className?: string;
}

export function LanguageSwitcher({ locale, className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('language');

  const targetLocale = locale === 'es' ? 'en' : 'es';
  const targetPath = pathname.replace(`/${locale}`, `/${targetLocale}`);

  return (
    <button
      onClick={() => router.push(targetPath)}
      title={t('switch_to')}
      className={cn(
        'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium',
        'text-muted-foreground hover:text-foreground hover:bg-muted',
        'transition-all duration-200 border border-transparent hover:border-border',
        className
      )}
    >
      <Globe className="w-3.5 h-3.5" />
      <span className="uppercase tracking-wide text-xs">{targetLocale}</span>
    </button>
  );
}
