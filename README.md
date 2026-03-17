# Gabriel Montes — Personal Portfolio

A modern, bilingual (Spanish/English) personal portfolio and blog built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and next-intl.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + @tailwindcss/typography
- **Animations**: Framer Motion
- **i18n**: next-intl (Spanish/English)
- **Blog**: MDX with next-mdx-remote
- **Theming**: next-themes (dark mode default)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### 1. Clone and install

```bash
git clone <repo-url>
cd gabriel-portfolio
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Get your form ID at formspree.io
NEXT_PUBLIC_FORMSPREE_ID=your_form_id

# Your site URL for SEO/sitemap
NEXT_PUBLIC_SITE_URL=https://gabrielmontes.dev
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it will redirect to `/es` (default locale).

## Project Structure

```
gabriel-portfolio/
├── content/blog/        # MDX blog posts
│   ├── es/             # Spanish posts
│   └── en/             # English posts
├── src/
│   ├── app/
│   │   └── [locale]/   # Locale-specific pages
│   ├── components/     # React components
│   ├── i18n/           # next-intl config
│   ├── lib/            # Utilities (posts, utils)
│   ├── messages/       # Translation files (es.json, en.json)
│   └── types/          # TypeScript types
└── public/             # Static assets
```

## Adding Blog Posts

Create `.mdx` files in `content/blog/es/` or `content/blog/en/`:

```mdx
---
title: "Your Article Title"
date: "2025-03-01"
category: "AI"
excerpt: "Short description for the card preview."
---

# Your Article

Content here...
```

## Translations

Edit `src/messages/es.json` and `src/messages/en.json` to update any text.

## Adding Projects

Edit the project arrays in:
- `src/components/home/FeaturedProjects.tsx`
- `src/app/[locale]/portfolio/page.tsx`

And add the description translations to `src/messages/es.json` and `src/messages/en.json` under the `projects` key.

## Deploying to Vercel

1. Push to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy — Vercel auto-detects Next.js

## Contact Form Setup

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the form ID
4. Set `NEXT_PUBLIC_FORMSPREE_ID=your_id` in environment variables

Without the ID configured, the form runs in demo mode (simulates success).

## License

MIT — Feel free to use this as a template for your own portfolio.
