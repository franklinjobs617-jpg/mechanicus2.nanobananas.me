import type { GuideData, GuideSource } from './guides';

const GAME_SLUG = '007-first-light';
const GAME_TITLE = '007 First Light';
const LAST_UPDATED = '2026-05-27';
const LAST_VERIFIED = '2026-05-27';

const hubSource: GuideSource = {
  label: 'Steam store page',
  href: 'https://store.steampowered.com/app/3768760/007_First_Light/',
};

const launchSource: GuideSource = {
  label: 'GameSpot launch time explainer',
  href: 'https://www.gamespot.com/articles/007-first-light-unlock-times-global-launch-early-access-and-release-time-explained/1100-6540078/',
};

const officialLaunchSource: GuideSource = {
  label: 'IOI support launch and requirements article',
  href: 'https://007firstlight-support.zendesk.com/hc/en-us/articles/35671788109981-007-FIRST-LIGHT-EDITIONS-LAUNCH-DETAILS-AND-SYSTEM-REQUIREMENTS',
};

const officialKnownIssuesSource: GuideSource = {
  label: 'IOI support known issues article',
  href: 'https://007firstlight-support.zendesk.com/hc/en-us/articles/36203682496413-007-First-Light-Known-Issues',
};

const officialTroubleshootingSource: GuideSource = {
  label: 'IOI support PC troubleshooting article',
  href: 'https://007firstlight-support.zendesk.com/hc/en-us/articles/36291908129309-007-First-Light-PC-Troubleshooting-Performance-Launch-Crashes-and-Connection',
};

const steamDiscussionsSource: GuideSource = {
  label: 'Steam community discussions',
  href: 'https://steamcommunity.com/app/3768760/discussions/',
};

const redditReviewSource: GuideSource = {
  label: 'Reddit review discussion',
  href: 'https://www.reddit.com/r/pcgaming/comments/1to4vju/007_first_light_review_thread/',
};

const redditPs5Source: GuideSource = {
  label: 'Reddit PS5 discussion',
  href: 'https://www.reddit.com/r/PS5/comments/1topjs9/007_first_light_official_discussion_thread/',
};

const gamesRadarLengthSource: GuideSource = {
  label: 'GamesRadar length coverage',
  href: 'https://www.gamesradar.com/games/action/007-first-light-how-long-time-to-beat/',
};

const powerPyxSource: GuideSource = {
  label: 'PowerPyx guide index',
  href: 'https://www.powerpyx.com/guide/007-first-light/',
};

const allGuideSlugs = [
  '007-first-light-crashing-not-launching-fix',
  '007-first-light-best-settings',
  '007-first-light-steam-deck-settings',
  '007-first-light-deluxe-edition-early-access',
  '007-first-light-release-date-platforms',
  '007-first-light-beginner-guide',
  '007-first-light-mission-walkthrough',
  '007-first-light-how-long-to-beat-mission-list',
  '007-first-light-collectibles-locations',
  '007-first-light-achievements-trophies',
  '007-first-light-tacsim-challenges-clearance-level',
  '007-first-light-weapons-gadgets',
  '007-first-light-review-roundup',
  '007-first-light-hitman-comparison-stealth-or-loud',
];

const relatedBySlug: Record<string, string[]> = {
  '007-first-light-crashing-not-launching-fix': [
    '007-first-light-best-settings',
    '007-first-light-steam-deck-settings',
    '007-first-light-deluxe-edition-early-access',
    '007-first-light-release-date-platforms',
  ],
  '007-first-light-best-settings': [
    '007-first-light-crashing-not-launching-fix',
    '007-first-light-steam-deck-settings',
    '007-first-light-beginner-guide',
    '007-first-light-release-date-platforms',
  ],
  '007-first-light-steam-deck-settings': [
    '007-first-light-best-settings',
    '007-first-light-crashing-not-launching-fix',
    '007-first-light-release-date-platforms',
    '007-first-light-review-roundup',
  ],
  '007-first-light-deluxe-edition-early-access': [
    '007-first-light-release-date-platforms',
    '007-first-light-crashing-not-launching-fix',
    '007-first-light-review-roundup',
    '007-first-light-best-settings',
  ],
  '007-first-light-release-date-platforms': [
    '007-first-light-deluxe-edition-early-access',
    '007-first-light-best-settings',
    '007-first-light-steam-deck-settings',
    '007-first-light-review-roundup',
  ],
  '007-first-light-beginner-guide': [
    '007-first-light-weapons-gadgets',
    '007-first-light-mission-walkthrough',
    '007-first-light-best-settings',
    '007-first-light-hitman-comparison-stealth-or-loud',
  ],
  '007-first-light-mission-walkthrough': [
    '007-first-light-how-long-to-beat-mission-list',
    '007-first-light-collectibles-locations',
    '007-first-light-achievements-trophies',
    '007-first-light-tacsim-challenges-clearance-level',
  ],
  '007-first-light-how-long-to-beat-mission-list': [
    '007-first-light-mission-walkthrough',
    '007-first-light-collectibles-locations',
    '007-first-light-achievements-trophies',
    '007-first-light-review-roundup',
  ],
  '007-first-light-collectibles-locations': [
    '007-first-light-mission-walkthrough',
    '007-first-light-achievements-trophies',
    '007-first-light-how-long-to-beat-mission-list',
    '007-first-light-tacsim-challenges-clearance-level',
  ],
  '007-first-light-achievements-trophies': [
    '007-first-light-collectibles-locations',
    '007-first-light-tacsim-challenges-clearance-level',
    '007-first-light-mission-walkthrough',
    '007-first-light-how-long-to-beat-mission-list',
  ],
  '007-first-light-tacsim-challenges-clearance-level': [
    '007-first-light-achievements-trophies',
    '007-first-light-mission-walkthrough',
    '007-first-light-weapons-gadgets',
    '007-first-light-beginner-guide',
  ],
  '007-first-light-weapons-gadgets': [
    '007-first-light-beginner-guide',
    '007-first-light-mission-walkthrough',
    '007-first-light-tacsim-challenges-clearance-level',
    '007-first-light-hitman-comparison-stealth-or-loud',
  ],
  '007-first-light-review-roundup': [
    '007-first-light-hitman-comparison-stealth-or-loud',
    '007-first-light-release-date-platforms',
    '007-first-light-best-settings',
    '007-first-light-how-long-to-beat-mission-list',
  ],
  '007-first-light-hitman-comparison-stealth-or-loud': [
    '007-first-light-review-roundup',
    '007-first-light-beginner-guide',
    '007-first-light-mission-walkthrough',
    '007-first-light-weapons-gadgets',
  ],
};

function makeGuide(
  guide: Omit<GuideData, 'gameSlug' | 'gameTitle' | 'lastUpdated' | 'lastVerified' | 'relatedGuideSlugs'>
): GuideData {
  return {
    ...guide,
    gameSlug: GAME_SLUG,
    gameTitle: GAME_TITLE,
    lastUpdated: LAST_UPDATED,
    lastVerified: LAST_VERIFIED,
    relatedGuideSlugs: relatedBySlug[guide.slug] ?? allGuideSlugs.filter((slug) => slug !== guide.slug).slice(0, 4),
  };
}

export const firstLightGuides: Record<string, GuideData> = {
  '007-first-light-crashing-not-launching-fix': makeGuide({
    slug: '007-first-light-crashing-not-launching-fix',
    title: '007 First Light Crashing or Not Launching Fixes',
    metaTitle: '007 First Light Crashing Fix - Not Launching, Stutter & PC Help',
    metaDescription:
      'Fix 007 First Light crashing, not launching, black screen, stutter, and early access problems with safe PC, Steam, PS5, and Xbox steps.',
    primaryKeyword: '007 First Light crashing fix',
    tag: 'Fixes',
    thumbnail: '/007-crash-fix.webp',
    excerpt:
      'A safe troubleshooting page for launch crashes, black screens, stutter, overlay conflicts, file verification, and official known issues.',
    quickAnswer:
      'If 007 First Light will not launch, start with safe checks: restart the platform client, verify files, update GPU drivers, disable overlays, confirm your edition unlock, and avoid unofficial DLLs or executable swaps. Use official support and platform tools before trying community workarounds.',
    claimStatus: 'community',
    keyFacts: [
      { label: 'Safest first action', value: 'Restart client, verify files, update drivers', status: 'official' },
      { label: 'High-risk fixes', value: 'Unofficial DLLs, cracked files, executable replacements', status: 'official' },
      { label: 'Fast-changing area', value: 'Known issues and launch-day patches', status: 'official' },
      { label: 'Community demand', value: 'Steam threads focus on not launching, FSR, DRM, access, and crashes', status: 'community' },
    ],
    warnings: [
      {
        title: 'Do not use random crash fix downloads',
        body:
          'Files from forum mirrors can be unsafe and may break future patches. If you need to reset settings, back up local config files and let the game recreate them.',
        severity: 'danger',
      },
      {
        title: 'Treat DRM claims as unverified unless the publisher confirms them',
        body:
          'Players discuss Denuvo and launch issues, but the practical fix path is still drivers, files, overlays, store access, and official patches.',
        severity: 'warning',
      },
    ],
    tables: [
      {
        title: 'Symptom to Safe Fix Matrix',
        description: 'Work from the left column to the right. Stop when the game launches cleanly.',
        headers: ['Symptom', 'Likely cause', 'Safe first fixes', 'When to escalate'],
        rows: [
          [
            'Play button returns to Play',
            'Store client, missing files, blocked executable',
            'Restart Steam/Epic/console, verify files, check antivirus quarantine',
            'Send DxDiag/support ticket if it repeats after verification',
          ],
          [
            'Black screen on startup',
            'Display mode, driver, overlay, HDR conflict',
            'Disable overlays, update driver, try borderless/fullscreen reset, lower first-run graphics',
            'Wait for official known-issue update if tied to a specific display mode',
          ],
          [
            'Crash during mission or cinematic',
            'Graphics spike, corrupted checkpoint, shader issue',
            'Reload prior checkpoint, lower heavy settings, rebuild shader cache, stop recording software',
            'Report mission name, platform, driver, and save state to support',
          ],
          [
            'Early access not available',
            'Edition entitlement or regional unlock',
            'Confirm edition, restart client, check receipt, compare official unlock time',
            'Contact store support if entitlement is missing from the account',
          ],
          [
            'Stutter after first launch',
            'Shader compilation, storage, background capture',
            'Install on SSD, leave free storage, cap FPS, disable high-bitrate recording',
            'Use PC troubleshooting article if stutter persists after cache rebuild',
          ],
        ],
        caption: 'Official support pages and platform troubleshooting should override community fixes.',
      },
      {
        title: 'Platform-Specific Checks',
        headers: ['Platform', 'Check first', 'Useful next step'],
        rows: [
          ['Steam PC', 'Verify installed files and restart Steam', 'Disable Steam overlay temporarily and test again'],
          ['Epic/other PC store', 'Confirm the edition and install path', 'Run the store repair/verify option'],
          ['PS5', 'Check download completion and restore licenses', 'Restart console and confirm account ownership'],
          ['Xbox', 'Check queue, add-ons, and account entitlement', 'Restart console and review store access status'],
        ],
      },
    ],
    checklists: [
      {
        title: 'Before You Open a Support Ticket',
        items: [
          'Write down the platform, edition, and exact error or crash point.',
          'Record your GPU, driver version, Windows version, CPU, RAM, and install drive type.',
          'Save whether the issue happens before the menu, during loading, or inside a mission.',
          'Attach DxDiag or platform crash information if the official support form asks for it.',
        ],
      },
      {
        title: 'Safe Fix Order',
        items: [
          'Restart the PC or console.',
          'Restart the store client and confirm the unlock window.',
          'Verify or repair game files.',
          'Update GPU drivers and reboot after installing.',
          'Disable overlays and capture tools, then test a clean launch.',
          'Lower graphics or reset local settings only after backing up config files.',
        ],
      },
    ],
    steps: [
      {
        title: 'Clean PC Launch Test',
        description: 'Use this when you cannot tell whether the game or a background tool is causing the crash.',
        items: [
          'Close browsers, capture apps, FPS counters, RGB overlays, and third-party injectors.',
          'Leave only the required store client open.',
          'Launch the game once at default settings.',
          'If it works, re-enable one tool at a time until the conflict appears.',
        ],
      },
    ],
    sourceNotes: [
      'The official support site is Cloudflare-protected in some environments, so this page links to the article and summarizes only safe, general troubleshooting patterns.',
      'Steam and Reddit reports are useful for demand discovery, but individual fixes are not treated as confirmed unless official support or patch notes confirm them.',
    ],
    sections: [
      {
        heading: 'Start With Low-Risk Fixes',
        image: '/007-crash-fix.webp',
        imageAlt: 'Local 007 First Light troubleshooting image used for crash and launch help',
        paragraphs: [
          'Launch problems are stressful because they happen before you can tell whether your save, settings, or hardware is involved. The safest approach is to change one thing at a time and keep the install official.',
          'Do not begin by deleting large folders or downloading replacement files. File verification, driver updates, client restarts, and overlay tests solve many launch-day issues without damaging your setup.',
        ],
      },
      {
        heading: 'Known Issues and Community Reports',
        paragraphs: [
          'Official known-issue pages should be treated as the final source for confirmed bugs. Steam discussions and Reddit threads are still useful because they show what players are actually stuck on: access timing, crashes, FSR/performance, DRM worries, and install-state confusion.',
          'When a community workaround is not confirmed, label it as a report and keep it reversible. A good troubleshooting page should protect the player first, then help them move faster.',
        ],
      },
      {
        heading: 'When to Stop Troubleshooting',
        paragraphs: [
          'If the same crash happens at the same mission, loading screen, or cinematic after file verification and driver updates, stop making random system changes. That pattern is more useful as a support report than as a reason to keep poking Windows.',
          'Save the exact reproduction path. A clear report like “crashes after loading checkpoint in mission X on RTX driver Y” is far more actionable than “game broken.”',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why is 007 First Light not launching?',
        answer:
          'Common causes include locked access, incomplete files, overlays, drivers, antivirus blocks, or launch-day known issues.',
      },
      {
        question: 'Should I delete config files?',
        answer:
          'Only after safer steps fail, and only after backing them up. Let the game recreate defaults rather than using files from strangers.',
      },
      {
        question: 'Can Denuvo cause crashes?',
        answer:
          'Players discuss DRM concerns, but treat that as unconfirmed unless official support confirms a specific issue.',
      },
      {
        question: 'What information should I send support?',
        answer:
          'Send platform, edition, crash point, hardware, driver version, install drive, and any crash logs or DxDiag requested by support.',
      },
    ],
    sources: [officialKnownIssuesSource, officialTroubleshootingSource, hubSource, steamDiscussionsSource],
  }),

  '007-first-light-best-settings': makeGuide({
    slug: '007-first-light-best-settings',
    title: '007 First Light Best Settings',
    metaTitle: '007 First Light Best Settings - PC FPS, Graphics & Controls',
    metaDescription:
      'Tune 007 First Light with practical graphics, FPS, DLSS/FSR, controller, keyboard, HDR, and stability-first PC settings.',
    primaryKeyword: '007 First Light best settings',
    tag: 'Settings',
    thumbnail: '/007-best-settings.webp',
    excerpt:
      'A practical settings guide built around stable frame pacing, readable stealth, official PC specs, and launch-day performance reports.',
    quickAnswer:
      'For a first PC run, target stable frame pacing before maximum visuals: use your hardware-appropriate preset, cap FPS if frame time is uneven, lower shadows/reflections/volumetrics first, keep textures within VRAM, and use DLSS or FSR only after confirming the game is GPU-bound.',
    claimStatus: 'community',
    keyFacts: [
      { label: 'Main priority', value: 'Stable frame time over screenshot quality', status: 'community' },
      { label: 'Lower first', value: 'Shadows, reflections, volumetrics, crowd or scene density', status: 'community' },
      { label: 'Keep if VRAM allows', value: 'Texture quality', status: 'community' },
      { label: 'Official baseline', value: 'Check IOI system requirements before assuming your preset', status: 'official' },
    ],
    warnings: [
      {
        title: 'Do not copy ultra presets from a different GPU class',
        body:
          'A setting that works on a high-end desktop can make a mid-range laptop stutter. Match advice to your GPU, VRAM, display resolution, and thermal limits.',
        severity: 'warning',
      },
    ],
    tables: [
      {
        title: 'Stability-First Graphics Starting Points',
        headers: ['Hardware target', 'Resolution target', 'Preset start', 'First changes', 'Expected tradeoff'],
        rows: [
          [
            'Entry or older GPU',
            '1080p',
            'Low or Medium',
            'FSR/DLSS Quality or Balanced, lower shadows and reflections',
            'Less dense lighting, better input response',
          ],
          [
            'Mid-range GPU',
            '1080p or 1440p',
            'Medium or High',
            'Lower volumetrics, cap FPS to 60 if frame time jumps',
            'Small visual hit, smoother stealth and driving',
          ],
          [
            'High-end GPU',
            '1440p or 4K',
            'High or Ultra',
            'Use DLSS/FSR for 4K if GPU-bound, keep textures high if VRAM allows',
            'Sharper image with manageable GPU load',
          ],
          [
            'Laptop or handheld',
            '720p to 1080p',
            'Low or Medium',
            'FPS cap, lower power-heavy effects, watch temperature',
            'Longer battery and fewer thermal dips',
          ],
        ],
      },
      {
        title: 'Setting Impact Guide',
        headers: ['Setting type', 'Performance impact', 'Visual impact', 'Recommendation'],
        rows: [
          ['Shadows', 'High', 'Medium', 'Lower one or two levels first if FPS drops in open areas'],
          ['Reflections', 'High', 'Medium to high', 'Reduce before lowering textures'],
          ['Volumetrics/fog', 'Medium to high', 'Medium', 'Lower for cleaner frame pacing'],
          ['Textures', 'VRAM dependent', 'High', 'Keep high only if VRAM is not maxed'],
          ['Motion blur', 'Low', 'Preference', 'Disable if it makes patrol reads harder'],
          ['Upscaling', 'Variable', 'Variable', 'Use when GPU-bound, avoid masking CPU or storage stutter'],
        ],
      },
    ],
    checklists: [
      {
        title: 'Five-Minute Settings Test',
        items: [
          'Choose the preset closest to your hardware class.',
          'Stand in a dense area and watch frame time, not just average FPS.',
          'Move through cover, camera turns, and a short combat sequence.',
          'Change two settings at most, then retest the same route.',
          'Keep the preset that feels smooth during gameplay, not only in the menu.',
        ],
      },
      {
        title: 'Controller and Keyboard Setup',
        items: [
          'Use controller if driving and cover movement feel better there.',
          'Use keyboard and mouse if precise aim is your weak point.',
          'Reduce aim sensitivity swings between hip fire and aiming.',
          'Turn off heavy blur if it makes enemy movement hard to read.',
        ],
      },
    ],
    steps: [
      {
        title: 'How to Tell Whether Upscaling Helps',
        items: [
          'Set the game to native resolution at your chosen preset.',
          'Check whether GPU usage is near max while CPU usage is not the limiter.',
          'Enable DLSS or FSR Quality first, not the most aggressive mode.',
          'If stutter remains, troubleshoot storage, shader cache, overlays, or CPU load instead.',
        ],
      },
    ],
    sections: [
      {
        heading: 'Tune for Readability First',
        image: '/007-best-settings.webp',
        imageAlt: 'Local 007 First Light PC settings image for graphics and FPS tuning',
        paragraphs: [
          '007 First Light asks you to read guard movement, cover spacing, prompts, and driving lines. That makes consistent frame pacing more useful than a few extra visual effects.',
          'A good settings page should give you a safe starting point, then explain what each tradeoff does. Do not chase a universal preset; chase a stable route through the kind of missions you actually play.',
        ],
      },
      {
        heading: 'HDR, Menu FPS, and Launch-Day Quirks',
        paragraphs: [
          'If an official known issue mentions HDR, menu frame rate, or platform-specific display behavior, follow that guidance before tuning around it. Display bugs can make a good preset look broken.',
          'If you cannot separate a settings problem from a crash problem, use the crash guide first. Stability beats visuals until the game launches consistently.',
        ],
      },
      {
        heading: 'When to Use the Steam Deck Page',
        paragraphs: [
          'Handheld tuning is different from desktop tuning because battery, heat, and shared memory matter. Use the dedicated Steam Deck guide if you are playing portable or on a handheld PC.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What should I lower first in 007 First Light?',
        answer:
          'Lower shadows, reflections, volumetrics, and density settings before reducing textures, unless your VRAM is already full.',
      },
      {
        question: 'Should I use DLSS or FSR?',
        answer:
          'Use DLSS or FSR when the GPU is the bottleneck and native resolution cannot hold your target FPS.',
      },
      {
        question: 'Is controller better than keyboard?',
        answer:
          'Controller is often more comfortable for driving and movement; keyboard and mouse can be better for precision aiming.',
      },
      {
        question: 'Why does the game still stutter after lowering settings?',
        answer:
          'The cause may be shader cache, storage, overlays, background capture, CPU load, or a launch-day known issue rather than raw graphics settings.',
      },
    ],
    sources: [officialLaunchSource, officialKnownIssuesSource, officialTroubleshootingSource, hubSource, steamDiscussionsSource],
  }),

  '007-first-light-steam-deck-settings': makeGuide({
    slug: '007-first-light-steam-deck-settings',
    title: '007 First Light Steam Deck Settings',
    metaTitle: '007 First Light Steam Deck Settings - Handheld FPS & Battery Guide',
    metaDescription:
      'Use conservative 007 First Light Steam Deck and handheld PC settings for FPS caps, FSR, battery, heat, controls, and known caveats.',
    primaryKeyword: '007 First Light Steam Deck settings',
    tag: 'Steam Deck',
    thumbnail: '/007-steam-deck-settings.webp',
    excerpt:
      'A handheld-first settings guide for Steam Deck and similar portable PCs, with conservative targets and clear uncertainty labels.',
    quickAnswer:
      'Start Steam Deck testing at a low or medium preset, 720p or 800p, an FPS cap, and conservative effects. Use FSR only after confirming the game is GPU-bound. Treat early launch reports as community data until Valve, Steam, or IOI confirms Deck status.',
    claimStatus: 'unverified',
    keyFacts: [
      { label: 'Verification status', value: 'Check the current Steam Deck compatibility badge on Steam', status: 'official' },
      { label: 'Best first target', value: 'Stable capped FPS over uncapped spikes', status: 'community' },
      { label: 'Most important constraint', value: 'Battery and thermal behavior, not only average FPS', status: 'community' },
      { label: 'Use with', value: 'Best settings and crash fix pages', status: 'community' },
    ],
    warnings: [
      {
        title: 'Steam Deck status can change after patches',
        body:
          'Do not treat early YouTube or Reddit results as permanent. Recheck the Steam store compatibility badge and recent patch notes before buying just for Deck play.',
        severity: 'warning',
      },
    ],
    tables: [
      {
        title: 'Conservative Handheld Presets',
        headers: ['Goal', 'Display target', 'Graphics start', 'FPS cap', 'Best for'],
        rows: [
          ['Battery-first', '720p/800p', 'Low', '30 FPS', 'Travel, heat control, stable sessions'],
          ['Balanced', '720p/800p', 'Low to Medium', '30 or 40 FPS', 'Most Steam Deck players to test first'],
          ['Visuals-first', '800p', 'Medium', 'Unlocked only for testing', 'Screenshots, docked play, short sessions'],
        ],
      },
      {
        title: 'Handheld Setting Priorities',
        headers: ['Setting', 'Deck advice', 'Why it matters'],
        rows: [
          ['Resolution', 'Use native 800p or lower with FSR only if needed', 'Lower resolution reduces GPU load quickly'],
          ['FPS cap', 'Use a cap before chasing higher presets', 'Smooth pacing feels better than frequent spikes'],
          ['Shadows/reflections', 'Lower early', 'These effects are often expensive on handheld GPUs'],
          ['Textures', 'Keep within memory budget', 'Shared memory pressure can cause stutter'],
          ['TDP/power tools', 'Adjust only after the game is stable', 'Power tuning cannot fix broken settings'],
        ],
      },
    ],
    checklists: [
      {
        title: 'Deck Test Route',
        items: [
          'Launch the game with the default Proton path first.',
          'Test a menu, a dense scene, movement, driving, and one combat or stealth encounter.',
          'Watch frame pacing, fan behavior, and battery estimate.',
          'Only then try FSR, FPS caps, and lower effects.',
        ],
      },
    ],
    sections: [
      {
        heading: 'Why Steam Deck Needs Its Own Page',
        image: '/007-steam-deck-settings.webp',
        imageAlt: 'Local Steam Deck style image for 007 First Light handheld settings',
        paragraphs: [
          'Steam Deck advice is not just a smaller version of desktop PC advice. A playable handheld preset must balance FPS, battery, heat, text readability, and shader behavior.',
          'Because compatibility can change after patches, this guide keeps early recommendations conservative and labels community reports as unverified until platform badges or official support confirm them.',
        ],
      },
      {
        heading: 'When to Wait',
        paragraphs: [
          'If you are buying mainly for Steam Deck, wait for a current Steam compatibility badge, recent player reports, or a reliable benchmark video from the latest patch.',
          'If you already own the game, test within your refund window using the route above rather than spending the whole time in menus.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is 007 First Light Steam Deck verified?',
        answer:
          'Check the current Steam store badge. This page does not assume verification until Steam shows it.',
      },
      {
        question: 'What FPS should I target on Steam Deck?',
        answer:
          'Start with a stable 30 FPS or balanced 30/40 FPS target before trying uncapped play.',
      },
      {
        question: 'Should I use FSR on Deck?',
        answer:
          'Use FSR when the game is GPU-bound and native 800p cannot hold your target frame rate.',
      },
      {
        question: 'Can community settings be trusted?',
        answer:
          'Use them as starting points, but verify the patch version, scene tested, FPS cap, and whether the report mentions stutter.',
      },
    ],
    sources: [hubSource, officialLaunchSource, steamDiscussionsSource],
  }),

  '007-first-light-deluxe-edition-early-access': makeGuide({
    slug: '007-first-light-deluxe-edition-early-access',
    title: '007 First Light Deluxe Edition and Early Access Guide',
    metaTitle: '007 First Light Deluxe Edition - Early Access, Bonuses & Value',
    metaDescription:
      'Compare 007 First Light editions, early access, preorder bonuses, third-party keys, upgrade checks, and access troubleshooting.',
    primaryKeyword: '007 First Light deluxe edition',
    tag: 'Editions',
    thumbnail: '/007-deluxe-edition.webp',
    excerpt:
      'A buyer-focused guide for edition differences, early access timing, missing entitlements, preorder extras, and whether Deluxe is worth it.',
    quickAnswer:
      'Buy Deluxe only if the exact store page you are using lists benefits you personally value, such as early access or extras. If early access is locked, confirm the edition on your receipt, restart the client, check regional unlock timing, and verify whether a third-party key includes the same entitlement.',
    claimStatus: 'official',
    keyFacts: [
      { label: 'Best source for entitlement', value: 'The store where you bought the game', status: 'official' },
      { label: 'Common access issue', value: 'Edition mismatch or client not refreshed', status: 'community' },
      { label: 'Third-party key caution', value: 'Key contents may differ by seller listing', status: 'community' },
      { label: 'Value rule', value: 'Standard for campaign-only players, Deluxe for valued extras', status: 'community' },
    ],
    tables: [
      {
        title: 'Edition Decision Table',
        headers: ['Player type', 'Recommended edition', 'Reason'],
        rows: [
          ['You only want the campaign', 'Standard', 'Lowest cost and fewer entitlement questions'],
          ['You want to play before standard unlock', 'Deluxe or eligible early-access edition', 'Only if your storefront confirms early access'],
          ['You care about cosmetics or digital extras', 'Deluxe', 'Worth it if those listed extras matter to you'],
          ['You are worried about PC performance', 'Wait or standard', 'Launch reports may matter more than early access'],
        ],
      },
      {
        title: 'Early Access Locked Checklist',
        headers: ['Check', 'What to look for', 'Next action'],
        rows: [
          ['Receipt', 'Edition name and purchase date', 'Confirm it matches the early-access edition'],
          ['Library entry', 'Game page shows the right edition or add-on', 'Restart client and refresh account licenses'],
          ['Regional timing', 'Official unlock time for your region', 'Wait if the region has not unlocked yet'],
          ['Third-party key', 'Seller listed the exact edition entitlement', 'Contact seller/store if entitlement is missing'],
        ],
      },
    ],
    checklists: [
      {
        title: 'Before Paying Extra',
        items: [
          'Read the current store page, not an image shared on social media.',
          'Check whether early access, cosmetics, soundtrack, artbook, or other extras are actually listed.',
          'Read refund rules for your platform before launching early access.',
          'Avoid buying twice until you confirm whether an upgrade path exists.',
        ],
      },
    ],
    warnings: [
      {
        title: 'Third-party keys can be confusing',
        body:
          'A discounted key may not include the same preorder or edition benefits as a platform storefront listing. Verify the exact product name before purchase.',
        severity: 'warning',
      },
    ],
    sections: [
      {
        heading: 'Use Store Entitlements, Not Rumors',
        image: '/007-deluxe-edition.webp',
        imageAlt: 'Local 007 First Light Deluxe Edition image for edition and early access advice',
        paragraphs: [
          'Edition pages change, regional products differ, and third-party sellers sometimes use unclear labels. The only entitlement that matters is the one attached to your account on the platform where you play.',
          'If a guide, video, or Reddit post says Deluxe includes something, treat that as a prompt to check the store page rather than as proof.',
        ],
      },
      {
        heading: 'Is Deluxe Worth It?',
        paragraphs: [
          'Deluxe is worth considering when early access or listed extras have personal value. It is not automatically better for players who only want the story campaign and do not care about cosmetics or digital extras.',
          'Performance-sensitive PC players should be especially cautious. Waiting for launch reports can be a better value than paying extra to troubleshoot earlier.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does my game still show Standard Edition?',
        answer:
          'It may be a client refresh, account license, region unlock, or key entitlement issue. Confirm your receipt and restart the platform client first.',
      },
      {
        question: 'Is Deluxe worth buying?',
        answer:
          'It is worth it only if the exact benefits listed by your storefront matter more to you than the price difference.',
      },
      {
        question: 'Can I upgrade later?',
        answer:
          'Upgrade options depend on the platform store. Check official add-ons before buying a second copy.',
      },
      {
        question: 'Do third-party keys include early access?',
        answer:
          'Only if the seller lists that exact entitlement. Verify the product name and region before buying.',
      },
    ],
    sources: [officialLaunchSource, launchSource, steamDiscussionsSource, hubSource],
  }),

  '007-first-light-release-date-platforms': makeGuide({
    slug: '007-first-light-release-date-platforms',
    title: '007 First Light Release Date, Platforms, and Unlock Times',
    metaTitle: '007 First Light Release Date - Platforms, Unlock Times & Early Access',
    metaDescription:
      'Check 007 First Light release date, platforms, unlock times, editions, download notes, Switch 2 status, and Game Pass caveats.',
    primaryKeyword: '007 First Light release date',
    tag: 'Release',
    thumbnail: '/007-release-platforms.webp',
    excerpt:
      'A factual release hub for date, platform availability, unlock windows, edition access, storage, preload, and storefront checks.',
    quickAnswer:
      'Steam lists 007 First Light for May 27, 2026. Exact unlock timing, preload, edition access, file size, and platform-specific features should be checked on your platform storefront and official IOI support because those details can differ by region and edition.',
    claimStatus: 'official',
    keyFacts: [
      { label: 'Steam release date', value: 'May 27, 2026', status: 'official' },
      { label: 'Exact unlock time', value: 'Use official launch time and local storefront', status: 'official' },
      { label: 'Switch 2 status', value: 'Treat as TBA unless a current store page confirms details', status: 'unverified' },
      { label: 'Game Pass status', value: 'Check the live Xbox/Game Pass listing before deciding', status: 'unverified' },
    ],
    tables: [
      {
        title: 'Platform Check Matrix',
        headers: ['Platform', 'What to confirm', 'Why it matters'],
        rows: [
          ['PC Steam', 'Release date, system requirements, Deck badge, achievements', 'Most PC troubleshooting and settings demand starts here'],
          ['PlayStation 5', 'Unlock time, edition extras, download completion', 'Console access issues are often license or download-state related'],
          ['Xbox Series X|S', 'Store listing, Game Pass status, edition ownership', 'Game Pass and add-on status can change'],
          ['Switch 2', 'Official store listing and release details', 'Do not assume parity until confirmed'],
        ],
      },
      {
        title: 'Pre-Download Checklist',
        headers: ['Task', 'Why it helps'],
        rows: [
          ['Leave extra storage beyond the download size', 'Patches, unpacking, and shader caches may need headroom'],
          ['Update GPU drivers before launch on PC', 'Avoids a common first-launch variable'],
          ['Confirm edition and add-ons before unlock', 'Prevents early access confusion'],
          ['Restart platform client at unlock time', 'Store clients may need a refresh'],
        ],
      },
    ],
    checklists: [
      {
        title: 'Before You Buy',
        items: [
          'Check the current platform store page for availability.',
          'Confirm whether your region has the same unlock timing.',
          'Read the edition listing if early access matters.',
          'Check system requirements if playing on PC or handheld.',
          'Look for current Game Pass or subscription status instead of relying on old launch posts.',
        ],
      },
    ],
    sections: [
      {
        heading: 'Release Facts vs Launch Rumors',
        image: '/007-release-platforms.webp',
        imageAlt: 'Local 007 First Light launch and platform image for release date information',
        paragraphs: [
          'Release pages are easy to get wrong because dates, preload windows, edition access, and regional unlock times are separate facts. The safe rule is to cite the platform storefront for ownership and the official support page for launch timing.',
          'This page keeps uncertain items clearly marked so players do not buy an edition, subscription, or platform version based on stale information.',
        ],
      },
      {
        heading: 'Storage and Download Notes',
        paragraphs: [
          'Never plan around the exact download size alone. Large games may need extra temporary space for unpacking, day-one patches, shader caches, or add-ons.',
          'If a preload finishes but the game will not open, do not assume the install is broken until the unlock time has passed for your region and edition.',
        ],
      },
    ],
    faqs: [
      {
        question: 'When does 007 First Light release?',
        answer:
          'Steam lists 007 First Light for May 27, 2026, with exact unlock timing depending on platform, region, and edition.',
      },
      {
        question: 'Is 007 First Light on Game Pass?',
        answer:
          'Check the current Xbox and Game Pass listing. Subscription availability can change and should not be assumed.',
      },
      {
        question: 'Is 007 First Light on Switch 2?',
        answer:
          'Treat Switch 2 details as unconfirmed unless an official store page or publisher update confirms them.',
      },
      {
        question: 'Why can some players start earlier?',
        answer:
          'Early access may be tied to edition ownership, regional timing, or platform-specific unlock rules.',
      },
    ],
    sources: [hubSource, officialLaunchSource, launchSource],
  }),

  '007-first-light-beginner-guide': makeGuide({
    slug: '007-first-light-beginner-guide',
    title: '007 First Light Beginner Guide',
    metaTitle: '007 First Light Beginner Guide - Stealth, Combat & First Tips',
    metaDescription:
      'Start 007 First Light with a first-hour checklist, stealth and loud combat tips, gadget habits, mission prep, and mistakes to avoid.',
    primaryKeyword: '007 First Light beginner guide',
    tag: 'Beginner',
    thumbnail: '/007-beginner-guide.webp',
    excerpt:
      'A spoiler-light starter guide for players who want to survive the first hours, understand stealth rhythm, and avoid wasting tools.',
    quickAnswer:
      'Play the first hours like a spy, not a shooter: pause before entering rooms, watch patrol routes, use gadgets to create routes, break line of sight when spotted, and save full collectible or trophy cleanup for replay.',
    claimStatus: 'community',
    keyFacts: [
      { label: 'Best first habit', value: 'Scout before acting', status: 'community' },
      { label: 'Best beginner route', value: 'Stealth until the mission forces action', status: 'community' },
      { label: 'Avoid early', value: 'Restarting every messy encounter for perfection', status: 'community' },
      { label: 'Read next', value: 'Settings, weapons/gadgets, and mission walkthrough', status: 'community' },
    ],
    tables: [
      {
        title: 'Stealth or Loud Decision Tree',
        headers: ['Situation', 'Recommended approach', 'Why'],
        rows: [
          ['You enter a new restricted area', 'Scout first', 'Patrols, cameras, and side doors define the safe route'],
          ['One guard blocks a doorway', 'Distract or isolate', 'A single quiet action avoids a larger fight'],
          ['You are spotted by one enemy', 'Break line of sight', 'Resetting is safer than fighting in the open'],
          ['Alarm spreads or mission turns cinematic', 'Use cover and controlled bursts', 'Some story beats are built for action'],
          ['You see optional rooms before an objective', 'Search before triggering the marker', 'Doors may close after the next beat'],
        ],
      },
      {
        title: 'Common Beginner Mistakes',
        headers: ['Mistake', 'Better habit'],
        rows: [
          ['Sprinting into objective markers', 'Clear nearby side rooms first'],
          ['Using every gadget immediately', 'Keep one flexible tool for escape or recovery'],
          ['Fighting from the objective zone', 'Retreat to a controlled doorway or corner'],
          ['Ignoring settings until a crash', 'Set stable FPS before long sessions'],
          ['Reading full walkthroughs before playing', 'Use spoiler-light checkpoints first'],
        ],
      },
    ],
    checklists: [
      {
        title: 'First-Hour Checklist',
        items: [
          'Open settings and choose a stable preset before starting long missions.',
          'Learn crouch, cover, aim, interact, gadget selection, and quick reload inputs.',
          'Watch one patrol cycle before crossing a room.',
          'Use distractions on edges of rooms, not the busiest center.',
          'Search optional rooms before completing obvious main-objective prompts.',
          'Stop chasing perfect stealth until you understand checkpoint and replay rules.',
        ],
      },
      {
        title: 'What to Ignore on Your First Run',
        items: [
          'Perfect challenge routes unless the game clearly explains them.',
          'Full collectible cleanup before you know whether chapter select exists.',
          'Ultra graphics if frame pacing feels bad.',
          'Arguments about whether it is exactly like Hitman; learn this game on its own terms first.',
        ],
      },
    ],
    steps: [
      {
        title: 'Simple Room-Clearing Rhythm',
        items: [
          'Stop at the entrance and identify exits, patrols, cameras, and cover.',
          'Pick one guard or device that blocks your path.',
          'Use a distraction, gadget, or timing window to create a route.',
          'Move to the next safe position, then repeat.',
          'If spotted, break line of sight before shooting.',
        ],
      },
    ],
    sections: [
      {
        heading: 'The First Rule: Slow Down Before the Marker',
        image: '/007-beginner-guide.webp',
        imageAlt: 'Local 007 First Light beginner guide image for stealth and first-hour advice',
        paragraphs: [
          'Objective markers are useful, but they can also pull new players past the important part of the room. The real puzzle is often between you and the marker: a patrol, a camera, a side door, or a gadget opportunity.',
          'If you treat every space as a small route-planning problem, the game becomes less punishing and more readable.',
        ],
      },
      {
        heading: 'Recovering From Mistakes',
        paragraphs: [
          'Being spotted does not always mean you failed. Break line of sight, change elevation, move through a doorway, and force enemies to approach from one angle.',
          'A messy first run can be more useful than a perfect one. It teaches where missions allow improvisation and where they push you into a set piece.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is 007 First Light beginner friendly?',
        answer:
          'Yes, if you scout rooms and learn recovery habits instead of treating every encounter like a straight shooter.',
      },
      {
        question: 'Should I play stealthy or loud first?',
        answer:
          'Start stealthy, then switch to cover-based combat when the mission or alarm state forces it.',
      },
      {
        question: 'Should I use a walkthrough immediately?',
        answer:
          'Use spoiler-light guidance first and save full mission or collectible cleanup for replay.',
      },
      {
        question: 'What is the most useful beginner setting?',
        answer:
          'A stable FPS cap and readable visuals are more important than ultra effects in the first hours.',
      },
    ],
    sources: [hubSource, steamDiscussionsSource, redditPs5Source],
  }),

  '007-first-light-mission-walkthrough': makeGuide({
    slug: '007-first-light-mission-walkthrough',
    title: '007 First Light Mission Walkthrough',
    metaTitle: '007 First Light Walkthrough - Mission Order & Spoiler-Light Tips',
    metaDescription:
      'Use this spoiler-light 007 First Light walkthrough for mission structure, stuck points, replay cleanup, collectibles, and challenge prep.',
    primaryKeyword: '007 First Light walkthrough',
    tag: 'Walkthrough',
    thumbnail: '/007-mission-walkthrough.webp',
    excerpt:
      'A mission help page built around spoiler-safe checkpoints, route planning, point-of-no-return warnings, and cleanup links.',
    quickAnswer:
      'Use the walkthrough as a checkpoint layer, not a plot transcript. Read the current mission section only, search side rooms before objective triggers, and leave collectible or trophy cleanup for replay unless you are sure you will not spoil yourself.',
    claimStatus: 'community',
    keyFacts: [
      { label: 'Spoiler policy', value: 'Main page stays spoiler-light', status: 'community' },
      { label: 'Best use', value: 'Route planning and stuck-point help', status: 'community' },
      { label: 'Deep details', value: 'Placed in spoiler sections when verified', status: 'community' },
      { label: 'Related cleanup', value: 'Collectibles, achievements, how long, TacSim', status: 'community' },
    ],
    tables: [
      {
        title: 'Mission Help Framework',
        headers: ['Mission phase', 'What to do', 'What to avoid'],
        rows: [
          ['Infiltration', 'Observe patrols, map side rooms, identify cameras and exits', 'Running directly to the marker'],
          ['Objective room', 'Search before pressing obvious final prompts', 'Triggering transitions before checking optional spaces'],
          ['Combat spike', 'Fall back to a defensible angle and prioritize flankers', 'Standing in the objective zone while surrounded'],
          ['Escape or set piece', 'Spend saved tools and move decisively', 'Trying to preserve every gadget after stealth is gone'],
          ['Replay cleanup', 'Use chapter select or mission replay if available', 'Spoiling story beats during a first run'],
        ],
      },
      {
        title: 'Stuck-Point Clues',
        headers: ['If you are stuck...', 'Check this first'],
        rows: [
          ['Marker seems unreachable', 'Look for vertical routes, side doors, vents, ledges, or interactable devices'],
          ['Guard always spots you', 'Wait a full patrol cycle and distract from the edge of the room'],
          ['Fight feels impossible', 'Move backward to control entry angles and lower difficulty if needed'],
          ['Collectible seems locked away', 'Return during replay if the route depends on a later tool or chapter state'],
        ],
      },
    ],
    checklists: [
      {
        title: 'Before Leaving a Mission Area',
        items: [
          'Check side rooms, desks, and alternate corridors.',
          'Look for visible collectibles or intel before triggering main prompts.',
          'Refill or save a gadget if the next phase looks like an escape.',
          'Make a note of locked paths for later cleanup.',
        ],
      },
    ],
    spoilerSections: [
      {
        title: 'Spoiler-safe mission table placeholder',
        summary:
          'Use this section for verified mission names, challenge counts, and point-of-no-return notes once source-confirmed.',
        items: [
          'Do not invent mission names or counts.',
          'Add each mission only after confirming it from gameplay, official material, or reliable guide coverage.',
          'Keep plot reveals out of table labels where possible.',
        ],
      },
    ],
    sections: [
      {
        heading: 'How This Walkthrough Protects the First Run',
        image: '/007-mission-walkthrough.webp',
        imageAlt: 'Local 007 First Light mission walkthrough image for route planning',
        paragraphs: [
          'A useful walkthrough should get you unstuck without flattening the story. This page uses phase-based help, stuck-point clues, and clearly marked spoiler sections instead of retelling every scene.',
          'When exact mission data is not verified, it is better to say so than to publish a fake mission list. That keeps the page useful and trustworthy.',
        ],
      },
      {
        heading: 'Replay and Cleanup',
        paragraphs: [
          'If mission replay or chapter select is available, use it for collectibles, challenges, and achievement cleanup. It lets the first run stay focused on story and learning.',
          'If replay behavior is limited, keep manual saves before major transitions where the game allows it, and avoid triggering final prompts before searching.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does this walkthrough include spoilers?',
        answer:
          'The main advice is spoiler-light. Any detailed mission table or collectible path should be clearly labeled as a spoiler section.',
      },
      {
        question: 'What should I do if a marker is unreachable?',
        answer:
          'Check for vertical paths, alternate doors, ledges, vents, or a nearby gadget interaction before assuming the objective is bugged.',
      },
      {
        question: 'Should I collect everything on the first run?',
        answer:
          'Only if you enjoy searching slowly. Most players should finish the story beat first and clean up later through replay if available.',
      },
      {
        question: 'Where should detailed collectibles go?',
        answer:
          'Exact collectible routes belong on the collectibles page or in clearly labeled spoiler sections.',
      },
    ],
    sources: [hubSource, redditPs5Source, gamesRadarLengthSource, powerPyxSource],
  }),

  '007-first-light-how-long-to-beat-mission-list': makeGuide({
    slug: '007-first-light-how-long-to-beat-mission-list',
    title: 'How Long Is 007 First Light? Mission List and Replay Guide',
    metaTitle: 'How Long Is 007 First Light? Mission List, Length & Replay',
    metaDescription:
      'Estimate 007 First Light story length, completionist time, mission replay value, TacSim impact, and spoiler-safe mission list notes.',
    primaryKeyword: 'how long is 007 First Light',
    tag: 'Length',
    thumbnail: '/007-how-long.webp',
    excerpt:
      'A practical length guide for story players, stealth explorers, completionists, TacSim players, and replay cleanup.',
    quickAnswer:
      'Your completion time depends on playstyle: direct story players finish faster, stealth explorers spend longer reading rooms and retrying routes, and completionists add collectibles, achievements, and TacSim/challenge cleanup.',
    claimStatus: 'reviewed',
    keyFacts: [
      { label: 'Fastest path', value: 'Story-focused run', status: 'reviewed' },
      { label: 'Adds time', value: 'Stealth retries, collectibles, achievements, TacSim', status: 'reviewed' },
      { label: 'Best format', value: 'Use ranges, not a single promise', status: 'community' },
      { label: 'Spoiler control', value: 'Mission names only when verified and clearly labeled', status: 'community' },
    ],
    tables: [
      {
        title: 'Length by Playstyle',
        headers: ['Playstyle', 'What you do', 'Time impact'],
        rows: [
          ['Story-focused', 'Follow objectives, use stealth when convenient, skip deep cleanup', 'Shortest run'],
          ['Stealth explorer', 'Observe patrols, search side rooms, retry clean routes', 'Moderate increase'],
          ['Completionist', 'Collectibles, achievements, challenges, replay cleanup', 'Largest increase'],
          ['TacSim-focused', 'Replay challenges and chase performance goals', 'Depends on skill and goals'],
        ],
        caption: 'Use live guide/review estimates for exact hour ranges as more post-launch data stabilizes.',
      },
      {
        title: 'What Adds Time',
        headers: ['Activity', 'Why it adds time', 'Best time to do it'],
        rows: [
          ['Collectibles', 'Searching side rooms and replaying missed paths', 'After story or during replay'],
          ['No-alert routes', 'Requires patrol learning and retries', 'After learning mission layout'],
          ['Achievements/trophies', 'Some require special conditions', 'After first completion'],
          ['Settings troubleshooting', 'Launch-day PC issues can interrupt play', 'Before long sessions'],
        ],
      },
    ],
    checklists: [
      {
        title: 'How to Estimate Your Own Run',
        items: [
          'Add time if you restart after every detection.',
          'Add time if you read every document or search every room.',
          'Add time if you chase achievements before finishing the story.',
          'Subtract time if you follow objective markers and use assists or lower difficulty.',
        ],
      },
    ],
    spoilerSections: [
      {
        title: 'Mission list handling',
        summary:
          'Mission names and counts should be added only after verification from reliable gameplay or guide sources.',
        items: [
          'Keep mission table spoiler-light in visible labels.',
          'Put plot-heavy objective names behind spoiler markers.',
          'Link exact collectible routes to the collectibles page.',
        ],
      },
    ],
    sections: [
      {
        heading: 'Why One Number Is Misleading',
        image: '/007-how-long.webp',
        imageAlt: 'Local 007 First Light length guide image for missions and replay time',
        paragraphs: [
          'Action-adventure length depends heavily on how you play. A direct run and a careful stealth run can feel like different games because the second player watches patrols, resets rooms, and searches optional spaces.',
          'This page uses playstyle ranges and activity tables so readers can place themselves, rather than pretending one hour count fits everyone.',
        ],
      },
      {
        heading: 'Replay Value Signals',
        paragraphs: [
          'Replay value comes from chapter select, TacSim, mission challenges, collectibles, and alternate routes. If those systems are important to you, wait for stable post-launch reports before judging value only from story length.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does 007 First Light take to beat?',
        answer:
          'It depends on playstyle: story-focused players finish faster, while stealth, collectibles, achievements, and TacSim add time.',
      },
      {
        question: 'Does 007 First Light have replay value?',
        answer:
          'Replay value depends on mission replay, challenge systems, collectibles, alternate routes, and TacSim goals.',
      },
      {
        question: 'Should I rush the story first?',
        answer:
          'If you care about spoilers, finish story beats first and do deep cleanup later.',
      },
      {
        question: 'Why does this page avoid exact mission names?',
        answer:
          'Mission names should only be listed when verified and when they do not unnecessarily spoil the first run.',
      },
    ],
    sources: [gamesRadarLengthSource, powerPyxSource, redditReviewSource, redditPs5Source],
  }),

  '007-first-light-collectibles-locations': makeGuide({
    slug: '007-first-light-collectibles-locations',
    title: '007 First Light Collectibles Locations Guide',
    metaTitle: '007 First Light Collectibles - Locations, Cleanup & Spoiler-Safe Checklist',
    metaDescription:
      'Track 007 First Light collectibles with a spoiler-safe cleanup plan, collectible categories, replay advice, missable caveats, and location workflow.',
    primaryKeyword: '007 First Light collectibles',
    tag: 'Collectibles',
    thumbnail: '/007-collectibles-locations.webp',
    excerpt:
      'A collectible cleanup page focused on safe tracking, replay order, missable caveats, and exact location handling without fake counts.',
    quickAnswer:
      'Do not chase every collectible blindly on your first run. Track missed rooms, finish the story beat, then use mission replay or chapter select if available. Exact counts and locations should be added only after they are verified from gameplay or reliable guide coverage.',
    claimStatus: 'unverified',
    keyFacts: [
      { label: 'Best first-run strategy', value: 'Track missed areas, do not spoil every mission', status: 'community' },
      { label: 'Exact counts', value: 'Needs verification before publishing as fact', status: 'unverified' },
      { label: 'Cleanup depends on', value: 'Mission replay or chapter select behavior', status: 'community' },
      { label: 'Related page', value: 'Achievements and mission walkthrough', status: 'community' },
    ],
    warnings: [
      {
        title: 'Do not publish fake collectible counts',
        body:
          'Collectible pages are only helpful if counts and locations are correct. Use placeholders and verification labels until the data is confirmed.',
        severity: 'warning',
      },
    ],
    tables: [
      {
        title: 'Collectible Cleanup Workflow',
        headers: ['Stage', 'Action', 'Why'],
        rows: [
          ['First run', 'Search obvious side rooms and note locked paths', 'Keeps the story moving without losing leads'],
          ['After mission completion', 'Check replay or chapter select options', 'Confirms whether missed items are recoverable'],
          ['Cleanup pass', 'Use a mission-by-mission checklist', 'Prevents replaying chapters blindly'],
          ['Achievement pass', 'Pair collectibles with trophy requirements', 'Avoids doing the same mission twice'],
        ],
      },
      {
        title: 'Location Table Template',
        headers: ['Mission or chapter', 'Collectible type', 'Spoiler-safe clue', 'Exact location status'],
        rows: [
          ['Mission name pending verification', 'Intel or collectible type pending verification', 'Check side rooms before final prompt', 'Needs verification'],
          ['Replay cleanup', 'Any missed item', 'Return after story beat if chapter select allows it', 'Needs verification'],
          ['Achievement cleanup', 'Trophy-linked collectible', 'Pair with achievement roadmap', 'Needs verification'],
        ],
        caption: 'Replace template rows only when source-verified. Do not invent collectible names.',
      },
    ],
    checklists: [
      {
        title: 'Spoiler-Safe Tracking Sheet',
        items: [
          'Mission or chapter name.',
          'Room or area you could not access.',
          'Visible object or prompt type without writing story spoilers.',
          'Whether replay/chapter select can return you there.',
          'Whether the collectible appears tied to an achievement.',
        ],
      },
      {
        title: 'Before Triggering a Main Objective',
        items: [
          'Check desks, side corridors, balconies, service rooms, and alternate doors.',
          'Look behind the route you entered from, not just ahead.',
          'Scan for interact prompts near story props.',
          'If a space looks like a combat arena, search it before starting the fight.',
        ],
      },
    ],
    spoilerSections: [
      {
        title: 'Exact collectible locations',
        summary:
          'This section is reserved for verified location rows. It should be expanded only with confirmed data.',
        items: [
          'Add exact route steps only after verification.',
          'Keep plot-heavy object names behind spoiler labeling.',
          'Pair each row with a mission and a source note where possible.',
        ],
      },
    ],
    sections: [
      {
        heading: 'Useful Collectible Guides Are Built on Verification',
        image: '/007-collectibles-locations.webp',
        imageAlt: 'Local 007 First Light collectibles image for location and cleanup guidance',
        paragraphs: [
          'A thin collectible page is worse than no page because it sends players into missions with fake counts. This guide is structured to be useful now through cleanup workflow and to accept exact verified rows later.',
          'The page should grow as real mission data stabilizes. Until then, uncertainty labels protect both users and site quality.',
        ],
      },
      {
        heading: 'How to Avoid Spoiling Yourself',
        paragraphs: [
          'Use spoiler-safe clues first: “before the final objective prompt” is better than a plot-heavy item name for first-run readers.',
          'Exact route steps belong below spoiler labels so completionists can get what they need without ruining the campaign for everyone else.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are collectibles missable in 007 First Light?',
        answer:
          'Treat them as potentially missable until mission replay and chapter select behavior are fully verified.',
      },
      {
        question: 'Should I collect everything on the first playthrough?',
        answer:
          'Most players should note missed areas and clean up later if replay is available.',
      },
      {
        question: 'Why are exact counts marked as unverified?',
        answer:
          'Publishing invented counts is harmful. Exact numbers should be added only after reliable verification.',
      },
      {
        question: 'Do collectibles affect achievements?',
        answer:
          'Some collectible categories may tie into achievements, so pair cleanup with the achievements guide.',
      },
    ],
    sources: [powerPyxSource, gamesRadarLengthSource, hubSource],
  }),

  '007-first-light-achievements-trophies': makeGuide({
    slug: '007-first-light-achievements-trophies',
    title: '007 First Light Achievements and Trophies Guide',
    metaTitle: '007 First Light Achievements - Trophy Roadmap, Missables & Cleanup',
    metaDescription:
      'Plan 007 First Light achievements and trophies with a roadmap, missable caveats, collectible cleanup, TacSim notes, and spoiler-safe grouping.',
    primaryKeyword: '007 First Light achievements',
    tag: 'Achievements',
    thumbnail: '/007-achievements.webp',
    excerpt:
      'A roadmap-style achievement page that avoids fake trophy data and focuses on efficient, spoiler-aware cleanup.',
    quickAnswer:
      'Finish the story first unless you are comfortable with spoilers. Then clean up collectibles, mission challenges, TacSim or online-linked tasks, and special-condition trophies in a second pass once missable status is verified.',
    claimStatus: 'unverified',
    keyFacts: [
      { label: 'Best first step', value: 'Story completion before deep trophy cleanup', status: 'community' },
      { label: 'Missable status', value: 'Needs verification by trophy list and replay behavior', status: 'unverified' },
      { label: 'Likely cleanup buckets', value: 'Story, collectibles, mission challenges, TacSim, difficulty or special conditions', status: 'community' },
      { label: 'Do not invent', value: 'Trophy names, counts, or secret requirements', status: 'official' },
    ],
    tables: [
      {
        title: 'Achievement Roadmap',
        headers: ['Phase', 'Goal', 'Why this order works'],
        rows: [
          ['First playthrough', 'Finish story and learn mission layouts', 'Avoids spoilers and over-optimizing early rooms'],
          ['Collectible cleanup', 'Return to missed rooms and intel', 'Pairs naturally with mission replay'],
          ['Mission challenges', 'Replay for stealth, gadget, or route conditions', 'Requires layout knowledge'],
          ['TacSim cleanup', 'Handle challenge or online-related tasks', 'Best after core mechanics are comfortable'],
          ['Final sweep', 'Check hidden or special-condition trophies', 'Prevents unnecessary full replays'],
        ],
      },
      {
        title: 'Missable Risk Labels',
        headers: ['Label', 'Meaning', 'How to handle it'],
        rows: [
          ['Safe', 'Can be cleaned up after story', 'Leave it for replay'],
          ['Potentially missable', 'Depends on mission replay or chapter select', 'Keep a save or note before transitions'],
          ['Spoiler', 'Requirement reveals story or late-game content', 'Hide under spoiler labels'],
          ['Unverified', 'Not confirmed by reliable sources yet', 'Do not build a run around it'],
        ],
      },
    ],
    checklists: [
      {
        title: 'Efficient Cleanup Checklist',
        items: [
          'Confirm whether mission replay exists after early chapters.',
          'Track collectibles and challenge objectives in the same pass.',
          'Do TacSim or online-related tasks after learning core combat.',
          'Avoid reading secret trophy descriptions until you finish the story if spoilers matter.',
          'Do not restart a full campaign until missable status is confirmed.',
        ],
      },
    ],
    spoilerSections: [
      {
        title: 'Verified trophy list',
        summary:
          'Add the full trophy or achievement table only after names, counts, and secret status are verified.',
        items: [
          'Group trophies by story, combat, stealth, collectibles, TacSim, and completion.',
          'Mark secret entries with spoiler labels.',
          'Mark missables only when confirmed.',
        ],
      },
    ],
    sections: [
      {
        heading: 'Roadmap First, Trophy Names Later',
        image: '/007-achievements.webp',
        imageAlt: 'Local 007 First Light achievements image for trophy roadmap and cleanup',
        paragraphs: [
          'Achievement pages often become low-quality when they publish invented names or requirements. This roadmap is useful because it helps players choose a safe order before exact trophy details are fully stable.',
          'Once a verified list is available, the page can add a sortable-style table without changing the user-first structure.',
        ],
      },
      {
        heading: 'How to Reduce Replay Time',
        paragraphs: [
          'Pair collectibles with mission challenges whenever possible. If you already replay a chapter for a no-alert route, also check whether any collectible or special-condition trophy can be done in the same run.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are there missable trophies in 007 First Light?',
        answer:
          'Treat missables as unverified until the full trophy list and replay behavior are confirmed.',
      },
      {
        question: 'Should I read the trophy list before finishing the story?',
        answer:
          'Only if you do not care about spoilers. Otherwise use roadmap phases first.',
      },
      {
        question: 'Does TacSim matter for achievements?',
        answer:
          'Community and guide demand suggest TacSim is relevant to completion, but exact requirements should be verified before publishing as fact.',
      },
      {
        question: 'What is the best cleanup order?',
        answer:
          'Story, collectibles, mission challenges, TacSim tasks, then final special-condition trophies.',
      },
    ],
    sources: [powerPyxSource, hubSource],
  }),

  '007-first-light-tacsim-challenges-clearance-level': makeGuide({
    slug: '007-first-light-tacsim-challenges-clearance-level',
    title: '007 First Light TacSim Challenges and Clearance Level Guide',
    metaTitle: '007 First Light TacSim Guide - Challenges, Clearance & Online Trophies',
    metaDescription:
      'Learn how to approach 007 First Light TacSim challenges, clearance levels, leaderboard pressure, practice order, and achievement cleanup.',
    primaryKeyword: '007 First Light TacSim',
    tag: 'TacSim',
    thumbnail: '/007-tacsim-challenges.webp',
    excerpt:
      'A dedicated TacSim guide for challenge structure, practice order, clearance progression, online caveats, and completion planning.',
    quickAnswer:
      'Treat TacSim as a replay and practice layer: learn the main controls first, then use TacSim to refine stealth, gadget timing, combat routes, and challenge goals. Do not assume exact clearance rewards until verified by in-game data or reliable guide coverage.',
    claimStatus: 'unverified',
    keyFacts: [
      { label: 'Best time to start', value: 'After learning core movement, stealth, and gadget use', status: 'community' },
      { label: 'Possible completion link', value: 'Challenges or online-linked trophies need verification', status: 'unverified' },
      { label: 'Best use', value: 'Practice clean routes and measurable performance goals', status: 'community' },
      { label: 'Do not invent', value: 'Clearance rewards or challenge counts', status: 'official' },
    ],
    tables: [
      {
        title: 'TacSim Practice Order',
        headers: ['Stage', 'Focus', 'Success signal'],
        rows: [
          ['Warm-up', 'Movement, camera, cover transitions', 'You can finish without fighting controls'],
          ['Stealth route', 'Patrol timing and distractions', 'You reach objective without panic alerts'],
          ['Combat route', 'Cover, target priority, reload timing', 'You survive without draining resources'],
          ['Gadget route', 'Use tools before detection, not after', 'Gadgets create routes instead of emergencies'],
          ['Challenge run', 'Score, time, or condition goals', 'You know the route before chasing rank'],
        ],
      },
      {
        title: 'Clearance and Challenge Data Policy',
        headers: ['Data type', 'Publish when', 'Current status'],
        rows: [
          ['Challenge names', 'Verified from gameplay or reliable guide source', 'Needs verification'],
          ['Clearance levels', 'Confirmed in-game with unlock conditions', 'Needs verification'],
          ['Rewards', 'Confirmed by UI or official source', 'Needs verification'],
          ['Trophy ties', 'Confirmed by trophy list', 'Needs verification'],
        ],
      },
    ],
    checklists: [
      {
        title: 'Before Chasing TacSim Scores',
        items: [
          'Finish enough campaign to understand gadgets and movement.',
          'Run the challenge once without caring about score.',
          'Identify the slowest or loudest section.',
          'Practice only that section if the mode allows it.',
          'Then chase time, stealth, or score conditions.',
        ],
      },
    ],
    warnings: [
      {
        title: 'Online-related requirements can age quickly',
        body:
          'If TacSim has leaderboard or online-linked trophies, availability and difficulty can change. Mark online requirements clearly and update them after patches.',
        severity: 'warning',
      },
    ],
    sections: [
      {
        heading: 'Why TacSim Deserves a Separate Guide',
        image: '/007-tacsim-challenges.webp',
        imageAlt: 'Local 007 First Light TacSim image for challenge and clearance guidance',
        paragraphs: [
          'TacSim-style modes attract a different user intent than the story walkthrough. Players are not asking “what happens next”; they are asking how to improve, clear conditions, and avoid wasting attempts.',
          'That makes tables, practice order, and verification labels more useful than plot description.',
        ],
      },
      {
        heading: 'How to Use TacSim Without Burning Out',
        paragraphs: [
          'Do not chase a high-rank route before you know the room. First run for information, second run for route cleanup, third run for score or condition goals.',
          'If a challenge feels impossible, return after improving settings, controls, or gadget familiarity. Some failures are route problems, not skill problems.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is TacSim in 007 First Light?',
        answer:
          'Treat TacSim as a challenge or practice layer until exact mode details are fully verified.',
      },
      {
        question: 'When should I play TacSim?',
        answer:
          'Start after you understand basic stealth, combat, and gadget timing from the campaign.',
      },
      {
        question: 'Are TacSim rewards confirmed?',
        answer:
          'Do not assume exact rewards or clearance unlocks until verified by in-game data or reliable sources.',
      },
      {
        question: 'Can TacSim help with achievements?',
        answer:
          'It may, but exact achievement links should be confirmed before planning a completion route around them.',
      },
    ],
    sources: [powerPyxSource, hubSource, redditReviewSource],
  }),

  '007-first-light-weapons-gadgets': makeGuide({
    slug: '007-first-light-weapons-gadgets',
    title: '007 First Light Weapons and Gadgets Guide',
    metaTitle: '007 First Light Gadgets - Weapons, Tools & Stealth Uses',
    metaDescription:
      'Use 007 First Light gadgets and weapons better with route tools, stealth/loud value, beginner priorities, and resource-saving habits.',
    primaryKeyword: '007 First Light gadgets',
    tag: 'Gadgets',
    thumbnail: '/007-weapons-gadgets.webp',
    excerpt:
      'A practical gadget and weapon guide focused on when tools solve routes, when weapons help, and when to save resources.',
    quickAnswer:
      'Gadgets are strongest when they create a route before trouble starts. Use distractions to isolate guards, disable tools for cameras or locked paths, and weapons when stealth has failed or the mission shifts into action.',
    claimStatus: 'community',
    keyFacts: [
      { label: 'Best gadget use', value: 'Prevent detection or open a safer route', status: 'community' },
      { label: 'Best weapon habit', value: 'Move after firing and control angles', status: 'community' },
      { label: 'Save one tool for', value: 'Escape, final prompt, or recovery', status: 'community' },
      { label: 'Practice mode', value: 'TacSim can test routes when verified', status: 'unverified' },
    ],
    tables: [
      {
        title: 'Gadget Use-Case Matrix',
        headers: ['Tool role', 'Use it when', 'Avoid using it when'],
        rows: [
          ['Distraction', 'One guard blocks a patrol edge or doorway', 'A crowd of enemies will all investigate'],
          ['Disable tool', 'A camera, lock, or device blocks a safer route', 'You can walk around the problem safely'],
          ['Scanner/intel tool', 'You enter a new objective room', 'You are already under heavy fire'],
          ['Emergency recovery', 'Detection is about to spread', 'You can simply break line of sight'],
          ['Weapon', 'The mission is loud or stealth failed', 'One quiet tool could avoid the entire fight'],
        ],
      },
      {
        title: 'Stealth vs Loud Value',
        headers: ['Action', 'Stealth value', 'Loud value', 'Best beginner use'],
        rows: [
          ['Silent takedown', 'High', 'Low', 'Isolate guards from shared sightlines'],
          ['Sidearm', 'Low to medium', 'High', 'Use from cover after alarm state'],
          ['Distraction', 'High', 'Low', 'Move guards out of routes'],
          ['Disable device', 'High', 'Medium', 'Open safer paths before combat'],
          ['Explosive or loud tool', 'Low', 'High', 'Save for combat spikes'],
        ],
      },
    ],
    checklists: [
      {
        title: 'Before Spending a Gadget',
        items: [
          'Will this open a safer route?',
          'Will it isolate one enemy instead of pulling several?',
          'Can I solve the problem by timing instead?',
          'Do I need one tool saved for the exit or final objective?',
        ],
      },
    ],
    sections: [
      {
        heading: 'Gadgets Are Route Tools',
        image: '/007-weapons-gadgets.webp',
        imageAlt: 'Local 007 First Light weapons and gadgets image for stealth tools',
        paragraphs: [
          'The biggest beginner mistake is treating gadgets as panic buttons. The best use happens earlier: before detection, before a fight, and before a room collapses into chaos.',
          'Weapons still matter, but they are most reliable when the situation is already loud. If a tool can prevent that loud state, it usually has more value than one clean shot.',
        ],
      },
      {
        heading: 'How to Practice Tool Timing',
        paragraphs: [
          'Pick one room and solve it three ways: no gadget, distraction-first, and loud fallback. You will quickly learn which tools create new options and which ones only feel useful because they are flashy.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the best gadget in 007 First Light?',
        answer:
          'The best gadget is the one that prevents detection or opens a safer route in the current room.',
      },
      {
        question: 'Should I save gadgets?',
        answer:
          'Use them to control rooms, but keep one flexible tool for recovery, final prompts, or escape phases.',
      },
      {
        question: 'Are weapons required?',
        answer:
          'Some sequences may push action, but many encounters are easier if you delay gunfire until stealth fails.',
      },
      {
        question: 'Where should I practice gadgets?',
        answer:
          'Use replayable missions or TacSim-style challenges if available and verified.',
      },
    ],
    sources: [hubSource, redditPs5Source],
  }),

  '007-first-light-review-roundup': makeGuide({
    slug: '007-first-light-review-roundup',
    title: '007 First Light Review Roundup',
    metaTitle: '007 First Light Review Roundup - Is It Worth Playing?',
    metaDescription:
      'Read a neutral 007 First Light review roundup with praise, concerns, buy/wait advice, performance caveats, and Hitman comparison context.',
    primaryKeyword: '007 First Light review',
    tag: 'Review',
    thumbnail: '/007-review-roundup.webp',
    excerpt:
      'A neutral review-context page that summarizes public themes without inventing scores or copying review text.',
    quickAnswer:
      '007 First Light is most interesting for players who want a Bond-flavored stealth-action adventure, not a direct Hitman replacement. Buy near launch if you value the fantasy and accept launch uncertainty; wait if you need proven PC stability, deep sandbox replay, or exact performance data.',
    claimStatus: 'reviewed',
    keyFacts: [
      { label: 'Do not invent scores', value: 'Use source links and theme summaries', status: 'official' },
      { label: 'Core question', value: 'Bond adventure or Hitman replacement?', status: 'community' },
      { label: 'Common buyer concern', value: 'Performance, replay depth, linearity, and edition value', status: 'community' },
      { label: 'Best paired page', value: 'Hitman comparison', status: 'community' },
    ],
    tables: [
      {
        title: 'Buy, Wait, or Skip',
        headers: ['Decision', 'Choose this if', 'Watch before deciding'],
        rows: [
          ['Buy', 'You want Bond atmosphere, gadgets, and stealth-action pacing', 'First-hour gameplay and your platform performance'],
          ['Wait', 'You are sensitive to crashes, stutter, or launch-day bugs', 'Patch notes, Steam reviews, console performance reports'],
          ['Wait for sale', 'You mainly want deep sandbox replay', 'Mission replay and challenge-depth reports'],
          ['Skip for now', 'You only want Hitman World of Assassination-style open sandbox', 'The Hitman comparison page'],
        ],
      },
      {
        title: 'Public Discussion Themes',
        headers: ['Theme', 'Positive signal', 'Concern signal'],
        rows: [
          ['Bond fantasy', 'Players want gadgets, style, and spy pacing', 'Expectations are high for license handling'],
          ['IO Interactive DNA', 'Stealth and route reading create interest', 'Some players expect too much Hitman freedom'],
          ['Cinematic action', 'Set pieces can make Bond feel distinct', 'Linearity may disappoint sandbox fans'],
          ['PC launch', 'Settings and troubleshooting pages are high-demand', 'Crashes, FSR, DRM, and performance dominate support demand'],
        ],
      },
    ],
    checklists: [
      {
        title: 'Before You Buy Near Launch',
        items: [
          'Check your platform performance reports.',
          'Read edition details if early access or extras matter.',
          'Watch spoiler-light gameplay from the first hour.',
          'Decide whether you want Bond action-adventure or Hitman-like sandbox stealth.',
        ],
      },
    ],
    sections: [
      {
        heading: 'What This Roundup Does and Does Not Do',
        image: '/007-review-roundup.webp',
        imageAlt: 'Local 007 First Light review roundup image for buyer advice',
        paragraphs: [
          'This page does not fabricate review scores or copy review language. Its job is to summarize the recurring decision points players care about: performance, replay depth, Bond fantasy, stealth freedom, and value.',
          'A neutral roundup is most useful when it helps different players make different decisions instead of pushing everyone toward the same answer.',
        ],
      },
      {
        heading: 'The Main Expectation Trap',
        paragraphs: [
          'The game should not be judged only as “Hitman with Bond.” IO Interactive’s reputation makes that comparison inevitable, but Bond as a license naturally invites chases, set pieces, and authored action.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is 007 First Light worth buying?',
        answer:
          'It is most appealing if you want a Bond stealth-action adventure and are comfortable checking launch performance first.',
      },
      {
        question: 'Does this page list review scores?',
        answer:
          'No. It summarizes themes and links sources rather than inventing or copying score tables.',
      },
      {
        question: 'Should Hitman fans buy it?',
        answer:
          'Hitman fans should read the comparison page and decide whether a more cinematic structure still sounds appealing.',
      },
      {
        question: 'What should cautious PC players do?',
        answer:
          'Wait for platform-specific performance reports, patch notes, and crash-fix stability before buying.',
      },
    ],
    sources: [hubSource, redditReviewSource, redditPs5Source, steamDiscussionsSource],
  }),

  '007-first-light-hitman-comparison-stealth-or-loud': makeGuide({
    slug: '007-first-light-hitman-comparison-stealth-or-loud',
    title: 'Is 007 First Light Like Hitman? Stealth or Loud Gameplay Explained',
    metaTitle: 'Is 007 First Light Like Hitman? Stealth, Action & Replay Compared',
    metaDescription:
      'Compare 007 First Light with Hitman, Uncharted-style action, stealth freedom, gadgets, mission structure, replay, and who should buy.',
    primaryKeyword: '007 First Light Hitman comparison',
    tag: 'Comparison',
    thumbnail: '/007-hitman-comparison.webp',
    excerpt:
      'A clear expectation-setting page for players asking whether 007 First Light is a sandbox stealth game, cinematic action game, or hybrid.',
    quickAnswer:
      'Do not expect 007 First Light to be Hitman with a tuxedo. The safer expectation is a Bond action-adventure with IO-style stealth instincts, gadgets, and route reading mixed with more authored cinematic action.',
    claimStatus: 'reviewed',
    keyFacts: [
      { label: 'Best expectation', value: 'Hybrid Bond action-adventure', status: 'reviewed' },
      { label: 'Hitman-like parts', value: 'Patrol reading, tools, alternate routes, stealth planning', status: 'community' },
      { label: 'Different parts', value: 'Story momentum, chases, set pieces, directed action', status: 'community' },
      { label: 'Buy advice', value: 'Wait if you only want pure sandbox replay', status: 'community' },
    ],
    tables: [
      {
        title: '007 First Light vs Hitman vs Cinematic Action',
        headers: ['Expectation', '007 First Light', 'Hitman World of Assassination', 'Cinematic action games'],
        rows: [
          ['Mission freedom', 'Hybrid, varies by mission', 'High sandbox freedom', 'Usually directed'],
          ['Stealth planning', 'Important in many spaces', 'Core identity', 'Often optional or light'],
          ['Gadgets', 'Bond fantasy and route tools', 'Assassination and disguise tools', 'Set-piece support'],
          ['Story pacing', 'More authored Bond momentum', 'Mission framework around targets', 'Strong authored momentum'],
          ['Replay depth', 'Depends on challenges/TacSim/replay', 'Very high', 'Usually moderate'],
        ],
      },
      {
        title: 'Who Will Like the Mix',
        headers: ['Player type', 'Likely reaction', 'Best next page'],
        rows: [
          ['Bond fan', 'Likely interested if the spy fantasy lands', 'Review roundup'],
          ['Hitman sandbox fan', 'Interested but should temper expectations', 'Mission walkthrough'],
          ['Action-adventure player', 'Likely comfortable with set pieces and pacing', 'Beginner guide'],
          ['Performance-sensitive PC player', 'Wait for reports before buying', 'Best settings or crash fix'],
        ],
      },
    ],
    checklists: [
      {
        title: 'Ask Yourself Before Buying',
        items: [
          'Do I need huge sandbox replay, or is Bond story enough?',
          'Will I enjoy chases and action set pieces between stealth sections?',
          'Am I okay with a game that may not let me solve every objective like Hitman?',
          'Have I checked performance reports for my platform?',
        ],
      },
    ],
    sections: [
      {
        heading: 'The Short Answer',
        image: '/007-hitman-comparison.webp',
        imageAlt: 'Local 007 First Light comparison image for Hitman and stealth-action expectations',
        paragraphs: [
          'The Hitman comparison is useful, but only up to a point. IO Interactive brings stealth literacy, but James Bond brings momentum, spectacle, gadgets, and character-driven action.',
          'The best way to avoid disappointment is to judge the game as a hybrid. Some rooms may reward observation and route planning; other sequences may push action because that is part of the Bond fantasy.',
        ],
      },
      {
        heading: 'Stealth or Loud?',
        paragraphs: [
          'The useful question is not whether the game is stealth or loud. It is how often a mission gives you a meaningful choice before the story pushes the next beat.',
          'If you enjoy both quiet infiltration and dramatic escapes, the mix is likely easier to accept than if you only want pure sandbox stealth.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is 007 First Light basically Hitman?',
        answer:
          'No. It may share stealth instincts, but it should be treated as a more cinematic Bond action-adventure.',
      },
      {
        question: 'Can you play stealthily?',
        answer:
          'Many encounters appear better approached with stealth habits, but some story sequences may push action.',
      },
      {
        question: 'Will Hitman fans like it?',
        answer:
          'Hitman fans may like the route reading and gadgets if they are open to a more directed structure.',
      },
      {
        question: 'Is it more like Uncharted?',
        answer:
          'It may share cinematic action expectations, but the stealth and gadget layers are what make the Bond comparison distinct.',
      },
    ],
    sources: [hubSource, redditReviewSource, redditPs5Source],
  }),
};

export const firstLightGuideSlugs = Object.keys(firstLightGuides);
