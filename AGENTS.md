# pp-v5 — Portfolio (Puly G)

Rewrite of `../pp-v4` (Astro) as a Nuxt 4 + Tailwind site. Visual language follows `D:\PC\Documents\design prisma.md` (Prisma design notes): dark moody cinematic, cream-on-black, weighted type, scroll-linked motion.

## Stack

- Nuxt 4 + TypeScript (`app/` srcDir)
- Tailwind CSS 3 (`@nuxtjs/tailwindcss`) — extend `colors.primary: #DEDBC8`, `fontFamily.serif: Instrument Serif`
- `@nuxtjs/google-fonts` — Almarai 300/400/700/800 + Instrument Serif italic 400
- `@vueuse/motion/nuxt` — animations (drop-in for framer-motion patterns)
- `lucide-vue-next` — icons (`ArrowRight`, `Check`)
- `@nuxt/content` — projects as markdown in `content/projects/*.md`

## Visual system (from prisma design)

- Bg `#000`, About card `#101010`, Feature card `#212121`, primary text `#DEDBC8` (`text-primary`)
- Global font: Almarai. Serif italic accent (`font-serif italic`) used **only** for the rhetorical phrase in the About heading
- Noise utilities in `app/assets/css/main.css`: `.noise-overlay` (0.85/3) for hero video, `.bg-noise` (0.9/4) at `opacity-[0.15]` for sections
- Hero word-mark scales `26vw → 19vw`, `font-medium leading-[0.85] tracking-[-0.07em]`, asterisk superscript on final letter
- CTA pill: cream bg, black inner circle with `ArrowRight`; hover widens gap + scales circle 1.1
- Project cards: 4-col grid `md:grid-cols-2 lg:grid-cols-4`, `lg:h-[480px]`, first card = full-bleed media; cards 2–4 = icon tile + numeric tag + checklist + "Learn more" with `-45deg` arrow
- Card entrance: `useInView({ once: true, margin: '-100px' })`, scale 0.95→1 + fade, stagger 0.15s, ease `[0.22, 1, 0.36, 1]`

## Animation components (to live in `app/components/`)

- `WordsPullUp.vue` — splits by space, each word `y: 20 → 0`, opacity 0→1, delay = `delayOffset + i*0.08`, duration 0.8, ease `[0.16,1,0.3,1]`, fires once on `useInView`. `showAsterisk` prop adds absolute `*` after last word
- `WordsPullUpMultiStyle.vue` — same animation, `segments: [{ text, className }]`, words `inline-flex flex-wrap justify-center`
- `ScrollRevealParagraph.vue` + `AnimatedLetter.vue` — `useScroll({ offset: ['start 0.8', 'end 0.2'] })`, each char opacity driven by slice `[charProgress - 0.1, charProgress + 0.05]`, 0.2 → 1
- `ProjectCard.vue` — bg-image preview + dark overlay + title + role; click → `/projects/[slug]`

## Content

Projects live in `content/projects/*.md` with frontmatter:

```yaml
title: string
slug: string
summary: string
role: string
tags: string[]
cover: string       # /preview-name.PNG (used as card bg)
gallery: string[]   # /screenshot-1.PNG, ...
clientRepo?: string
apiRepo?: string
demoUrl?: string
order: number
draft?: boolean
```

The body of the markdown is the case-study copy rendered on `/projects/[slug]`.

## Pages

- `pages/index.vue` — Hero + About + Projects (4-card grid) + Contact
- `pages/projects/index.vue` — full project listing
- `pages/projects/[slug].vue` — case study (queryContent), gallery, prev/next nav

## Verbatim copy (don't rewrite)

### Hero
- Eyebrow: `I am ...`
- Word-mark: `Ignacio G.` (Prisma-style scaling, no asterisk)
- Dark theme only (pp-v4 had a light/dark toggle — dropped here)
- Role: `Product-minded Full Stack Developer.` · Experience: `+1 year of professional experience on a fintech SaaS.`
- CTAs: `About me` (#about) · `Latest projects` (/projects) · `Contact` (#contact)

### About
> I am a 23 years old **Developer**, **English B1**, with **+1 year of professional experience** working at a fintech that facilitates access to housing in Chile, Brazil and Peru, contributing to a **SaaS platform for mortgage credit management** — applying **SOLID principles** and working with a **Service-oriented architecture**.
>
> I develop using **AI-assisted workflows** and modern methodologies such as **Spec-Driven Development**, and I'm always studying with best practices and modern technologies always focusing on clean code and engaging user interfaces.
>
> I'm looking for a place that brings new challenges and learning opportunities to keep growing in my career: a team where I can contribute to products with real impact, take ownership of meaningful work, and sharpen my skills alongside experienced engineers.

### Tech stack (in this order)
TypeScript · Node.js · Nest.js · Vue.js · Next.js · Tailwind CSS · shadcn/ui · PostgreSQL · TypeORM · Jest · Git · GitHub

### Projects (order)
0. **Creditu** — Mortgage credit SaaS (Chile, Brazil, Peru) · Full-stack · NestJS + Vue · professional role, no public repos
1. **Vonder** — Operations management and point-of-sale SaaS for businesses · Full-stack (own product) · NestJS + Prisma + Next.js · repos private, no demo link
2. **WTB Fighting** — Platform for events, management and martial arts statistics · Full-stack · Nest.js + Nuxt 4 · client: pulygarcia/way-to-belt-client · api: pulygarcia/way-to-belt
3. **El Galpón** — Fullstack reservation system for pádel club · Full-stack + Email · Next.js + Nest.js · client: pulygarcia/Courts-reservations-client · api: pulygarcia/Courts-reservations
4. **TucDesign** — Modern site for architecture & interior design studio · Front-end · Vue 3 · demo: https://tuc-design.vercel.app

### Contact
- Email — pulygarcia09@gmail.com
- GitHub — pulygarcia (https://github.com/pulygarcia)
- LinkedIn — pulygarcia (https://www.linkedin.com/in/pulygarcia/)

### Footer
- Brand: `Puly G` · `© <year>` · social links · back-to-top

## Working conventions

- Keep the prisma design language consistent across new sections — when in doubt, mirror the spacing/typography ratios from `design prisma.md`
- Commits are incremental: scaffold → content → components → sections. The user will pause and review between commits
- Don't run `npm run dev` proactively; the user runs it locally
- Don't add docs/comments unless the code is genuinely non-obvious
- Asset paths from pp-v4 use `.PNG` (uppercase). Preserve casing when migrating

## Reference

- Design source: `D:\PC\Documents\design prisma.md`
- Previous portfolio: `C:\Users\PC\Desktop\Apps\pp-v4`
- Live (old): https://portfolio-puly-v4.vercel.app/
