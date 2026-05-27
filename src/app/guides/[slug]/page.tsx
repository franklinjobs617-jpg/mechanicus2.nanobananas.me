import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { guides, guideSlugs, GUIDE_NOTICE } from '@/lib/guides';
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
            {guide.gameTitle ?? 'Mechanicus II'} · {guide.tag}
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
        </div>

        <nav className="mb-8 rounded-lg border border-[rgba(230,194,0,0.15)] bg-[#162B24]/60 p-4">
          <h2 className="text-sm font-semibold text-[#E6C200] mb-3 tracking-wide uppercase">
            Table of Contents
          </h2>
          <ol className="space-y-1.5">
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
