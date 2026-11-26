# Shore GTM — React / shadcn / Tailwind setup

This project was originally static HTML. It now runs as a **Next.js + TypeScript + Tailwind** app with a **shadcn-compatible** layout so UI components live under `src/components/ui`.

## Why `/components/ui` matters

shadcn/ui installs and expects components at the alias mapped in `components.json` (`ui` → `@/components/ui`). Keeping Tideline CTA (and future primitives) there means:

- `npx shadcn@latest add …` drops files in the right place
- Imports stay consistent: `@/components/ui/tideline-cta`
- Shared utilities stay in `@/lib/utils` (`cn`)

If you ever scaffold a fresh repo without that folder, create it before adding components:

```bash
mkdir -p src/components/ui
```

## Fresh install (if starting over)

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npx shadcn@latest init
# choose: New York, Neutral, CSS variables, React Server Components
npm install lucide-react class-variance-authority clsx tailwind-merge
```

Then copy `tideline-cta.tsx` and `tideline-cta-utils/tideline-cta.css` into `src/components/ui/`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/what-we-do](http://localhost:3000/what-we-do) — Tideline CTA is the hero.
