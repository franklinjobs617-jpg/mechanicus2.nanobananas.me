import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ResourcePreload } from '@/components/ResourcePreload';
import { getWebSiteSchema } from '@/lib/schema';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mechanicus 2 Guide & Tools | Warhammer 40k Mechanicus II Fan Site',
  description:
    'Unofficial fan-made guide & tools for Warhammer 40k: Mechanicus II. Crafting calculator, build planner, faction guides, unit rankings, and Necron walkthrough.',
  keywords: [
    'Mechanicus 2 guide',
    'Warhammer 40k Mechanicus II',
    'Mechanicus 2 crafting calculator',
    'Mechanicus 2 build planner',
    'Mechanicus 2 tips',
    'Mechanicus 2 factions',
    'Mechanicus 2 builds',
    'Mechanicus 2 units',
    'Mechanicus 2 walkthrough',
    'Necron campaign',
    'Tech-Priest builds',
    'Mechanicus II tools',
    'best units Mechanicus 2',
  ],
  authors: [{ name: 'Nanobananas', url: 'https://mechanicus2.nanobananas.me' }],
  openGraph: {
    title: 'Mechanicus 2 Guide & Tools | Warhammer 40k Mechanicus II',
    description:
    'Unofficial fan-made guide & tools for Warhammer 40k: Mechanicus II. Crafting calculator, build planner, faction guides, and walkthroughs.',
    url: 'https://mechanicus2.nanobananas.me',
    siteName: 'Mechanicus II Guide',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mechanicus 2 Guide & Tools | Warhammer 40k Mechanicus II',
    description:
    'Unofficial fan-made guide & tools for Warhammer 40k: Mechanicus II. Crafting calculator, build planner, faction guides, and walkthroughs.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <ResourcePreload />
      <body className="antialiased min-h-screen flex flex-col">
        <ResourcePreload />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteSchema()),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
