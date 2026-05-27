/**
 * Crafting Calculator static data for Mechanicus II
 *
 * All data is manually collected, sorted and rephrased by fans.
 * Not copied from official game files or documents.
 *
 * Data structure is based on web research of game mechanics and
 * Warhammer 40K lore. Exact in-game values may differ - this is
 * a fan-made reference tool.
 */

// ─── Materials ───────────────────────────────────────────────

export interface Material {
  id: string;
  name: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'exotic';
  description: string;
}

export const materials: Record<string, Material> = {
  // Common
  scrap_metal: { id: 'scrap_metal', name: 'Scrap Metal', rarity: 'common', description: 'Salvaged metallic fragments from ruined structures and battlefields.' },
  wiring: { id: 'wiring', name: 'Copper Wiring', rarity: 'common', description: 'Basic conductive wiring used in nearly all electro-mechanical assemblies.' },
  machine_oil: { id: 'machine_oil', name: 'Machine Oil', rarity: 'common', description: 'Sacred lubricant blessed by Tech-Priests for maintaining mechanical systems.' },
  carbon_fiber: { id: 'carbon_fiber', name: 'Carbon Fiber', rarity: 'common', description: 'Lightweight structural material used in armor and weapon frames.' },
  necrodermis_shard: { id: 'necrodermis_shard', name: 'Necrodermis Shard', rarity: 'common', description: 'A small fragment of self-repairing necrodermis alloy harvested from fallen Necrons.' },

  // Uncommon
  circuit_board: { id: 'circuit_board', name: 'Logic Circuit', rarity: 'uncommon', description: 'Pre-fabricated logic circuits for targeting and control systems.' },
  alloy_plate: { id: 'alloy_plate', name: 'Plasteel Plate', rarity: 'uncommon', description: 'Pressed plasteel sheet used in medium-grade armor plating.' },
  power_cell: { id: 'power_cell', name: 'Power Cell', rarity: 'uncommon', description: 'Rechargeable energy cell that powers directed energy weapons.' },
  data_shard: { id: 'data_shard', name: 'Data Shard', rarity: 'uncommon', description: 'A crystalline storage medium containing weapon schematics or firmware.' },
  living_metal: { id: 'living_metal', name: 'Living Metal Filament', rarity: 'uncommon', description: 'A thread-like sample of Necron living metal with basic self-repair properties.' },

  // Rare
  blackstone: { id: 'blackstone', name: 'Blackstone Fragment', rarity: 'rare', description: 'A fragment of the enigmatic blackstone material, prized for its warp-resonant properties.' },
  cogitator_core: { id: 'cogitator_core', name: 'Cogitator Core', rarity: 'rare', description: 'A compact processing unit from a larger cogitator array, capable of complex calculations.' },
  arc_reactor: { id: 'arc_reactor', name: 'Micro-Arc Reactor', rarity: 'rare', description: 'Miniaturized power generator producing sustained electrical discharge for arc weaponry.' },
  volkite_core: { id: 'volkite_core', name: 'Volkite Energy Core', rarity: 'rare', description: 'A rare thermal energy cell from the Dark Age of Technology, capable of deflagrating organic matter.' },
  gauss_crystal: { id: 'gauss_crystal', name: 'Gauss Focusing Crystal', rarity: 'rare', description: 'A precisely cut crystal that focuses energy into the molecular-stripping beams of gauss weapons.' },
  tesseract_lattice: { id: 'tesseract_lattice', name: 'Tesseract Lattice', rarity: 'rare', description: 'A dimensional fold structure used in Necron energy containment and transmission systems.' },

  // Exotic
  stc_fragment: { id: 'stc_fragment', name: 'STC Fragment', rarity: 'exotic', description: 'A fragment of a Standard Template Construct - the holy grail of the Adeptus Mechanicus.' },
  omnissiah_blessing: { id: 'omnissiah_blessing', name: 'Omnissiah Consecration', rarity: 'exotic', description: 'A sacred ritual component that invokes the Machine God\'s blessing upon a weapon or device.' },
  necron_star_map: { id: 'necron_star_map', name: 'Necron Star Map Segment', rarity: 'exotic', description: 'A fragment of an ancient Necron cartographic record showing tomb world coordinates.' },
  phase_shifter: { id: 'phase_shifter', name: 'Phase Shifter Core', rarity: 'exotic', description: 'A Necron device capable of shifting matter partially out of phase with reality.' },
};

// ─── Equipment Types ─────────────────────────────────────────

export type EquipmentCategory = 'weapon' | 'armor' | 'implant' | 'mod';
export type Faction = 'mechanicus' | 'necrons' | 'both';

export interface MaterialCost {
  materialId: string;
  quantity: number;
}

export interface Equipment {
  id: string;
  name: string;
  category: EquipmentCategory;
  faction: Faction;
  rarity: 'common' | 'uncommon' | 'rare' | 'exotic';
  description: string;
  materials: MaterialCost[];
  prerequisite?: string; // id of prerequisite equipment
}

// ─── Equipment Data ──────────────────────────────────────────

export const equipment: Record<string, Equipment> = {
  // ═══ WEAPONS ═══

  // Mechanicus Weapons
  galvanic_rifle: {
    id: 'galvanic_rifle',
    name: 'Galvanic Rifle',
    category: 'weapon',
    faction: 'mechanicus',
    rarity: 'common',
    description: 'A reliable long-range rifle that fires galvanic rounds, standard issue for Skitarii Rangers.',
    materials: [
      { materialId: 'scrap_metal', quantity: 3 },
      { materialId: 'wiring', quantity: 2 },
      { materialId: 'power_cell', quantity: 1 },
    ],
  },
  arc_pistol: {
    id: 'arc_pistol',
    name: 'Arc Pistol',
    category: 'weapon',
    faction: 'mechanicus',
    rarity: 'common',
    description: 'A sidearm that discharges crackling electrical arcs, effective against shielded targets.',
    materials: [
      { materialId: 'scrap_metal', quantity: 2 },
      { materialId: 'wiring', quantity: 3 },
      { materialId: 'machine_oil', quantity: 1 },
    ],
  },
  plasma_caliver: {
    id: 'plasma_caliver',
    name: 'Plasma Caliver',
    category: 'weapon',
    faction: 'mechanicus',
    rarity: 'uncommon',
    description: 'A devastating plasma weapon that superheats bolts of energy, capable of melting through heavy armor.',
    materials: [
      { materialId: 'alloy_plate', quantity: 2 },
      { materialId: 'power_cell', quantity: 3 },
      { materialId: 'circuit_board', quantity: 1 },
    ],
    prerequisite: 'galvanic_rifle',
  },
  arc_rifle: {
    id: 'arc_rifle',
    name: 'Arc Rifle',
    category: 'weapon',
    faction: 'mechanicus',
    rarity: 'uncommon',
    description: 'A long-barreled arc weapon with improved range and chain-lightning capability between nearby targets.',
    materials: [
      { materialId: 'scrap_metal', quantity: 3 },
      { materialId: 'wiring', quantity: 4 },
      { materialId: 'arc_reactor', quantity: 1 },
    ],
    prerequisite: 'arc_pistol',
  },
  transuranic_arquebus: {
    id: 'transuranic_arquebus',
    name: 'Transuranic Arquebus',
    category: 'weapon',
    faction: 'mechanicus',
    rarity: 'rare',
    description: 'An extreme-range sniper weapon firing transuranic slugs that punch through any known armor at vast distances.',
    materials: [
      { materialId: 'alloy_plate', quantity: 3 },
      { materialId: 'cogitator_core', quantity: 1 },
      { materialId: 'blackstone', quantity: 1 },
      { materialId: 'data_shard', quantity: 2 },
    ],
    prerequisite: 'plasma_caliver',
  },
  volkite_blaster: {
    id: 'volkite_blaster',
    name: 'Volkite Blaster',
    category: 'weapon',
    faction: 'mechanicus',
    rarity: 'rare',
    description: 'A rare weapon from the Dark Age of Technology that deflagrates organic matter, turning foes to ash.',
    materials: [
      { materialId: 'volkite_core', quantity: 1 },
      { materialId: 'circuit_board', quantity: 2 },
      { materialId: 'power_cell', quantity: 3 },
      { materialId: 'data_shard', quantity: 1 },
    ],
  },
  eradication_ray: {
    id: 'eradication_ray',
    name: 'Eradication Ray',
    category: 'weapon',
    faction: 'mechanicus',
    rarity: 'exotic',
    description: 'An experimental directed-energy weapon of devastating power, requiring rare STC fragments to construct.',
    materials: [
      { materialId: 'stc_fragment', quantity: 1 },
      { materialId: 'omnissiah_blessing', quantity: 1 },
      { materialId: 'blackstone', quantity: 2 },
      { materialId: 'cogitator_core', quantity: 2 },
    ],
    prerequisite: 'transuranic_arquebus',
  },
  arc_claw: {
    id: 'arc_claw',
    name: 'Arc Claw',
    category: 'weapon',
    faction: 'mechanicus',
    rarity: 'uncommon',
    description: 'A close-combat weapon that channels arc energy through sharpened blades, stunning targets on impact.',
    materials: [
      { materialId: 'scrap_metal', quantity: 4 },
      { materialId: 'wiring', quantity: 2 },
      { materialId: 'arc_reactor', quantity: 1 },
    ],
  },
  power_sword: {
    id: 'power_sword',
    name: 'Power Sword',
    category: 'weapon',
    faction: 'mechanicus',
    rarity: 'rare',
    description: 'An energy-wrapped blade that cuts through armor and flesh with equal ease, a symbol of rank among Tech-Priests.',
    materials: [
      { materialId: 'alloy_plate', quantity: 3 },
      { materialId: 'power_cell', quantity: 2 },
      { materialId: 'blackstone', quantity: 1 },
    ],
  },

  // Necron Weapons
  gauss_flayer: {
    id: 'gauss_flayer',
    name: 'Gauss Flayer',
    category: 'weapon',
    faction: 'necrons',
    rarity: 'common',
    description: 'The standard Necron infantry weapon that strips targets apart molecule by molecule at the atomic level.',
    materials: [
      { materialId: 'necrodermis_shard', quantity: 3 },
      { materialId: 'wiring', quantity: 2 },
      { materialId: 'gauss_crystal', quantity: 1 },
    ],
  },
  tesla_carbine: {
    id: 'tesla_carbine',
    name: 'Tesla Carbine',
    category: 'weapon',
    faction: 'necrons',
    rarity: 'common',
    description: 'A weapon that fires arcs of living lightning that chain between multiple targets in close proximity.',
    materials: [
      { materialId: 'necrodermis_shard', quantity: 2 },
      { materialId: 'living_metal', quantity: 2 },
      { materialId: 'power_cell', quantity: 1 },
    ],
  },
  gauss_blaster: {
    id: 'gauss_blaster',
    name: 'Gauss Blaster',
    category: 'weapon',
    faction: 'necrons',
    rarity: 'uncommon',
    description: 'An upgraded gauss weapon with greater range and power, commonly wielded by Necron Immortals.',
    materials: [
      { materialId: 'necrodermis_shard', quantity: 3 },
      { materialId: 'gauss_crystal', quantity: 2 },
      { materialId: 'living_metal', quantity: 1 },
    ],
    prerequisite: 'gauss_flayer',
  },
  tesla_cannon: {
    id: 'tesla_cannon',
    name: 'Tesla Cannon',
    category: 'weapon',
    faction: 'necrons',
    rarity: 'uncommon',
    description: 'A heavy tesla weapon mounted on destroyers and vehicles, unleashing devastating electrical storms.',
    materials: [
      { materialId: 'living_metal', quantity: 3 },
      { materialId: 'power_cell', quantity: 3 },
      { materialId: 'necrodermis_shard', quantity: 2 },
    ],
    prerequisite: 'tesla_carbine',
  },
  staff_of_light: {
    id: 'staff_of_light',
    name: 'Staff of Light',
    category: 'weapon',
    faction: 'necrons',
    rarity: 'rare',
    description: 'A ceremonial weapon carried by Necron Overlords and Crypteks, projecting focused beams of destructive energy.',
    materials: [
      { materialId: 'gauss_crystal', quantity: 2 },
      { materialId: 'tesseract_lattice', quantity: 1 },
      { materialId: 'living_metal', quantity: 2 },
      { materialId: 'necrodermis_shard', quantity: 2 },
    ],
  },
  deathray: {
    id: 'deathray',
    name: 'Deathray',
    category: 'weapon',
    faction: 'necrons',
    rarity: 'rare',
    description: 'A terrifying heavy weapon that projects a sustained beam of annihilation, erasing all matter in its path.',
    materials: [
      { materialId: 'gauss_crystal', quantity: 3 },
      { materialId: 'tesseract_lattice', quantity: 1 },
      { materialId: 'power_cell', quantity: 2 },
      { materialId: 'data_shard', quantity: 1 },
    ],
    prerequisite: 'gauss_blaster',
  },
  voidblade: {
    id: 'voidblade',
    name: 'Voidblade',
    category: 'weapon',
    faction: 'necrons',
    rarity: 'rare',
    description: 'A melee weapon that phases through physical matter, cutting at the molecular level across dimensional boundaries.',
    materials: [
      { materialId: 'phase_shifter', quantity: 1 },
      { materialId: 'living_metal', quantity: 3 },
      { materialId: 'gauss_crystal', quantity: 1 },
    ],
  },
  tachyon_arrow: {
    id: 'tachyon_arrow',
    name: 'Tachyon Arrow',
    category: 'weapon',
    faction: 'necrons',
    rarity: 'exotic',
    description: 'A single-shot weapon of unimaginable power that accelerates a tachyon to near-light speed, piercing any barrier.',
    materials: [
      { materialId: 'necron_star_map', quantity: 1 },
      { materialId: 'tesseract_lattice', quantity: 2 },
      { materialId: 'phase_shifter', quantity: 1 },
      { materialId: 'gauss_crystal', quantity: 2 },
    ],
    prerequisite: 'deathray',
  },

  // ═══ ARMOR ═══

  // Mechanicus Armor
  mesh_underlay: {
    id: 'mesh_underlay',
    name: 'Mesh Underlay',
    category: 'armor',
    faction: 'mechanicus',
    rarity: 'common',
    description: 'A lightweight mesh vest worn beneath robes, providing basic ballistic protection without restricting movement.',
    materials: [
      { materialId: 'carbon_fiber', quantity: 3 },
      { materialId: 'scrap_metal', quantity: 1 },
    ],
  },
  war_plate: {
    id: 'war_plate',
    name: 'War Plate',
    category: 'armor',
    faction: 'mechanicus',
    rarity: 'uncommon',
    description: 'Segmented armor plates worn over robes, offering solid protection against small arms and shrapnel.',
    materials: [
      { materialId: 'alloy_plate', quantity: 3 },
      { materialId: 'carbon_fiber', quantity: 2 },
      { materialId: 'machine_oil', quantity: 1 },
    ],
    prerequisite: 'mesh_underlay',
  },
  refractor_field: {
    id: 'refractor_field',
    name: 'Refractor Field Generator',
    category: 'armor',
    faction: 'mechanicus',
    rarity: 'rare',
    description: 'A personal energy shield that refracts incoming projectiles and energy beams away from the wearer.',
    materials: [
      { materialId: 'circuit_board', quantity: 2 },
      { materialId: 'power_cell', quantity: 2 },
      { materialId: 'blackstone', quantity: 1 },
    ],
    prerequisite: 'war_plate',
  },
  adamantine_mantle: {
    id: 'adamantine_mantle',
    name: 'Adamantine Mantle',
    category: 'armor',
    faction: 'mechanicus',
    rarity: 'exotic',
    description: 'A mantle woven from near-indestructible adamantine thread, granting extraordinary resilience to its wearer.',
    materials: [
      { materialId: 'stc_fragment', quantity: 1 },
      { materialId: 'omnissiah_blessing', quantity: 1 },
      { materialId: 'alloy_plate', quantity: 3 },
      { materialId: 'blackstone', quantity: 1 },
    ],
    prerequisite: 'refractor_field',
  },

  // Necron Armor
  necrodermis_hull: {
    id: 'necrodermis_hull',
    name: 'Necrodermis Hull Plating',
    category: 'armor',
    faction: 'necrons',
    rarity: 'common',
    description: 'Standard self-repairing necrodermis plating that slowly regenerates damage over time.',
    materials: [
      { materialId: 'necrodermis_shard', quantity: 4 },
      { materialId: 'living_metal', quantity: 1 },
    ],
  },
  living_metal_carapace: {
    id: 'living_metal_carapace',
    name: 'Living Metal Carapace',
    category: 'armor',
    faction: 'necrons',
    rarity: 'uncommon',
    description: 'Enhanced necrodermis armor with improved regeneration speed and greater structural integrity.',
    materials: [
      { materialId: 'living_metal', quantity: 3 },
      { materialId: 'necrodermis_shard', quantity: 3 },
      { materialId: 'power_cell', quantity: 1 },
    ],
    prerequisite: 'necrodermis_hull',
  },
  quantum_shielding: {
    id: 'quantum_shielding',
    name: 'Quantum Shielding Array',
    category: 'armor',
    faction: 'necrons',
    rarity: 'rare',
    description: 'Advanced dimensional shielding that phases armor out of reality at the moment of impact, negating damage.',
    materials: [
      { materialId: 'phase_shifter', quantity: 1 },
      { materialId: 'tesseract_lattice', quantity: 1 },
      { materialId: 'living_metal', quantity: 2 },
    ],
    prerequisite: 'living_metal_carapace',
  },
  phase_form: {
    id: 'phase_form',
    name: 'Phase Shift Matrix',
    category: 'armor',
    faction: 'necrons',
    rarity: 'exotic',
    description: 'An ultimate defensive system that partially shifts the wearer into another dimension, making them nearly intangible.',
    materials: [
      { materialId: 'necron_star_map', quantity: 1 },
      { materialId: 'phase_shifter', quantity: 2 },
      { materialId: 'tesseract_lattice', quantity: 2 },
      { materialId: 'living_metal', quantity: 2 },
    ],
    prerequisite: 'quantum_shielding',
  },

  // ═══ IMPLANTS ═══

  // Mechanicus Implants
  bionic_eye: {
    id: 'bionic_eye',
    name: 'Bionic Ocular Array',
    category: 'implant',
    faction: 'mechanicus',
    rarity: 'common',
    description: 'A replacement ocular implant with enhanced targeting capabilities and low-light vision.',
    materials: [
      { materialId: 'circuit_board', quantity: 1 },
      { materialId: 'wiring', quantity: 2 },
      { materialId: 'scrap_metal', quantity: 1 },
    ],
  },
  cortex_stim: {
    id: 'cortex_stim',
    name: 'Cortex Stimulator',
    category: 'implant',
    faction: 'mechanicus',
    rarity: 'uncommon',
    description: 'A neural implant that boosts cognitive processing speed, granting additional cognition points in battle.',
    materials: [
      { materialId: 'cogitator_core', quantity: 1 },
      { materialId: 'circuit_board', quantity: 2 },
      { materialId: 'wiring', quantity: 1 },
    ],
    prerequisite: 'bionic_eye',
  },
  cyber_mantle_implant: {
    id: 'cyber_mantle_implant',
    name: 'Cyber-Mantle',
    category: 'implant',
    faction: 'mechanicus',
    rarity: 'rare',
    description: 'A spinal reinforcement implant that supports additional mechanical limbs and heavy augmentation loadouts.',
    materials: [
      { materialId: 'alloy_plate', quantity: 2 },
      { materialId: 'cogitator_core', quantity: 1 },
      { materialId: 'blackstone', quantity: 1 },
      { materialId: 'machine_oil', quantity: 2 },
    ],
    prerequisite: 'cortex_stim',
  },
  potencia_circuit: {
    id: 'potencia_circuit',
    name: 'Potencia Circuit',
    category: 'implant',
    faction: 'mechanicus',
    rarity: 'exotic',
    description: 'A rare energy-routing implant that channels power directly from a micro-reactor to all augments simultaneously.',
    materials: [
      { materialId: 'omnissiah_blessing', quantity: 1 },
      { materialId: 'stc_fragment', quantity: 1 },
      { materialId: 'arc_reactor', quantity: 1 },
      { materialId: 'cogitator_core', quantity: 2 },
    ],
    prerequisite: 'cyber_mantle_implant',
  },

  // Necron Implants
  reanimation_protocol: {
    id: 'reanimation_protocol',
    name: 'Reanimation Protocol Chip',
    category: 'implant',
    faction: 'necrons',
    rarity: 'common',
    description: 'A standard protocol chip enabling self-repair and reactivation after receiving fatal damage.',
    materials: [
      { materialId: 'necrodermis_shard', quantity: 2 },
      { materialId: 'living_metal', quantity: 2 },
    ],
  },
  regeneration_matrix: {
    id: 'regeneration_matrix',
    name: 'Regeneration Matrix',
    category: 'implant',
    faction: 'necrons',
    rarity: 'uncommon',
    description: 'An upgraded repair system that accelerates tissue regeneration and structural recovery during combat.',
    materials: [
      { materialId: 'living_metal', quantity: 3 },
      { materialId: 'power_cell', quantity: 1 },
      { materialId: 'necrodermis_shard', quantity: 2 },
    ],
    prerequisite: 'reanimation_protocol',
  },
  mind_shackle: {
    id: 'mind_shackle',
    name: 'Mindshackle Scarab',
    category: 'implant',
    faction: 'necrons',
    rarity: 'rare',
    description: 'A neural control scarab that can override the will of lesser beings, turning enemies against their allies.',
    materials: [
      { materialId: 'tesseract_lattice', quantity: 1 },
      { materialId: 'gauss_crystal', quantity: 1 },
      { materialId: 'living_metal', quantity: 2 },
    ],
    prerequisite: 'regeneration_matrix',
  },
  eternal_ward: {
    id: 'eternal_ward',
    name: 'Eternity Warden Circuit',
    category: 'implant',
    faction: 'necrons',
    rarity: 'exotic',
    description: 'An ancient circuit that renders the bearer nearly impossible to permanently destroy, tethering them to the tomb world.',
    materials: [
      { materialId: 'necron_star_map', quantity: 1 },
      { materialId: 'tesseract_lattice', quantity: 2 },
      { materialId: 'phase_shifter', quantity: 1 },
      { materialId: 'living_metal', quantity: 3 },
    ],
    prerequisite: 'mind_shackle',
  },

  // ═══ MODS ═══

  // Mechanicus Mods
  targeting_array: {
    id: 'targeting_array',
    name: 'Targeting Array',
    category: 'mod',
    faction: 'mechanicus',
    rarity: 'common',
    description: 'A supplementary targeting cogitator that improves accuracy at medium to long range.',
    materials: [
      { materialId: 'circuit_board', quantity: 1 },
      { materialId: 'data_shard', quantity: 1 },
    ],
  },
  overcharge_coil: {
    id: 'overcharge_coil',
    name: 'Overcharge Coil',
    category: 'mod',
    faction: 'mechanicus',
    rarity: 'uncommon',
    description: 'An energy amplification coil that increases weapon damage output at the cost of higher power consumption.',
    materials: [
      { materialId: 'power_cell', quantity: 2 },
      { materialId: 'wiring', quantity: 2 },
      { materialId: 'circuit_board', quantity: 1 },
    ],
  },
  cognition_amplifier: {
    id: 'cognition_amplifier',
    name: 'Cognition Amplifier',
    category: 'mod',
    faction: 'mechanicus',
    rarity: 'rare',
    description: 'A device that boosts cognition point generation, allowing more powerful abilities to be used more frequently.',
    materials: [
      { materialId: 'cogitator_core', quantity: 1 },
      { materialId: 'blackstone', quantity: 1 },
      { materialId: 'data_shard', quantity: 2 },
    ],
  },
  machine_spirit_binding: {
    id: 'machine_spirit_binding',
    name: 'Machine Spirit Binding',
    category: 'mod',
    faction: 'mechanicus',
    rarity: 'exotic',
    description: 'A sacred ritual module that fully awakens the machine spirit within equipment, unlocking hidden potential.',
    materials: [
      { materialId: 'omnissiah_blessing', quantity: 1 },
      { materialId: 'stc_fragment', quantity: 1 },
      { materialId: 'cogitator_core', quantity: 1 },
    ],
  },

  // Necron Mods
  dispersion_node: {
    id: 'dispersion_node',
    name: 'Dispersion Node',
    category: 'mod',
    faction: 'necrons',
    rarity: 'common',
    description: 'An energy distribution module that reduces incoming damage by dispersing kinetic and energy impacts.',
    materials: [
      { materialId: 'necrodermis_shard', quantity: 2 },
      { materialId: 'living_metal', quantity: 1 },
    ],
  },
  chronometron: {
    id: 'chronometron',
    name: 'Chronometron',
    category: 'mod',
    faction: 'necrons',
    rarity: 'uncommon',
    description: 'A temporal manipulation device that subtly alters the flow of time, granting increased speed and reaction time.',
    materials: [
      { materialId: 'tesseract_lattice', quantity: 1 },
      { materialId: 'living_metal', quantity: 2 },
      { materialId: 'power_cell', quantity: 1 },
    ],
  },
  shadow_anointment: {
    id: 'shadow_anointment',
    name: 'Shadow Anointment',
    category: 'mod',
    faction: 'necrons',
    rarity: 'rare',
    description: 'A stealth module that cloaks the unit in darkness, reducing detection range and increasing ambush effectiveness.',
    materials: [
      { materialId: 'phase_shifter', quantity: 1 },
      { materialId: 'tesseract_lattice', quantity: 1 },
      { materialId: 'living_metal', quantity: 2 },
    ],
  },
  tomb_world_resonance: {
    id: 'tomb_world_resonance',
    name: 'Tomb World Resonance',
    category: 'mod',
    faction: 'necrons',
    rarity: 'exotic',
    description: 'An ancient tuning module that synchronizes the unit with its tomb world, dramatically enhancing all capabilities.',
    materials: [
      { materialId: 'necron_star_map', quantity: 1 },
      { materialId: 'tesseract_lattice', quantity: 2 },
      { materialId: 'phase_shifter', quantity: 1 },
    ],
  },
};

// ─── Helpers ─────────────────────────────────────────────────

export const equipmentList = Object.values(equipment);
export const materialList = Object.values(materials);

export function getEquipmentByCategory(category: EquipmentCategory): Equipment[] {
  return equipmentList.filter(e => e.category === category);
}

export function getEquipmentByFaction(faction: Faction): Equipment[] {
  if (faction === 'both') return equipmentList;
  return equipmentList.filter(e => e.faction === faction || e.faction === 'both');
}

export function isRareMaterial(materialId: string): boolean {
  const mat = materials[materialId];
  return mat ? mat.rarity === 'rare' || mat.rarity === 'exotic' : false;
}

export const TOOL_NOTICE = 'Unofficial fan tool for Warhammer 40,000: Mechanicus II. All game data is manually collected, sorted and rephrased by fans, not copied from official game files or documents. This tool has no official cooperation with game developers and publishers.';
