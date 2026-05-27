import Link from 'next/link';
import Image from 'next/image';

const tools = [
  {
    title: 'Crafting Calculator',
    description:
      'Calculate material costs, find rare components, and plan your crafting pipeline for any equipment.',
    href: '/tools/crafting-calculator',
    icon: '⚙',
  },
  {
    title: 'Build Planner',
    description:
      'Simulate unit loadouts and equipment combinations for both Tech-Priests and Necrons.',
    href: '/tools/build-planner',
    icon: '🛡',
  },
];

const guides = [
  {
    title: 'Complete Beginner Guide',
    description:
      'Everything new players need to know to start their campaign in Mechanicus II.',
    href: '/guides/beginner-guide',
    tag: 'Beginner',
  },
  {
    title: 'Factions: Tech-Priests & Necrons',
    description:
      'An in-depth look at both playable factions, their strengths, and playstyles.',
    href: '/guides/factions-introduction',
    tag: 'Factions',
  },
  {
    title: 'Best Units for Both Factions',
    description:
      'Top-performing units and how to get the most value from each one.',
    href: '/guides/best-units',
    tag: 'Units',
  },
  {
    title: 'Optimal Tech-Priest Builds',
    description:
      'Proven build paths and equipment choices for maximizing Tech-Priest effectiveness.',
    href: '/guides/tech-priest-builds',
    tag: 'Builds',
  },
  {
    title: 'Necron Campaign Walkthrough',
    description:
      'Step-by-step walkthrough for the Necron campaign with strategy tips.',
    href: '/guides/necron-campaign-walkthrough',
    tag: 'Campaign',
  },
];

const externalLinks = [
  {
    label: 'Steam',
    href: 'https://store.steampowered.com/app/2532480/Warhammer_40000_Mechanicus_II/',
  },
  {
    label: 'Reddit',
    href: '#',
  },
  {
    label: 'Discord',
    href: '#',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-banner.webp"
            alt="Mechanicus 2 guide and tools - Warhammer 40k fan site dark mechanical theme"
            fill
            priority
            className="object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F2620]/80 via-[#0F2620]/60 to-[#0F2620]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0F0F0] leading-tight tracking-wide">
              Mechanicus II
              <span className="block text-[#E6C200] mt-2">Guide & Tools</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed max-w-xl">
              Unofficial fan-made resource for Warhammer 40,000: Mechanicus II.
              Browse guides, calculate crafting costs, and plan your builds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/guides"
                className="inline-flex items-center rounded-md border border-[#E6C200] bg-[#E6C200] px-5 py-2.5 text-sm font-semibold text-[#0F2620] transition-colors hover:bg-[#FFD700] active:scale-[0.98]"
              >
                Browse Guides
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center rounded-md border border-[rgba(230,194,0,0.4)] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#E6C200] transition-colors hover:bg-[rgba(230,194,0,0.1)] active:scale-[0.98]"
              >
                Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 sm:py-20 bg-[#0F2620]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#F0F0F0] tracking-wide">
              Tools
            </h2>
            <Link
              href="/tools"
              className="text-sm text-[#E6C200] hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-6 transition-all duration-200 hover:border-[rgba(230,194,0,0.5)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(230,194,0,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md border border-[rgba(230,194,0,0.3)] bg-[#0F2620] text-2xl">
                    {tool.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#F0F0F0] group-hover:text-[#E6C200] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#B0B0B0] leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 sm:py-20 bg-[#0A1F19]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#F0F0F0] tracking-wide">
              Latest Guides
            </h2>
            <Link
              href="/guides"
              className="text-sm text-[#E6C200] hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-5 transition-all duration-200 hover:border-[rgba(230,194,0,0.5)] hover:-translate-y-0.5"
              >
                <span className="inline-block rounded-md bg-[rgba(230,194,0,0.15)] px-2.5 py-0.5 text-xs font-medium text-[#E6C200] mb-3">
                  {guide.tag}
                </span>
                <h3 className="text-base font-semibold text-[#F0F0F0] group-hover:text-[#E6C200] transition-colors">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm text-[#B0B0B0] leading-relaxed">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* External Official Links */}
      <section className="py-12 sm:py-16 bg-[#0F2620] border-t border-[rgba(230,194,0,0.1)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-[#B0B0B0] tracking-wide mb-6">
            External Links
          </h2>
          <div className="flex flex-wrap gap-4">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[rgba(230,194,0,0.25)] bg-[#162B24] px-4 py-2.5 text-sm font-medium text-[#B0B0B0] transition-colors hover:text-[#E6C200] hover:border-[rgba(230,194,0,0.5)]"
              >
                {/* Minimalist vector-style icons via SVG */}
                {link.label === 'Steam' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                )}
                {link.label === 'Reddit' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                )}
                {link.label === 'Discord' && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <path d="M15 3h6v6" />
                    <path d="M10 14L21 3" />
                  </svg>
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
