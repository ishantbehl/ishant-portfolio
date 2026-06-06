# Ishant Behl — Consulting Portfolio

A dark-themed professional portfolio for **Ishant Behl** — Associate Director focused on **consulting partnerships, client success, and multi-market qualitative & quantitative research**. Built to present a 7+ year track record of revenue ownership, portfolio growth, and cross-functional delivery leadership.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**. Designed for one-click deployment on **Vercel**.

## Stack

- React 18 / TypeScript (strict mode)
- Vite (build tool)
- Tailwind CSS (utility-first styling)
- Framer Motion (animations + scroll effects)
- Lucide React (icons)
- Kanit font (Google Fonts, weights 300–900)

## Architecture

All content lives in **typed data modules** under `src/data/` — components contain **no hardcoded copy**. To update the portfolio, edit the data files; the UI re-renders automatically.

```
src/
├── App.tsx                       # composes all sections
├── main.tsx                      # React entry
├── index.css                     # global styles + .hero-heading gradient
├── data/
│   ├── profile.ts                # name, title, headline, summary, contact, socials, stats, languages, achievements
│   ├── experience.ts             # companies, roles, periods, highlights
│   ├── education.ts              # degrees & institutions
│   ├── certifications.ts         # certifications & issuers
│   └── skills.ts                 # skills grouped by competency
└── components/
    ├── HeroSection.tsx           # name, title, headline, Contact + Résumé CTAs (video bg)
    ├── SummarySection.tsx        # professional summary + animated statistics
    ├── ExperienceSection.tsx     # modern vertical timeline
    ├── SkillsSection.tsx         # skills grouped into 5 categories
    ├── AchievementsSection.tsx   # key achievements grid
    ├── CredentialsSection.tsx    # education, certifications, languages
    ├── ContactSection.tsx        # contact channels + footer
    │
    ├── AnimatedStat.tsx          # scroll-triggered count-up
    ├── ContactButton.tsx         # gradient primary CTA
    ├── OutlineButton.tsx         # ghost/outline secondary CTA
    ├── FadeIn.tsx                # whileInView animation wrapper
    └── AnimatedText.tsx          # char-by-char scroll-driven reveal
```

## Sections

1. **Hero** — name, consulting title, headline, Contact + Résumé CTAs
2. **Summary** — professional summary with animated stats (years of experience, revenue impact, team leadership, global markets)
3. **Experience** — modern timeline across Market Xcel, Infollion Research Services, McKinsey Forward Program, Concentrix, Sysmart Corporation, Backpackclan
4. **Skills** — grouped into Consulting, Client Success, Market Research, Leadership, Project Management
5. **Key Achievements** — quantified impact highlights
6. **Credentials** — Education, Certifications, Languages
7. **Contact** — Email, Mobile, LinkedIn, Location + résumé download

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # serve /dist locally
```

## Deploy to Vercel

Push to GitHub → import the repo at [vercel.com/new](https://vercel.com/new) → click Deploy. No environment variables needed.

## Customisation

| Want to change | Open this file |
|---|---|
| Name, title, headline, summary, contact, socials, stats, languages, achievements | `src/data/profile.ts` |
| Work history (companies, roles, bullets) | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Certifications | `src/data/certifications.ts` |
| Skill groups | `src/data/skills.ts` |
| Résumé download file | replace `public/Ishant-Behl-Resume.pdf` |
| Brand gradient, font, dark colour | `src/index.css` and `tailwind.config.js` |
| Page title, meta description | `index.html` |
