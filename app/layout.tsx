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
