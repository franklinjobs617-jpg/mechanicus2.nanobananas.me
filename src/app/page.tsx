import Link from 'next/link';
import Image from 'next/image';
import { games } from '@/lib/games';
import { guides } from '@/lib/guides';

const featuredGuideSlugs = [
  '007-first-light-crashing-not-launching-fix',
  '007-first-light-best-settings',
  '007-first-light-beginner-guide',
  '007-first-light-release-date-platforms',
  'beginner-guide',
  'necron-campaign-walkthrough',
];

const featuredTools = [
  {
    title: 'Mechanicus II Crafting Calculator',
    description:
      'Calculate material costs, find rare components, and plan equipment crafting for the Mechanicus II vertical.',
    href: '/tools/crafting-calculator',
  },
  {
    title: 'Mechanicus II Build Planner',
    description:
      'Simulate unit loadouts and equipment combinations for Tech-Priests and Necrons.',
    href: '/tools/build-planner',
  },
];

export default function Home() {
  const firstLight = games['007-first-light'];
  const mechanicus = games['mechanicus-ii'];

  return (
    <>
      <section className="relative overflow-hidden border-b border-[rgba(230,194,0,0.12)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/007-first-light-hero.webp"
            alt="Original spy thriller city skyline for Nanobananas Game Guides"
            fill
            priority
            className="object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06130f]/75 via-[#0F2620]/72 to-[#0F2620]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E6C200]">
              English-first game guides hub
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0F0F0] leading-tight">
              Nanobananas Game Guides
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#D0D6D2] leading-relaxed max-w-2xl">
              Launch-day guides, player-first troubleshooting, spoiler-light walkthroughs, and practical
              tools for games people are actively searching right now.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/games/007-first-light"
                className="inline-flex items-center rounded-md border border-[#E6C200] bg-[#E6C200] px-5 py-2.5 text-sm font-semibold text-[#0F2620] transition-colors hover:bg-[#FFD700] active:scale-[0.98]"
              >
                007 First Light Hub
              </Link>
              <Link
                href="/games"
                className="inline-flex items-center rounded-md border border-[rgba(230,194,0,0.4)] bg-[#0F2620]/40 px-5 py-2.5 text-sm font-semibold text-[#E6C200] transition-colors hover:bg-[rgba(230,194,0,0.1)] active:scale-[0.98]"
              >
                Browse Games
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#0F2620]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#F0F0F0]">Featured Games</h2>
              <p className="mt-2 text-sm text-[#B0B0B0]">
                Current content clusters, grouped by game so guides stay relevant.
              </p>
            </div>
            <Link href="/games" className="text-sm text-[#E6C200] hover:underline">
              View all
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
            {[firstLight, mechanicus].map((game) => (
              <Link
                key={game.slug}
                href={game.href}
                className="group overflow-hidden rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(230,194,0,0.5)]"
              >
                <div className="relative aspect-[16/7] min-h-44">
                  <Image
                    src={game.image}
                    alt={game.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162B24] via-[#162B24]/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-md border border-[#E6C200]/30 bg-[#0F2620]/75 px-3 py-1 text-xs font-semibold text-[#E6C200]">
                    {game.status}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#F0F0F0] group-hover:text-[#E6C200] transition-colors">
                    {game.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#B0B0B0]">{game.description}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#E6C200]/80">
                    {game.guideSlugs.length} guides
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#0A1F19]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#F0F0F0]">Latest Guides</h2>
              <p className="mt-2 text-sm text-[#B0B0B0]">
                Post-launch needs first: fixes, settings, beginner help, release questions, and core strategy.
              </p>
            </div>
            <Link href="/guides" className="text-sm text-[#E6C200] hover:underline">
              View all
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuideSlugs.map((slug) => {
              const guide = guides[slug];
              return (
                <Link
                  key={slug}
                  href={`/guides/${slug}`}
                  className="group rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(230,194,0,0.5)]"
                >
                  <span className="inline-flex rounded-md bg-[rgba(230,194,0,0.15)] px-2.5 py-0.5 text-xs font-medium text-[#E6C200]">
                    {guide.gameTitle ?? 'Mechanicus II'} · {guide.tag}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-[#F0F0F0] group-hover:text-[#E6C200] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#B0B0B0] leading-relaxed">{guide.excerpt}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#0F2620]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#F0F0F0] mb-8">Tools</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(230,194,0,0.5)]"
              >
                <h3 className="text-lg font-semibold text-[#F0F0F0] group-hover:text-[#E6C200] transition-colors">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm text-[#B0B0B0] leading-relaxed">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
