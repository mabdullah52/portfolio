# Abdullah Asim — Portfolio

AI/ML automation portfolio built with Next.js 14 (App Router), TypeScript (strict), and
Tailwind CSS.

## Requirements

- **Node.js 20.9 or newer** (required by Next.js 16 — check with `node --version`)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |

## Editing content

All real content lives in `data/`:

- `data/site-config.ts` — name, role, tagline, contact links
- `data/projects.ts` — project case studies (edit or add entries here)
- `data/skills.ts` — skills grid

Add a new project by adding an object to `data/projects.ts` — the detail page at
`/projects/[slug]` is generated automatically for every entry.

## Security

- `package.json` includes an `overrides` block that forces patched versions of
  `postcss`, `brace-expansion`, and `sharp` — these are vulnerable versions bundled
  *inside* Next.js's own dependency tree (not something a normal version bump on
  `next` itself fixes). Run `npm audit` after installing to confirm 0 vulnerabilities.
- No forms, no user input anywhere on the site — nothing to sanitize or validate.
- No secrets are required. `.env.local.example` documents the pattern to follow if you
  ever add one (e.g. an analytics key). Never commit a real `.env.local`.
- `next.config.js` sets a strict Content-Security-Policy plus `X-Frame-Options`,
  `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and HSTS on every
  route.
- No `dangerouslySetInnerHTML` anywhere in the codebase.
- Deploy on Vercel (or any Node host) rather than `next export` — static export does
  not serve the headers in `next.config.js`.

## Before you deploy

1. Update `siteConfig.url` in `data/site-config.ts` to your real domain.
2. Swap or add project entries in `data/projects.ts` as your work grows.
