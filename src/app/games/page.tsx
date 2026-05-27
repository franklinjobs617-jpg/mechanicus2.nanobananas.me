import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { games, gameSlugs } from '@/lib/games';

export const metadata: Metadata = {
  title: 'Games - Nanobananas Game Guides',
  description:
    'Browse game guide clusters on Nanobananas Game Guides, including 007 First Light and Warhammer 40,000: Mechanicus II.',
  alternates: {
    canonical: 'https://mechanicus2.nanobananas.me/games',
  },
  openGraph: {
    title: 'Games - Nanobananas Game Guides',
    description:
      'Browse game-specific guide hubs, walkthroughs, troubleshooting pages, and tools.',
    type: 'website',
  },
};

export default function GamesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E6C200]">
          Guide clusters
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#F0F0F0] tracking-wide">Games</h1>
        <p className="mt-3 text-[#B0B0B0] leading-relaxed">
          Each game gets its own topic hub so launch pages, evergreen guides, troubleshooting,
          and tools stay focused around what players are searching for.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {gameSlugs.map((slug) => {
          const game = games[slug];
          return (
            <Link
              key={slug}
              href={game.href}
              className="group overflow-hidden rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(230,194,0,0.5)]"
            >
              <div className="relative aspect-[16/8]">
                <Image
                  src={game.image}
                  alt={game.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162B24] via-[#162B24]/35 to-transparent" />
                <span className="absolute left-4 top-4 rounded-md border border-[#E6C200]/30 bg-[#0F2620]/75 px-3 py-1 text-xs font-semibold text-[#E6C200]">
                  {game.status}
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-[#F0F0F0] group-hover:text-[#E6C200] transition-colors">
                  {game.title}
                </h2>
                <p className="mt-2 text-sm text-[#B0B0B0] leading-relaxed">{game.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#B0B0B0]/80">
                  <span className="rounded-md bg-[#0F2620] px-2.5 py-1">
                    {game.guideSlugs.length} guides
                  </span>
                  <span className="rounded-md bg-[#0F2620] px-2.5 py-1">{game.platforms}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
