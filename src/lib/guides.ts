export interface GuideData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tag: string;
  thumbnail: string;
  excerpt: string;
  sections: GuideSection[];
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  image?: string;
}

const _GUIDE_NOTICE =
  'This is an unofficial player guide. All in-game content belongs to the corresponding copyright holders.';

export const guides: Record<string, GuideData> = {
  'beginner-guide': {
    slug: 'beginner-guide',
    title: 'Mechanicus 2 Complete Beginner Guide',
    metaTitle: 'Mechanicus 2 Beginner Guide - Tips, Combat & Getting Started',
    metaDescription:
      'New to Warhammer 40k Mechanicus II? Master combat basics, faction picks, resource management, and early strategies in this complete beginner guide.',
    tag: 'Beginner',
    thumbnail: '/guide-beginner.webp',
    excerpt:
      'Everything new players need to know to start their campaign in Mechanicus II — from combat fundamentals to early-game strategy.',
    sections: [
      {
        heading: 'Getting Started: What Is Mechanicus II?',
        image: '/guide-techpriest-inline.webp',
        paragraphs: [
          'Warhammer 40,000: Mechanicus II is a turn-based tactical strategy game developed by Bulwark Studios and published by Kasedo Games. Released on May 21, 2026, it is the sequel to the 2018 cult hit Mechanicus. The game blends fast-paced squad-level combat with a strategic overworld layer where you manage resources, upgrade units, and make narrative choices that reshape the campaign.',
          'Unlike many turn-based games, Mechanicus II features an initiative-based action system rather than a strict alternating-turn model. Each unit acts according to its initiative value, which creates fluid and dynamic combat sequences. Understanding this system early on is the single most important thing you can do to improve your gameplay.',
          'The game offers two fully playable factions — the Adeptus Mechanicus (Tech-Priests and their cybernetic legions) and the Necrons (ancient, undying metallic warriors) — each with its own campaign, tech tree, and playstyle. Your first big decision is which side to start with.',
        ],
      },
      {
        heading: 'Choosing Your First Faction',
        paragraphs: [
          'If you played the original Mechanicus, starting with the Tech-Priests will feel familiar. They rely on ranged firepower, tactical positioning, and technological upgrades. Their playstyle rewards careful planning: set up firing lines, use cover, and gradually outshoot the enemy. The Tech-Priest campaign follows Dominus Faustinius as he races to stop the Sankhotep Dynasty from awakening.',
          'The Necrons, on the other hand, are a brand-new playable faction in this sequel. They excel at aggression, resilience, and board control. Their Reanimation Protocols allow fallen warriors to return to battle, and their Gauss weaponry strips away enemy armor with alarming efficiency. The Necron campaign follows Vargard Nefershah as she mobilizes her dynasty to reclaim their world from the Mechanicus intruders.',
          'For first-time players, the Tech-Priest campaign is generally recommended as the starting point. It teaches core mechanics — cover usage, the initiative system, and resource management — in a more forgiving way. The Necron campaign is more aggressive and punishes passive play, making it better suited for a second playthrough.',
        ],
      },
      {
        heading: 'Understanding the Initiative System',
        paragraphs: [
          'Combat in Mechanicus II uses an initiative-based system. Each unit on the battlefield has an initiative stat that determines when it acts in the turn order. Faster units move first, but every action — moving, attacking, using abilities — consumes action points. This means a unit with high initiative can strike first but may run out of AP before doing everything you want.',
          'The key strategic insight is that you can influence turn order through abilities, equipment, and positioning. Certain Tech-Priest augmentations boost initiative, and some Necron abilities can delay enemy actions. Paying attention to the initiative tracker at the top of the screen is essential — it tells you exactly who acts next and lets you plan accordingly.',
          'A common beginner mistake is spending all AP on movement and leaving none for an attack or overwatch. Always leave enough AP to react. If your Tech-Priest dashes across the map and has no AP left to shoot, that unit becomes a vulnerable target. Similarly, Necron Warriors that charge in without AP for Reanimation are far less durable than they appear.',
        ],
      },
      {
        heading: 'Resource Management Basics',
        paragraphs: [
          'Both factions manage resources during the strategic layer between missions, but the resources differ. The Mechanicus collects Blackstone — a mysterious material central to the plot — and uses it to research technologies, craft equipment, and construct outposts. The Necrons harvest Awakening Points to rouse their slumbering dynasties and unlock powerful units.',
          'Spending resources wisely early on is critical. For the Mechanicus, prioritize technologies that improve your core units (Skitarii Rangers and Vanguard) before branching into exotic upgrades. A well-equipped basic squad is more valuable than an underfunded elite unit. For the Necrons, invest in Reanimation upgrades first — the ability to revive warriors mid-battle is the cornerstone of your entire strategy.',
          'Outposts are a new feature in Mechanicus II. The Mechanicus can construct fortified positions on the strategic map that provide passive bonuses and resources between missions. The Necrons can awaken tomb complexes that serve a similar purpose. Both factions must balance expanding their territory with upgrading existing assets — overexpansion without solid defenses is a quick path to losing the campaign.',
        ],
      },
      {
        heading: 'Combat Fundamentals: Cover and Positioning',
        paragraphs: [
          'The cover system in Mechanicus II is more interactive than in most turn-based games. The Mechanicus can construct temporary barricades and energy shields using certain abilities, turning open ground into defensible positions. The Necrons, conversely, can destroy cover objects — collapsing walls, barriers, and structures — to deny the enemy protection.',
          'When playing as the Mechanicus, always seek cover before ending your turn. Units caught in the open take full damage from attacks and have no defensive bonuses. Position your Skitarii behind barriers, use elevated terrain for accuracy bonuses, and keep your Tech-Priests in the rear where their auras and abilities can support the front line.',
          'As the Necrons, your approach is different. You want to close distance rapidly and force melee engagements where your superior durability gives you the advantage. Destroy cover that enemies are hiding behind, use your mobility to flank, and rely on Reanimation to shrug off losses that would cripple any other faction.',
        ],
      },
      {
        heading: 'Early Game Tips for Success',
        paragraphs: [
          'Focus on learning the initiative system before anything else. Watch the turn order, plan two steps ahead, and never leave a unit with zero AP in a vulnerable position. Once initiative management becomes second nature, the rest of the game clicks into place.',
          'Upgrade your basic units before investing in advanced ones. Skitarii Rangers with improved weapons and armor will carry you through the early campaign far more reliably than a single undergeared Kastelan Robot. For Necrons, a reinforced block of Warriors with Reanimation support is more survivable than a fragile group of specialized units.',
          'Explore the strategic map thoroughly. Side missions and optional encounters reward bonus resources that make the main campaign missions significantly easier. Do not rush from one story mission to the next — take time to build your forces and unlock key technologies first.',
          'Finally, save often and in multiple slots. Campaign decisions can lock you out of certain paths, and some missions have difficulty spikes that are much easier to handle with prior preparation. Having a save before major choices gives you the freedom to experiment without committing to a suboptimal path.',
        ],
      },
    ],
  },

  'factions-introduction': {
    slug: 'factions-introduction',
    title: 'Factions Introduction: Tech-Priests & Necrons',
    metaTitle: 'Mechanicus 2 Factions - Tech-Priests vs Necrons Compared',
    metaDescription:
      'Compare Tech-Priests and Necrons in Mechanicus II. Faction playstyles, unit rosters, tech trees, and strategy tips to pick the right side.',
    tag: 'Factions',
    thumbnail: '/guide-factions.webp',
    excerpt:
      'An in-depth look at both playable factions in Mechanicus II — their strengths, weaknesses, and distinct playstyles.',
    sections: [
      {
        heading: 'Two Factions, Two Wars',
        image: '/guide-battle-inline.webp',
        paragraphs: [
          'Mechanicus II presents two fully playable campaigns, each telling one side of the same interstellar conflict. The Adeptus Mechanicus arrives on the planet seeking to harvest Blackstone and suppress the awakening Necron threat. The Sankhotep Dynasty, roused from millennia of dormancy, fights to reclaim their homeworld from the mechanical interlopers. The choices you make in one campaign echo in the other, creating a narrative experience that rewards playing both sides.',
          'The two factions are not just cosmetically different — they represent fundamentally different approaches to the game. The Mechanicus is a faction of precision and planning, rewarding players who think several turns ahead. The Necrons reward boldness and aggression, thriving when they seize the initiative and never let go.',
        ],
      },
      {
        heading: 'Adeptus Mechanicus: The Cult of the Machine God',
        image: '/guide-techpriest-inline.webp',
        paragraphs: [
          'The Adeptus Mechanicus is the Imperium of Mankind\'s technological priesthood — a bizarre organization of cybernetically enhanced zealots who worship the Omnissiah, the Machine God. Their armies consist of Skitarii (cybernetic infantry), battle servitors, massive combat robots, and the Tech-Priests themselves, who serve as both commanders and frontline combatants.',
          'In gameplay terms, the Mechanicus excels at ranged combat, area denial, and technological customization. Tech-Priests can be equipped with a vast array of weapons, augmetics, and support gear, allowing you to tailor each one to a specific battlefield role. One Tech-Priest might focus on healing and buffing allies, while another carries heavy weapons for area suppression.',
          'The Mechanicus strategic layer revolves around Blackstone collection and technology research. You manage a growing roster of units, research new equipment and abilities, and construct outposts on the strategic map. The tech tree branches into multiple disciplines — some focused on improving existing units, others on unlocking powerful new ones. Balancing immediate combat upgrades with long-term strategic investments is key to a successful campaign.',
        ],
      },
      {
        heading: 'Mechanicus Key Units',
        paragraphs: [
          'Skitarii Rangers form the backbone of most Mechanicus armies. These cybernetic soldiers are armed with galvanic rifles — weapons that gain accuracy as they concentrate fire on a single target. Rangers are inexpensive, reliable, and benefit enormously from Tech-Priest buffs. A squad of Rangers with a supporting Dominus can punch well above its weight.',
          'Skitarii Vanguard serve as the close-range counterpart to Rangers. Their radium carbines deal radioactive damage that weakens enemies over time, and their rad-saturation aura debuffs nearby foes. Vanguard excel at holding choke points and softening targets for heavier units to finish off.',
          'Sicarian Ruststalkers and Infiltrators are elite infantry that specialize in melee and stealth respectively. Ruststalkers use transonic weapons that bypass armor, making them devastating against heavily armored Necron units. Infiltrators can deploy behind enemy lines and disrupt the enemy with fear-inducing abilities before the main force engages.',
          'Kastelan Robots are the Mechanicus\' heavy hitters — massive, ancient war machines that can be programmed for either ranged devastation or melee carnage. Their programmable battle protocols let you switch between firing modes, but they require careful positioning as they are slow and cannot use cover effectively.',
        ],
      },
      {
        heading: 'Necrons: The Eternal Dynasty',
        image: '/guide-necron-inline.webp',
        paragraphs: [
          'The Necrons are an ancient alien race that traded their biological bodies for immortal metal forms tens of millions of years ago. They slept in their tomb worlds for eons, and now they are awakening. The Sankhotep Dynasty, led by Vargard Nefershah, is determined to reclaim its former glory — and annihilate anyone who stands in the way.',
          'In gameplay, the Necrons are the faction of resilience and relentless aggression. Their signature ability, Reanimation Protocols, allows fallen warriors to stand back up and rejoin the fight. This makes Necron units deceptively durable — what looks like a weakened squad can suddenly return to full strength if you fail to finish them off completely.',
          'The Necron strategic layer focuses on awakening tomb complexes and expanding dynasty influence. Rather than researching new technologies, the Necrons gradually awaken more powerful units and unlock ancient protocols — dormant abilities that can be activated to turn the tide of battle. The strategic decisions involve which tombs to prioritize and which protocols to activate first.',
        ],
      },
      {
        heading: 'Necron Key Units',
        paragraphs: [
          'Necron Warriors are the foundation of any Necron force. Individually unremarkable, their true power lies in numbers and Reanimation. A unit of Warriors that loses half its members can regenerate them over subsequent turns, making them incredibly efficient at grinding down enemy positions through sheer attrition.',
          'Immortals are upgraded Warriors with superior Gauss weapons that strip armor layers with each hit. They are more durable and harder-hitting than standard Warriors, but also more expensive to awaken. Use them to anchor key positions or lead assaults against fortified enemy positions.',
          'Deathmarks are Necron snipers that can teleport onto the battlefield at any location, making them devastating for eliminating high-value targets. Their ability to appear behind enemy lines and deliver precision damage makes them invaluable for disrupting the Mechanicus rear areas where Tech-Priests typically operate.',
          'Lychguard are the elite melee bodyguards of the Necron court. Equipped with warscythes or hyperphase swords and dispersion shields, they can carve through even the toughest Mechanicus units. Their shields offer substantial protection against ranged attacks, allowing them to close distance and engage in melee where they dominate.',
        ],
      },
      {
        heading: 'Faction Leaders: Videx and Obasis',
        paragraphs: [
          'Mechanicus II introduces two customizable Lords — one for each faction — who serve as the player\'s avatar and most powerful unit. The Mechanicus fields Videx, a Tech-Priest who specializes in ranged firepower and mechanical unit enhancement. His skill tree branches into disciplines that boost allied ranged damage, strengthen servitor and robot units, and deploy technological barriers on the battlefield.',
          'The Necrons are led by Obasis, a Lord whose abilities center on Reanimation manipulation and melee devastation. His skill tree enhances Reanimation Protocols across the army, allows him to rally fallen units instantly, and grants powerful melee attacks that can shatter enemy formations. Obasis thrives in the thick of combat, where his aura abilities can affect the most units simultaneously.',
          'Both Lords gain experience and unlock new abilities as the campaign progresses, and the choices you make in their skill trees significantly shape your overall strategy. Videx supports a ranged, methodical approach, while Obasis enables aggressive, melee-focused tactics.',
        ],
      },
    ],
  },

  'best-units': {
    slug: 'best-units',
    title: 'Best Units for Both Factions',
    metaTitle: 'Best Units in Mechanicus 2 - Tier List for Both Factions',
    metaDescription:
      'Discover the best Mechanicus 2 units for Tech-Priests and Necrons. Tier rankings, combat roles, and synergy tips for building a powerful army.',
    tag: 'Units',
    thumbnail: '/guide-units.webp',
    excerpt:
      'Top-performing units and how to get the most value from each one in both factions.',
    sections: [
      {
        heading: 'How We Evaluate Units',
        image: '/mat-mod.webp',
        paragraphs: [
          'Evaluating units in Mechanicus II requires looking beyond raw stats. A unit\'s value depends on its cost, synergy with other units, scalability through upgrades, and how well it performs across different mission types. A cheap unit that remains useful throughout the campaign may be more valuable than an expensive one that dominates only in specific situations.',
          'We rate units on four criteria: combat effectiveness (damage output and survivability), versatility (how many mission types they excel in), cost efficiency (resources invested versus impact delivered), and scalability (how much better they get with upgrades). Units that score well across all four categories are the ones worth building your army around.',
        ],
      },
      {
        heading: 'Top Mechanicus Units',
        image: '/guide-techpriest-inline.webp',
        paragraphs: [
          'Skitarii Rangers (Tier: S) — The most cost-efficient unit in the Mechanicus roster. Their galvanic rifles gain accuracy when concentrating fire, which means they scale upward as you field more of them. A full squad of upgraded Rangers supported by a Tech-Priest Dominus is a threat at every stage of the campaign. Invest in their weapons and armor first — they will repay that investment many times over.',
          'Tech-Priest Dominus (Tier: S) — The most versatile unit in the game. A Dominus can heal allies, buff combat performance, use powerful ranged weapons, and deploy technological abilities. Different loadouts turn the Dominus into a healer, a damage dealer, or a support specialist. Every Mechanicus army should field at least one Dominus, and most benefit from two or three.',
          'Sicarian Infiltrators (Tier: A) — Infiltrators bring unmatched tactical flexibility. Their ability to deploy behind enemy lines disrupts enemy formations and draws fire away from your main force. Against the Necrons, Infiltrators are particularly effective at targeting the units providing Reanimation support, forcing the enemy to either protect their rear or lose their regeneration advantage.',
          'Kastelan Robots (Tier: A) — These massive constructs are the Mechanicus answer to concentrated firepower. Programmed for ranged mode, they can devastate entire squads with their heavy phosphor blasters. Their main weakness is vulnerability to flanking and their inability to use cover, so always position them behind screening units that can absorb melee charges.',
          'Skitarii Vanguard (Tier: B+) — Vanguard are excellent at holding choke points and softening enemies with rad damage. Their rad-saturation aura stacks with repeated exposure, making them increasingly effective in prolonged engagements. They work best in confined spaces where enemies cannot avoid the aura, such as tomb corridors and bunker interiors.',
        ],
      },
      {
        heading: 'Top Necron Units',
        image: '/guide-necron-inline.webp',
        paragraphs: [
          'Necron Warriors (Tier: S) — The defining unit of the Necron faction. Warriors are cheap, durable, and regenerate through Reanimation Protocols. A block of Warriors that is properly supported with Reanimation-enhancing abilities can hold a position indefinitely. Their Gauss flayers are effective against all armor types, making them a universal solution to any problem.',
          'Lychguard (Tier: A+) — The premiere Necron melee unit. Lychguard with dispersion shields can advance under heavy fire, close distance, and then destroy almost anything in melee combat. Their warscythe variant trades shield protection for devastating armor-piercing damage. Use shield Lychguard as spearheads for your assaults and warscythe Lychguard to eliminate high-value targets.',
          'Immortals (Tier: A) — Gauss Immortals are the Necron equivalent of a precision tool. Their weapons strip armor with each hit, making them ideal for breaking through Mechanicus defensive positions. They are more durable and harder-hitting than Warriors but cost significantly more. Field them when you need reliable, armor-piercing damage rather than overwhelming numbers.',
          'Deathmarks (Tier: A-) — These teleporting snipers excel at eliminating isolated targets, particularly Tech-Priests operating behind enemy lines. Their ability to appear anywhere on the battlefield gives them unmatched targeting flexibility. The key to using Deathmarks effectively is patience — deploy them after the enemy has committed their forces, when high-value targets are exposed.',
          'Tomb Blades (Tier: B+) — Fast-moving hovercraft that combine mobility with respectable firepower. Tomb Blades are useful for flanking maneuvers and harassing enemy positions. Their speed lets them reach objectives quickly, but their fragility means they cannot sustain prolonged engagements. Use them as harassers and objective grabbers rather than frontline combatants.',
        ],
      },
      {
        heading: 'Unit Synergies and Combinations',
        paragraphs: [
          'Individual unit strength matters, but Mechanicus II rewards combined-arms tactics. For the Mechanicus, the classic synergy is Skitarii Rangers providing concentrated ranged fire while a Dominus buffs their accuracy and heals damage. Add a Kastelan Robot for heavy fire support and Infiltrators to disrupt the enemy rear, and you have a well-rounded force that can handle most situations.',
          'For the Necrons, the foundation is always the Warrior block with Reanimation support. Surround this core with Immortals for armor-piercing damage and Lychguard for melee protection. Deathmarks serve as your surgical strike option — teleport them in to eliminate enemy commanders or artillery when the opportunity arises.',
          'The most effective armies in Mechanicus II are not built around a single powerful unit but around complementary pairs and groups. A Kastelan Robot without screening infantry is a sitting duck. Lychguard without Reanimation support will eventually fall. Always think about how your units support each other, not just how strong each one is individually.',
        ],
      },
    ],
  },

  'tech-priest-builds': {
    slug: 'tech-priest-builds',
    title: 'Optimal Tech-Priest Builds',
    metaTitle: 'Best Tech-Priest Builds in Mechanicus 2 - Loadouts & Augmetics',
    metaDescription:
      'Optimize Tech-Priest builds in Mechanicus II: best loadouts for damage, support, and survivability. Equipment, augmetics, and skill path recommendations.',
    tag: 'Builds',
    thumbnail: '/guide-builds.webp',
    excerpt:
      'Proven build paths and equipment choices for maximizing Tech-Priest effectiveness in every role.',
    sections: [
      {
        heading: 'Understanding Tech-Priest Customization',
        image: '/guide-augment-inline.webp',
        paragraphs: [
          'Tech-Priests are the most customizable units in Mechanicus II. Each one can be equipped with weapons, support items, augmetic enhancements, and specialized gear that fundamentally changes their battlefield role. A Tech-Priest built for healing plays nothing like one built for ranged damage, and neither resembles a melee-focused brawler.',
          'Customization occurs across several slots: main weapon, sidearm, support item, body augmetic, head augmetic, and servo-skull companion. Each slot offers multiple options that can be mixed and matched. The key to effective builds is focusing on a coherent role rather than trying to make a single Tech-Priest good at everything.',
        ],
      },
      {
        heading: 'Build 1: The Fire Support Dominus',
        image: '/mat-weapon-parts.webp',
        paragraphs: [
          'Role: Ranged damage dealer and fire coordination',
          'Main Weapon: Heavy Arc Rifle or Plasma Culverin — both deliver high, consistent damage at range. The Arc Rifle has the added benefit of arc damage that chains to nearby enemies, while the Plasma Culverin offers superior single-target damage with the risk of overheating.',
          'Support Item: Omnissiah\'s Beacon — marks a target, granting all allies increased accuracy against it. This turns the Dominus into a force multiplier, making every other unit in your army more effective against the designated target.',
          'Augmetics: Targeting Cortex (head) for improved hit chance, and the Ballistic Processor (body) for increased critical strike chance on ranged attacks. These stack to create a unit that rarely misses and frequently crits.',
          'Strategy: Position the Fire Support Dominus in the rear of your formation with clear lines of sight. Use the Beacon to mark the most dangerous enemy each turn, then follow up with your own heavy weapon. This build turns the Dominus into an anchor that your Skitarii rally around.',
        ],
      },
      {
        heading: 'Build 2: The Combat Medic Explorator',
        paragraphs: [
          'Role: Healer and battlefield support',
          'Main Weapon: Eradication Ray or Gamma Pistol — lightweight weapons that do not consume much AP, leaving more for healing and support abilities. The Eradication Ray\'s short range is acceptable since this build operates near the front line.',
          'Support Item: Reconstruction Serum or Cyber-Mantle — both provide healing to allies. The Serum delivers a burst of immediate healing, while the Cyber-Mantle provides a persistent regeneration aura. Choose based on whether you prefer reactive or proactive healing.',
          'Augmetics: Medicus Node (head) for improved healing output, and the Cybernetic Symbiosis (body) which grants a small healing pulse whenever the Tech-Priest takes damage. This makes the Explorator surprisingly resilient even in dangerous positions.',
          'Strategy: Keep the Explorator one step behind your front-line Skitarii. Heal damaged units immediately rather than waiting — a unit at full health can still act, while a dead unit cannot. Use any remaining AP for potshots with your weapon, but never prioritize damage over healing.',
        ],
      },
      {
        heading: 'Build 3: The Breacher Enginseer',
        paragraphs: [
          'Role: Melee combatant and cover constructor',
          'Main Weapon: Power Sword or Arc Claw — both are devastating in melee. The Power Sword offers higher base damage and armor penetration, while the Arc Claw deals arc damage that chains to nearby enemies — useful when surrounded.',
          'Sidearm: Phosphor Pistol — blinds enemies hit, reducing their accuracy for one turn. This gives the Enginseer a defensive tool to use before charging into melee.',
          'Support Item: Breaching Charge or Fortification Projector — the Charge destroys enemy cover and deals area damage; the Projector creates new cover for allies. Both define the Enginseer\'s role as a terrain manipulator.',
          'Augmetics: Locomotion Enhancers (body) for increased movement range, and the Threat Sensor (head) for overwatch accuracy. These allow the Enginseer to close distance quickly and punish any enemy that moves within range.',
          'Strategy: The Breacher thrives in close quarters. Use the Fortification Projector to create cover for your Skitarii, then charge forward to engage enemy units in melee. Against the Necrons, destroying their cover positions with Breaching Charges removes their only defensive option and forces them into unfavorable exchanges.',
        ],
      },
      {
        heading: 'Build 4: The Command Hierophant',
        paragraphs: [
          'Role: Buff specialist and army coordinator',
          'Main Weapon: Radium Carbine or Volkite Charger — the Carbine applies stacking rad damage that weakens enemies over time, while the Charger delivers burst damage with a chance to chain to nearby targets.',
          'Support Item: Litany of Faith or Doctrina Imperative — the Litany buffs all nearby allies\' damage resistance, while the Imperative increases their action point recovery. Both are powerful force multipliers that scale with the number of allies in range.',
          'Augmetics: Command Protocols (head) which extends the range of all aura abilities, and the Inspiration Array (body) which grants a small AP bonus to allies at the start of each turn. Combined, these make the Hierophant\'s buffs reach further and hit harder.',
          'Strategy: The Hierophant should be positioned at the center of your formation where its auras can reach the maximum number of allies. This build does not deal exceptional damage or heal directly, but it makes every other unit in your army significantly more effective. Think of it as a 15-20% improvement to everything your army does.',
        ],
      },
      {
        heading: 'General Build Principles',
        paragraphs: [
          'Specialize, do not generalize. A Tech-Priest that tries to heal, shoot, and fight in melee will be mediocre at all three. Pick one primary role and commit to it — the game rewards focused builds with abilities that synergize.',
          'Match your build to your army composition. If you field many Skitarii Rangers, a Fire Support Dominus with a Beacon will multiply their effectiveness. If you rely on Kastelan Robots, a Command Hierophant\'s buffs will make them even more formidable. Build your Tech-Priests to amplify the strengths of your existing army.',
          'Upgrade incrementally. Do not save resources for the perfect end-game loadout — equip your Tech-Priests with available gear as soon as possible and upgrade piece by piece. A fully equipped mid-tier build is always more effective than an empty slot waiting for a rare item.',
          'Finally, do not overlook servo-skulls. These small companion units provide passive bonuses — increased detection range, improved overwatch, or resource scavenging — that complement any build. A servo-skull is a small investment that pays dividends across the entire campaign.',
        ],
      },
    ],
  },

  'necron-campaign-walkthrough': {
    slug: 'necron-campaign-walkthrough',
    title: 'Necron Campaign Walkthrough',
    metaTitle: 'Necron Campaign Walkthrough - Mechanicus 2 Full Strategy',
    metaDescription:
      'Complete Necron campaign walkthrough for Mechanicus II. Mission strategies, awakening priorities, dynasty management, and boss fight tips.',
    tag: 'Campaign',
    thumbnail: '/guide-necron.webp',
    excerpt:
      'Step-by-step walkthrough for the Necron campaign with strategy tips for every phase.',
    sections: [
      {
        heading: 'Campaign Overview: Rise of the Sankhotep Dynasty',
        image: '/guide-tomb-inline.webp',
        paragraphs: [
          'The Necron campaign in Mechanicus II follows Vargard Nefershah as she leads the Sankhotep Dynasty\'s bid to reclaim their homeworld from the Adeptus Mechanicus. After millennia of dormancy, the tomb worlds are stirring — but the Mechanicus has already established outposts and fortified positions across the planet. Your task is to dismantle their presence while awakening enough of your dynasty to tip the balance of power.',
          'The campaign is divided into three phases: Awakening (early game, where you rouse basic units and secure your initial tomb complexes), Expansion (mid game, where you push into Mechanicus-held territory and unlock elite units), and Ascension (late game, where the full power of the dynasty is brought to bear against the remaining Mechanicus forces). Each phase introduces new unit types, strategic options, and narrative events.',
        ],
      },
      {
        heading: 'Phase 1: Awakening (Early Campaign)',
        image: '/guide-necron-inline.webp',
        paragraphs: [
          'Your first priority is securing the starting tomb complex and awakening your initial wave of Warriors. Do not spread your forces thin — concentrate on one tomb at a time and fully clear the surrounding area before moving to the next. Each awakened tomb provides a steady stream of Awakening Points that fund your expansion.',
          'In combat, rely on your Warriors\' durability and Reanimation to win through attrition. Your early forces are not glamorous, but they are incredibly resilient. Focus fire on one enemy unit at a time to eliminate it before Reanimation becomes relevant on the other side — you do not want the Mechanicus player getting the same regeneration benefit from their own abilities.',
          'Invest your first Awakening Points into improving Reanimation efficiency. The faster your Warriors stand back up, the more aggressively you can play. Avoid spending on elite units too early — a reinforced core of Warriors with enhanced Reanimation is more reliable than a thin force with one or two Immortals.',
        ],
      },
      {
        heading: 'Phase 2: Expansion (Mid Campaign)',
        paragraphs: [
          'Once your core is stable, begin expanding toward the Mechanicus outposts. Each outpost you destroy weakens their strategic position and provides bonus resources. However, do not neglect defense — the Mechanicus will launch counter-attacks against your tomb complexes, and losing a tomb means losing its Awakening Point income permanently.',
          'This is the phase where you should start awakening Immortals and Deathmarks. Immortals give you the armor-piercing damage needed to crack fortified Mechanicus positions, while Deathmarks provide the surgical strike capability to eliminate Tech-Priests before they can buff their forces. Pair Immortals with your Warrior blocks for a balanced assault force.',
          'Narrative events become more frequent during this phase. Many present choices between immediate rewards and long-term benefits. As a general rule, prioritize choices that improve your Reanimation capabilities or unlock new unit types — these benefits compound over the rest of the campaign. One-time resource bonuses are tempting but rarely game-changing.',
        ],
      },
      {
        heading: 'Phase 3: Ascension (Late Campaign)',
        image: '/guide-tomb-inline.webp',
        paragraphs: [
          'The late campaign is where the Necron dynasty reaches full power. By now you should have access to Lychguard, Tomb Blades, and possibly a Necron Lord with advanced protocols. Your Warrior blocks should be fully upgraded with enhanced Reanimation, and your awakening economy should be producing enough points to replace losses between missions.',
          'The Mechanicus will field their strongest units in this phase — Kastelan Robots, fully equipped Tech-Priests, and elite Skitarii squads. Counter them with combined arms: Lychguard to absorb and return ranged fire, Immortals to strip armor at range, and Warriors to hold the line. Use Deathmarks to eliminate Tech-Priests as a priority — without their buffs, the Mechanicus infantry becomes far less threatening.',
          'The final missions are heavily narrative-driven and feature unique mechanics not found in standard missions. Expect environmental hazards, time-limited objectives, and powerful enemy commanders. Bring your most versatile force and be prepared to adapt mid-mission. The Necron campaign culminates in a climactic confrontation that tests everything you have learned.',
        ],
      },
      {
        heading: 'Key Strategic Decisions',
        paragraphs: [
          'Tomb Awakening Priority: Always awaken the tomb closest to a Mechanicus outpost first. This gives you a forward operating base for your assault and denies the enemy a potential expansion point. Interior tombs are safer but contribute less to territorial control.',
          'Protocol Selection: When choosing which ancient protocols to activate, prioritize Reanimation enhancements and movement bonuses. The ability to revive fallen units faster and reposition quickly gives you tactical flexibility that raw damage cannot match. Damage-boosting protocols are useful but should be secondary to survivability.',
          'Diplomacy Events: Several campaign events present opportunities to negotiate with other Necron dynasties. These choices offer unique units and abilities but come at a cost — typically reduced Awakening Point income or restricted unit choices. Consider your current army composition before committing. If you are already strong in melee, a diplomacy event that provides ranged units fills a gap in your roster.',
        ],
      },
      {
        heading: 'Common Mistakes to Avoid',
        paragraphs: [
          'Overextending without Reanimation support. Your units are durable, but they are not invincible. Pushing too far ahead of your Reanimation aura range means fallen Warriors stay down, gradually eroding your combat power. Always keep your army within supporting distance of each other.',
          'Ignoring Tech-Priest targets. A single Dominus healing and buffing a squad of Skitarii can turn a straightforward engagement into a grueling attrition battle. Kill the Tech-Priest first — once the support is gone, the infantry falls quickly.',
          'Hoarding Awakening Points. Resources not spent are resources wasted. Every turn you delay awakening a new unit or activating a protocol is a turn the Mechanicus grows stronger. Spend aggressively but thoughtfully — invest in upgrades that multiply your existing strengths rather than diversifying into areas where you are already adequate.',
          'Neglecting the strategic map. Combat missions are important, but the strategic layer determines which missions are available and how prepared you are for them. Check the map between every mission, reinforce weak points, and plan your next two or three moves in advance.',
        ],
      },
    ],
  },
};

export const guideSlugs = Object.keys(guides);

export const GUIDE_NOTICE = _GUIDE_NOTICE;
