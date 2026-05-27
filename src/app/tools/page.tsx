import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Game Tools - Nanobananas Game Guides',
  description:
    'Fan-made tools from Nanobananas Game Guides. Current tools support the Warhammer 40,000: Mechanicus II guide vertical.',
  alternates: {
    canonical: 'https://mechanicus2.nanobananas.me/tools',
  },
  openGraph: {
    title: 'Game Tools - Nanobananas Game Guides',
    description:
      'Fan-made tools for supported game guide verticals.',
    type: 'website',
  },
};

const tools = [
  {
    title: 'Crafting Calculator',
    description:
      'Calculate material costs for any equipment. Filter by category, batch multiple items, and copy your shopping list.',
    href: '/tools/crafting-calculator',
    image: '/mat-forge.webp',
    tag: 'Priority',
    features: [
      'Filter by Weapon / Armor / Implant / Mod',
      'Batch calculate multiple items',
      'Rare material highlighting',
      'One-click copy materials list',
      'LocalStorage persistence',
    ],
  },
  {
    title: 'Build Planner',
    description:
      'Simulate unit and equipment loadouts for Tech-Priests and Necrons. See combined stats and save your plans.',
    href: '/tools/build-planner',
    image: '/build-planner-hero.webp',
    tag: 'New',
    features: [
      'Faction-specific unit selection',
      'Equipment slot matching',
      'Real-time stat aggregation',
      'Save & manage multiple builds',
      'Cross-reference with Crafting Calculator',
    ],
  },
];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#F0F0F0] tracking-wide mb-2">Tools</h1>
      <p className="text-[#B0B0B0] mb-8">
        Practical calculators and planners. Current tools support Warhammer 40,000: Mechanicus II.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] overflow-hidden transition-all duration-200 hover:border-[rgba(230,194,0,0.5)] hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(230,194,0,0.05)]"
          >
            {/* Tool image header */}
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={tool.image}
                alt={tool.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#162B24] via-[#162B24]/40 to-transparent" />
              <span className="absolute top-3 right-3 inline-block rounded-md bg-[rgba(230,194,0,0.15)] backdrop-blur-sm px-2 py-0.5 text-xs font-medium text-[#E6C200] border border-[#E6C200]/20">
                {tool.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg font-semibold text-[#F0F0F0] group-hover:text-[#E6C200] transition-colors mb-2">
                {tool.title}
              </h2>
              <p className="text-sm text-[#B0B0B0] leading-relaxed mb-4">
                {tool.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-1.5">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#B0B0B0]/70">
                    <svg className="w-3.5 h-3.5 text-[#E6C200]/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-4 pt-3 border-t border-[rgba(230,194,0,0.08)]">
                <span className="text-sm font-medium text-[#E6C200] group-hover:underline inline-flex items-center gap-1">
                  Open Tool
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
