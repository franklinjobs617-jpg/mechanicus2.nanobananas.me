import { firstLightGuideSlugs } from './007-guides';

export interface GameData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  status: string;
  platforms: string;
  guideSlugs: string[];
}

export const games: Record<string, GameData> = {
  '007-first-light': {
    slug: '007-first-light',
    title: '007 First Light',
    shortTitle: '007 First Light',
    description:
      'Launch guides, troubleshooting, settings, mission help, gadgets, achievements, and review context for IO Interactive\'s James Bond action-adventure.',
    href: '/games/007-first-light',
    image: '/007-first-light-hero.webp',
    imageAlt: 'Original spy thriller city skyline with a silhouetted agent and mission dossier',
    status: 'Launch cluster',
    platforms: 'PC and current-generation platforms',
    guideSlugs: firstLightGuideSlugs,
  },
  'mechanicus-ii': {
    slug: 'mechanicus-ii',
    title: 'Warhammer 40,000: Mechanicus II',
    shortTitle: 'Mechanicus II',
    description:
      'Strategy guides, crafting help, faction explainers, build planning, and campaign resources for the Mechanicus II vertical.',
    href: '/guides',
    image: '/hero-banner.webp',
    imageAlt: 'Mechanicus II guide and tools dark mechanical themed illustration',
    status: 'Existing guide vertical',
    platforms: 'PC and console strategy players',
    guideSlugs: [
      'beginner-guide',
      'factions-introduction',
      'best-units',
      'tech-priest-builds',
      'necron-campaign-walkthrough',
    ],
  },
};

export const gameSlugs = Object.keys(games);
