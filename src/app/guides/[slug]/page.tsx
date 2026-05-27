import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { guides, guideSlugs, GUIDE_NOTICE, type GuideClaimStatus } from '@/lib/guides';
import { SITE_URL, getArticleSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) return { title: 'Guide Not Found' };

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: 'article',
      url: `${SITE_URL}/guides/${guide.slug}`,
      images: [
        {
          url: guide.thumbnail,
          alt: guide.title,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

const statusLabels: Record<GuideClaimStatus, string> = {
  official: 'Official',
  reviewed: 'Reviewed',
  community: 'Community signal',
  unverified: 'Needs verification',
};

const statusClasses: Record<GuideClaimStatus, string> = {
  official: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-100',
  reviewed: 'border-sky-300/30 bg-sky-300/10 text-sky-100',
  community: 'border-[#E6C200]/30 bg-[#E6C200]/10 text-[#F6E68A]',
  unverified: 'border-orange-300/30 bg-orange-300/10 text-orange-100',
};

function StatusBadge({ status }: { status?: GuideClaimStatus }) {
  if (!status) return null;

  return (
    <span className={`inline-flex rounded-md border px-2 py-0.5 text-[11px] font-semibold ${statusClasses[status]}`}>
      {statusLabels[status]}
    </span>
  );
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guides[slug];

  if (!guide) {
    notFound();
  }

  const gameHubHref = guide.gameSlug === '007-first-light' ? '/games/007-first-light' : '/guides';
  const schemas = [
    getArticleSchema({
      title: guide.title,
      description: guide.metaDescription,
      slug: guide.slug,
      datePublished: guide.lastUpdated ?? '2025-05-22',
      dateModified: guide.lastUpdated,
      gameTitle: guide.gameTitle,
    }),
    getBreadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Guides', url: `${SITE_URL}/guides` },
      { name: guide.title, url: `${SITE_URL}/guides/${guide.slug}` },
    ]),
    ...(guide.faqs?.length ? [getFAQSchema(guide.faqs)] : []),
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Link
        href="/guides"
        className="text-sm text-[#E6C200] hover:underline mb-6 inline-flex items-center gap-1"
      >
        Back to Guides
      </Link>

      <article>
        <div className="relative w-full aspect-[16/7] rounded-lg overflow-hidden mb-8 border border-[rgba(230,194,0,0.1)]">
          <Image
            src={guide.thumbnail}
            alt={guide.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2620] via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-md bg-[#E6C200] px-2.5 py-0.5 text-xs font-semibold text-[#0F2620]">
            {guide.gameTitle ?? 'Mechanicus II'} - {guide.tag}
          </span>
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E6C200]">
          {guide.primaryKeyword ?? guide.tag}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#F0F0F0] tracking-wide mb-4">
          {guide.title}
        </h1>
        <p className="text-base leading-relaxed text-[#B0B0B0] mb-6">{guide.excerpt}</p>

        <div className="mb-8 flex flex-wrap gap-3 text-xs text-[#B0B0B0]">
          <Link
            href={gameHubHref}
            className="rounded-md border border-[#E6C200]/20 bg-[#162B24] px-3 py-1.5 text-[#E6C200] hover:border-[#E6C200]/50"
          >
            {guide.gameTitle ?? 'Mechanicus II'} hub
          </Link>
          {guide.lastUpdated && (
            <span className="rounded-md border border-[#E6C200]/20 bg-[#162B24] px-3 py-1.5">
              Updated {guide.lastUpdated}
            </span>
          )}
          {guide.lastVerified && (
            <span className="rounded-md border border-[#E6C200]/20 bg-[#162B24] px-3 py-1.5">
              Verified {guide.lastVerified}
            </span>
          )}
          <StatusBadge status={guide.claimStatus} />
        </div>

        {guide.quickAnswer && (
          <section className="mb-8 rounded-lg border border-[#E6C200]/30 bg-[#162B24] p-5 shadow-lg shadow-black/10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E6C200]">
              Quick Answer
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#F0F0F0]">{guide.quickAnswer}</p>
          </section>
        )}

        {guide.keyFacts?.length ? (
          <section className="mb-8 grid gap-3 sm:grid-cols-2">
            {guide.keyFacts.map((fact) => (
              <div key={`${fact.label}-${fact.value}`} className="rounded-lg border border-[rgba(230,194,0,0.16)] bg-[#162B24]/70 p-4">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E6C200]">
                    {fact.label}
                  </h2>
                  <StatusBadge status={fact.status} />
                </div>
                <p className="mt-2 text-sm font-semibold text-[#F0F0F0]">{fact.value}</p>
                {fact.note && <p className="mt-2 text-xs leading-relaxed text-[#B0B0B0]">{fact.note}</p>}
              </div>
            ))}
          </section>
        ) : null}

        <nav className="mb-8 rounded-lg border border-[rgba(230,194,0,0.15)] bg-[#162B24]/60 p-4">
          <h2 className="text-sm font-semibold text-[#E6C200] mb-3 tracking-wide uppercase">
            Table of Contents
          </h2>
          <ol className="space-y-1.5">
            {guide.tables?.map((table, idx) => (
              <li key={`table-${table.title}`}>
                <a
                  href={`#table-${idx}`}
                  className="text-sm text-[#B0B0B0] hover:text-[#E6C200] transition-colors"
                >
                  Table: {table.title}
                </a>
              </li>
            ))}
            {guide.checklists?.map((checklist, idx) => (
              <li key={`checklist-${checklist.title}`}>
                <a
                  href={`#checklist-${idx}`}
                  className="text-sm text-[#B0B0B0] hover:text-[#E6C200] transition-colors"
                >
                  Checklist: {checklist.title}
                </a>
              </li>
            ))}
            {guide.sections.map((section, idx) => (
              <li key={section.heading}>
                <a
                  href={`#section-${idx}`}
                  className="text-sm text-[#B0B0B0] hover:text-[#E6C200] transition-colors"
                >
                  {idx + 1}. {section.heading}
                </a>
              </li>
            ))}
            {guide.faqs?.length ? (
              <li>
                <a href="#faq" className="text-sm text-[#B0B0B0] hover:text-[#E6C200] transition-colors">
                  {guide.sections.length + 1}. FAQ
                </a>
              </li>
            ) : null}
          </ol>
        </nav>

        {guide.warnings?.length ? (
          <section className="mb-8 space-y-3">
            {guide.warnings.map((warning) => (
              <div
                key={warning.title}
                className={`rounded-lg border p-4 ${
                  warning.severity === 'danger'
                    ? 'border-red-300/30 bg-red-950/30'
                    : warning.severity === 'warning'
                      ? 'border-orange-300/30 bg-orange-950/25'
                      : 'border-[#E6C200]/25 bg-[#162B24]'
                }`}
              >
                <h2 className="text-sm font-semibold text-[#F0F0F0]">{warning.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#B0B0B0]">{warning.body}</p>
              </div>
            ))}
          </section>
        ) : null}

        {guide.tables?.length ? (
          <div className="space-y-8">
            {guide.tables.map((table, tableIdx) => (
              <section key={table.title} id={`table-${tableIdx}`} className="scroll-mt-20">
                <h2 className="text-xl font-bold text-[#E6C200] mb-3 tracking-wide">
                  {table.title}
                </h2>
                {table.description && (
                  <p className="mb-4 text-sm leading-relaxed text-[#B0B0B0]">{table.description}</p>
                )}
                <div className="overflow-x-auto rounded-lg border border-[rgba(230,194,0,0.15)] bg-[#162B24]/70">
                  <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                    <thead className="bg-[#0F2620] text-[#E6C200]">
                      <tr>
                        {table.headers.map((header) => (
                          <th key={header} scope="col" className="border-b border-[#E6C200]/15 px-4 py-3 font-semibold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, rowIdx) => (
                        <tr key={`${table.title}-${rowIdx}`} className="border-b border-[#E6C200]/10 last:border-b-0">
                          {row.map((cell, cellIdx) => (
                            <td key={`${table.title}-${rowIdx}-${cellIdx}`} className="px-4 py-3 align-top leading-relaxed text-[#B0B0B0]">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {table.caption && (
                  <p className="mt-2 text-xs leading-relaxed text-[#B0B0B0]/70">{table.caption}</p>
                )}
              </section>
            ))}
          </div>
        ) : null}

        {guide.checklists?.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {guide.checklists.map((checklist, checklistIdx) => (
              <section
                key={checklist.title}
                id={`checklist-${checklistIdx}`}
                className="scroll-mt-20 rounded-lg border border-[rgba(230,194,0,0.15)] bg-[#162B24]/70 p-5"
              >
                <h2 className="text-lg font-bold text-[#E6C200]">{checklist.title}</h2>
                {checklist.description && (
                  <p className="mt-2 text-sm leading-relaxed text-[#B0B0B0]">{checklist.description}</p>
                )}
                <ul className="mt-4 space-y-2">
                  {checklist.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#B0B0B0]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E6C200]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : null}

        {guide.steps?.length ? (
          <div className="mt-8 space-y-5">
            {guide.steps.map((stepGroup) => (
              <section key={stepGroup.title} className="rounded-lg border border-[rgba(230,194,0,0.15)] bg-[#0A1F19] p-5">
                <h2 className="text-lg font-bold text-[#E6C200]">{stepGroup.title}</h2>
                {stepGroup.description && (
                  <p className="mt-2 text-sm leading-relaxed text-[#B0B0B0]">{stepGroup.description}</p>
                )}
                <ol className="mt-4 space-y-3">
                  {stepGroup.items.map((item, index) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#B0B0B0]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#E6C200] text-xs font-bold text-[#0F2620]">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        ) : null}

        <div className="mt-8">
          {guide.sections.map((section, sIdx) => (
            <div key={section.heading} id={`section-${sIdx}`} className="scroll-mt-20">
              <h2 className="text-xl font-bold text-[#E6C200] mt-10 mb-4 tracking-wide">
                {section.heading}
              </h2>

              {section.image && (
                <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden mb-6 border border-[rgba(230,194,0,0.1)]">
                  <Image
                    src={section.image}
                    alt={section.imageAlt ?? section.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2620]/60 via-transparent to-transparent" />
                </div>
              )}

              {section.paragraphs.map((para) => (
                <p key={para} className="text-[#B0B0B0] leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              {sIdx < guide.sections.length - 1 && (
                <div className="flex items-center gap-3 my-8">
                  <div className="flex-1 h-px bg-[rgba(230,194,0,0.1)]" />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#E6C200]/40" />
                  <div className="flex-1 h-px bg-[rgba(230,194,0,0.1)]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {guide.spoilerSections?.length ? (
          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-bold text-[#E6C200] tracking-wide">Spoiler-Safe Details</h2>
            {guide.spoilerSections.map((spoiler) => (
              <details key={spoiler.title} className="rounded-lg border border-orange-300/25 bg-orange-950/20 p-5">
                <summary className="cursor-pointer text-base font-semibold text-[#F0F0F0]">
                  {spoiler.title}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#B0B0B0]">{spoiler.summary}</p>
                {spoiler.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm leading-relaxed text-[#B0B0B0]">
                    {paragraph}
                  </p>
                ))}
                {spoiler.items?.length ? (
                  <ul className="mt-4 space-y-2">
                    {spoiler.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#B0B0B0]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-200" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </details>
            ))}
          </section>
        ) : null}

        {guide.faqs?.length ? (
          <section id="faq" className="scroll-mt-20 mt-12">
            <h2 className="text-xl font-bold text-[#E6C200] mb-4 tracking-wide">FAQ</h2>
            <div className="space-y-4">
              {guide.faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg border border-[rgba(230,194,0,0.15)] bg-[#162B24] p-5">
                  <h3 className="text-base font-semibold text-[#F0F0F0]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#B0B0B0]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {guide.sources?.length ? (
          <section className="mt-12 rounded-lg border border-[rgba(230,194,0,0.15)] bg-[#162B24]/70 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E6C200] mb-3">
              Sources and Further Reading
            </h2>
            {guide.sourceNotes?.length ? (
              <div className="mb-4 space-y-2">
                {guide.sourceNotes.map((note) => (
                  <p key={note} className="text-xs leading-relaxed text-[#B0B0B0]/80">
                    {note}
                  </p>
                ))}
              </div>
            ) : null}
            <ul className="space-y-2">
              {guide.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#B0B0B0] hover:text-[#E6C200] hover:underline"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="mt-12 pt-6 border-t border-[rgba(230,194,0,0.1)]">
          <p className="text-xs text-[#B0B0B0]/60 italic">{GUIDE_NOTICE}</p>
        </div>
      </article>

      {guide.relatedGuideSlugs?.length ? (
        <div className="mt-8 rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-5">
          <h2 className="text-sm font-semibold text-[#E6C200] mb-3">Related Guides</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {guide.relatedGuideSlugs.map((relatedSlug) => {
              const related = guides[relatedSlug];
              return (
                <Link
                  key={relatedSlug}
                  href={`/guides/${relatedSlug}`}
                  className="rounded-md border border-[#E6C200]/10 bg-[#0F2620] p-3 text-sm text-[#B0B0B0] hover:border-[#E6C200]/40 hover:text-[#E6C200]"
                >
                  {related.title}
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-5">
          <h2 className="text-sm font-semibold text-[#E6C200] mb-2">Related Tools</h2>
          <p className="text-sm text-[#B0B0B0] mb-3">
            Try our Mechanicus II crafting calculator and build planner to put these strategies into practice.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/tools/crafting-calculator" className="text-sm text-[#E6C200] hover:underline">
              Crafting Calculator
            </Link>
            <Link href="/tools/build-planner" className="text-sm text-[#E6C200] hover:underline">
              Build Planner
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
