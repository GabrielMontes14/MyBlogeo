'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, Github, Linkedin, MapPin, Mail, ExternalLink } from 'lucide-react';

interface HeroProps {
  locale: string;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.21, 1.11, 0.81, 0.99] },
});

export default function Hero({ locale }: HeroProps) {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/10 dark:bg-violet-600/10 blur-3xl animate-float [animation-delay:3s]" />
        <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/5 blur-3xl animate-float [animation-delay:1.5s]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 dark:opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {t('remote')} · Upwork
        </motion.div>

        {/* Greeting */}
        <motion.p {...fadeUp(0.1)} className="text-lg text-muted-foreground font-medium mb-2">
          {t('greeting')}
        </motion.p>

        {/* Name */}
        <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4">
          <span className="gradient-text">Gabriel Eduardo</span>
          <br />
          <span className="text-foreground">Montes Díaz</span>
        </motion.h1>

        {/* Role */}
        <motion.div {...fadeUp(0.3)}>
          <p className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6">
            {t('role')}
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p {...fadeUp(0.4)} className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          {t('tagline')}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            href={`/${locale}/contact`}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t('cta_contact')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`/${locale}/portfolio`}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-sm font-semibold hover:bg-muted hover:border-border/80 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t('cta_portfolio')}
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.6)} className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/GabrielMontes14"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Github className="w-4 h-4 group-hover:text-violet-500 transition-colors" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-montes-diaz-93a345374/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Linkedin className="w-4 h-4 group-hover:text-blue-500 transition-colors" />
            LinkedIn
          </a>
          <a
            href="https://www.upwork.com/freelancers/~010d3322f0c682c3a9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ExternalLink className="w-4 h-4 group-hover:text-emerald-500 transition-colors" />
            Upwork
          </a>
          <a
            href="mailto:gabo.montes.diaz@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:text-violet-500 transition-colors" />
            Email
          </a>
          <div className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            {t('location')}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-border/50 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
