import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { guides, guideSlugs, GUIDE_NOTICE } from '@/lib/guides';
import { getArticleSchema } from '@/lib/schema';

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
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: 'article',
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

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getArticleSchema({
            title: guide.title,
            description: guide.metaDescription,
            slug: guide.slug,
            datePublished: '2025-05-22',
          })),
        }}
      />
      <Link
        href="/guides"
        className="text-sm text-[#E6C200] hover:underline mb-6 inline-flex items-center gap-1"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Guides
      </Link>

      <article>
        {/* Hero image */}
        <div className="relative w-full aspect-[16/7] rounded-lg overflow-hidden mb-8 border border-[rgba(230,194,0,0.1)]">
          <Image
            src={guide.thumbnail}
            alt={guide.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2620] via-transparent to-transparent" />
        </div>

        <h1 className="text-3xl font-bold text-[#F0F0F0] tracking-wide mb-4">
          {guide.title}
        </h1>

        {/* Table of Contents */}
        <nav className="mb-8 rounded-lg border border-[rgba(230,194,0,0.15)] bg-[#162B24]/60 p-4">
          <h2 className="text-sm font-semibold text-[#E6C200] mb-3 tracking-wide uppercase">Table of Contents</h2>
          <ol className="space-y-1.5">
            {guide.sections.map((section, idx) => (
              <li key={idx}>
                <a
                  href={`#section-${idx}`}
                  className="text-sm text-[#B0B0B0] hover:text-[#E6C200] transition-colors"
                >
                  {idx + 1}. {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Guide content */}
        <div className="mt-8">
          {guide.sections.map((section, sIdx) => (
            <div key={sIdx} id={`section-${sIdx}`} className="scroll-mt-20">
              <h2 className="text-xl font-bold text-[#E6C200] mt-10 mb-4 tracking-wide">
                {section.heading}
              </h2>

              {/* Section image */}
              {section.image && (
                <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden mb-6 border border-[rgba(230,194,0,0.1)]">
                  <Image
                    src={section.image}
                    alt={section.heading}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2620]/60 via-transparent to-transparent" />
                </div>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-[#B0B0B0] leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              {/* Decorative divider between sections */}
              {sIdx < guide.sections.length - 1 && (
                <div className="flex items-center gap-3 my-8">
                  <div className="flex-1 h-px bg-[rgba(230,194,0,0.1)]" />
                  <svg className="w-4 h-4 text-[#E6C200]/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z" />
                  </svg>
                  <div className="flex-1 h-px bg-[rgba(230,194,0,0.1)]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Guide End Notice */}
        <div className="mt-12 pt-6 border-t border-[rgba(230,194,0,0.1)]">
          <p className="text-xs text-[#B0B0B0]/60 italic">{GUIDE_NOTICE}</p>
        </div>
      </article>

      {/* Related tools link */}
      <div className="mt-8 rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#162B24] p-5">
        <h3 className="text-sm font-semibold text-[#E6C200] mb-2">Related Tools</h3>
        <p className="text-sm text-[#B0B0B0] mb-3">
          Try our crafting calculator and build planner to put these strategies into practice.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tools/crafting-calculator"
            className="text-sm text-[#E6C200] hover:underline"
          >
            Crafting Calculator &rarr;
          </Link>
          <Link
            href="/tools/build-planner"
            className="text-sm text-[#E6C200] hover:underline"
          >
            Build Planner &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
