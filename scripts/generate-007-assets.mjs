import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from '../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js';

const outDir = path.resolve('public');

const assets = [
  ['007-first-light-hero.webp', 'FIRST LIGHT', 'GUIDE HUB', '#0b1d1b', '#d6b657', 1400, 650],
  ['007-beginner-guide.webp', 'FIELD BASICS', 'STEALTH / COMBAT / PREP', '#10241f', '#e6c200', 960, 540],
  ['007-mission-walkthrough.webp', 'MISSION BOARD', 'ROUTES / OBJECTIVES / EXITS', '#141f24', '#d8b65a', 960, 540],
  ['007-best-settings.webp', 'PC SETTINGS', 'FPS / GRAPHICS / CONTROLS', '#0c2230', '#73d0ff', 960, 540],
  ['007-achievements.webp', 'TROPHY CASE', 'CHALLENGES / CLEANUP', '#1d1a26', '#e6c200', 960, 540],
  ['007-release-platforms.webp', 'GLOBAL LAUNCH', 'DATE / PLATFORMS / ACCESS', '#102338', '#e8d7a0', 960, 540],
  ['007-weapons-gadgets.webp', 'GADGET KIT', 'TOOLS / DISTRACTIONS / WEAPONS', '#17231f', '#65d2a5', 960, 540],
  ['007-review-roundup.webp', 'REVIEW DESK', 'PRAISE / CONCERNS / VALUE', '#201d1a', '#e6c200', 960, 540],
  ['007-crash-fix.webp', 'STARTUP FIX', 'CRASHES / STUTTER / LAUNCH', '#251d20', '#ff7a67', 960, 540],
  ['007-deluxe-edition.webp', 'DELUXE ACCESS', 'EDITION / BONUS / TIMING', '#211b16', '#e6c200', 960, 540],
  ['007-how-long.webp', 'MISSION TIMER', 'LENGTH / REPLAY / CLEANUP', '#132226', '#a7e6ff', 960, 540],
  ['007-hitman-comparison.webp', 'STEALTH OR LOUD', 'SANDBOX / CINEMATIC / HYBRID', '#151d23', '#e6c200', 960, 540],
];

function escapeXml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };
    return entities[char];
  });
}

function svg({ title, subtitle, bg, accent, width, height }) {
  const titleText = escapeXml(title);
  const subtitleText = escapeXml(subtitle);
  const safeAccent = escapeXml(accent);

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bg}"/>
      <stop offset="0.62" stop-color="#0f2620"/>
      <stop offset="1" stop-color="#06110f"/>
    </linearGradient>
    <radialGradient id="glow" cx="72%" cy="36%" r="55%">
      <stop offset="0" stop-color="${safeAccent}" stop-opacity="0.24"/>
      <stop offset="0.48" stop-color="${safeAccent}" stop-opacity="0.08"/>
      <stop offset="1" stop-color="${safeAccent}" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="22" stdDeviation="20" flood-color="#000" flood-opacity="0.38"/>
    </filter>
    <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse">
      <path d="M46 0H0V46" fill="none" stroke="${safeAccent}" stroke-opacity="0.08" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect width="${width}" height="${height}" fill="url(#grid)" opacity="0.72"/>
  <rect width="${width}" height="${height}" fill="url(#glow)"/>

  <g opacity="0.2">
    <path d="M0 ${height * 0.75} C ${width * 0.22} ${height * 0.6}, ${width * 0.36} ${height * 0.9}, ${width * 0.56} ${height * 0.68} S ${width * 0.86} ${height * 0.46}, ${width} ${height * 0.58} L ${width} ${height} L 0 ${height} Z" fill="${safeAccent}"/>
  </g>

  <g transform="translate(${width * 0.12} ${height * 0.18})" filter="url(#shadow)">
    <rect x="0" y="0" width="${width * 0.52}" height="${height * 0.55}" rx="18" fill="#081410" fill-opacity="0.68" stroke="${safeAccent}" stroke-opacity="0.28"/>
    <path d="M38 90 H ${width * 0.46}" stroke="${safeAccent}" stroke-opacity="0.32" stroke-width="2"/>
    <path d="M38 128 H ${width * 0.38}" stroke="#f0f0f0" stroke-opacity="0.16" stroke-width="2"/>
    <path d="M38 166 H ${width * 0.42}" stroke="#f0f0f0" stroke-opacity="0.16" stroke-width="2"/>
    <path d="M38 204 H ${width * 0.32}" stroke="#f0f0f0" stroke-opacity="0.16" stroke-width="2"/>
    <circle cx="${width * 0.44}" cy="${height * 0.37}" r="54" fill="none" stroke="${safeAccent}" stroke-opacity="0.48" stroke-width="3"/>
    <path d="M${width * 0.44 - 34} ${height * 0.37} h68 M${width * 0.44} ${height * 0.37 - 34} v68" stroke="${safeAccent}" stroke-opacity="0.38" stroke-width="2"/>
  </g>

  <g transform="translate(${width * 0.69} ${height * 0.2})" filter="url(#shadow)">
    <path d="M86 72 C86 28 120 0 164 0 C208 0 242 28 242 72 C242 112 221 142 200 159 L226 286 H102 L128 159 C107 142 86 112 86 72Z" fill="#07100e" fill-opacity="0.78" stroke="${safeAccent}" stroke-opacity="0.24"/>
    <path d="M74 306 C91 238 126 204 164 204 C202 204 237 238 254 306 Z" fill="#091713" fill-opacity="0.9" stroke="${safeAccent}" stroke-opacity="0.22"/>
    <path d="M132 216 L164 260 L196 216" fill="none" stroke="${safeAccent}" stroke-opacity="0.55" stroke-width="4"/>
  </g>

  <g transform="translate(${width * 0.12} ${height * 0.77})">
    <text x="0" y="0" fill="#f0f0f0" font-family="Inter, Arial, sans-serif" font-size="${Math.round(width * 0.055)}" font-weight="800" letter-spacing="3">${titleText}</text>
    <text x="2" y="42" fill="${safeAccent}" font-family="Inter, Arial, sans-serif" font-size="${Math.round(width * 0.018)}" font-weight="700" letter-spacing="4">${subtitleText}</text>
  </g>
</svg>`;
}

await fs.mkdir(outDir, { recursive: true });

for (const [filename, title, subtitle, bg, accent, width, height] of assets) {
  const svgBuffer = Buffer.from(svg({ title, subtitle, bg, accent, width, height }));
  await sharp(svgBuffer)
    .webp({ quality: filename.includes('hero') ? 76 : 72, effort: 6 })
    .toFile(path.join(outDir, filename));
}

const rows = await Promise.all(
  assets.map(async ([filename]) => {
    const stat = await fs.stat(path.join(outDir, filename));
    return `${filename}: ${Math.round(stat.size / 1024)} KB`;
  })
);

console.log(rows.join('\n'));
