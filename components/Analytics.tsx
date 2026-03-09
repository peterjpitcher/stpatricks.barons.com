'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function push(event: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

// Determine which page section a clicked element belongs to
function getClickLocation(el: HTMLElement): string {
  if (el.closest('.hero-block')) return 'hero';
  if (el.closest('.sticky-bar')) return 'sticky_nav';
  if (el.closest('.parent-menu')) return 'nav';
  if (el.closest('.time-block')) return 'time_section';
  if (el.closest('.sites-grid')) return 'sites_grid';
  if (el.closest('.booking-cta')) return 'booking_cta';
  if (el.closest('.responsible-bar')) return 'responsible_bar';
  if (el.closest('#footer')) return 'footer';
  return 'page';
}

export default function Analytics() {
  useEffect(() => {
    // ── Restore consent from localStorage on page load ──────────────────
    const stored = localStorage.getItem('bp_cookie_consent');
    if (stored) {
      const granted = stored === 'granted';
      push({
        event: 'consent_update',
        ad_storage: granted ? 'granted' : 'denied',
        analytics_storage: granted ? 'granted' : 'denied',
        ad_user_data: granted ? 'granted' : 'denied',
        ad_personalization: granted ? 'granted' : 'denied',
      });
    }

    // ── CTA click tracking via event delegation ──────────────────────────
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href') ?? '';
      const text = target.textContent?.trim() ?? '';
      const location = getClickLocation(target as HTMLElement);

      // Anchor / internal navigation CTAs
      if (href.startsWith('#')) {
        push({
          event: 'cta_clicked',
          button_text: text,
          location,
          destination: href,
        });
        return;
      }

      // External links
      if (href.startsWith('http') || href.startsWith('//')) {
        push({
          event: 'external_link_clicked',
          link_url: href,
          link_text: text,
          location,
        });
      }
    }

    document.addEventListener('click', handleClick);

    // ── Section visibility tracking ──────────────────────────────────────
    const sectionsToTrack: { selector: string; name: string }[] = [
      { selector: '#offers', name: 'offers' },
      { selector: '#find-your-pub', name: 'find_your_pub' },
      { selector: '#faq-heading', name: 'faq' },
    ];

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const name = (entry.target as HTMLElement).dataset.trackSection;
            if (name) {
              push({ event: 'section_viewed', section_name: name });
              sectionObserver.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 },
    );

    sectionsToTrack.forEach(({ selector, name }) => {
      const el = document.querySelector(selector);
      if (el) {
        (el as HTMLElement).dataset.trackSection = name;
        sectionObserver.observe(el);
      }
    });

    // ── Scroll depth tracking ────────────────────────────────────────────
    const depthMilestones = [25, 50, 75, 90];
    const reached = new Set<number>();

    function handleScroll() {
      const scrolled =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      depthMilestones.forEach((pct) => {
        if (!reached.has(pct) && scrolled >= pct) {
          reached.add(pct);
          push({ event: 'scroll_depth_reached', percent: pct });
        }
      });

      if (reached.size === depthMilestones.length) {
        window.removeEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      sectionObserver.disconnect();
    };
  }, []);

  return null;
}
