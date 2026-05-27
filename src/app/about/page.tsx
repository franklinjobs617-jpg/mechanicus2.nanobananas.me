import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Nanobananas Game Guides',
  description:
    'About Nanobananas Game Guides, an unofficial English-first game guides hub with walkthroughs, launch help, troubleshooting, tools, and copyright info.',
  alternates: {
    canonical: 'https://mechanicus2.nanobananas.me/about',
  },
  openGraph: {
    title: 'About - Nanobananas Game Guides',
    description:
      'About this unofficial game guides hub. Copyright, disclaimer, and contact info.',
    type: 'website',
  },
};

const copyrightNotice =
  'Fan-made website. Not affiliated with IO Interactive, Amazon MGM Studios, EON Productions, Bulwark Studios, Kasedo Games, Games Workshop, or any platform holder. All game names, trademarks, artwork and intellectual properties belong to their respective owners. All content and tools are created for reference and entertainment purposes only. If you have copyright concerns, please contact: support@nanobananas.me. We will remove relevant content promptly.';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#F0F0F0] tracking-wide mb-8">
        About Nanobananas Game Guides
      </h1>

      <div className="space-y-6">
        <section className="rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-6">
          <h2 className="text-lg font-semibold text-[#E6C200] mb-3">What Is This?</h2>
          <p className="text-sm text-[#B0B0B0] leading-relaxed mb-4">
            Nanobananas Game Guides is an unofficial fan-made hub for English-first game guides,
            launch coverage, troubleshooting, and practical tools. The site keeps each game in its
            own topic cluster so players can quickly find relevant help without unrelated cross-links.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              ['Game Guides', 'Walkthroughs and explainers'],
              ['Launch Help', 'Release, platform, and edition pages'],
              ['Fan Tools', 'Calculators and planners where useful'],
            ].map(([title, subtitle]) => (
              <div
                key={title}
                className="rounded-lg bg-[#0F2620] border border-[rgba(230,194,0,0.1)] p-4 text-center"
              >
                <p className="text-xs text-[#F0F0F0] font-semibold">{title}</p>
                <p className="text-xs text-[#B0B0B0] mt-1">{subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-6">
          <h2 className="text-lg font-semibold text-[#E6C200] mb-3">Content Policy</h2>
          <ul className="space-y-2 text-sm text-[#B0B0B0] leading-relaxed">
            <li>All article text is originally written and summarized for players.</li>
            <li>Public sources are cited where release facts, reviews, or player-demand signals matter.</li>
            <li>No official logos, original artwork, trailer frames, screenshots, or copied promotional text are required for the site visuals.</li>
            <li>Tools use manually organized and rephrased reference data, not reverse engineering or automated scraping.</li>
            <li>The site does not provide cheats, modifiers, or save-tampering tools.</li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#E6C200]/40 bg-[#162B24] p-6">
          <h2 className="text-lg font-semibold text-[#E6C200] mb-3">Copyright &amp; Disclaimer</h2>
          <p className="text-sm text-[#F0F0F0] leading-relaxed font-medium">{copyrightNotice}</p>
        </section>

        <section className="rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-6">
          <h2 className="text-lg font-semibold text-[#E6C200] mb-3">Contact</h2>
          <p className="text-sm text-[#B0B0B0] leading-relaxed mb-3">
            If you have suggestions, corrections, or copyright concerns, please reach out to:
          </p>
          <a
            href="mailto:support@nanobananas.me"
            className="inline-flex items-center rounded-lg border border-[#E6C200]/30 bg-[#0F2620] px-4 py-2 text-sm text-[#E6C200] hover:bg-[#E6C200]/10 transition-colors"
          >
            support@nanobananas.me
          </a>
        </section>
      </div>
    </div>
  );
}
