export const SITE_URL = 'https://mechanicus2.nanobananas.me';
export const SITE_NAME = 'Mechanicus II Guide & Tools';

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Unofficial fan-made guide and tools site for Warhammer 40,000: Mechanicus II. Crafting calculator, build planner, and strategy guides.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/guides?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getArticleSchema(params: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: `${SITE_URL}/guides/${params.slug}`,
    datePublished: params.datePublished,
    dateModified: params.datePublished,
    author: {
      '@type': 'Organization',
      name: 'Mechanicus II Guide',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mechanicus II Guide',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/guides/${params.slug}`,
    },
  };
}

export function getSoftwareApplicationSchema(params: {
  name: string;
  description: string;
  slug: string;
  applicationCategory: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: params.name,
    description: params.description,
    url: `${SITE_URL}/tools/${params.slug}`,
    applicationCategory: params.applicationCategory,
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
