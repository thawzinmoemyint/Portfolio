@AGENTS.md

# Portfolio — project notes

Single-page personal portfolio. Next.js 16 (App Router, `src/`), React 19, Tailwind CSS v4, shadcn/ui (Radix primitives). Contact form posts to `src/app/api/contact/route.ts` (Resend).

## Content

All text, links, projects, skills, awards and certificates live in `src/lib/data.ts`. Change content there, not in components.

- Adding a skill to `skillGroups` also needs an entry in `src/components/skillIcons.ts` (logo + optional `light`/`dark` brand color), or it renders without a logo.
- `navLinks` drives both the desktop sidebar nav and the mobile tabs. Contact is intentionally not in it.
- Photos: `public/headshot.png` is a 482×482 crop of `public/Suit_Photo.png`, used as the sidebar avatar.

## Layout

`src/app/page.tsx`: two-column layout on `lg`, single column below.

- `Sidebar.tsx` — sticky left column on desktop (avatar, name, title, nav with active-section line, résumés, socials, theme toggle). On mobile it's just the top of the page.
- `MobileNav.tsx` — sticky, horizontally scrollable section tabs, `lg:hidden`.
- `useActiveSection.ts` — shared IntersectionObserver hook for both navs.
- Sections (`About`, `Experience`, `Projects`, `Skills`, `Competitions` = Awards, `Certifications`, `Contact`, `Footer`) render in the right column. Each is a `<section id=… className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">` starting with `SectionHeading`.
- `ui/HoverRow.tsx` — the two-column list row (left label, right content) used by Experience/Projects/Awards/Education. Wrap rows in a `group/list` parent so siblings dim on hover. `RowLink` makes the title a stretched link over the whole row; extra links in a row need `relative z-20`.
- `Spotlight.tsx` — cursor-following glow, desktop only.
- `ui/Reveal.tsx` — scroll fade-in wrapper.

## Theming

Style is minimal: neutral background, cyan → blue → violet accent used sparingly (title text, active nav line, links on hover, tech badges).

- Theme is set by `<html data-theme="dark|light">` (no-flash inline script in `layout.tsx`, toggled by `ThemeToggle.tsx`). There is no `.dark` class; the `dark:` variant is redefined in `globals.css` to match `[data-theme="dark"]`.
- Palette lives in the two `[data-theme]` blocks in `src/app/globals.css`: `--background`, `--surface`, `--surface-2`, `--border`, `--foreground`, `--muted-foreground`, `--grad-1..3`, `--primary-foreground`. shadcn tokens (`--card`, `--primary`, `--muted`, `--ring`, …) are mapped onto these in a shared `:root` block — change the palette, not the shadcn tokens. Per-theme values must go in the `[data-theme]` blocks, because the shared `:root` block comes later and would override them.
- `--muted` is a background color (shadcn convention); muted text is `text-muted-foreground`.
- `bg-gradient-accent` and `text-gradient` are Tailwind `@utility`s, so variants work (`data-active:bg-gradient-accent`).
- `src/app/icon.svg` (favicon) hard-codes the gradient colors; update it when the palette changes.

## shadcn/ui

Config in `components.json` (style `radix-nova`, Radix base, lucide icons). Add components with `npx shadcn@latest add <name>`; they land in `src/components/ui/` (lowercase files; the PascalCase files there are project components).

- `cn` comes from the `cn` package (shadcn's drop-in for clsx + tailwind-merge), re-exported from `src/lib/utils.ts`. Import it from `@/lib/utils`.
- Custom variants: Button `gradient`, sizes `pill` / `icon-pill`; Badge `accent` (tech tags), `subtle` (pills), `mono`. Card is restyled to a plain bordered `rounded-2xl` box.
- `TooltipProvider` wraps the app in `layout.tsx`.
- Currently unused but kept: `card`, `sheet`, `separator`, Button `gradient`/`pill`.

## Next.js 16 notes

- `next/image`: `priority` is deprecated — use `loading="eager"` / `fetchPriority="high"` (or `preload`).
- Don't run `npm run build` while `npm run dev` is running: both write to `.next/` and the dev server ends up serving stale CSS. If styles look stale, stop the dev server, `rm -rf .next`, restart.

## Checks

`npx tsc --noEmit` and `npm run lint`. There are no tests.
