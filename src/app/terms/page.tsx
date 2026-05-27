import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Mechanicus 2 Fan Site',
  description:
    'Terms of Service for the Mechanicus 2 unofficial fan site. Usage rules, copyright statement, disclaimers, and contact info.',
  openGraph: {
    title: 'Terms of Service - Mechanicus 2 Fan Site',
    description:
      'Terms of Service for the Mechanicus 2 unofficial fan site. Usage rules, copyright, disclaimers.',
  },
};

const sections = [
  {
    title: '1. Agreement',
    content: `By accessing and using mechanicus2.nanobananas.me (the "Site"), you agree to accept these Terms of Service. If you do not agree, please stop using this site.`,
  },
  {
    title: '2. Site Identity & Copyright Statement',
    content: null,
    items: [
      'This is an unofficial fan-made website.',
      'It is NOT affiliated with, endorsed, sponsored, or connected to Bulwark Studios, Kasedo Games, or Games Workshop.',
      'All game trademarks and intellectual properties belong to their respective owners.',
      'All site content is created for non-commercial entertainment and reference purposes only.',
    ],
  },
  {
    title: '3. User Usage Rules',
    content: `Users agree to use this site for legal and reasonable purposes only. Users shall not:`,
    items: [
      'Use site tools for game cheating, modification, or illegal exploitation;',
      'Copy, repost, rewrite, or commercially use this site\'s original tools and guide content;',
      'Attack, interfere, or disrupt the normal operation of the website.',
    ],
  },
  {
    title: '4. Data Accuracy Disclaimer',
    content: `All guides, tool data, and build references are manually sorted and summarized by fans. Data may contain errors, updates, or deviations from the latest official game version. We do not guarantee 100% accuracy. All usage is at the user's own risk.`,
  },
  {
    title: '5. Liability Limitation',
    content: `We are not responsible for any in-game loss, material loss, build failure, or indirect loss caused by the use of this site's tools and guides.`,
  },
  {
    title: '6. Policy Update',
    content: `We reserve the right to update these terms without prior notice.`,
  },
  {
    title: '7. Contact',
    content: `support@nanobananas.me`,
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0F2620' }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="text-sm text-[#E6C200] hover:underline inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#F0F0F0] tracking-wide mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-[#B0B0B0]">
            Effective Date: 2025
          </p>
          <div className="mt-4 h-px bg-[#E6C200]/20" />
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-[#E6C200] tracking-wide mb-3">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-sm text-[#B0B0B0] leading-relaxed">
                  {section.content}
                </p>
              )}
              {section.items && (
                <ul className="space-y-3 mt-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-[#B0B0B0] leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E6C200]/60 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="mt-12 h-px bg-[#E6C200]/20" />

        {/* Contact */}
        <div className="mt-8 rounded-lg border border-[rgba(230,194,0,0.15)] bg-[#162B24] px-5 py-4">
          <p className="text-sm text-[#B0B0B0] leading-relaxed">
            Questions about these terms? Contact us at{' '}
            <a href="mailto:support@nanobananas.me" className="text-[#E6C200] hover:underline">
              support@nanobananas.me
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
