import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "St Patrick's Day 2026 | Barons Pubs",
  description: "Celebrate St Patrick's Day at Barons Pubs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
