'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function pushConsent(granted: boolean) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    ad_storage: granted ? 'granted' : 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('bp_cookie_consent');
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem('bp_cookie_consent', 'granted');
    pushConsent(true);
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('bp_cookie_consent', 'denied');
    pushConsent(false);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      <style>{`
        .cookie-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          padding: 0.75rem 1.5rem;
          background: rgba(10, 20, 13, 0.96);
          border-top: 1px solid rgba(201, 160, 32, 0.2);
          backdrop-filter: blur(10px);
          font-family: 'Lora', serif;
          font-size: 0.8125rem;
          color: rgba(240, 230, 198, 0.72);
          line-height: 1.5;
        }
        .cookie-bar p { margin: 0; }
        .cookie-bar a {
          color: rgba(201, 160, 32, 0.9);
          text-underline-offset: 2px;
        }
        .cookie-bar a:hover { color: #e0b830; }
        .cookie-bar-actions {
          display: flex;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        .cookie-btn {
          cursor: pointer;
          border: 1px solid rgba(201, 160, 32, 0.35);
          border-radius: 3px;
          padding: 0.3rem 0.9rem;
          font-family: 'Oswald', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: transparent;
          color: rgba(240, 230, 198, 0.72);
          transition: all 0.15s;
        }
        .cookie-btn:hover {
          background: rgba(201, 160, 32, 0.1);
          border-color: rgba(201, 160, 32, 0.6);
          color: rgba(240, 230, 198, 1);
        }
        .cookie-btn.accept {
          background: rgba(201, 160, 32, 0.15);
          border-color: rgba(201, 160, 32, 0.5);
          color: #c9a020;
        }
        .cookie-btn.accept:hover {
          background: rgba(201, 160, 32, 0.25);
          color: #e0b830;
        }
      `}</style>
      <div className="cookie-bar" role="region" aria-label="Cookie consent">
        <p>
          We use cookies to measure how this page is used.{' '}
          <a href="https://www.baronspubs.com/policies/website-privacy/" target="_blank" rel="noopener noreferrer">
            Privacy policy
          </a>
          .
        </p>
        <div className="cookie-bar-actions">
          <button className="cookie-btn" onClick={decline} type="button">
            Decline
          </button>
          <button className="cookie-btn accept" onClick={accept} type="button">
            Accept
          </button>
        </div>
      </div>
    </>
  );
}
