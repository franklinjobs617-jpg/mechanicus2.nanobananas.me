import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Mechanicus 2 Fan Site',
  description:
    'Privacy Policy for the Mechanicus 2 unofficial fan site. Learn how we handle localStorage data, cookies, and protect your privacy.',
  openGraph: {
    title: 'Privacy Policy - Mechanicus 2 Fan Site',
    description:
      'Privacy Policy for the Mechanicus 2 unofficial fan site. Data handling, cookies, and privacy protection.',
  },
};

const sections = [
  {
    title: '1. Introduction',
    content: `Welcome to mechanicus2.nanobananas.me (the "Site"), an unofficial fan-made guide and tool website for Warhammer 40,000: Mechanicus II. This Privacy Policy explains how we collect, use, and protect user information on this website.`,
  },
  {
    title: '2. Information We Collect',
    content: null,
    items: [
      'Local Storage Data: Our tools use browser localStorage to save your crafting recipes, equipment builds, and tool preferences. This data is stored locally on your device and will never be uploaded or transmitted to our servers.',
      'Anonymous Traffic Data: We may collect anonymous page view, click and usage behavior data for website optimization. No personally identifiable information is collected.',
    ],
  },
  {
    title: '3. Cookies Usage',
    content: `This site does not use tracking cookies. Third-party advertising services (Google AdSense) may use standard browser cookies for advertisement delivery, which follows their official privacy rules.`,
  },
  {
    title: '4. Third-Party Websites',
    content: `This site contains external links to Steam, Reddit, Discord and other community platforms. We are not responsible for the privacy policies or content of third-party websites.`,
  },
  {
    title: '5. User Rights',
    content: `All user tool data is stored locally in your browser. You may clear your browser data at any time to reset all tool records.`,
  },
  {
    title: '6. Contact Information',
    content: `If you have any questions regarding this Privacy Policy, please contact: support@nanobananas.me`,
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
            Questions about this policy? Contact us at{' '}
            <a href="mailto:support@nanobananas.me" className="text-[#E6C200] hover:underline">
              support@nanobananas.me
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
