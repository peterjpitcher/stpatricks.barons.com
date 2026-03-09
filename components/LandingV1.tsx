import Image from 'next/image';

export default function LandingV1() {
  return (
    <>
      <style>{`

/* ─── Design tokens (from baronspubs.com) ─── */
:root {
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-7: 1.75rem;
  --space-8: 2rem;
  --space-9: 2.25rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --layout-max-width: 71.25rem;
  --layout-gutter: 2rem;
  --stack-section: 2.5rem;
  --stack-block: 1.5rem;
  --stack-item: 0.75rem;
  --control-py: 0.75rem;
  --control-px: 1.25rem;

  /* ─── St Patrick's Day palette ─── */
  --irish-dark:    #14432a;   /* deep shamrock green */
  --irish-mid:     #1e6640;   /* rich mid green      */
  --irish-light:   #267a4d;   /* bright mid green    */
  --irish-tint:    #e8f4ed;   /* very light green bg */
  --irish-gold:    #d4a826;   /* warm Irish gold     */
  --irish-gold-lt: #e8c04a;   /* lighter gold hover  */
  --irish-cream:   #f7f4ee;   /* warm off-white      */
}

@media (max-width: 980px) {
  :root { --layout-gutter: 1.25rem; }
}

/* ─── Reset ─── */
*, *::before, *::after { box-sizing: border-box; }
html { scroll-padding-top: 140px; }
body {
  margin: 0;
  color: #1f2d37;
  background-color: #edf5f0;
  background-image:
    url("data:image/svg+xml,%3Csvg width='80' height='90' viewBox='0 0 80 90' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d8ede1'%3E%3Ccircle cx='40' cy='22' r='11'/%3E%3Ccircle cx='29' cy='37' r='11'/%3E%3Ccircle cx='51' cy='37' r='11'/%3E%3Crect x='38' y='46' width='4' height='14' rx='2'/%3E%3C/g%3E%3C/svg%3E"),
    url("data:image/svg+xml,%3Csvg width='80' height='90' viewBox='0 0 80 90' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d8ede1'%3E%3Ccircle cx='40' cy='22' r='11'/%3E%3Ccircle cx='29' cy='37' r='11'/%3E%3Ccircle cx='51' cy='37' r='11'/%3E%3Crect x='38' y='46' width='4' height='14' rx='2'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 80px 90px;
  background-position: 0 0, 40px 45px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  line-height: 1.65;
}
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; height: auto; }
p { margin: 0; }

/* ─── Layout helpers ─── */
.wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
}
.container {
  width: min(var(--layout-max-width), calc(100% - (var(--layout-gutter) * 2)));
  margin: 0 auto;
  padding: 0;
  position: relative;
}

/* ─── Top bar / nav ─── */
#top-bar {
  position: sticky;
  top: 48px;
  left: 0;
  right: 0;
  z-index: 2998;
  box-shadow: 0 2px 12px rgba(0,0,0,0.28);
  background-color: var(--irish-dark);
}
#top-bar header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  min-height: 84px;
  padding-block: var(--space-2);
  padding-inline: var(--layout-gutter);
  width: min(var(--layout-max-width), calc(100% - (var(--layout-gutter) * 2)));
  margin: 0 auto;
}
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.logo img { height: 40px; width: auto; display: block; }
.logo-description {
  margin: 0;
  color: rgba(245,247,249,0.94);
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 14px;
  line-height: 1;
}
.logo-name {
  color: #f2f5f8;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1;
}
.main-nav-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
}
.parent-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--space-5);
}
.parent-menu > li > a {
  color: #f2f5f8;
  padding: var(--space-3) 0;
  border-bottom: 3px solid transparent;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: border-color 160ms ease, color 160ms ease;
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 16px;
  line-height: 1;
  white-space: nowrap;
}
.parent-menu > li > a:hover {
  border-color: rgba(255,255,255,0.75);
}
.btn-book-table > a {
  border: 0 !important;
  border-radius: 50% !important;
  width: 116px !important;
  height: 116px !important;
  padding: var(--space-2) !important;
  margin: calc(0px - var(--space-10)) 0 !important;
  box-shadow: 0 10px 11px rgba(0,0,0,0.28);
  display: grid !important;
  place-items: center;
  text-align: center;
  background: var(--irish-gold) !important;
  color: var(--irish-dark) !important;
  font-family: "Playfair Display", serif !important;
  font-style: italic !important;
  font-size: 24px !important;
  line-height: 1.06 !important;
  white-space: normal !important;
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.btn-book-table > a:hover {
  transform: scale(1.05);
  box-shadow: 0 14px 22px rgba(0,0,0,0.3);
}

/* ─── Alert banner (ticker) ─── */
.launch-alert-banner {
  width: min(var(--layout-max-width), calc(100% - (var(--layout-gutter) * 2)));
  margin: var(--space-2) auto 0;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  border: 1px solid #1a7a46;
  border-radius: 8px;
  background: linear-gradient(90deg, #1e6640 0%, #267a4d 100%);
  padding: var(--space-2) var(--space-3);
  overflow: hidden;
}
.launch-alert-track {
  overflow: hidden;
  flex: 1;
}
.launch-alert-content {
  display: flex;
  width: max-content;
  animation: launchTicker 18s linear infinite;
}
.launch-alert-content span {
  display: inline-block;
  margin: 0;
  white-space: nowrap;
  font-family: "Roboto Mono", monospace;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #d4f0df;
  padding-right: var(--space-8);
}
.launch-alert-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid var(--irish-gold);
  background: var(--irish-gold);
  color: var(--irish-dark);
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  padding: var(--space-2) var(--space-3);
  transition: background-color 150ms ease, transform 150ms ease;
  flex-shrink: 0;
}
.launch-alert-cta:hover { background: var(--irish-gold-lt); transform: translateY(-1px); }
@keyframes launchTicker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ─── Sticky sub-bar ─── */
.sticky-booking-menu {
  position: sticky;
  top: 132px; /* 48px switcher + 84px top-bar nav */
  z-index: 2997;
  background: linear-gradient(90deg, #14432a 0%, #1e6640 100%);
  border-bottom: 1px solid rgba(255,255,255,0.14);
  box-shadow: 0 3px 16px rgba(10,34,20,0.28);
}
.sticky-booking-inner {
  width: min(var(--layout-max-width), calc(100% - (var(--layout-gutter) * 2)));
  margin: 0 auto;
  padding: var(--space-2) 0;
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.sticky-booking-note {
  margin: 0 auto 0 0;
  display: grid;
  gap: 0;
  color: #f4f8fb;
  line-height: 1.08;
}
.sticky-booking-note strong {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 700;
}
.sticky-booking-note span {
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  color: rgba(242,245,248,0.88);
}
.sticky-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2) var(--space-3);
  border-radius: 7px;
  border: 1px solid rgba(255,255,255,0.28);
  color: #f2f5f8;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 150ms ease, transform 150ms ease;
}
.sticky-link:hover { background: rgba(255,255,255,0.14); transform: translateY(-1px); }
.sticky-link.sticky-primary {
  background: var(--irish-gold);
  color: var(--irish-dark);
  border-color: var(--irish-gold);
}
.sticky-link.sticky-primary:hover { background: var(--irish-gold-lt); }

/* ─── Content wrapper ─── */
#content-wrapper {
  background: linear-gradient(180deg, #f0f7f3 0%, #e8f4ed 100%);
  padding-top: var(--space-4);
  padding-bottom: 0;
}

/* ─── Landing body ─── */
.landing {
  padding: var(--space-9) 0 calc(var(--space-9) + var(--space-3));
  color: #1f2d37;
  font-size: 18px;
  line-height: 1.65;
}

/* ─── Hero ─── */
.brunch-hero {
  display: grid;
  grid-template-columns: 1.03fr 0.97fr;
  grid-template-areas:
    "hero-image hero-kicker"
    "hero-image hero-main-copy";
  column-gap: var(--space-9);
  row-gap: var(--space-4);
  align-items: start;
  padding-bottom: var(--stack-block);
  border-bottom: 1px solid #9ecfb0;
}
.hero-kicker {
  grid-area: hero-kicker;
  margin: 0;
  font-family: "Roboto Mono", monospace;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--irish-mid);
}
.hero-main-copy { grid-area: hero-main-copy; }
.landing h1 {
  margin: 0 0 var(--space-4);
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: clamp(40px, 4.2vw, 58px);
  line-height: 0.94;
  color: var(--irish-dark);
}
.hero-lead {
  margin-top: 0;
  max-width: 52ch;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-5);
}
.hero-proof-points {
  margin: var(--space-4) 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--space-6);
  row-gap: var(--space-2);
}
.hero-usp {
  color: var(--irish-mid);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.25;
  position: relative;
}
.hero-usp + .hero-usp::before {
  content: "|";
  position: absolute;
  left: calc(0px - var(--space-3));
  top: 0;
  color: var(--irish-light);
  font-weight: 400;
}

/* ─── Buttons ─── */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: var(--control-py) var(--control-px);
  font-size: 18px;
  line-height: 1.2;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  transition: transform 160ms ease, box-shadow 160ms ease;
  cursor: pointer;
}
.button:hover { transform: translateY(-1px); }
.button.primary {
  background: var(--irish-gold);
  color: var(--irish-dark);
  border-color: var(--irish-gold);
}
.button.primary:hover { background: var(--irish-gold-lt); }
.button.ghost {
  background: #ffffff;
  border-color: #a0c8b2;
  color: var(--irish-dark);
}

/* ─── Hero image placeholder ─── */
.hero-image {
  grid-area: hero-image;
  margin: 0;
  border: 1px solid #9ecfb0;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #c4e0ce;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ─── Offer cards (timing-card pattern) ─── */
.offer-grid {
  margin-top: var(--space-5);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  border: 1px solid #9ecfb0;
  background: #9ecfb0;
}
.offer-card {
  background: var(--irish-tint);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--space-2);
}
.offer-card-label {
  margin: 0;
  font-family: "Roboto Mono", monospace;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--irish-mid);
}
.offer-card h2 {
  margin: 0;
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 28px;
  color: var(--irish-dark);
  line-height: 1.1;
}
.offer-card p {
  margin: 0;
  font-size: 15px;
  line-height: 1.45;
  color: #1f2d37;
}

/* ─── Time callout (replaces gallery for this campaign) ─── */
.time-callout {
  margin-top: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background: linear-gradient(90deg, #14432a 0%, #1e6640 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: var(--space-6);
  flex-wrap: wrap;
}
.time-callout-text {
  font-family: "Roboto Mono", monospace;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(242,245,248,0.75);
}
.time-callout-main {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 24px;
  color: #f2f5f8;
  line-height: 1.1;
}

/* ─── Gallery (3 drink image placeholders) ─── */
.launch-gallery {
  margin-top: var(--space-5);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
}
.gallery-item {
  margin: 0;
  border: 1px solid #9ecfb0;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #c4e0ce;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ─── Section divider pattern ─── */
.seo-editorial,
.menu-section,
.seo-faq,
.booking-section {
  margin-top: var(--stack-section);
  padding-top: var(--space-5);
  border-top: 1px solid #9ecfb0;
}
.editorial-header h2,
.menu-header h2,
.seo-faq h2 {
  margin: 0;
  font-family: "Playfair Display", serif;
  font-style: italic;
  color: var(--irish-dark);
  font-size: clamp(34px, 3.2vw, 46px);
  line-height: 1.15;
}
.editorial-header p {
  margin-top: var(--space-3);
  max-width: none;
}
.editorial-stack {
  margin-top: var(--space-4);
}
.editorial-stack p + p { margin-top: var(--space-3); }

.seo-editorial h3,
.faq-grid h3 {
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: var(--irish-dark);
  font-size: 22px;
}
.seo-editorial p,
.faq-grid p {
  margin-top: var(--space-2);
  max-width: none;
}
.editorial-callouts {
  margin: var(--space-4) 0 0;
  padding-left: var(--space-5);
  list-style: disc;
}
.editorial-callouts li + li { margin-top: var(--space-2); }
.editorial-callouts li { font-size: 1em; line-height: 1.6; }

/* ─── Pull quote ─── */
.pull-quote {
  margin: var(--space-5) 0;
  padding-left: var(--space-5);
  border-left: 3px solid var(--irish-gold);
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: clamp(22px, 2.2vw, 30px);
  color: var(--irish-dark);
  line-height: 1.3;
}

/* ─── FAQ ─── */
.faq-grid { margin-top: var(--space-4); }
.faq-grid article {
  padding: var(--space-3) 0;
  border-bottom: 1px solid #9ecfb0;
}
.faq-grid h3 { font-size: 18px; }

/* ─── Sites section ─── */
.sites-grid {
  margin-top: var(--space-4);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 var(--space-8);
}
.site-card {
  padding: var(--space-3) 0;
  border-bottom: 1px solid #9ecfb0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.site-location {
  font-family: "Roboto Mono", monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--irish-mid);
}
.site-name {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--irish-dark);
  line-height: 1.2;
}
.site-desc {
  font-size: 15px;
  color: #3a5040;
  line-height: 1.45;
  margin: 0;
}
@media (max-width: 640px) {
  .sites-grid { grid-template-columns: 1fr; }
}

/* ─── Booking strip ─── */
.booking-strip {
  margin-top: var(--stack-section);
  padding: var(--space-6) calc(var(--space-6) + var(--space-1));
  background: linear-gradient(140deg, #0f3320 0%, #1e6640 100%);
  color: #f2f5f8;
  border-radius: 12px;
}
.booking-strip h2 {
  margin: 0;
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: clamp(38px, 3.6vw, 52px);
  color: #f2f5f8;
  line-height: 1.1;
}
.booking-strip p {
  margin-top: var(--space-2);
  max-width: 60ch;
  color: rgba(242,245,248,0.9);
  font-size: 18px;
}
.booking-strip-actions {
  margin-top: var(--space-4);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}
.booking-strip .button.primary { background: var(--irish-gold); color: var(--irish-dark); border-color: var(--irish-gold); }
.booking-strip .button.ghost {
  background: rgba(255,255,255,0.18);
  border-color: rgba(255,255,255,0.62);
  color: #f4f8fb;
}
.booking-strip .button.ghost:hover { background: rgba(255,255,255,0.28); }

/* ─── Responsible drinking bar ─── */
.responsible-bar {
  margin-top: var(--stack-section);
  padding: var(--space-3) var(--space-5);
  border: 1px solid #9ecfb0;
  border-radius: 8px;
  background: var(--irish-tint);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}
.responsible-badge {
  font-family: "Roboto Mono", monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--irish-mid);
  white-space: nowrap;
}
.responsible-text {
  font-size: 13px;
  color: #4f5d68;
  line-height: 1.5;
}
.responsible-text a { color: #2e4a5f; text-decoration: underline; }

/* ─── Footer ─── */
#extended-footer-wrapper { background-color: var(--irish-dark); }
#extended-footer-wrapper footer#extended {
  width: min(var(--layout-max-width), calc(100% - (var(--layout-gutter) * 2)));
  margin: 0 auto;
  padding: var(--space-10) 0;
  color: #ffffff;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--space-9);
}
.footer-address {
  color: #ffffff;
  font-size: 14px;
  margin: 0;
  font-style: normal;
}
.footer-address h3 {
  margin: 0;
  color: #ffffff;
  font-size: 14px;
  font-family: "Playfair Display", serif;
  font-style: italic;
}
.footer-address p { margin: var(--space-4) 0 0; }
.footer-address a { color: #ffffff; font-size: 14px; text-decoration: none; }
.footer-address a:hover { color: var(--irish-gold-lt); }
footer#extended nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  column-count: 2;
  column-gap: var(--space-8);
  column-rule: 1px dotted #ffffff;
}
footer#extended nav ul li { margin: 0; break-inside: avoid; }
footer#extended nav ul li a {
  color: #ffffff;
  padding: var(--space-2) 0;
  border-bottom: 3px solid transparent;
  transition: border-color 160ms ease;
  display: inline-block;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 1.25;
}
footer#extended nav ul li a:hover { border-color: #ffffff; }
#registered-office {
  text-align: center;
  font-size: 12px;
  color: #ffffff;
  margin: var(--space-9) 0 0;
}
#registered-office p { margin: var(--space-1) 0 0; }
#registered-office p:first-child { margin-top: 0; }
#copyright {
  text-align: center;
  font-size: 12px;
  color: #ffffff;
  margin: var(--space-8) 0 0;
}

/* ─── Responsive ─── */
@media (max-width: 980px) {
  .brunch-hero {
    grid-template-columns: 1fr;
    grid-template-areas: "hero-kicker" "hero-image" "hero-main-copy";
    row-gap: var(--space-4);
  }
  .offer-grid,
  .launch-gallery,
  .sites-grid { grid-template-columns: 1fr; }
  .footer-inner { flex-direction: column; align-items: center; gap: var(--space-7); }
  footer#extended nav ul { column-count: 1; column-rule: none; }
  footer#extended nav ul li { text-align: center; }
  .footer-address { text-align: center; width: 100%; padding: 0 0 var(--space-6); border-bottom: 1px dotted #ffffff; }
}
@media (max-width: 640px) {
  #top-bar header { min-height: 52px; padding-block: var(--space-1); }
  .btn-book-table { display: none; }
  .parent-menu > li:not(.btn-book-table) { display: none; }
  .landing { padding: var(--space-4) 0 var(--space-6); }
  .brunch-hero { row-gap: var(--space-2); padding-bottom: var(--space-5); }
  .hero-actions { flex-wrap: nowrap; }
  .hero-actions .button { flex: 1 1 0; min-width: 0; font-size: 15px; padding: var(--space-3) var(--space-2); }
  .booking-strip { padding: var(--space-5) var(--space-4); margin-top: var(--space-6); }
  .booking-strip h2 { font-size: clamp(32px, 8vw, 40px); }
  .booking-strip-actions { flex-direction: column; }
  .booking-strip-actions .button { width: 100%; }
  .editorial-header h2, .menu-header h2, .seo-faq h2 { font-size: clamp(30px, 7vw, 38px); }
  .time-callout { flex-direction: column; gap: var(--space-2); }
}

@media (prefers-reduced-motion: reduce) {
  .launch-alert-content { animation: none; }
}

      `}</style>

      {/* NAV */}
      <div id="top-bar">
        <header>
          <a href="#" className="logo">
            <Image src="/images/barons-logo.png" alt="Barons Pubs" width={200} height={60} style={{ height: '40px', width: 'auto' }} />
          </a>
          <div className="main-nav-wrapper">
            <nav id="main-nav">
              <ul className="parent-menu">
                <li><a href="#"><span>Find a pub</span></a></li>
                <li><a href="#"><span>What{`'`}s On</span></a></li>
                <li><a href="#"><span>Food &amp; Drink</span></a></li>
                <li><a href="#"><span>Your Event</span></a></li>
                <li className="btn-book-table"><a href="#offers"><span>See<br />the offers</span></a></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>

      {/* STICKY SUB-BAR */}
      <div className="sticky-booking-menu">
        <div className="sticky-booking-inner">
          <div className="sticky-booking-note">
            <strong>St Patrick{`'`}s Day</strong>
            <span>Happy Two Hours &mdash; 5pm to 7pm, 17 March only</span>
          </div>
          <a href="#find-your-pub" className="sticky-link">Find your pub</a>
          <a href="#offers" className="sticky-link sticky-primary">See the offers</a>
        </div>
      </div>

      {/* CONTENT */}
      <div id="content-wrapper">
        <div className="wrapper">
          <div className="container">
            <main className="landing" id="main">

              {/* HERO */}
              <section className="brunch-hero">
                <figure className="hero-image">
                  <Image
                    src="/images/hero-guinness-pour.jpeg"
                    alt="Bartender pouring a pint of Guinness at a Barons pub on St Patrick's Day"
                    width={1400}
                    height={800}
                    priority
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>

                <p className="hero-kicker">St Patrick{`'`}s Day &bull; Tuesday 17 March 2026 &bull; All Barons Pubs</p>

                <div className="hero-main-copy">
                  <h1>Happy Two<br />Hours!</h1>
                  <p className="hero-lead">Two full hours of brilliant Irish drinks &mdash; poured cold and ready from 5pm. Guinness cheaper. Jameson sorted. Baby Guinness in threes. Every Barons pub. This Tuesday only.</p>
                  <div className="hero-actions">
                    <a href="#offers" className="button primary"><span className="text">See the offers</span></a>
                    <a href="#find-your-pub" className="button ghost"><span className="text">Find your pub</span></a>
                  </div>
                  <ul className="hero-proof-points" aria-label="Key details">
                    <li className="hero-usp">Tuesday 17 March 2026</li>
                    <li className="hero-usp">5:00pm to 7:00pm only</li>
                    <li className="hero-usp">All Barons sites</li>
                    <li className="hero-usp">No booking needed</li>
                  </ul>
                </div>
              </section>

              {/* OFFER CARDS */}
              <section id="offers" aria-labelledby="offers-heading">
                <div className="offer-grid">
                  <div className="offer-card">
                    <p className="offer-card-label">Guinness</p>
                    <h2>£1 off<br />a pint</h2>
                    <p>A proper pour at a proper price. £1 off between 5pm and 7pm &mdash; no catch, just a very good pint.</p>
                  </div>
                  <div className="offer-card">
                    <p className="offer-card-label">Jameson Whiskey</p>
                    <h2>Double<br />for £5</h2>
                    <p>Ireland{`'`}s most famous whiskey. Neat, over ice, or alongside a pint. Jameson double, £5, for two hours only.</p>
                  </div>
                  <div className="offer-card">
                    <p className="offer-card-label">Baby Guinness</p>
                    <h2>Buy 2,<br />get 1 free</h2>
                    <p>Coffee liqueur topped with Irish cream. Buy two and we{`'`}ll add a third on us &mdash; because three is better than two.</p>
                  </div>
                </div>

                <div className="time-callout" aria-label="Offer timing">
                  <div>
                    <p className="time-callout-text">Available at all Barons Pubs</p>
                    <p className="time-callout-main">Tuesday 17 March 2026 &mdash; 5:00pm to 7:00pm only</p>
                  </div>
                </div>
              </section>

              {/* DRINK PHOTOS */}
              <div className="launch-gallery" aria-hidden="true">
                <figure className="gallery-item">
                  <Image
                    src="/images/guinness-pint.jpeg"
                    alt="A perfect pint of Guinness held in front of the bar taps"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>
                <figure className="gallery-item">
                  <Image
                    src="/images/jameson-on-the-rocks.jpeg"
                    alt="Jameson whiskey on the rocks on a pub bar top"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>
                <figure className="gallery-item">
                  <Image
                    src="/images/baby-guinness-trio.jpeg"
                    alt="Three Baby Guinness shots lined up on the bar"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>
              </div>

              {/* EDITORIAL COPY */}
              <section className="seo-editorial" aria-labelledby="editorial-heading">
                <div className="editorial-header">
                  <h2 id="editorial-heading">Go on then &mdash; make your Tuesday feel less Tuesday</h2>
                  <p>St Patrick{`'`}s Day lands on a Tuesday this year. We thought about that, and decided the right response was a two-hour window of good fortune and great drinks.</p>
                </div>
                <div className="editorial-stack">
                  <p>Happy Two Hours isn{`'`}t quite happy hour &mdash; it{`'`}s twice as long and considerably more Irish. From 5:00pm, the pint of Guinness is £1 cheaper, a Jameson double is £5, and if you{`'`}re having Baby Guinness you might as well have three.</p>
                  <div className="pull-quote">&ldquo;A bit of luck, a bit of cheer, and a very good pint.&rdquo;</div>
                  <p>Turn up, get settled, and let a Tuesday surprise you. The atmosphere tends to build quickly from 5pm &mdash; and guests who arrive early tend to stay for the evening. No shamrocks required. No costume necessary. Just a seat, a pint, and the kind of company that makes a Tuesday worth going out for.</p>
                  <p>Our full bar runs all evening alongside the Happy Two Hours offers &mdash; including our <strong>Virtuous</strong> low and no alcohol range, which is worth ordering whether you{`'`}re driving or simply not drinking tonight.</p>
                </div>
              </section>

              {/* DRINKS DETAIL */}
              <section className="menu-section" aria-labelledby="drinks-heading">
                <div className="menu-header">
                  <h2 id="drinks-heading">Three drinks worth knowing about</h2>
                  <p className="menu-hours">5:00pm &ndash; 7:00pm &bull; Tuesday 17 March 2026 only &bull; All Barons Pubs</p>
                </div>

                <div style={{ marginTop: 'var(--space-4)' }}>

                  <article style={{ padding: 'var(--space-3) 0 var(--space-4)', borderBottom: '1px solid #9ecfb0' }}>
                    <h3 style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, color: 'var(--irish-dark)', fontSize: '22px', margin: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-2)' }}>
                      <span>Guinness</span>
                      <span style={{ color: 'var(--irish-mid)', fontSize: '20px' }}>£1 off a pint</span>
                    </h3>
                    <p style={{ marginTop: 'var(--space-2)', fontSize: '16px', color: '#4f5d68' }}>Slow-poured, dark and creamy, with that unmistakable finish. Between 5pm and 7pm on St Patrick{`'`}s Day, we{`'`}re taking £1 off the pint price. Order one. Maybe order another.</p>
                  </article>

                  <article style={{ padding: 'var(--space-3) 0 var(--space-4)', borderBottom: '1px solid #9ecfb0' }}>
                    <h3 style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, color: 'var(--irish-dark)', fontSize: '22px', margin: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-2)' }}>
                      <span>Jameson</span>
                      <span style={{ color: 'var(--irish-mid)', fontSize: '20px' }}>Double for £5</span>
                    </h3>
                    <p style={{ marginTop: 'var(--space-2)', fontSize: '16px', color: '#4f5d68' }}>Probably Ireland{`'`}s most famous whiskey &mdash; smooth, approachable, and genuinely good served simply. The double is £5 during Happy Two Hours. Neat or over ice, your call.</p>
                  </article>

                  <article style={{ padding: 'var(--space-3) 0 var(--space-4)', borderBottom: '1px solid #9ecfb0' }}>
                    <h3 style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, color: 'var(--irish-dark)', fontSize: '22px', margin: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-2)' }}>
                      <span>Baby Guinness</span>
                      <span style={{ color: 'var(--irish-mid)', fontSize: '20px' }}>Buy 2, get 1 free</span>
                    </h3>
                    <p style={{ marginTop: 'var(--space-2)', fontSize: '16px', color: '#4f5d68' }}>Coffee liqueur topped with Irish cream, served in a shot glass. Looks exactly like a miniature pint. Buy two and we{`'`}ll add a third on us &mdash; because that{`'`}s just good arithmetic.</p>
                  </article>

                </div>
              </section>

              {/* STAY FOR THE EVENING */}
              <section className="seo-editorial" aria-labelledby="evening-heading">
                <div className="editorial-header">
                  <h2 id="evening-heading">What happens after 7pm?</h2>
                  <p>Happy Two Hours is the opener, not the whole evening. The bar stays open, the kitchen keeps going, and there{`'`}s no reason to leave.</p>
                </div>
                <div className="editorial-stack">
                  <p>Our standard 5pm&ndash;7pm drinks deal &mdash; <strong>2 House Cocktails for £14.95</strong> &mdash; runs every Monday to Friday. On St Patrick{`'`}s Day that window belongs to Happy Two Hours. Once 7pm passes, the rest of the evening is yours: full bar, full menu, and the kind of atmosphere that tends to build when everyone arrived a little earlier than usual.</p>
                  <p>Real ale is £4 a pint on Mondays, and if you{`'`}re joining us later in the week, Fizz Friday takes £5 off bottles of prosecco and champagne every Friday. St Patrick{`'`}s Day falls on a Tuesday, which makes Happy Two Hours the right way to start it.</p>
                </div>
                <ul className="editorial-callouts">
                  <li>Full food menus available all evening at all sites</li>
                  <li><strong>Virtuous</strong> low and no alcohol options available throughout &mdash; wines, beers, and cocktails</li>
                  <li>Silent Pool Gin on the bar at every Barons pub</li>
                  <li>No dress code, no age restrictions, dogs welcome in designated areas</li>
                </ul>
              </section>

              {/* FIND YOUR PUB */}
              <section className="seo-editorial" id="find-your-pub" aria-labelledby="sites-heading">
                <div className="editorial-header">
                  <h2 id="sites-heading">Happy Two Hours &mdash; at all Barons Pubs</h2>
                  <p>We{`'`}re running Happy Two Hours across all eleven of our sites on Tuesday 17 March. Find yours below.</p>
                </div>
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
                    <p className="site-desc">A family-friendly pub restaurant with the impressive Meade Hall events venue on site.</p>
                  </div>
                  <div className="site-card">
                    <p className="site-location">At The Crown &amp; Cushion, Camberley</p>
                    <p className="site-name">Meade Hall</p>
                    <p className="site-desc">A medieval barn venue &mdash; a genuinely different place to raise a glass on St Patrick{`'`}s Day.</p>
                  </div>
                  <div className="site-card">
                    <p className="site-location">Copthorne, Surrey</p>
                    <p className="site-name">The Curious Pig in The Parlour</p>
                    <p className="site-desc">Boutique bedrooms, a new garden, and a pub that{`'`}s easy to stay in well past 7pm.</p>
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
                    <p className="site-desc">Pub Garden of the Year 2025 &mdash; a classic local with an award-winning outdoor space.</p>
                  </div>
                  <div className="site-card">
                    <p className="site-location">Shinfield, Berkshire</p>
                    <p className="site-name">The Shinfield Arms</p>
                    <p className="site-desc">A community local with an all-weather covered garden that works year-round.</p>
                  </div>
                  <div className="site-card">
                    <p className="site-location">Leatherhead, Surrey</p>
                    <p className="site-name">The Star</p>
                    <p className="site-desc">Easy to reach, great for families, and right on the doorstep of Ashtead Common.</p>
                  </div>
                </div>
              </section>

              {/* ABOUT BARONS */}
              <section className="seo-editorial" aria-labelledby="about-heading">
                <div className="editorial-header">
                  <h2 id="about-heading">About Barons Pubs</h2>
                  <p>Barons Pubs is a family of eleven pubs and venues across Surrey and Berkshire, each run by a team that knows its local community well.</p>
                </div>
                <div className="editorial-stack">
                  <p>Every site is independently run within the group, which means each pub has its own character &mdash; but the things that matter are consistent everywhere: great food, genuine service, and a welcome that works for real life. Whether you{`'`}re popping in for a quick pint or settling in for the evening, you{`'`}re in the right place.</p>
                  <p>St Patrick{`'`}s Day is just one example of how we like to mark the calendar &mdash; turning a Tuesday into a proper occasion without making a big fuss of it. Happy Two Hours is our way of saying: you don{`'`}t need a special reason to go out, but if one helps, here{`'`}s one.</p>
                </div>
              </section>

              {/* FAQ */}
              <section className="seo-faq" aria-labelledby="faq-heading">
                <h2 id="faq-heading">St Patrick{`'`}s Day FAQs</h2>
                <div className="faq-grid">
                  <article>
                    <h3>Do I need to book for Happy Two Hours?</h3>
                    <p>No booking required &mdash; just turn up between 5pm and 7pm on Tuesday 17 March. Walk-ins are welcome. If you{`'`}d like to guarantee a table for the evening, you{`'`}re welcome to book ahead through our usual booking system.</p>
                  </article>
                  <article>
                    <h3>Are the offers available all day on St Patrick{`'`}s Day?</h3>
                    <p>No &mdash; Happy Two Hours runs from <strong>5:00pm to 7:00pm only</strong> on Tuesday 17 March 2026. The offers are not available outside that window.</p>
                  </article>
                  <article>
                    <h3>Which Barons pubs are taking part?</h3>
                    <p>All Barons Pubs sites are participating. Find your nearest one above or visit our find-a-pub page.</p>
                  </article>
                  <article>
                    <h3>Can I combine the offers?</h3>
                    <p>The three Happy Two Hours offers are each standalone &mdash; you can order any or all of them during the 5pm&ndash;7pm window. They cannot be combined with other promotions or discounts.</p>
                  </article>
                  <article>
                    <h3>Is there a Baby Guinness minimum age?</h3>
                    <p>All offers are for guests aged 18 and over. Challenge 25 applies at all Barons Pubs.</p>
                  </article>
                </div>
              </section>

              {/* RESPONSIBLE DRINKING */}
              <div className="responsible-bar" role="note">
                <span className="responsible-badge">Drink responsibly</span>
                <p className="responsible-text">Over 18s only. Challenge 25 applies. For help and support visit <a href="https://www.drinkaware.co.uk" target="_blank" rel="noopener noreferrer">drinkaware.co.uk</a></p>
              </div>

              {/* BOOKING STRIP CTA */}
              <div className="booking-strip" role="complementary">
                <h2>Tuesday 17 March. Starts at 5.</h2>
                <p>Happy Two Hours runs 5:00pm to 7:00pm only. Find your nearest Barons pub and we{`'`}ll see you there.</p>
                <div className="booking-strip-actions">
                  <a href="#find-your-pub" className="button primary"><span className="text">Find your nearest pub</span></a>
                  <a href="#offers" className="button ghost"><span className="text">See the offers</span></a>
                </div>
              </div>

            </main>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div id="extended-footer-wrapper">
        <footer id="extended">
          <div className="footer-inner">
            <address className="footer-address">
              <h3>Barons Pubs</h3>
              <p>A Barons Pub Company Ltd</p>
              <p>Registered Office: Welden Turnbull, Albany House,<br />Claremont Lane, Esher, Surrey, KT10 9FQ</p>
              <p><a href="tel:+44XXXXXXXXXX">Find a pub near you</a></p>
            </address>
            <nav aria-label="Footer navigation">
              <ul>
                <li><a href="#">Find a Pub</a></li>
                <li><a href="#">What{`'`}s On</a></li>
                <li><a href="#">Food &amp; Drink</a></li>
                <li><a href="#">Your Event</a></li>
                <li><a href="#">Barons Pub Company</a></li>
                <li><a href="#">Privacy Policies</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Join Our Team</a></li>
              </ul>
            </nav>
          </div>
          <div id="registered-office">
            <p><strong>Barons Pub Company Ltd</strong></p>
            <p>Offers available at all Barons Pubs on Tuesday 17 March 2026, 5:00pm&ndash;7:00pm only. Subject to availability. Cannot be combined with any other promotion. Management reserves the right to withdraw or amend offers. Over 18s only. Challenge 25 applies. A discretionary 10% service charge may be added where table service is provided.</p>
          </div>
          <div id="copyright">
            <p>All Rights Reserved Barons Pub Company Ltd &copy;2026</p>
          </div>
        </footer>
      </div>
    </>
  );
}
