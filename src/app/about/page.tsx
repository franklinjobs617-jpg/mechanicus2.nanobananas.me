import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Unofficial Mechanicus II Fan Site',
  description:
    'About mechanicus2.nanobananas.me — an unofficial fan-made guide & tools site for Warhammer 40k: Mechanicus II. Copyright, disclaimer, and contact info.',
  openGraph: {
    title: 'About - Mechanicus II Unofficial Fan Site',
    description:
      'About this unofficial fan-made guide & tools site for Warhammer 40k: Mechanicus II. Copyright, disclaimer, and contact info.',
    type: 'website',
  },
};

const FOOTER_COPYRIGHT = `Fan-made website. Not affiliated with Bulwark Studios, Kasedo Games or Games Workshop. All game names, trademarks, artwork and intellectual properties belong to their respective owners. All content and tools are created for reference and entertainment purposes only. If you have copyright concerns, please contact: support@nanobananas.me. We will remove relevant content promptly.`;

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#F0F0F0] tracking-wide mb-8">About This Site</h1>

      <div className="space-y-6">
        {/* Site Introduction */}
        <section className="rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-6">
          <h2 className="text-lg font-semibold text-[#E6C200] mb-3">What Is This?</h2>
          <p className="text-sm text-[#B0B0B0] leading-relaxed mb-4">
            This is an <span className="text-[#E6C200] font-semibold">unofficial fan-made guide &amp; tools site</span> for{' '}
            <span className="text-[#F0F0F0]">Warhammer 40,000: Mechanicus II</span>. We are independent hobbyists who
            enjoy the game and want to help other players with practical resources.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="rounded-lg bg-[#0F2620] border border-[rgba(230,194,0,0.1)] p-4 text-center">
              <div className="text-2xl mb-2 text-[#E6C200]">
                <svg className="w-7 h-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <p className="text-xs text-[#F0F0F0] font-semibold">Strategy Guides</p>
              <p className="text-xs text-[#B0B0B0] mt-1">5 in-depth articles</p>
            </div>
            <div className="rounded-lg bg-[#0F2620] border border-[rgba(230,194,0,0.1)] p-4 text-center">
              <div className="text-2xl mb-2 text-[#E6C200]">
                <svg className="w-7 h-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 21h18" />
                </svg>
              </div>
              <p className="text-xs text-[#F0F0F0] font-semibold">Crafting Calculator</p>
              <p className="text-xs text-[#B0B0B0] mt-1">Material cost planner</p>
            </div>
            <div className="rounded-lg bg-[#0F2620] border border-[rgba(230,194,0,0.1)] p-4 text-center">
              <div className="text-2xl mb-2 text-[#E6C200]">
                <svg className="w-7 h-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-xs text-[#F0F0F0] font-semibold">Build Planner</p>
              <p className="text-xs text-[#B0B0B0] mt-1">Unit loadout simulator</p>
            </div>
          </div>
        </section>

        {/* Content Policy */}
        <section className="rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-6">
          <h2 className="text-lg font-semibold text-[#E6C200] mb-3">Content Policy</h2>
          <ul className="space-y-2 text-sm text-[#B0B0B0] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#E6C200] mt-0.5 shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              All text content is originally written by fans and is not copied from official game files, documentation, or promotional materials.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#E6C200] mt-0.5 shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              All game data used in tools is manually collected and rephrased — no reverse engineering, data mining, or automated scraping is involved.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#E6C200] mt-0.5 shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              No official game logos, original artwork, UI assets, or promotional images are used on this site.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#E6C200] mt-0.5 shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              This site does not provide cheats, modifiers, or save-tampering tools — only reference and calculation utilities.
            </li>
          </ul>
        </section>

        {/* Full Copyright Notice */}
        <section className="rounded-lg border border-[#E6C200]/40 bg-[#162B24] p-6">
          <h2 className="text-lg font-semibold text-[#E6C200] mb-3">Copyright &amp; Disclaimer</h2>
          <p className="text-sm text-[#F0F0F0] leading-relaxed font-medium">
            {FOOTER_COPYRIGHT}
          </p>
        </section>

        {/* Contact */}
        <section className="rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-6">
          <h2 className="text-lg font-semibold text-[#E6C200] mb-3">Contact</h2>
          <p className="text-sm text-[#B0B0B0] leading-relaxed mb-3">
            If you have questions, suggestions, or copyright concerns, please reach out to:
          </p>
          <a
            href="mailto:support@nanobananas.me"
            className="inline-flex items-center gap-2 rounded-lg border border-[#E6C200]/30 bg-[#0F2620] px-4 py-2 text-sm text-[#E6C200] hover:bg-[#E6C200]/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            support@nanobananas.me
          </a>
        </section>
      </div>
    </div>
  );
}
