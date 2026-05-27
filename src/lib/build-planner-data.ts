/**
 * Build Planner Data for Warhammer 40,000: Mechanicus II
 * 
 * DISCLAIMER: All data is manually collected, sorted and rephrased by fans.
 * Not copied from official game files or documents.
 * Names use generic identifiers; descriptions are original summaries.
 */

// === Equipment Slot Types ===
export type EquipSlot = 'primary_weapon' | 'secondary_weapon' | 'armor' | 'implant' | 'mod' | 'relic';

export const SLOT_LABELS: Record<EquipSlot, string> = {
  primary_weapon: 'Primary Weapon',
  secondary_weapon: 'Secondary Weapon',
  armor: 'Armor',
  implant: 'Implant',
  mod: 'Mod',
  relic: 'Relic',
};

// === Factions ===
export type Faction = 'mechanicus' | 'necrons';

// === Unit Role ===
export type UnitRole = 'commander' | 'infantry' | 'elite' | 'heavy' | 'support';

export const ROLE_LABELS: Record<UnitRole, string> = {
  commander: 'Commander',
  infantry: 'Infantry',
  elite: 'Elite',
  heavy: 'Heavy',
  support: 'Support',
};

// === Stat Category ===
export interface UnitStats {
  hp: number;
  armor: number;
  damage: number;
  critChance: number;
  initiative: number;
  movement: number;
}

// === Equipment Item ===
export interface EquipItem {
  id: string;
  name: string;
  faction: Faction;
  slot: EquipSlot;
  rarity: 'common' | 'uncommon' | 'rare' | 'exotic';
  description: string;
  statBonus: Partial<UnitStats>;
  prerequisites?: string;
}

// === Unit ===
export interface Unit {
  id: string;
  name: string;
  faction: Faction;
  role: UnitRole;
  description: string;
  baseStats: UnitStats;
  availableSlots: EquipSlot[];
}

// === Saved Build ===
export interface SavedBuild {
  id: string;
  name: string;
  faction: Faction;
  unitId: string;
  equipment: Record<EquipSlot, string | null>;
  savedAt: number;
}

// ============================================================
// MECHANICUS UNITS
// ============================================================
export const mechanicusUnits: Unit[] = [
  {
    id: 'tp-dominus',
    name: 'Tech-Priest Dominus',
    faction: 'mechanicus',
    role: 'commander',
    description: 'The commanding magos of the Mechanicus expedition. Masters of battlefield coordination and technological warfare, capable of enhancing nearby allies while unleashing devastating ranged attacks.',
    baseStats: { hp: 180, armor: 25, damage: 18, critChance: 10, initiative: 14, movement: 4 },
    availableSlots: ['primary_weapon', 'secondary_weapon', 'armor', 'implant', 'mod', 'relic'],
  },
  {
    id: 'tp-vanguard',
    name: 'Skitarii Vanguard',
    faction: 'mechanicus',
    role: 'infantry',
    description: 'Radiation-soaked shock troops whose very presence is toxic. Armed with radium carbines that poison targets over time, they excel at wearing down entrenched enemies.',
    baseStats: { hp: 70, armor: 8, damage: 12, critChance: 15, initiative: 12, movement: 4 },
    availableSlots: ['primary_weapon', 'armor', 'implant', 'mod'],
  },
  {
    id: 'tp-ranger',
    name: 'Skitarii Ranger',
    faction: 'mechanicus',
    role: 'infantry',
    description: 'Long-range specialists equipped with galvanic rifles. They pick off high-value targets from afar and provide reliable sustained fire across the battlefield.',
    baseStats: { hp: 65, armor: 8, damage: 14, critChance: 20, initiative: 11, movement: 4 },
    availableSlots: ['primary_weapon', 'armor', 'implant', 'mod'],
  },
  {
    id: 'tp-ruststalker',
    name: 'Sicarian Ruststalker',
    faction: 'mechanicus',
    role: 'elite',
    description: 'Transonic-blade wielding assassins that shred armor with horrifying efficiency. They close distance quickly and dismantle even the most heavily armored foes in melee.',
    baseStats: { hp: 85, armor: 12, damage: 22, critChance: 25, initiative: 18, movement: 6 },
    availableSlots: ['primary_weapon', 'secondary_weapon', 'armor', 'mod'],
  },
  {
    id: 'tp-infiltrator',
    name: 'Sicarian Infiltrator',
    faction: 'mechanicus',
    role: 'elite',
    description: 'Stealth operatives that deploy behind enemy lines, disrupting formations with flechette blasters and taser goads. Their neural disruptors degrade enemy combat effectiveness.',
    baseStats: { hp: 80, armor: 10, damage: 16, critChance: 20, initiative: 16, movement: 6 },
    availableSlots: ['primary_weapon', 'secondary_weapon', 'armor', 'implant'],
  },
  {
    id: 'tp-kastelan',
    name: 'Kastelan Robot',
    faction: 'mechanicus',
    role: 'heavy',
    description: 'Ancient battle automata of immense strength and durability. Programmed for sustained fire or devastating punching routines, they form an unstoppable metallic wall.',
    baseStats: { hp: 200, armor: 35, damage: 20, critChance: 5, initiative: 6, movement: 3 },
    availableSlots: ['primary_weapon', 'secondary_weapon', 'armor', 'mod', 'relic'],
  },
  {
    id: 'tp-destroyer',
    name: 'Kataphron Destroyer',
    faction: 'mechanicus',
    role: 'heavy',
    description: 'Heavy weapons platforms mounting plasma culverins or grav-cannons. Their relentless barrages can level fortifications and vaporize entire enemy squads.',
    baseStats: { hp: 120, armor: 20, damage: 28, critChance: 8, initiative: 8, movement: 3 },
    availableSlots: ['primary_weapon', 'armor', 'mod'],
  },
  {
    id: 'tp-enginseer',
    name: 'Tech-Priest Enginseer',
    faction: 'mechanicus',
    role: 'support',
    description: 'Battlefield repair specialists who restore damaged units and fortify positions. Their servo-arms can also deliver crushing melee strikes when threatened.',
    baseStats: { hp: 100, armor: 15, damage: 10, critChance: 8, initiative: 10, movement: 4 },
    availableSlots: ['secondary_weapon', 'armor', 'implant', 'mod'],
  },
];

// ============================================================
// NECRON UNITS
// ============================================================
export const necronUnits: Unit[] = [
  {
    id: 'nc-overlord',
    name: 'Necron Overlord',
    faction: 'necrons',
    role: 'commander',
    description: 'The supreme commander of a Necron dynasty, wielding warscythes and resurrection orbs. They command respect through millennia of tactical experience and inhuman resilience.',
    baseStats: { hp: 200, armor: 30, damage: 20, critChance: 12, initiative: 14, movement: 4 },
    availableSlots: ['primary_weapon', 'secondary_weapon', 'armor', 'implant', 'mod', 'relic'],
  },
  {
    id: 'nc-cryptek',
    name: 'Cryptek',
    faction: 'necrons',
    role: 'support',
    description: 'Masters of ancient technosorcery who manipulate energy fields, chronometric arrays, and quantum shielding. They enhance Necron forces while debilitating opponents.',
    baseStats: { hp: 90, armor: 12, damage: 14, critChance: 10, initiative: 12, movement: 4 },
    availableSlots: ['primary_weapon', 'armor', 'implant', 'mod', 'relic'],
  },
  {
    id: 'nc-warrior',
    name: 'Necron Warrior',
    faction: 'necrons',
    role: 'infantry',
    description: 'The relentless backbone of any Necron army. These undying soldiers march forward with gauss flayers, their reanimation protocols ensuring they return from any defeat.',
    baseStats: { hp: 80, armor: 12, damage: 12, critChance: 8, initiative: 8, movement: 4 },
    availableSlots: ['primary_weapon', 'armor', 'mod'],
  },
  {
    id: 'nc-immortal',
    name: 'Necron Immortal',
    faction: 'necrons',
    role: 'infantry',
    description: 'Elite warriors wielding tesla carbines or gauss blasters. Tougher and more lethal than standard Warriors, they hold key positions with unwavering resolve.',
    baseStats: { hp: 100, armor: 18, damage: 16, critChance: 12, initiative: 10, movement: 4 },
    availableSlots: ['primary_weapon', 'armor', 'implant', 'mod'],
  },
  {
    id: 'nc-deathmark',
    name: 'Deathmark',
    faction: 'necrons',
    role: 'elite',
    description: 'Hyperspace-sniping assassins that materialize from dimensional pockets to deliver lethal precision shots. Their synaptic disintegrators never miss critical targets.',
    baseStats: { hp: 75, armor: 10, damage: 24, critChance: 30, initiative: 16, movement: 5 },
    availableSlots: ['primary_weapon', 'armor', 'implant', 'mod'],
  },
  {
    id: 'nc-lychguard',
    name: 'Lychguard',
    faction: 'necrons',
    role: 'elite',
    description: 'The sworn bodyguards of Necron royalty, armed with warscythes or dispersion shields. They form an impenetrable defensive phalanx around their liege.',
    baseStats: { hp: 130, armor: 25, damage: 22, critChance: 12, initiative: 10, movement: 4 },
    availableSlots: ['primary_weapon', 'secondary_weapon', 'armor', 'mod'],
  },
  {
    id: 'nc-wraith',
    name: 'Canoptek Wraith',
    faction: 'necrons',
    role: 'elite',
    description: 'Phase-shifting constructs that glide through walls and terrain. Their melee attacks are devastating, and their ability to bypass obstacles makes them unpredictable flankers.',
    baseStats: { hp: 90, armor: 14, damage: 26, critChance: 22, initiative: 20, movement: 7 },
    availableSlots: ['primary_weapon', 'armor', 'implant'],
  },
  {
    id: 'nc-scarab',
    name: 'Canoptek Scarab Swarm',
    faction: 'necrons',
    role: 'support',
    description: 'Tireless swarms of self-replicating constructs that chew through armor and fortifications. They screen allied units and strip enemy defenses with alarming speed.',
    baseStats: { hp: 50, armor: 5, damage: 8, critChance: 10, initiative: 14, movement: 6 },
    availableSlots: ['armor', 'mod'],
  },
];

// ============================================================
// MECHANICUS EQUIPMENT
// ============================================================
export const mechanicusEquipment: EquipItem[] = [
  // Primary Weapons
  { id: 'mw-galvanic', name: 'Galvanic Rifle', faction: 'mechanicus', slot: 'primary_weapon', rarity: 'common', description: 'Reliable long-range kinetic rifle. Balanced accuracy and damage output for sustained engagements.', statBonus: { damage: 6, critChance: 5 } },
  { id: 'mw-radium', name: 'Radium Carbine', faction: 'mechanicus', slot: 'primary_weapon', rarity: 'common', description: 'Toxic projectile weapon that poisons targets. Lower initial damage but persistent health degradation.', statBonus: { damage: 4, critChance: 8 } },
  { id: 'mw-arc', name: 'Arc Rifle', faction: 'mechanicus', slot: 'primary_weapon', rarity: 'uncommon', description: 'Electromagnetic discharge weapon. Effective against armored targets and can chain to adjacent enemies.', statBonus: { damage: 8, armor: 2 } },
  { id: 'mw-plasma', name: 'Plasma Caliver', faction: 'mechanicus', slot: 'primary_weapon', rarity: 'rare', description: 'Superheated plasma projector with devastating damage potential. Risk of overheating at maximum power.', statBonus: { damage: 14, critChance: 3 } },
  { id: 'mw-transonic', name: 'Transonic Blade', faction: 'mechanicus', slot: 'primary_weapon', rarity: 'rare', description: 'Melee weapon with vibrating edge that harmonizes with target frequency. Bypasses armor at resonance.', statBonus: { damage: 12, initiative: 3 } },
  { id: 'mw-volkite', name: 'Volkite Blaster', faction: 'mechanicus', slot: 'primary_weapon', rarity: 'exotic', description: 'Ancient deflagration weapon from the Dark Age. Struck targets ignite, spreading destruction to nearby foes.', statBonus: { damage: 18, critChance: 8 } },
  { id: 'mw-phosphor', name: 'Phosphor Serpenta', faction: 'mechanicus', slot: 'primary_weapon', rarity: 'uncommon', description: 'Blinding chemical projector that illuminates and burns. Marked targets suffer reduced evasion.', statBonus: { damage: 7, initiative: 2 } },
  { id: 'mw-eradication', name: 'Eradication Ray', faction: 'mechanicus', slot: 'primary_weapon', rarity: 'exotic', description: 'Exotic energy weapon that disintegrates matter at the molecular level. Leaves no trace of the target.', statBonus: { damage: 22, critChance: 5 } },

  // Secondary Weapons
  { id: 'ms-servoarm', name: 'Servo-Arm', faction: 'mechanicus', slot: 'secondary_weapon', rarity: 'common', description: 'Mechanical limb attachment for crushing melee strikes. Also used for field repairs on allied units.', statBonus: { damage: 5, armor: 3 } },
  { id: 'ms-taser', name: 'Taser Goad', faction: 'mechanicus', slot: 'secondary_weapon', rarity: 'uncommon', description: 'Contact weapon delivering high-voltage shock. Chance to stun targets on successful hit.', statBonus: { damage: 8, initiative: 2 } },
  { id: 'ms-omnissian', name: 'Omnissian Axe', faction: 'mechanicus', slot: 'secondary_weapon', rarity: 'rare', description: 'Blessed power axe of the Machine God. Cleaves through armor with sanctified energy discharge.', statBonus: { damage: 10, armor: 5 } },
  { id: 'ms-macharian', name: 'Macharian Claw', faction: 'mechanicus', slot: 'secondary_weapon', rarity: 'exotic', description: 'Artifact grasping claw from the Great Crusade era. Crushes targets with gravitational force.', statBonus: { damage: 14, hp: 20 } },

  // Armor
  { id: 'ma-mesh', name: 'Mesh Underlay', faction: 'mechanicus', slot: 'armor', rarity: 'common', description: 'Lightweight mesh weave providing basic protection. Does not hinder mobility.', statBonus: { hp: 15, armor: 4, movement: 1 } },
  { id: 'ma-flak', name: 'Flakweave Mantle', faction: 'mechanicus', slot: 'armor', rarity: 'uncommon', description: 'Layered ballistic fabric with improved shrapnel resistance. Standard issue for frontline units.', statBonus: { hp: 25, armor: 8 } },
  { id: 'ma-adamantine', name: 'Adamantine Mantle', faction: 'mechanicus', slot: 'armor', rarity: 'rare', description: 'Heavy plating forged from near-indestructible alloy. Significantly reduces incoming damage.', statBonus: { hp: 40, armor: 14, movement: -1 } },
  { id: 'ma-terminatus', name: 'Terminatus Plate', faction: 'mechanicus', slot: 'armor', rarity: 'exotic', description: 'Masterwork exo-armor integrating void shield emitters. The pinnacle of Mechanicus personal protection.', statBonus: { hp: 60, armor: 20, critChance: 5 } },

  // Implants
  { id: 'mi-bionic', name: 'Bionic Ocular', faction: 'mechanicus', slot: 'implant', rarity: 'common', description: 'Enhanced optical implant improving targeting precision and situational awareness.', statBonus: { critChance: 8, initiative: 2 } },
  { id: 'mi-potentia', name: 'Potencia Circuit', faction: 'mechanicus', slot: 'implant', rarity: 'uncommon', description: 'Energy circulation implant that boosts neural processing speed and reaction time.', statBonus: { initiative: 5, critChance: 4 } },
  { id: 'mi-aurussian', name: 'Aurussian Heart', faction: 'mechanicus', slot: 'implant', rarity: 'rare', description: 'Advanced circulatory replacement that sustains the body under extreme stress and damage.', statBonus: { hp: 35, armor: 6, initiative: 3 } },
  { id: 'mi-cortex', name: 'Cortex Controller', faction: 'mechanicus', slot: 'implant', rarity: 'exotic', description: 'Dominus-class neural augmentation enabling simultaneous unit coordination and combat optimization.', statBonus: { initiative: 8, critChance: 10, damage: 4 } },

  // Mods
  { id: 'mm-targeting', name: 'Targeting Array', faction: 'mechanicus', slot: 'mod', rarity: 'common', description: 'Ballistic computation module that improves shot accuracy at all ranges.', statBonus: { critChance: 10 } },
  { id: 'mm-magazine', name: 'Expanded Magazine', faction: 'mechanicus', slot: 'mod', rarity: 'uncommon', description: 'Increased ammunition capacity enabling sustained fire without reloading interruptions.', statBonus: { damage: 3, critChance: 3 } },
  { id: 'mm-machine', name: 'Machine Spirit Binding', faction: 'mechanicus', slot: 'mod', rarity: 'rare', description: 'Ritual binding of a war-spirit into equipment. The spirit autonomously optimizes combat performance.', statBonus: { damage: 6, initiative: 4, critChance: 5 } },
  { id: 'mm-omnissiah', name: 'Omnissiah Conduit', faction: 'mechanicus', slot: 'mod', rarity: 'exotic', description: 'Direct channel to the Machine God\'s power. Equipment operates beyond nominal design specifications.', statBonus: { damage: 10, critChance: 8, armor: 5 } },

  // Relics
  { id: 'mr-cawl', name: 'Cawl\'s Prototype', faction: 'mechanicus', slot: 'relic', rarity: 'exotic', description: 'Experimental technology of unknown function from the Archmagos\' secret vaults. Power beyond conventional understanding.', statBonus: { hp: 25, damage: 8, armor: 8, critChance: 10 } },
  { id: 'mr-omni', name: 'Omnissiah Shard', faction: 'mechanicus', slot: 'relic', rarity: 'rare', description: 'Fragment of a destroyed Machine Spirit containing vast accumulated combat data and tactical wisdom.', statBonus: { damage: 5, initiative: 6, critChance: 8 } },
];

// ============================================================
// NECRON EQUIPMENT
// ============================================================
export const necronEquipment: EquipItem[] = [
  // Primary Weapons
  { id: 'nw-gauss', name: 'Gauss Flayer', faction: 'necrons', slot: 'primary_weapon', rarity: 'common', description: 'Molecular disintegration weapon. Strips away armor layer by layer, growing more effective against heavier protection.', statBonus: { damage: 6, armor: -2 } },
  { id: 'nw-tesla', name: 'Tesla Carbine', faction: 'necrons', slot: 'primary_weapon', rarity: 'common', description: 'Lightning projector that arcs between clustered targets. Excellent against grouped enemy formations.', statBonus: { damage: 5, critChance: 10 } },
  { id: 'nw-blaster', name: 'Gauss Blaster', faction: 'necrons', slot: 'primary_weapon', rarity: 'uncommon', description: 'Enhanced gauss weapon with greater range and penetrating power. The standard armament of Immortals.', statBonus: { damage: 10, critChance: 5 } },
  { id: 'nw-synaptic', name: 'Synaptic Disintegrator', faction: 'necrons', slot: 'primary_weapon', rarity: 'rare', description: 'Precision sniper weapon that severs neural connections. Favored by Deathmarks for eliminating key targets.', statBonus: { damage: 12, critChance: 20 } },
  { id: 'nw-warscythe', name: 'Warscythe', faction: 'necrons', slot: 'primary_weapon', rarity: 'rare', description: 'Devastating melee weapon with a phase-shifting edge. Cuts through physical matter and energy shields alike.', statBonus: { damage: 16, initiative: 2 } },
  { id: 'nw-tachyon', name: 'Tachyon Arrow', faction: 'necrons', slot: 'primary_weapon', rarity: 'exotic', description: 'One-shot weapon that accelerates a projectile to near-light speed. Capable of piercing any known material.', statBonus: { damage: 30, critChance: 15 } },
  { id: 'nw-voidblade', name: 'Voidblade', faction: 'necrons', slot: 'primary_weapon', rarity: 'uncommon', description: 'Melee weapon that fractures dimensional integrity. The blade exists partially outside normal space.', statBonus: { damage: 11, armor: 3 } },
  { id: 'nw-staff', name: 'Staff of Light', faction: 'necrons', slot: 'primary_weapon', rarity: 'rare', description: 'Ancient energy weapon combining ranged and melee capability. Channels the raw power of the Necron dynasties.', statBonus: { damage: 14, hp: 15 } },

  // Secondary Weapons
  { id: 'ns-gauntlet', name: 'Gauntlet of Flame', faction: 'necrons', slot: 'secondary_weapon', rarity: 'common', description: 'Wrist-mounted incinerator that projects a cone of eldritch fire. Effective at close range against clusters.', statBonus: { damage: 6, initiative: 1 } },
  { id: 'ns-dispersion', name: 'Dispersion Shield', faction: 'necrons', slot: 'secondary_weapon', rarity: 'uncommon', description: 'Defensive barrier projector that absorbs and redirects incoming energy attacks back toward their source.', statBonus: { armor: 8, hp: 15 } },
  { id: 'ns-hyperphase', name: 'Hyperphase Sword', faction: 'necrons', slot: 'secondary_weapon', rarity: 'rare', description: 'Blade that shifts between dimensional frequencies. Each strike exists in multiple realities simultaneously.', statBonus: { damage: 10, critChance: 8 } },
  { id: 'ns-abyssal', name: 'Abyssal Staff', faction: 'necrons', slot: 'secondary_weapon', rarity: 'exotic', description: 'Artifact weapon that channels the despair of entombed souls. Enemies struck lose the will to fight.', statBonus: { damage: 12, initiative: 6, hp: 20 } },

  // Armor
  { id: 'na-living', name: 'Living Metal Frame', faction: 'necrons', slot: 'armor', rarity: 'common', description: 'Self-repairing necrodermis frame that slowly restores structural damage during combat.', statBonus: { hp: 20, armor: 5 } },
  { id: 'na-phase', name: 'Phase Shift Matrix', faction: 'necrons', slot: 'armor', rarity: 'uncommon', description: 'Dimensional displacement system that partially phases the wearer out of normal space, reducing hit probability.', statBonus: { hp: 25, armor: 8, movement: 1 } },
  { id: 'na-neuro', name: 'Neurotic Warden', faction: 'necrons', slot: 'armor', rarity: 'rare', description: 'Sentient defensive system that anticipates attacks and autonomously repositions armor plating.', statBonus: { hp: 40, armor: 12, critChance: 5 } },
  { id: 'na-eternity', name: 'Eternity Warden Shell', faction: 'necrons', slot: 'armor', rarity: 'exotic', description: 'The ultimate Necron war-frame. Integrates quantum shielding with temporal stasis fields for near-invulnerability.', statBonus: { hp: 60, armor: 18, initiative: 3 } },

  // Implants
  { id: 'ni-reanimation', name: 'Reanimation Protocol', faction: 'necrons', slot: 'implant', rarity: 'common', description: 'Built-in revival system that attempts to restore the unit after seemingly fatal damage.', statBonus: { hp: 30, armor: 3 } },
  { id: 'ni-mindshackle', name: 'Mindshackle Scarab', faction: 'necrons', slot: 'implant', rarity: 'uncommon', description: 'Neural control parasite that can override enemy units. Chance to turn an attacker against their allies.', statBonus: { initiative: 5, damage: 3 } },
  { id: 'ni-chronometric', name: 'Chronometric Array', faction: 'necrons', slot: 'implant', rarity: 'rare', description: 'Temporal sensor that perceives moments before they occur, allowing preemptive responses to threats.', statBonus: { initiative: 8, critChance: 10 } },
  { id: 'ni-eternity', name: 'Eternity Circuit', faction: 'necrons', slot: 'implant', rarity: 'exotic', description: 'Phylactery matrix containing the unit\'s engrammatic backup. Upon destruction, the unit eventually reconstitutes.', statBonus: { hp: 50, armor: 10, initiative: 5 } },

  // Mods
  { id: 'nm-tomb', name: 'Tomb World Resonance', faction: 'necrons', slot: 'mod', rarity: 'common', description: 'Communication link to the local tomb network. Boosts coordination with other Necron units.', statBonus: { initiative: 4, critChance: 3 } },
  { id: 'nm-quantum', name: 'Quantum Shielding', faction: 'necrons', slot: 'mod', rarity: 'uncommon', description: 'Probability-altering barrier that becomes more resistant as incoming damage increases.', statBonus: { armor: 8, hp: 15 } },
  { id: 'nm-sentient', name: 'Sentient Node', faction: 'necrons', slot: 'mod', rarity: 'rare', description: 'Autonomous tactical processor that adapts combat parameters based on battlefield conditions in real time.', statBonus: { damage: 6, initiative: 5, critChance: 6 } },
  { id: 'nm-void', name: 'Void Crystal Array', faction: 'necrons', slot: 'mod', rarity: 'exotic', description: 'Matrix of captured dimensional energy. Warps reality around the bearer, enhancing all combat capabilities.', statBonus: { damage: 8, armor: 6, critChance: 10, hp: 20 } },

  // Relics
  { id: 'nr-solar', name: 'Solar Staff', faction: 'necrons', slot: 'relic', rarity: 'exotic', description: 'Ancient relic that channels the dying light of a consumed star. Its radiance obliterates all it touches.', statBonus: { damage: 15, critChance: 12, hp: 20 } },
  { id: 'nr-resurrection', name: 'Resurrection Orb', faction: 'necrons', slot: 'relic', rarity: 'rare', description: 'Artifact that pulses with regenerative energy, dramatically enhancing the reanimation capabilities of nearby allies.', statBonus: { hp: 40, armor: 8, initiative: 4 } },
];

// ============================================================
// HELPERS
// ============================================================

export function getUnitsForFaction(faction: Faction): Unit[] {
  return faction === 'mechanicus' ? mechanicusUnits : necronUnits;
}

export function getEquipmentForFaction(faction: Faction): EquipItem[] {
  return faction === 'mechanicus' ? mechanicusEquipment : necronEquipment;
}

export function getEquipmentForSlot(faction: Faction, slot: EquipSlot): EquipItem[] {
  return getEquipmentForFaction(faction).filter((e) => e.slot === slot);
}

export function getUnitById(id: string): Unit | undefined {
  return [...mechanicusUnits, ...necronUnits].find((u) => u.id === id);
}

export function getEquipById(id: string): EquipItem | undefined {
  return [...mechanicusEquipment, ...necronEquipment].find((e) => e.id === id);
}

export function calculateBuildStats(unit: Unit, equipment: Record<EquipSlot, string | null>): UnitStats {
  const result = { ...unit.baseStats };
  for (const [, equipId] of Object.entries(equipment)) {
    if (!equipId) continue;
    const item = getEquipById(equipId);
    if (!item) continue;
    for (const [stat, value] of Object.entries(item.statBonus)) {
      const key = stat as keyof UnitStats;
      if (typeof value === 'number') {
        result[key] = Math.max(0, (result[key] ?? 0) + value);
      }
    }
  }
  return result;
}

export function generateBuildText(unit: Unit, equipment: Record<EquipSlot, string | null>, stats: UnitStats): string {
  const lines: string[] = [
    `=== Build Plan: ${unit.name} ===`,
    `Faction: ${unit.faction === 'mechanicus' ? 'Adeptus Mechanicus' : 'Necron Dynasty'}`,
    `Role: ${ROLE_LABELS[unit.role]}`,
    '',
    '--- Equipment ---',
  ];

  for (const slot of unit.availableSlots) {
    const equipId = equipment[slot];
    if (equipId) {
      const item = getEquipById(equipId);
      lines.push(`${SLOT_LABELS[slot]}: ${item?.name ?? 'None'} [${item?.rarity.toUpperCase() ?? ''}]`);
    } else {
      lines.push(`${SLOT_LABELS[slot]}: (empty)`);
    }
  }

  lines.push('', '--- Final Stats ---');
  lines.push(`HP: ${stats.hp}`);
  lines.push(`Armor: ${stats.armor}`);
  lines.push(`Damage: ${stats.damage}`);
  lines.push(`Crit Chance: ${stats.critChance}%`);
  lines.push(`Initiative: ${stats.initiative}`);
  lines.push(`Movement: ${stats.movement}`);
  lines.push('', 'Generated by Mechanicus II Build Planner');

  return lines.join('\n');
}

export const TOOL_COPYRIGHT_NOTICE =
  'Unofficial fan tool for Warhammer 40,000: Mechanicus II. All game data is manually collected, sorted and rephrased by fans, not copied from official game files or documents. This tool has no official cooperation with game developers and publishers.';
