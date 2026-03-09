import Link from 'next/link';

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

      <Link
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
      </Link>

      <Link
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
      </Link>

      <span style={{ opacity: 0.4, marginLeft: '8px', fontSize: '12px' }}>
        St Patrick&apos;s Day 2026 · Barons Pubs
      </span>
    </div>
  );
}
