import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from '../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js';

const outDir = path.resolve('public');
const tmpDir = path.resolve('.tmp-007-assets');

const outputs = [
  {
    filename: '007-first-light-hero.webp',
    source: 'https://base64pro.top/games/007-first-light/hero.webp',
    width: 1400,
    height: 650,
  },
  {
    filename: '007-beginner-guide.webp',
    source: 'https://enjoy4game.com/games/007-first-light/agent-closeup.webp',
    width: 960,
    height: 540,
  },
  {
    filename: '007-mission-walkthrough.webp',
    source: 'https://enjoy4game.com/games/007-first-light/guide/mission-briefing.webp',
    width: 960,
    height: 540,
  },
  {
    filename: '007-best-settings.webp',
    source: 'https://enjoy4game.com/games/007-first-light/city-stealth.webp',
    width: 960,
    height: 540,
  },
  {
    filename: '007-achievements.webp',
    source: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3768760/d1a352d38355d4a693aa80e1aa6139fb079da1a3/capsule_616x353_alt_assets_0.jpg?t=1779804342',
    width: 960,
    height: 540,
  },
  {
    filename: '007-release-platforms.webp',
    source: 'https://enjoy4game.com/games/007-first-light/casino.webp',
    width: 960,
    height: 540,
  },
  {
    filename: '007-weapons-gadgets.webp',
    source: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3768760/extras_big/db7aec77bd0d4e98b76664c51250d030.webp?t=1779804342',
    width: 960,
    height: 540,
  },
  {
    filename: '007-review-roundup.webp',
    source: 'https://enjoy4game.com/games/007-first-light/action-scene.webp',
    width: 960,
    height: 540,
  },
  {
    filename: '007-crash-fix.webp',
    source: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3768760/e8704084c7339af80e412057d6d02972aff81c79/page_bg_raw.jpg?t=1779804342',
    width: 960,
    height: 540,
  },
  {
    filename: '007-deluxe-edition.webp',
    source: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3768760/dbe86ebd2edb4c77d113e9e2feefeb90189fabc9/header_alt_assets_1.jpg?t=1779804342',
    width: 960,
    height: 540,
  },
  {
    filename: '007-how-long.webp',
    source: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/257340932/9d8640497b3627c03fdcf125cc2bbe665c446761/movie_600x337.jpg?t=1779393861',
    width: 960,
    height: 540,
  },
  {
    filename: '007-hitman-comparison.webp',
    source: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/257323012/8e0722136dbe229fbadeb8efee8876231623a1cc/movie_600x337.jpg?t=1777391339',
    width: 960,
    height: 540,
  },
  {
    filename: '007-steam-deck-settings.webp',
    source: 'https://cdn.fastly.steamstatic.com/steamcommunity/public/images/apps/3768760/15c1c53eecaa1b6b783c79a20fa41358f1c87760.jpg',
    width: 960,
    height: 540,
  },
  {
    filename: '007-collectibles-locations.webp',
    source: 'https://cdn.fastly.steamstatic.com/steamcommunity/public/images/apps/3768760/c5dff90146c86da3743a0b8fd8c03a60cedb0587.jpg',
    width: 960,
    height: 540,
  },
  {
    filename: '007-tacsim-challenges.webp',
    source: 'https://cdn.fastly.steamstatic.com/steamcommunity/public/images/apps/3768760/e542f0685d2cc8a2c1fc389630fa16076f4dac88.jpg',
    width: 960,
    height: 540,
  },
];

async function download(url, filename) {
  const response = await fetch(url, {
    headers: {
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36',
      referer: url.includes('steamstatic') ? 'https://store.steampowered.com/' : new URL(url).origin,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(path.join(tmpDir, filename), buffer);
  return buffer;
}

await fs.mkdir(outDir, { recursive: true });
await fs.mkdir(tmpDir, { recursive: true });

const seenSources = new Set();
for (const asset of outputs) {
  if (seenSources.has(asset.source)) {
    throw new Error(`Duplicate source is not allowed: ${asset.source}`);
  }
  seenSources.add(asset.source);

  const sourceBuffer = await download(asset.source, `${asset.filename}.source`);
  await sharp(sourceBuffer)
    .resize(asset.width, asset.height, { fit: 'cover', position: 'attention' })
    .webp({ quality: asset.filename.includes('hero') ? 78 : 76, effort: 6 })
    .toFile(path.join(outDir, asset.filename));
}

await fs.rm(tmpDir, { recursive: true, force: true });

const rows = await Promise.all(
  outputs.map(async ({ filename, source }) => {
    const stat = await fs.stat(path.join(outDir, filename));
    const meta = await sharp(path.join(outDir, filename)).metadata();
    return `${filename}: ${Math.round(stat.size / 1024)} KB, ${meta.width}x${meta.height}, source=${source}`;
  })
);

console.log(rows.join('\n'));
