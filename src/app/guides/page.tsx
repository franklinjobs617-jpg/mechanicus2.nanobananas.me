import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { guides, guideSlugs } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Mechanicus 2 Guides - Strategy & Walkthroughs',
  description:
    'Unofficial Mechanicus 2 guides: beginner tips, Tech-Priest vs Necron factions, best units, optimal builds, and Necron campaign walkthrough.',
  openGraph: {
    title: 'Mechanicus 2 Guides - Strategy & Walkthroughs',
    description:
      'Unofficial Mechanicus 2 guides: beginner tips, faction breakdowns, best units, builds, and campaign walkthrough.',
    type: 'website',
  },
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#F0F0F0] tracking-wide mb-2">Guides</h1>
      <p className="text-[#B0B0B0] mb-8 max-w-2xl">
        Unofficial strategy guides and walkthroughs for Warhammer 40,000: Mechanicus II.
        All content is written by fans and rephrased from gameplay experience.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guideSlugs.map((slug) => {
          const guide = guides[slug];
          return (
            <Link
              key={slug}
              href={`/guides/${slug}`}
              className="group rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] overflow-hidden transition-all duration-200 hover:border-[rgba(230,194,0,0.5)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(230,194,0,0.05)]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={guide.thumbnail}
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162B24] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-block rounded-md bg-[rgba(230,194,0,0.9)] px-2.5 py-0.5 text-xs font-semibold text-[#0F2620]">
                  {guide.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-base font-semibold text-[#F0F0F0] group-hover:text-[#E6C200] transition-colors leading-snug">
                  {guide.title}
                </h2>
                <p className="mt-2 text-sm text-[#B0B0B0] leading-relaxed line-clamp-3">
                  {guide.excerpt}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
