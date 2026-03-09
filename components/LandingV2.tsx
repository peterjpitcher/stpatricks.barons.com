import Image from 'next/image';

export default function LandingV2() {
  return (
    <>
      <style>{`

/* ─── Reset ─── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-padding-top: 120px; }
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; height: auto; }

/* ─── Palette & tokens ─── */
:root {
  --bg:            #0c1d11;
  --bg-raised:     #132318;
  --bg-card:       #172d1e;
  --cream:         #f0e6c6;
  --cream-dim:     rgba(240,230,198,0.68);
  --cream-faint:   rgba(240,230,198,0.32);
  --gold:          #c9a020;
  --gold-bright:   #e0b830;
  --gold-dim:      rgba(201,160,32,0.28);
  --border:        rgba(201,160,32,0.22);
  --border-strong: rgba(201,160,32,0.55);
  --green-mid:     #2a6040;

  --font-display: 'Oswald', sans-serif;
  --font-body:    'Lora', serif;
  --font-accent:  'Cinzel', serif;

  --max-w: 71.25rem;
  --gutter: 2rem;
  --r: 3px;
}
@media (max-width: 980px) { :root { --gutter: 1.25rem; } }

/* ─── Base ─── */
.v2-root {
  background-color: var(--bg);
  background-image:
    url("data:image/svg+xml,%3Csvg width='80' height='90' viewBox='0 0 80 90' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230f2316'%3E%3Ccircle cx='40' cy='22' r='11'/%3E%3Ccircle cx='29' cy='37' r='11'/%3E%3Ccircle cx='51' cy='37' r='11'/%3E%3Crect x='38' y='46' width='4' height='14' rx='2'/%3E%3C/g%3E%3C/svg%3E"),
    url("data:image/svg+xml,%3Csvg width='80' height='90' viewBox='0 0 80 90' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230f2316'%3E%3Ccircle cx='40' cy='22' r='11'/%3E%3Ccircle cx='29' cy='37' r='11'/%3E%3Ccircle cx='51' cy='37' r='11'/%3E%3Crect x='38' y='46' width='4' height='14' rx='2'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 80px 90px;
  background-position: 0 0, 40px 45px;
  color: var(--cream);
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 1.65;
}

/* Grain overlay */
.v2-root::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.045;
  pointer-events: none;
  z-index: 9999;
}

/* ─── Layout ─── */
.container {
  width: min(var(--max-w), calc(100% - var(--gutter) * 2));
  margin: 0 auto;
}

/* ─── NAV ─── */
#top-bar {
  position: sticky;
  top: 0;
  z-index: 2998;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 2px 30px rgba(0,0,0,0.6);
}
#top-bar header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 72px;
  padding-block: 0.5rem;
}
.logo { display: flex; align-items: center; text-decoration: none; }
.logo img { height: 40px; width: auto; display: block; }
.logo-description {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 12px;
  color: var(--cream-dim);
  line-height: 1;
  letter-spacing: 0.04em;
}
.logo-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--cream);
  line-height: 1;
}
.parent-menu {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 2rem;
  margin-left: auto;
}
.parent-menu > li > a {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cream-dim);
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: color 160ms, border-color 160ms;
}
.parent-menu > li > a:hover { color: var(--cream); border-color: var(--gold); }
.btn-see-offers > a {
  display: inline-flex !important;
  padding: 0.5rem 1.2rem !important;
  background: var(--gold) !important;
  color: var(--bg) !important;
  font-family: var(--font-display) !important;
  font-weight: 700 !important;
  font-size: 12px !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  border-radius: var(--r) !important;
  transition: background 150ms !important;
  border-bottom: none !important;
}
.btn-see-offers > a:hover { background: var(--gold-bright) !important; }

/* ─── Ticker ─── */
.ticker-bar {
  background: var(--bg-raised);
  border-top: 1px solid var(--border);
  padding: 0.45rem 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  gap: 1rem;
  padding-inline: var(--gutter);
}
.ticker-track { overflow: hidden; flex: 1; }
.ticker-content {
  display: flex;
  width: max-content;
  animation: ticker 24s linear infinite;
}
.ticker-content span {
  display: inline-block;
  white-space: nowrap;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  padding-right: 3rem;
}
@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.ticker-cta {
  flex-shrink: 0;
  display: inline-flex;
  padding: 0.3rem 0.85rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--r);
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  transition: background 150ms, color 150ms;
}
.ticker-cta:hover { background: var(--gold); color: var(--bg); }

/* ─── Sticky sub-bar ─── */
.sticky-bar {
  position: sticky;
  top: 72px; /* 72px top-bar nav */
  z-index: 2997;
  background: var(--bg-raised);
  border-bottom: 1px solid var(--border);
}
.sticky-bar-inner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-block: 0.6rem;
}
.sticky-label { margin-right: auto; }
.sticky-label strong {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cream);
}
.sticky-label span {
  font-size: 12px;
  font-family: var(--font-body);
  color: var(--cream-dim);
}
.sticky-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.9rem;
  border-radius: var(--r);
  border: 1px solid var(--border-strong);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cream-dim);
  white-space: nowrap;
  transition: color 150ms, background 150ms;
}
.sticky-btn:hover { color: var(--cream); background: rgba(255,255,255,0.06); }
.sticky-btn.primary { background: var(--gold); border-color: var(--gold); color: var(--bg); }
.sticky-btn.primary:hover { background: var(--gold-bright); }

/* ─── HERO ─── */
.landing { padding: 3.5rem 0 4rem; }

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: start;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border);
}

.hero-image-wrap {
  position: relative;
  aspect-ratio: 4/5;
  overflow: hidden;
  border: 1px solid var(--border-strong);
}
.hero-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 6s ease;
}
.hero-image-wrap:hover img { transform: scale(1.03); }
/* Inner frame */
.hero-image-wrap::before {
  content: '';
  position: absolute;
  inset: 10px;
  border: 1px solid var(--gold-dim);
  z-index: 1;
  pointer-events: none;
}
/* Vignette */
.hero-image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgba(12,29,17,0.65) 100%);
  pointer-events: none;
}
.hero-badge {
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  width: 96px;
  height: 96px;
  background: var(--gold);
  border-radius: 50%;
  display: grid;
  place-items: center;
  text-align: center;
  z-index: 2;
  box-shadow: 0 8px 28px rgba(0,0,0,0.55);
}
.hero-badge span {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--bg);
  line-height: 1.25;
  padding: 0.5rem;
}

.hero-copy {
  padding-top: 0.25rem;
  display: flex;
  flex-direction: column;
}

.hero-kicker {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.hero-kicker::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

.hero-headline {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 0.88;
  text-transform: uppercase;
  margin-bottom: 1.75rem;
}
.hero-headline .ln { display: block; font-size: clamp(64px, 7vw, 96px); color: var(--cream); }
.hero-headline .ln-outline {
  display: block;
  font-size: clamp(64px, 7vw, 96px);
  color: transparent;
  -webkit-text-stroke: 2px var(--cream);
  text-stroke: 2px var(--cream);
}
.hero-headline .ln-gold {
  display: block;
  font-size: clamp(64px, 7vw, 96px);
  color: var(--gold);
  text-shadow: 0 0 40px rgba(201,160,32,0.35), 0 4px 12px rgba(0,0,0,0.4);
}

.hero-lead {
  font-family: var(--font-body);
  font-size: clamp(18px, 1.9vw, 26px);
  line-height: 1.5;
  color: var(--cream-dim);
  max-width: 32ch;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 1.75rem;
  border-radius: var(--r);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 160ms, background 160ms, box-shadow 160ms;
}
.btn:hover { transform: translateY(-2px); }
.btn.primary {
  background: var(--gold);
  color: var(--bg);
  box-shadow: 0 6px 22px rgba(201,160,32,0.38);
}
.btn.primary:hover { background: var(--gold-bright); box-shadow: 0 10px 30px rgba(201,160,32,0.52); }
.btn.outline { border-color: var(--border-strong); color: var(--cream); }
.btn.outline:hover { background: rgba(240,230,198,0.07); }

.hero-facts {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0 1.5rem;
}
.hero-fact {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cream-dim);
  position: relative;
}
.hero-fact + .hero-fact { padding-left: 1.5rem; }
.hero-fact + .hero-fact::before {
  content: '·';
  position: absolute;
  left: 0.55rem;
  color: var(--gold);
}

/* ─── Divider ─── */
.shamrock-divider {
  border: 0;
  border-top: 1px solid var(--border);
  position: relative;
  margin: 2.5rem 0;
}
.shamrock-divider::before {
  content: '☘';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--bg);
  padding: 0 1rem;
  color: var(--gold);
  font-size: 16px;
  line-height: 1;
}

/* ─── OFFER CARDS ─── */
.offers-section { padding: 2.5rem 0; }
.section-kicker {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}
.section-kicker::before, .section-kicker::after {
  content: '';
  height: 1px;
  width: 28px;
  background: var(--border-strong);
}
.section-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(38px, 4vw, 58px);
  text-transform: uppercase;
  color: var(--cream);
  line-height: 0.92;
  letter-spacing: 0.02em;
  text-align: center;
}
.section-sub {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 15px;
  color: var(--cream-dim);
  text-align: center;
  margin-top: 0.75rem;
}

.offer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 2rem;
}

.offer-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 2rem 1.75rem 1.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: border-color 220ms, transform 220ms, box-shadow 220ms;
  overflow: hidden;
}
.offer-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
}
/* Gold corner marks */
.offer-card::before, .offer-card::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  border-style: solid;
  border-color: var(--gold);
}
.offer-card::before { top: 9px; left: 9px; border-width: 1px 0 0 1px; }
.offer-card::after  { bottom: 9px; right: 9px; border-width: 0 1px 1px 0; }

/* Subtle background shimmer on hover */
.offer-card-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--gold-dim) 0%, transparent 55%);
  opacity: 0;
  transition: opacity 300ms;
  pointer-events: none;
}
.offer-card:hover .offer-card-glow { opacity: 1; }

.offer-label {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
}
.offer-drink {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  color: var(--cream);
  line-height: 1;
  letter-spacing: 0.04em;
}
.offer-price {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 42px;
  color: var(--gold);
  line-height: 1;
  letter-spacing: -0.01em;
}
.offer-desc {
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.55;
  color: var(--cream-dim);
  margin-top: 0.25rem;
}

/* ─── Time banner ─── */
.time-banner {
  margin: 1.75rem 0;
  padding: 1.5rem 2rem;
  border: 1px solid var(--border-strong);
  background: var(--bg-raised);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
}
.time-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, var(--gold-dim) 0%, transparent 50%);
  pointer-events: none;
}
.time-label {
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.3rem;
}
.time-main {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(20px, 2.5vw, 30px);
  text-transform: uppercase;
  color: var(--cream);
  letter-spacing: 0.04em;
}
.time-link {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  border-bottom: 1px solid var(--border-strong);
  padding-bottom: 1px;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 150ms;
}
.time-link:hover { color: var(--gold-bright); }

/* ─── Gallery ─── */
.drink-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}
.drink-item {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border: 1px solid var(--border);
}
.drink-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms ease;
}
.drink-item:hover img { transform: scale(1.06); }

/* ─── Editorial ─── */
.editorial {
  padding: 2.5rem 0;
  border-top: 1px solid var(--border);
}
.editorial h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(30px, 3vw, 44px);
  text-transform: uppercase;
  color: var(--cream);
  line-height: 0.95;
  margin-bottom: 1.25rem;
  letter-spacing: 0.02em;
}
.editorial p {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.75;
  color: var(--cream-dim);
  max-width: 72ch;
}
.editorial p + p { margin-top: 1rem; }

.pull-quote {
  margin: 2rem 0;
  padding: 1.5rem 2rem;
  border-left: 3px solid var(--gold);
  background: var(--bg-raised);
  font-family: var(--font-body);
  font-style: italic;
  font-size: clamp(19px, 2vw, 26px);
  color: var(--cream);
  line-height: 1.45;
}

.callout-list {
  list-style: none;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.callout-list li {
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--cream-dim);
  line-height: 1.5;
  padding-left: 1.5rem;
  position: relative;
}
.callout-list li::before {
  content: '☘';
  position: absolute;
  left: 0;
  color: var(--gold);
  font-size: 12px;
  top: 0.25em;
}

/* ─── Drinks detail ─── */
.drinks-list { margin-top: 1.5rem; }
.drinks-list article {
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border);
}
.drink-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}
.drinks-list h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--cream);
}
.drink-price {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  color: var(--gold);
  white-space: nowrap;
  flex-shrink: 0;
}
.drink-desc {
  width: 100%;
  margin-top: 0.4rem;
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--cream-dim);
  line-height: 1.55;
}

/* ─── Sites grid ─── */
.sites-grid {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid var(--border);
}
.site-card {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border);
  border-right: 1px solid var(--border);
  transition: background 200ms;
}
.site-card:nth-child(even) { border-right: 0; }
.site-card:hover { background: var(--bg-raised); }
.site-location {
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.2rem;
}
.site-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--cream);
  line-height: 1.2;
}
.site-desc {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--cream-dim);
  margin-top: 0.3rem;
  line-height: 1.45;
}

/* ─── FAQ ─── */
.faq-section {
  padding: 2.5rem 0;
  border-top: 1px solid var(--border);
}
.faq-section h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(30px, 3vw, 44px);
  text-transform: uppercase;
  color: var(--cream);
  margin-bottom: 1.5rem;
}
.faq-item {
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
}
.faq-item h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--cream);
  margin-bottom: 0.5rem;
}
.faq-item p {
  font-size: 16px;
  color: var(--cream-dim);
  line-height: 1.65;
}

/* ─── Responsible bar ─── */
.responsible-bar {
  margin: 2rem 0;
  padding: 0.9rem 1.5rem;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.responsible-badge {
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  white-space: nowrap;
}
.responsible-text {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--cream-faint);
  line-height: 1.5;
}
.responsible-text a { color: var(--cream-dim); text-decoration: underline; text-underline-offset: 2px; }

/* ─── Booking CTA ─── */
.booking-cta {
  margin: 2.5rem 0;
  padding: 4rem 3rem;
  background: var(--bg-raised);
  border: 1px solid var(--border-strong);
  position: relative;
  overflow: hidden;
  text-align: center;
}
/* Giant watermark shamrock */
.booking-cta::before {
  content: '☘';
  position: absolute;
  font-size: 260px;
  line-height: 1;
  opacity: 0.045;
  color: var(--gold);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
/* Inner frame */
.booking-cta::after {
  content: '';
  position: absolute;
  inset: 14px;
  border: 1px solid var(--gold-dim);
  pointer-events: none;
}
.booking-cta h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(38px, 4.5vw, 64px);
  text-transform: uppercase;
  color: var(--cream);
  line-height: 0.9;
  margin-bottom: 1.25rem;
  position: relative;
}
.booking-cta p {
  font-family: var(--font-body);
  font-size: 17px;
  color: var(--cream-dim);
  max-width: 48ch;
  margin: 0 auto 2rem;
  position: relative;
}
.booking-cta-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
}

/* ─── Footer ─── */
#footer {
  background: var(--bg-raised);
  border-top: 1px solid var(--border);
}
.footer-inner {
  padding: 3rem 0;
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  align-items: flex-start;
}
.footer-brand h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--cream);
  margin-bottom: 0.75rem;
}
.footer-brand p {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--cream-dim);
  line-height: 1.65;
}
.footer-brand a { color: var(--gold); }
.footer-nav ul { list-style: none; columns: 2; gap: 2rem; column-rule: 1px solid var(--border); }
.footer-nav li a {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cream-dim);
  display: inline-block;
  padding: 0.3rem 0;
  transition: color 150ms;
}
.footer-nav li a:hover { color: var(--gold); }
.footer-legal {
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
  text-align: center;
}
.footer-legal p {
  font-family: var(--font-body);
  font-size: 11px;
  color: var(--cream-faint);
  line-height: 1.65;
}
.footer-legal p + p { margin-top: 0.35rem; }

/* ─── Animations ─── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-kicker   { animation: fadeUp 0.5s ease both 0.10s; }
.hero-headline { animation: fadeUp 0.6s ease both 0.20s; }
.hero-lead     { animation: fadeUp 0.6s ease both 0.35s; }
.hero-actions  { animation: fadeUp 0.6s ease both 0.48s; }
.hero-facts    { animation: fadeUp 0.6s ease both 0.58s; }
.hero-image-wrap { animation: fadeUp 0.7s ease both 0.12s; }
.offer-card:nth-child(1) { animation: fadeUp 0.5s ease both 0.05s; }
.offer-card:nth-child(2) { animation: fadeUp 0.5s ease both 0.15s; }
.offer-card:nth-child(3) { animation: fadeUp 0.5s ease both 0.25s; }

/* ─── Responsive ─── */
@media (max-width: 980px) {
  .hero { grid-template-columns: 1fr; gap: 2rem; }
  .hero-image-wrap { aspect-ratio: 4/5; }
  .hero-badge { bottom: -0.75rem; right: 0.75rem; }
  .offer-grid { grid-template-columns: 1fr; }
  .drink-gallery { grid-template-columns: 1fr; }
  .sites-grid { grid-template-columns: 1fr; }
  .sites-grid .site-card { border-right: 0; }
  .footer-inner { flex-direction: column; gap: 2rem; }
  .footer-nav ul { columns: 1; }
}
@media (max-width: 640px) {
  #top-bar header { min-height: 56px; }
  .sticky-bar { top: 56px; }
  .sticky-bar-inner { gap: 0.5rem; padding-block: 0.45rem; }
  .sticky-label span { display: none; }
  .parent-menu > li:not(.btn-see-offers) { display: none; }
  .landing { padding: 2rem 0 3rem; }
  .booking-cta { padding: 2.5rem 1.5rem; }
  .booking-cta::before { font-size: 160px; }
  .hero-headline .ln,
  .hero-headline .ln-gold { font-size: clamp(52px, 14vw, 72px); }
  .booking-cta-actions { flex-direction: column; }
  .booking-cta-actions .btn { width: 100%; justify-content: center; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-kicker, .hero-headline, .hero-lead, .hero-actions, .hero-facts,
  .hero-image-wrap, .offer-card { animation: none; }
  .ticker-content { animation: none; }
  .hero-image-wrap img, .drink-item img { transition: none; }
}

      `}</style>

      <div className="v2-root" style={{ background: '#0c1d11', minHeight: '100vh' }}>

        {/* NAV */}
        <div id="top-bar">
          <header className="container">
            <a href="#" className="logo">
              <Image src="/images/barons-logo.png" alt="Barons Pubs" width={200} height={60} style={{ height: '40px', width: 'auto' }} />
            </a>
            <nav>
              <ul className="parent-menu">
                <li><a href="#">Home</a></li>
                <li><a href="https://www.baronspubs.com/pubs/" target="_blank" rel="noopener noreferrer">Our Pubs &amp; Caf&eacute;</a></li>
                <li><a href="https://shop.baronspubs.com/" target="_blank" rel="noopener noreferrer">Shop Online</a></li>
                <li><a href="https://www.baronspubs.com/contact/" target="_blank" rel="noopener noreferrer">Contact</a></li>
                <li><a href="https://jobs.baronspubs.com/" target="_blank" rel="noopener noreferrer">Join Our Team</a></li>
                <li className="btn-see-offers"><a href="#offers">See the offers</a></li>
              </ul>
            </nav>
          </header>
        </div>

        {/* STICKY SUB-BAR */}
        <div className="sticky-bar">
          <div className="sticky-bar-inner container">
            <div className="sticky-label">
              <strong>St Patrick&apos;s Day</strong>
              <span>Happy Two Hours &mdash; 5pm to 7pm, 17 March only</span>
            </div>
            <a href="https://www.baronspubs.com/pubs/" target="_blank" rel="noopener noreferrer" className="sticky-btn">Find your pub</a>
            <a href="#offers" className="sticky-btn primary">See the offers</a>
          </div>
        </div>

        {/* CONTENT */}
        <div id="content-wrapper">
          <div className="container">
            <main className="landing" id="main">

              {/* HERO */}
              <section className="hero">

                <figure className="hero-image-wrap">
                  <Image
                    src="/images/hero-guinness-pour.jpeg"
                    alt="Bartender pouring a pint of Guinness at a Barons pub on St Patrick's Day"
                    width={1400}
                    height={800}
                    priority
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="hero-badge"><span>No booking needed</span></div>
                </figure>

                <div className="hero-copy">
                  <p className="hero-kicker">St Patrick&apos;s Day &bull; Tuesday 17 March 2026 &bull; All Barons Pubs</p>
                  <h1 className="hero-headline">
                    <span className="ln-outline">Happy</span>
                    <span className="ln">Two</span>
                    <span className="ln-gold">Hours.</span>
                  </h1>
                  <p className="hero-lead">Two full hours of brilliant Irish drinks — poured cold and ready from 5pm. Guinness cheaper. Jameson sorted. Baby Guinness in threes. Every Barons pub.</p>
                  <div className="hero-actions">
                    <a href="#offers" className="btn primary">See the offers</a>
                    <a href="https://www.baronspubs.com/pubs/" target="_blank" rel="noopener noreferrer" className="btn outline">Find your pub</a>
                  </div>
                  <ul className="hero-facts" aria-label="Key details">
                    <li className="hero-fact">Tuesday 17 March 2026</li>
                    <li className="hero-fact">5:00pm to 7:00pm only</li>
                    <li className="hero-fact">All Barons sites</li>
                    <li className="hero-fact">No booking needed</li>
                  </ul>
                </div>

              </section>

              <hr className="shamrock-divider" />

              {/* OFFERS */}
              <section id="offers" className="offers-section" aria-labelledby="offers-heading">
                <p className="section-kicker">Happy Two Hours</p>
                <h2 className="section-title" id="offers-heading">Three drinks.<br />Two hours.</h2>
                <p className="section-sub">5:00pm &ndash; 7:00pm &bull; Tuesday 17 March 2026 &bull; All Barons Pubs</p>

                <div className="offer-grid">
                  <div className="offer-card">
                    <div className="offer-card-glow"></div>
                    <p className="offer-label">☘ The pint</p>
                    <p className="offer-drink">Guinness</p>
                    <p className="offer-price">£1 off</p>
                    <p className="offer-desc">A proper pour at a proper price. £1 off between 5pm and 7pm — no catch, just a very good pint.</p>
                  </div>
                  <div className="offer-card">
                    <div className="offer-card-glow"></div>
                    <p className="offer-label">☘ The whiskey</p>
                    <p className="offer-drink">Jameson</p>
                    <p className="offer-price">£5 double</p>
                    <p className="offer-desc">Ireland&apos;s most famous whiskey. Neat, over ice, or alongside a pint. A Jameson double for £5, two hours only.</p>
                  </div>
                  <div className="offer-card">
                    <div className="offer-card-glow"></div>
                    <p className="offer-label">☘ The shot</p>
                    <p className="offer-drink">Baby Guinness</p>
                    <p className="offer-price">2 + 1 free</p>
                    <p className="offer-desc">Coffee liqueur topped with Irish cream. Buy two, get a third on us — because three is better than two.</p>
                  </div>
                </div>

                <div className="time-banner" aria-label="Offer timing">
                  <div>
                    <p className="time-label">Available at all Barons Pubs</p>
                    <p className="time-main">Tuesday 17 March 2026 &mdash; 5:00pm to 7:00pm only</p>
                  </div>
                  <a href="https://www.baronspubs.com/pubs/" target="_blank" rel="noopener noreferrer" className="time-link">Find your pub &rsaquo;</a>
                </div>
              </section>

              {/* DRINK PHOTOS */}
              <div className="drink-gallery" aria-hidden="true">
                <figure className="drink-item">
                  <Image
                    src="/images/guinness-pint.jpeg"
                    alt="A perfect pint of Guinness held in front of the bar taps"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>
                <figure className="drink-item">
                  <Image
                    src="/images/jameson-on-the-rocks.jpeg"
                    alt="Jameson whiskey on the rocks on a pub bar top"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>
                <figure className="drink-item">
                  <Image
                    src="/images/baby-guinness-trio.jpeg"
                    alt="Three Baby Guinness shots lined up on the bar"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>
              </div>

              <hr className="shamrock-divider" />

              {/* EDITORIAL */}
              <section className="editorial" aria-labelledby="editorial-heading">
                <h2 id="editorial-heading">Go on then — make your Tuesday feel less Tuesday</h2>
                <p>St Patrick&apos;s Day lands on a Tuesday this year. We thought about that, and decided the right response was a two-hour window of good fortune and great drinks.</p>
                <p>Happy Two Hours isn&apos;t quite happy hour — it&apos;s twice as long and considerably more Irish. From 5:00pm, the pint of Guinness is £1 cheaper, a Jameson double is £5, and if you&apos;re having Baby Guinness you might as well have three.</p>
                <div className="pull-quote">&ldquo;A bit of luck, a bit of cheer, and a very good pint.&rdquo;</div>
                <p>Turn up, get settled, and let a Tuesday surprise you. The atmosphere tends to build quickly from 5pm — and guests who arrive early tend to stay for the evening. No shamrocks required. No costume necessary. Just a seat, a pint, and the kind of company that makes a Tuesday worth going out for.</p>
                <p>Our full bar runs all evening alongside the Happy Two Hours offers — including our <strong style={{ color: 'var(--cream)' }}>Virtuous</strong> low and no alcohol range, which is worth ordering whether you&apos;re driving or simply not drinking tonight.</p>
              </section>

              {/* DRINKS DETAIL */}
              <section className="editorial" aria-labelledby="drinks-heading">
                <h2 id="drinks-heading">Three drinks worth knowing about</h2>
                <p style={{ fontStyle: 'italic' }}>5:00pm &ndash; 7:00pm &bull; Tuesday 17 March 2026 only &bull; All Barons Pubs</p>
                <div className="drinks-list">
                  <article>
                    <div className="drink-row">
                      <h3>Guinness</h3>
                      <span className="drink-price">£1 off a pint</span>
                    </div>
                    <p className="drink-desc">Slow-poured, dark and creamy, with that unmistakable finish. Between 5pm and 7pm on St Patrick&apos;s Day, we&apos;re taking £1 off the pint price. Order one. Maybe order another.</p>
                  </article>
                  <article>
                    <div className="drink-row">
                      <h3>Jameson</h3>
                      <span className="drink-price">Double for £5</span>
                    </div>
                    <p className="drink-desc">Probably Ireland&apos;s most famous whiskey — smooth, approachable, and genuinely good served simply. The double is £5 during Happy Two Hours. Neat or over ice, your call.</p>
                  </article>
                  <article>
                    <div className="drink-row">
                      <h3>Baby Guinness</h3>
                      <span className="drink-price">Buy 2, get 1 free</span>
                    </div>
                    <p className="drink-desc">Coffee liqueur topped with Irish cream, served in a shot glass. Looks exactly like a miniature pint. Buy two and we&apos;ll add a third on us — because that&apos;s just good arithmetic.</p>
                  </article>
                </div>
              </section>

              {/* AFTER 7PM */}
              <section className="editorial" aria-labelledby="evening-heading">
                <h2 id="evening-heading">What happens after 7pm?</h2>
                <p>Happy Two Hours is the opener, not the whole evening. The bar stays open, the kitchen keeps going, and there&apos;s no reason to leave.</p>
                <p>Our standard 5pm–7pm drinks deal — <strong style={{ color: 'var(--cream)' }}>2 House Cocktails for £14.95</strong> — runs every Monday to Friday. On St Patrick&apos;s Day that window belongs to Happy Two Hours. Once 7pm passes, the rest of the evening is yours: full bar, full menu, and the kind of atmosphere that tends to build when everyone arrived a little earlier than usual.</p>
                <ul className="callout-list">
                  <li>Full food menus available all evening at all sites</li>
                  <li><strong style={{ color: 'var(--cream)' }}>Virtuous</strong> low and no alcohol options available throughout — wines, beers, and cocktails</li>
                  <li>No dress code</li>
                  <li>Dogs welcome in designated areas</li>
                </ul>
              </section>

              {/* FIND YOUR PUB */}
              <section className="editorial" id="find-your-pub" aria-labelledby="sites-heading">
                <h2 id="sites-heading">Happy Two Hours — at all Barons Pubs</h2>
                <p>We&apos;re running Happy Two Hours across all ten of our sites on Tuesday 17 March. Find yours below.</p>
                <div className="sites-grid">
                  <div className="site-card">
                    <p className="site-location">Bletchingley, Redhill</p>
                    <p className="site-name">The Bletchingley Arms</p>
                    <p className="site-desc">Digital darts, a garden bar, and plenty of space to settle in for the evening.</p>
                  </div>
                  <div className="site-card">
                    <p className="site-location">Horsell, Woking</p>
                    <p className="site-name">The Cricketers</p>
                    <p className="site-desc">A 16th-century local with heated garden pods and bookings taken just for drinks.</p>
                  </div>
                  <div className="site-card">
                    <p className="site-location">Camberley, Surrey</p>
                    <p className="site-name">The Crown &amp; Cushion</p>
                    <p className="site-desc">A family-friendly pub restaurant in the heart of Camberley.</p>
                  </div>
                  <div className="site-card">
                    <p className="site-location">Copthorne, Surrey</p>
                    <p className="site-name">The Curious Pig in The Parlour</p>
                    <p className="site-desc">Boutique bedrooms, a new garden, and a pub that&apos;s easy to stay in well past 7pm.</p>
                  </div>
                  <div className="site-card">
                    <p className="site-location">Warlingham, Surrey</p>
                    <p className="site-name">The Horseshoe</p>
                    <p className="site-desc">A drink-led local with serious food credentials and a comfortable function space.</p>
                  </div>
                  <div className="site-card">
                    <p className="site-location">West End, Woking</p>
                    <p className="site-name">The Inn at West End</p>
                    <p className="site-desc">Courtyard garden, boutique bedrooms, and a menu that earns its keep.</p>
                  </div>
                  <div className="site-card">
                    <p className="site-location">Ripley, Surrey</p>
                    <p className="site-name">The Jovial Sailor</p>
                    <p className="site-desc">Cosy fireplaces and covered outdoor seating in the heart of Ripley village.</p>
                  </div>
                  <div className="site-card">
                    <p className="site-location">Egham, Surrey</p>
                    <p className="site-name">The Rose &amp; Crown</p>
                    <p className="site-desc">Pub Garden of the Year 2025 — a classic local with an award-winning outdoor space.</p>
                  </div>
                  <div className="site-card">
                    <p className="site-location">Shinfield, Berkshire</p>
                    <p className="site-name">The Shinfield Arms</p>
                    <p className="site-desc">A community local with an all-weather covered garden that works year-round.</p>
                  </div>
                  <div className="site-card" style={{ borderBottom: 0 }}>
                    <p className="site-location">Leatherhead, Surrey</p>
                    <p className="site-name">The Star</p>
                    <p className="site-desc">Easy to reach, great for families, and right on the doorstep of Ashtead Common.</p>
                  </div>
                  <div className="site-card" style={{ borderBottom: 0, borderRight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-raised)' }}>
                    <a href="#offers" className="btn primary" style={{ fontSize: '13px', padding: '0.7rem 1.4rem' }}>See the offers &rsaquo;</a>
                  </div>
                </div>
              </section>

              {/* ABOUT */}
              <section className="editorial" aria-labelledby="about-heading">
                <h2 id="about-heading">About Barons Pubs</h2>
                <p>Barons Pubs is a family including ten pubs and venues across Surrey and Berkshire, each run by a team that knows its local community well.</p>
                <p>Every site is independently run within the group, which means each pub has its own character — but the things that matter are consistent everywhere: great food, genuine service, and a welcome that works for real life. St Patrick&apos;s Day is just one example of how we like to mark the calendar — turning a Tuesday into a proper occasion without making a big fuss of it.</p>
              </section>

              {/* FAQ */}
              <section className="faq-section" aria-labelledby="faq-heading">
                <h2 id="faq-heading">St Patrick&apos;s Day FAQs</h2>
                <div className="faq-item">
                  <h3>Do I need to book for Happy Two Hours?</h3>
                  <p>No booking required — just turn up between 5pm and 7pm on Tuesday 17 March. Walk-ins are welcome. If you&apos;d like to guarantee a table for the evening, you&apos;re welcome to book ahead through our usual booking system.</p>
                </div>
                <div className="faq-item">
                  <h3>Are the offers available all day on St Patrick&apos;s Day?</h3>
                  <p>Happy Two Hours runs from <strong style={{ color: 'var(--cream)' }}>5:00pm to 7:00pm only</strong> on Tuesday 17 March 2026. The offers are not available outside that window.</p>
                </div>
                <div className="faq-item">
                  <h3>Which Barons pubs are taking part?</h3>
                  <p>All Barons Pubs sites are participating. Find your nearest one above or visit our find-a-pub page.</p>
                </div>
                <div className="faq-item">
                  <h3>Can I combine the offers?</h3>
                  <p>The three Happy Two Hours offers are each standalone — you can order any or all of them during the 5pm–7pm window. They cannot be combined with other promotions or discounts.</p>
                </div>
                <div className="faq-item">
                  <h3>Do I need to be 18 to take part?</h3>
                  <p>Yes — all Happy Two Hours drinks offers are for guests aged 18 and over. We operate a Challenge 25 policy at all Barons Pubs: if you look under 25, you&apos;ll be asked for valid ID before being served alcohol.</p>
                </div>
              </section>

              {/* RESPONSIBLE */}
              <div className="responsible-bar" role="note">
                <span className="responsible-badge">Drink responsibly</span>
                <p className="responsible-text">Over 18s only. Challenge 25 applies. For help and support visit <a href="https://www.drinkaware.co.uk" target="_blank" rel="noopener">drinkaware.co.uk</a></p>
              </div>

              {/* BOOKING CTA */}
              <div className="booking-cta" role="complementary">
                <h2>Tuesday 17 March.<br />Starts at 5.</h2>
                <p>Happy Two Hours runs 5:00pm to 7:00pm only. Find your nearest Barons pub and we&apos;ll see you there.</p>
                <div className="booking-cta-actions">
                  <a href="https://www.baronspubs.com/pubs/" target="_blank" rel="noopener noreferrer" className="btn primary">Find your nearest pub</a>
                  <a href="#offers" className="btn outline">See the offers</a>
                </div>
              </div>

            </main>
          </div>
        </div>

        {/* FOOTER */}
        <div id="footer">
          <div className="container">
            <div className="footer-inner">
              <address className="footer-brand" style={{ fontStyle: 'normal' }}>
                <h3>Barons Pubs</h3>
                <p>A Barons Pub Company Ltd</p>
                <p>Registered Office: Welden Turnbull, Albany House,<br />Claremont Lane, Esher, Surrey, KT10 9FQ</p>
                <p style={{ marginTop: '0.5rem' }}><a href="https://www.baronspubs.com/pubs/" target="_blank" rel="noopener noreferrer">Find a pub near you</a></p>
              </address>
              <nav className="footer-nav" aria-label="Footer navigation">
                <ul>
                  <li><a href="https://www.baronspubs.com/pubs/" target="_blank" rel="noopener noreferrer">Our Pubs &amp; Caf&eacute;</a></li>
                  <li><a href="https://shop.baronspubs.com/" target="_blank" rel="noopener noreferrer">Shop Online</a></li>
                  <li><a href="https://www.baronspubs.com/contact/" target="_blank" rel="noopener noreferrer">Contact</a></li>
                  <li><a href="#">Barons Pub Company</a></li>
                  <li><a href="#">Privacy Policies</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="https://jobs.baronspubs.com/" target="_blank" rel="noopener noreferrer">Join Our Team</a></li>
                </ul>
              </nav>
            </div>
            <div className="footer-legal">
              <p><strong>Barons Pub Company Ltd</strong></p>
              <p>Offers available at all Barons Pubs on Tuesday 17 March 2026, 5:00pm–7:00pm only. Subject to availability. Cannot be combined with any other promotion. Management reserves the right to withdraw or amend offers. Over 18s only. Challenge 25 applies. A discretionary 10% service charge may be added where table service is provided.</p>
              <p>All Rights Reserved Barons Pub Company Ltd &copy;2026</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
