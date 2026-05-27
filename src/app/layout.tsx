import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ResourcePreload } from '@/components/ResourcePreload';
import { getWebSiteSchema } from '@/lib/schema';
import './globals.css';

const ADSENSE_PUBLISHER_ID = 'ca-pub-3383070348689557';

export const metadata: Metadata = {
  metadataBase: new URL('https://mechanicus2.nanobananas.me'),
  title: 'Nanobananas Game Guides | Launch Guides, Walkthroughs & Tools',
  description:
    'Nanobananas Game Guides is an unofficial English-first hub for game walkthroughs, release guides, PC settings, troubleshooting, and fan-made tools.',
  keywords: [
    'Nanobananas Game Guides',
    'game guides',
    '007 First Light guide',
    '007 First Light walkthrough',
    '007 First Light settings',
    '007 First Light release date',
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
  alternates: {
    canonical: 'https://mechanicus2.nanobananas.me',
  },
  openGraph: {
    title: 'Nanobananas Game Guides',
    description:
    'Unofficial English-first game guides hub for launch coverage, walkthroughs, settings, troubleshooting, and fan-made tools.',
    url: 'https://mechanicus2.nanobananas.me',
    siteName: 'Nanobananas Game Guides',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nanobananas Game Guides',
    description:
    'Unofficial game guides, walkthroughs, settings help, troubleshooting, and fan-made tools.',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'google-adsense-account': ADSENSE_PUBLISHER_ID,
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
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DJXK1Z37XG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DJXK1Z37XG');
          `}
        </Script>

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
