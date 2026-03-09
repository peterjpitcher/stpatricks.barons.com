# St Patrick's Day Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a standalone Next.js 15 app with two landing page design variants for Barons Pubs' St Patrick's Day "Happy Two Hours" promotion, plus a floating switcher so the client can toggle between variants.

**Architecture:** Single Next.js 15 App Router app at `/Users/peterpitcher/Cursor/2026-03-09 St Patricks Day/`. The home page (`/`) renders the active variant based on a `?v=1` or `?v=2` URL parameter (defaulting to 1). A `VariantSwitcher` component floats above the page content. Each variant is a self-contained component that faithfully converts its HTML mockup. CSS design tokens for each variant live in scoped CSS modules.

**Tech Stack:** Next.js 15, React 19, TypeScript (strict), Tailwind CSS v4, `next/font` for Google Fonts, `next/image` for images. No database, no auth.

---

## Source Files

- HTML v1: `/Users/peterpitcher/Cursor/Barons.com Content/landing-pages/st-patricks-day-2026/st-patricks-day-2026-mockup.html`
- HTML v2: `/Users/peterpitcher/Cursor/Barons.com Content/landing-pages/st-patricks-day-2026/st-patricks-day-2026-v2.html`
- Images source: `/Users/peterpitcher/Cursor/Barons.com Content/landing-pages/st-patricks-day-2026/`
  - `hero-guinness-pour.jpeg`
  - `guinness-pint.jpeg`
  - `jameson-on-the-rocks.jpeg`
  - `baby-guinness-trio.jpeg`
  - `Barons Logo.png`

---

### Task 1: Scaffold Next.js App

**Working directory:** `/Users/peterpitcher/Cursor/2026-03-09 St Patricks Day/`

**Step 1: Initialise Next.js project**

Run from the parent directory (`/Users/peterpitcher/Cursor/`):

```bash
cd "/Users/peterpitcher/Cursor"
npx create-next-app@latest "2026-03-09 St Patricks Day" \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --no-turbopack
```

When prompted, accept all defaults. The app router and TypeScript are required.

**Step 2: Remove boilerplate**

```bash
cd "/Users/peterpitcher/Cursor/2026-03-09 St Patricks Day"
```

Replace `app/page.tsx` with a minimal placeholder (will be replaced in Task 5):

```tsx
export default function Home() {
  return <div>Setting up...</div>;
}
```

Delete `app/globals.css` content (keep file, clear it — we'll rewrite it in Task 3).

Remove the boilerplate from `app/layout.tsx` — keep structure but strip default content.

**Step 3: Verify dev server starts**

```bash
npm run dev
```

Expected: server starts on http://localhost:3000 with no errors.

**Step 4: Commit**

```bash
git init
git add -A
git commit -m "chore: scaffold Next.js 15 app for St Patricks Day landing page"
```

---

### Task 2: Copy Image Assets

**Working directory:** `/Users/peterpitcher/Cursor/2026-03-09 St Patricks Day/`

**Step 1: Create public/images directory and copy assets**

```bash
mkdir -p public/images
cp "/Users/peterpitcher/Cursor/Barons.com Content/landing-pages/st-patricks-day-2026/hero-guinness-pour.jpeg" public/images/
cp "/Users/peterpitcher/Cursor/Barons.com Content/landing-pages/st-patricks-day-2026/guinness-pint.jpeg" public/images/
cp "/Users/peterpitcher/Cursor/Barons.com Content/landing-pages/st-patricks-day-2026/jameson-on-the-rocks.jpeg" public/images/
cp "/Users/peterpitcher/Cursor/Barons.com Content/landing-pages/st-patricks-day-2026/baby-guinness-trio.jpeg" public/images/
cp "/Users/peterpitcher/Cursor/Barons.com Content/landing-pages/st-patricks-day-2026/Barons Logo.png" "public/images/barons-logo.png"
```

Note: rename `Barons Logo.png` to `barons-logo.png` (lowercase, no space) for URL-safe usage.

**Step 2: Verify files exist**

```bash
ls -la public/images/
```

Expected: 5 files listed.

**Step 3: Commit**

```bash
git add public/images/
git commit -m "chore: add image assets to public/images"
```

---

### Task 3: Global CSS and Font Setup

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Modify: `next.config.ts` (add image domain config if needed)

**Step 1: Update `app/globals.css`**

Replace the entire file with:

```css
@import "tailwindcss";

/* V1 design tokens — light Irish green theme */
:root {
  --irish-dark: #14432a;
  --irish-mid: #1e6640;
  --irish-light: #267a4d;
  --irish-gold: #d4a826;
  --irish-bg: #e8f4ed;
  --irish-text: #0d2b1a;
  --irish-cream: #fdf8f0;
}

/* V2 design tokens — dark premium theme */
.theme-v2 {
  --bg: #0c1d11;
  --cream: #f0e6c6;
  --gold: #c9a020;
  --gold-light: #e8c84a;
  --green-mid: #1a3d22;
  --green-border: #2a5c35;
  --text-muted: #a89b7a;
}

/* Grain overlay for V2 */
.grain-overlay::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1000;
  opacity: 0.04;
}

/* Fade-up animation for V2 */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-up {
  animation: fadeUp 0.6s ease forwards;
}

/* Shimmer animation for V2 gold borders */
@keyframes shimmer {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

/* General reset helpers */
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
```

**Step 2: Update `app/layout.tsx`**

Replace with:

```tsx
import type { Metadata } from 'next';
import { Playfair_Display, Roboto, Oswald, Lora, Cinzel } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "St Patrick's Day 2026 | Barons Pubs",
  description: "Celebrate St Patrick's Day at Barons Pubs with our Happy Two Hours offer. £1 off Guinness, Jameson doubles for £5, and Buy 2 Baby Guinness get a 3rd free. 5pm–7pm, Tuesday 17 March 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${roboto.variable} ${oswald.variable} ${lora.variable} ${cinzel.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
```

**Step 3: Verify build compiles**

```bash
npm run build
```

Expected: successful build, no type errors.

**Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "chore: set up global CSS design tokens and Google Fonts"
```

---

### Task 4: VariantSwitcher Component

**Files:**
- Create: `components/VariantSwitcher.tsx`

This component floats at the top of the viewport. It reads the current `?v=` param and provides links to switch between v1 and v2. It is rendered server-side — the links are just `<a>` tags with `?v=1` and `?v=2` hrefs.

**Step 1: Create `components/VariantSwitcher.tsx`**

```tsx
interface VariantSwitcherProps {
  activeVariant: '1' | '2';
}

export default function VariantSwitcher({ activeVariant }: VariantSwitcherProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '10px 20px',
        background: 'rgba(15, 15, 15, 0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '13px',
        color: '#fff',
      }}
    >
      <span style={{ opacity: 0.6, marginRight: '4px' }}>Design variant:</span>

      <a
        href="/?v=1"
        style={{
          padding: '5px 16px',
          borderRadius: '20px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '13px',
          transition: 'all 0.2s',
          background: activeVariant === '1' ? '#22c55e' : 'transparent',
          color: activeVariant === '1' ? '#000' : '#aaa',
          border: activeVariant === '1' ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.2)',
        }}
      >
        Version 1 — Light
      </a>

      <a
        href="/?v=2"
        style={{
          padding: '5px 16px',
          borderRadius: '20px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '13px',
          transition: 'all 0.2s',
          background: activeVariant === '2' ? '#c9a020' : 'transparent',
          color: activeVariant === '2' ? '#000' : '#aaa',
          border: activeVariant === '2' ? '1px solid #c9a020' : '1px solid rgba(255,255,255,0.2)',
        }}
      >
        Version 2 — Dark
      </a>

      <span style={{ opacity: 0.4, marginLeft: '8px', fontSize: '12px' }}>
        St Patrick's Day 2026 · Barons Pubs
      </span>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add components/VariantSwitcher.tsx
git commit -m "feat: add floating VariantSwitcher component"
```

---

### Task 5: Landing Page V1 (Light Green Theme)

**Files:**
- Create: `components/LandingV1.tsx`
- Reference HTML: `/Users/peterpitcher/Cursor/Barons.com Content/landing-pages/st-patricks-day-2026/st-patricks-day-2026-mockup.html`

**Step 1: Read the source HTML file**

Open and read the complete HTML source at the path above. You will convert it section by section into a React component.

**Step 2: Create `components/LandingV1.tsx`**

Convert the full HTML file into a single React component. Key rules:
- Use `next/image` for all `<img>` tags. Image paths become `/images/filename.jpg` (from `public/images/`).
- Convert all `class=` to `className=`.
- Convert `style=""` attributes to `style={{}}` objects with camelCase properties.
- Keep all inline `<style>` blocks by moving them to a `<style jsx global>` block — OR use a `<style>` tag inside a React fragment. The simplest approach: render a `<style>` element as the first child containing all the CSS from the HTML's `<style>` block verbatim.
- The sticky nav should work as-is with CSS `position: sticky`.
- Remove the `<html>`, `<head>`, and `<body>` wrapper tags — just return the page body content.
- Keep the `<meta>` tags out — they are handled by Next.js metadata in layout.tsx.
- For the `next/image` component:
  - Add `width` and `height` props. Use the natural dimensions or reasonable values (e.g., hero: `width={1400} height={800}`, drink images: `width={600} height={400}`).
  - Add `priority` prop to the hero image.
  - Add `alt` text matching what was in the original HTML.
- The component should be typed:

```tsx
import Image from 'next/image';

export default function LandingV1() {
  return (
    <>
      <style>{`
        /* paste all CSS from the HTML <style> block here, verbatim */
      `}</style>
      {/* converted HTML body content here */}
    </>
  );
}
```

**V1 Sections to convert (in order):**
1. Sticky top nav bar (logo, "Book a Table" CTA, sub-bar with date/time text)
2. Hero section (hero image, h1 "St Patrick's Day at Barons Pubs", lead copy, proof points)
3. Offer grid — 3 cards: £1 off Guinness | Jameson double £5 | Buy 2 Baby Guinness get 3rd free
4. Time callout banner "5pm – 7pm only · Happy Two Hours"
5. Gallery strip — 3 drink images (Guinness pint, Jameson on rocks, Baby Guinness trio)
6. Editorial section with pull quote
7. Sites grid — list of all 11 Barons Pubs locations with "Find your local" links
8. FAQ section (accordion items rendered as open — no JS needed for static version)
9. Responsible drinking bar
10. Booking CTA section
11. Footer with links and legal copy

**Step 3: Verify component renders**

Wire it up temporarily in `app/page.tsx`:

```tsx
import LandingV1 from '@/components/LandingV1';
export default function Home() {
  return <LandingV1 />;
}
```

Run `npm run dev` and check http://localhost:3000. Visually compare against the HTML source opened in a browser. Fix any obvious rendering issues.

**Step 4: Fix any `next/image` warnings**

Run `npm run build` and check for image-related warnings. Add `unoptimized` prop if local image domain issues arise, or configure `next.config.ts`:

```ts
const nextConfig = {
  images: {
    unoptimized: true, // for local dev only if needed
  },
};
```

**Step 5: Commit**

```bash
git add components/LandingV1.tsx
git commit -m "feat: add V1 light green landing page component"
```

---

### Task 6: Landing Page V2 (Dark Premium Theme)

**Files:**
- Create: `components/LandingV2.tsx`
- Reference HTML: `/Users/peterpitcher/Cursor/Barons.com Content/landing-pages/st-patricks-day-2026/st-patricks-day-2026-v2.html`

**Step 1: Read the source HTML file**

Open and read the complete HTML source at the path above. Follow the same conversion rules as Task 5.

**Step 2: Create `components/LandingV2.tsx`**

Apply the same conversion rules as Task 5. Additional V2-specific notes:
- The grain overlay uses a `::before` pseudo-element — this must stay in the `<style>` block as it can't be replicated with inline styles.
- The shimmer/glow effects on offer cards are CSS hover states — keep these in the `<style>` block.
- The `☘` shamrock divider is a plain text character — render as-is in JSX.
- Animated fade-up uses `IntersectionObserver` in the original HTML's `<script>` — for simplicity, apply the `fade-up` class statically (elements will appear at full opacity without JS animation, which is fine for a static presentation).
- The body has class `grain-overlay` — apply this to the outermost wrapper `<div>` in the component.
- Text stroke effects (`-webkit-text-stroke`) stay in the `<style>` block.

**Step 3: Verify component renders**

Temporarily update `app/page.tsx`:

```tsx
import LandingV2 from '@/components/LandingV2';
export default function Home() {
  return <LandingV2 />;
}
```

Run `npm run dev` and check http://localhost:3000. Visually compare against the HTML source. Fix any obvious differences.

**Step 4: Commit**

```bash
git add components/LandingV2.tsx
git commit -m "feat: add V2 dark premium landing page component"
```

---

### Task 7: Wire Up Main Page with Variant Switching

**Files:**
- Modify: `app/page.tsx`

**Step 1: Update `app/page.tsx`**

```tsx
import { Suspense } from 'react';
import { ReadonlyURLSearchParams } from 'next/navigation';
import VariantSwitcher from '@/components/VariantSwitcher';
import LandingV1 from '@/components/LandingV1';
import LandingV2 from '@/components/LandingV2';

interface PageProps {
  searchParams: Promise<{ v?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const variant = params.v === '2' ? '2' : '1';

  return (
    <>
      <VariantSwitcher activeVariant={variant} />
      {/* Offset page content below the fixed switcher bar */}
      <div style={{ paddingTop: '48px' }}>
        {variant === '2' ? <LandingV2 /> : <LandingV1 />}
      </div>
    </>
  );
}
```

**Step 2: Verify both variants load correctly**

```bash
npm run dev
```

- Visit http://localhost:3000 — should show V1 (light green theme) with switcher bar at top
- Visit http://localhost:3000?v=2 — should show V2 (dark premium theme)
- Click "Version 2 — Dark" button — should navigate to ?v=2
- Click "Version 1 — Light" button — should navigate back to ?v=1

**Step 3: Run the full verification pipeline**

```bash
npm run lint
npx tsc --noEmit
npm run build
```

All three must pass with zero errors. Fix any TypeScript errors or lint warnings before proceeding.

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: wire up main page with URL-based variant switching"
```

---

### Task 8: Final Check and Tidy

**Step 1: Check for console errors**

Run `npm run dev`, open http://localhost:3000 in Chrome, and check DevTools console. Fix any:
- `next/image` warnings (missing width/height, unoptimised)
- Hydration errors
- Missing alt text warnings

**Step 2: Check V2 body background**

The V2 design has `background: #0c1d11` on the `<body>`. Since we wrap content in a `<div>`, the body background won't automatically apply. Ensure the outermost `<div>` in `LandingV2` has `style={{ background: '#0c1d11' }}` or the equivalent class.

**Step 3: Check sticky nav bar**

The V1 nav is `position: sticky; top: 0`. With the switcher bar adding `48px` of padding to the top of the page, the sticky nav should stick just below the switcher. Verify this looks correct at http://localhost:3000.

If the nav overlaps the switcher, change the sticky nav's `top` value to `48px` in the V1 CSS.

**Step 4: Final commit if any fixes made**

```bash
git add -A
git commit -m "fix: resolve visual issues after wiring up variant switcher"
```

---

## Success Criteria

- `npm run build` completes with zero errors
- `npm run lint` passes with zero warnings
- Both variants render at http://localhost:3000?v=1 and http://localhost:3000?v=2
- Switcher bar is visible on both variants and correctly highlights the active version
- All images load (hero, drink photos, logo)
- Page layout matches the source HTML mockups visually
- Sticky nav works on both variants (scrolls with page, sticks at top)
