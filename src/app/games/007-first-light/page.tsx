import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { games } from '@/lib/games';
import { guides } from '@/lib/guides';
import { SITE_URL, getBreadcrumbSchema, getFAQSchema, getItemListSchema } from '@/lib/schema';

const guideSlugs = games['007-first-light'].guideSlugs;

const problemRoutes = [
  {
    label: 'Game will not launch',
    slug: '007-first-light-crashing-not-launching-fix',
    detail: 'Crashes, black screen, file verification, overlays, and official known issues.',
  },
  {
    label: 'Best PC settings',
    slug: '007-first-light-best-settings',
    detail: 'Stable FPS, DLSS/FSR, graphics tradeoffs, controls, and display caveats.',
  },
  {
    label: 'Steam Deck setup',
    slug: '007-first-light-steam-deck-settings',
    detail: 'Handheld FPS caps, battery, heat, FSR, and compatibility caveats.',
  },
  {
    label: 'Early access locked',
    slug: '007-first-light-deluxe-edition-early-access',
    detail: 'Edition entitlement, third-party keys, regional timing, and upgrade checks.',
  },
  {
    label: 'Beginner tips',
    slug: '007-first-light-beginner-guide',
    detail: 'First-hour checklist, stealth rhythm, combat recovery, and common mistakes.',
  },
  {
    label: 'Mission help',
    slug: '007-first-light-mission-walkthrough',
    detail: 'Spoiler-light stuck-point help, route planning, and cleanup workflow.',
  },
  {
    label: 'Collectibles',
    slug: '007-first-light-collectibles-locations',
    detail: 'Spoiler-safe tracking, cleanup order, and verified-location policy.',
  },
  {
    label: 'TacSim',
    slug: '007-first-light-tacsim-challenges-clearance-level',
    detail: 'Challenge practice order, clearance caveats, and completion planning.',
  },
  {
    label: 'Worth buying?',
    slug: '007-first-light-review-roundup',
    detail: 'Buy/wait advice, review themes, performance concerns, and expectation setting.',
  },
];

const faqs = [
  {
    question: 'What is 007 First Light?',
    answer:
      '007 First Light is IO Interactive\'s James Bond action-adventure game focused on a younger Bond origin story.',
  },
  {
    question: 'When did 007 First Light launch?',
    answer:
      'The Steam page lists 007 First Light for May 27, 2026. Exact unlock timing depends on platform, region, and edition.',
  },
  {
    question: 'What guides should new players read first?',
    answer:
      'Start with the crash fix page if the game will not open, best settings before long sessions, beginner guide for first-hour play, and release or Deluxe pages for access questions.',
  },
  {
    question: 'How does this hub avoid thin or spammy guide pages?',
    answer:
      'Each 007 guide is mapped to a real player task, includes a quick answer, uses practical tables or checklists, links sources, and labels unverified community reports clearly.',
  },
  {
    question: 'Is this an official 007 First Light site?',
    answer:
      'No. Nanobananas Game Guides is an unofficial fan-made guide hub and is not affiliated with IO Interactive or the James Bond rights holders.',
  },
];

export const metadata: Metadata = {
  title: '007 First Light Guides Hub - Walkthroughs, Settings & Fixes',
  description:
    '007 First Light guide hub with crash fixes, PC and Steam Deck settings, early access help, mission guidance, collectibles, TacSim, gadgets, achievements, and review context.',
  alternates: {
    canonical: `${SITE_URL}/games/007-first-light`,
  },
  openGraph: {
    title: '007 First Light Guides Hub',
    description:
      'Crash fixes, settings, early access help, walkthroughs, collectibles, TacSim, gadgets, achievements, and review context.',
    type: 'website',
  },
};

export default function FirstLightHubPage() {
  const game = games['007-first-light'];
  const guideItems = guideSlugs.map((slug) => guides[slug]);

  const schemas = [
    getBreadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Games', url: `${SITE_URL}/games` },
      { name: '007 First Light', url: `${SITE_URL}/games/007-first-light` },
    ]),
    getItemListSchema({
      name: '007 First Light guides',
      description: 'Launch and evergreen 007 First Light guides from Nanobananas Game Guides.',
      items: guideItems.map((guide) => ({
        name: guide.title,
        url: `${SITE_URL}/guides/${guide.slug}`,
      })),
    }),
    getFAQSchema(faqs),
  ];

  return (
    <div>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="relative overflow-hidden border-b border-[rgba(230,194,0,0.12)]">
        <div className="absolute inset-0">
          <Image
            src={game.image}
            alt={game.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06130f]/70 via-[#0F2620]/70 to-[#0F2620]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link href="/games" className="text-sm text-[#E6C200] hover:underline">
            Back to games
          </Link>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E6C200]">
              Helpful launch guide cluster
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-bold text-[#F0F0F0] leading-tight">
              007 First Light Guides Hub
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#D0D6D2] leading-relaxed">
              Start from the problem you have now: crashes, best settings, early access, Steam
              Deck, mission help, collectibles, TacSim, achievements, or whether IO
              Interactive&apos;s Bond game fits what you want.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['May 27, 2026 Steam date', `${guideItems.length} guide pages`, 'Unverified claims labeled'].map((item) => (
                <div key={item} className="rounded-lg border border-[#E6C200]/20 bg-[#0F2620]/65 p-3">
                  <p className="text-sm font-semibold text-[#F0F0F0]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F2620] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="text-2xl font-bold text-[#F0F0F0]">Start by Your Problem</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#B0B0B0]">
                The hub is organized around player tasks instead of keyword shells. Pick the
                route that matches what you need right now; each page has a quick answer,
                tables or checklists, FAQ, source links, and verification labels.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {problemRoutes.map((route) => {
                const guide = guides[route.slug];
                return (
                  <Link
                    key={route.slug}
                    href={`/guides/${route.slug}`}
                    className="rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-4 transition-colors hover:border-[#E6C200]/60"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6C200]">
                      {guide.tag}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-[#F0F0F0]">{route.label}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#B0B0B0]">{route.detail}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A1F19] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: 'Official facts first',
                text: 'Release, platform, edition, and support claims point back to Steam, IOI support, platform stores, or review coverage.',
              },
              {
                title: 'Community reports labeled',
                text: 'Steam, Reddit, and YouTube demand shapes page priorities, but unconfirmed fixes and counts are marked clearly.',
              },
              {
                title: 'No fake completeness',
                text: 'Mission names, collectible counts, trophies, and TacSim rewards are not invented when source data is not verified.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-[rgba(230,194,0,0.18)] bg-[#162B24] p-5">
                <h2 className="text-base font-semibold text-[#E6C200]">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#B0B0B0]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1F19] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#F0F0F0] mb-8">All 007 First Light Guides</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guideItems.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group overflow-hidden rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(230,194,0,0.5)]"
              >
                <div className="relative aspect-video">
                  <Image
                    src={guide.thumbnail}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162B24] via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-md bg-[#E6C200] px-2.5 py-0.5 text-xs font-semibold text-[#0F2620]">
                    {guide.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#F0F0F0] group-hover:text-[#E6C200] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#B0B0B0] leading-relaxed line-clamp-3">
                    {guide.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F2620] py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#F0F0F0] mb-6">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-5">
                <h3 className="text-base font-semibold text-[#E6C200]">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#B0B0B0]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
