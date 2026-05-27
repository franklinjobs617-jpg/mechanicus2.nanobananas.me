'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  equipment,
  materials,
  equipmentList,
  isRareMaterial,
  TOOL_NOTICE,
  type EquipmentCategory,
  type Faction,
  type Equipment,
} from '@/lib/crafting-data';

// ─── localStorage key ────────────────────────────────────────
const STORAGE_KEY = 'mechanicus2-crafting-selection';

function loadSelection(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveSelection(ids: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // silently fail
  }
}

// ─── Rarity badge color ──────────────────────────────────────
function rarityColor(rarity: string): string {
  switch (rarity) {
    case 'common': return 'text-[#B0B0B0]';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-[#E6C200]';
    case 'exotic': return 'text-orange-400';
    default: return 'text-[#B0B0B0]';
  }
}

function rarityBorder(rarity: string): string {
  switch (rarity) {
    case 'common': return 'border-[#B0B0B0]/20';
    case 'uncommon': return 'border-green-400/30';
    case 'rare': return 'border-[#E6C200]/30';
    case 'exotic': return 'border-orange-400/30';
    default: return 'border-[#B0B0B0]/20';
  }
}

function rarityBg(rarity: string): string {
  switch (rarity) {
    case 'common': return 'bg-[#B0B0B0]/10';
    case 'uncommon': return 'bg-green-400/10';
    case 'rare': return 'bg-[#E6C200]/10';
    case 'exotic': return 'bg-orange-400/10';
    default: return 'bg-[#B0B0B0]/10';
  }
}

// ─── Category / Faction labels with icons ────────────────────
const CATEGORIES: { value: EquipmentCategory | 'all'; label: string; icon: string }[] = [
  { value: 'all', label: 'All', icon: '' },
  { value: 'weapon', label: 'Weapons', icon: '/mat-weapon-parts.webp' },
  { value: 'armor', label: 'Armor', icon: '/mat-forge.webp' },
  { value: 'implant', label: 'Implants', icon: '/mat-implant.webp' },
  { value: 'mod', label: 'Mods', icon: '/mat-mod.webp' },
];

const FACTIONS: { value: Faction | 'all'; label: string }[] = [
  { value: 'all', label: 'All Factions' },
  { value: 'mechanicus', label: 'Tech-Priests' },
  { value: 'necrons', label: 'Necrons' },
];

// ─── Material category image map ─────────────────────────────
const MATERIAL_IMAGES: Record<string, string> = {
  'scrap-metal': '/mat-resources.webp',
  'blackstone-shard': '/mat-resources.webp',
  'data-fragment': '/mat-resources.webp',
  'basic-components': '/mat-weapon-parts.webp',
  'galvanic-coil': '/mat-weapon-parts.webp',
  'machine-spirit': '/mat-weapon-parts.webp',
  'conduit-wiring': '/mat-weapon-parts.webp',
  'adventite-alloy': '/mat-forge.webp',
  'plasteel-plate': '/mat-forge.webp',
  'adamantine-ingot': '/mat-forge.webp',
  'cerebral-circuit': '/mat-implant.webp',
  'noosphere-relay': '/mat-implant.webp',
  'bionic-matrix': '/mat-implant.webp',
  'necrodermis-scrap': '/mat-forge.webp',
  'living-metal': '/mat-forge.webp',
  'quantum-array': '/mat-implant.webp',
  'tachyon-core': '/mat-implant.webp',
  'chronometron': '/mat-mod.webp',
  'gauss-coil': '/mat-weapon-parts.webp',
  'resonance-crystal': '/mat-mod.webp',
  'void-essence': '/mat-mod.webp',
  'wraithbone-shard': '/mat-mod.webp',
};

// ─── Main Component ──────────────────────────────────────────

export default function CraftingCalculatorPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [category, setCategory] = useState<EquipmentCategory | 'all'>('all');
  const [faction, setFaction] = useState<Faction | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setSelectedIds(loadSelection());
    setMounted(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (mounted) {
      saveSelection(selectedIds);
    }
  }, [selectedIds, mounted]);

  // Filtered equipment list
  const filteredEquipment = useMemo(() => {
    return equipmentList.filter(e => {
      if (category !== 'all' && e.category !== category) return false;
      if (faction !== 'all' && e.faction !== faction) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return e.name.toLowerCase().includes(q) || e.description.toLowerCase().includes(q);
      }
      return true;
    });
  }, [category, faction, searchQuery]);

  // Aggregate materials from selected equipment
  const aggregatedMaterials = useMemo(() => {
    const map = new Map<string, number>();
    for (const id of selectedIds) {
      const eq = equipment[id];
      if (!eq) continue;
      for (const mc of eq.materials) {
        const current = map.get(mc.materialId) || 0;
        map.set(mc.materialId, current + mc.quantity);
      }
    }
    // Sort: rare/exotic first, then alphabetical
    const entries = Array.from(map.entries());
    entries.sort((a, b) => {
      const aR = materials[a[0]]?.rarity || 'common';
      const bR = materials[b[0]]?.rarity || 'common';
      const order = { exotic: 0, rare: 1, uncommon: 2, common: 3 };
      const diff = (order[aR] ?? 3) - (order[bR] ?? 3);
      if (diff !== 0) return diff;
      return (materials[a[0]]?.name || '').localeCompare(materials[b[0]]?.name || '');
    });
    return entries;
  }, [selectedIds]);

  // Toggle equipment selection
  const toggleEquipment = useCallback((id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  }, []);

  // Clear all
  const clearAll = useCallback(() => {
    setSelectedIds([]);
  }, []);

  // Copy materials list
  const copyMaterials = useCallback(async () => {
    const lines = aggregatedMaterials.map(([matId, qty]) => {
      const mat = materials[matId];
      return `${mat?.name || matId} x${qty} (${mat?.rarity || '?'})`;
    });
    const text = `Crafting Materials List - Mechanicus II\n${'─'.repeat(40)}\n${lines.join('\n')}\n${'─'.repeat(40)}\nTotal: ${aggregatedMaterials.length} material types, ${selectedIds.length} items selected`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [aggregatedMaterials, selectedIds.length]);

  // Get prerequisite name
  const getPrerequisiteName = (eq: Equipment): string | null => {
    if (!eq.prerequisite) return null;
    return equipment[eq.prerequisite]?.name || null;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Copyright notice */}
      <div className="mb-6 rounded-lg border border-[rgba(230,194,0,0.15)] bg-[rgba(230,194,0,0.03)] px-4 py-3">
        <p className="text-xs text-[#B0B0B0]/70 leading-relaxed">{TOOL_NOTICE}</p>
      </div>

      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/tools" className="text-sm text-[#E6C200] hover:underline inline-flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tools
        </Link>
      </div>

      {/* Page header with image */}
      <div className="relative rounded-lg overflow-hidden mb-8 border border-[rgba(230,194,0,0.15)]">
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src="/mat-resources.webp"
            alt="Mechanicus 2 crafting calculator - plan equipment recipes and material costs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2620] via-[#0F2620]/80 to-transparent" />
          <div className="absolute inset-0 flex items-center px-6 sm:px-10">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#F0F0F0] tracking-wide mb-2">
                Crafting Calculator
              </h1>
              <p className="text-sm text-[#B0B0B0] max-w-lg">
                Select equipment to calculate total crafting materials. Rare materials are highlighted in yellow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Use Guide */}
      <div className="mb-8 rounded-lg border border-[rgba(230,194,0,0.12)] bg-[#162B24]/60 px-5 py-4">
        <h2 className="text-sm font-bold text-[#E6C200] tracking-wide mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          How to Use the Crafting Calculator
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-[#B0B0B0] leading-relaxed">
          <li><span className="text-[#F0F0F0]">Filter &amp; Select:</span> Use the category filters (Weapon / Armor / Implant / Mod) to find the equipment you want to craft.</li>
          <li><span className="text-[#F0F0F0]">View Recipes:</span> Click on any item to see its full recipe, including required materials and quantities.</li>
          <li><span className="text-[#F0F0F0]">Calculate Total Cost:</span> Select multiple items, and the calculator will automatically sum all materials you need. Rare components are highlighted in yellow for easy tracking.</li>
          <li><span className="text-[#F0F0F0]">Copy &amp; Plan:</span> Click &quot;Copy List&quot; to export your material requirements as text, so you can easily reference them during your campaign.</li>
        </ol>
        <p className="mt-3 text-xs text-[#B0B0B0]/60 flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-[#E6C200]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          Important: All recipes are based on player-collected data. This is an unofficial fan tool for planning purposes only.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ─── Left: Equipment List ─── */}
        <div className="lg:col-span-2">
          {/* Filters */}
          <div className="flex flex-col gap-4 mb-6">
            {/* Category filter with images */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setCategory(cat.value)}
                  className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md border transition-colors ${
                    category === cat.value
                      ? 'bg-[#E6C200]/20 border-[#E6C200]/50 text-[#E6C200]'
                      : 'bg-[#162B24] border-[rgba(230,194,0,0.1)] text-[#B0B0B0] hover:border-[#E6C200]/30'
                  }`}
                >
                  {cat.icon && (
                    <span className="w-5 h-5 rounded-sm overflow-hidden flex-shrink-0 border border-[rgba(230,194,0,0.2)]">
                      <Image src={cat.icon} alt={cat.label} width={20} height={20} className="w-full h-full object-cover" />
                    </span>
                  )}
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Faction + Search row */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Faction filter */}
              <div className="flex gap-2">
                {FACTIONS.map(f => (
                  <button
                    key={f.value}
                    onClick={() => setFaction(f.value as Faction | 'all')}
                    className={`px-3 py-2 text-xs font-medium rounded-md border transition-colors ${
                      faction === f.value
                        ? 'bg-[#E6C200]/20 border-[#E6C200]/50 text-[#E6C200]'
                        : 'bg-[#162B24] border-[rgba(230,194,0,0.1)] text-[#B0B0B0] hover:border-[#E6C200]/30'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative flex-1">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0B0B0]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search equipment..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-[#162B24] border border-[rgba(230,194,0,0.1)] rounded-md text-[#F0F0F0] placeholder:text-[#B0B0B0]/50 focus:outline-none focus:border-[#E6C200]/40"
                />
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-[#B0B0B0]/60">
              Showing {filteredEquipment.length} of {equipmentList.length} items
            </p>
            {selectedIds.length > 0 && (
              <button
                onClick={clearAll}
                className="text-xs text-[#B0B0B0] hover:text-[#E6C200] transition-colors inline-flex items-center gap-1"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear all ({selectedIds.length})
              </button>
            )}
          </div>

          {/* Equipment cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredEquipment.map(eq => {
              const isSelected = selectedIds.includes(eq.id);
              const prereqName = getPrerequisiteName(eq);
              const catImage = CATEGORIES.find(c => c.value === eq.category)?.icon;
              return (
                <button
                  key={eq.id}
                  onClick={() => toggleEquipment(eq.id)}
                  className={`text-left rounded-lg border p-4 transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#E6C200]/10 border-[#E6C200]/50 shadow-md shadow-[#E6C200]/5'
                      : `bg-[#162B24] ${rarityBorder(eq.rarity)} hover:border-[#E6C200]/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(230,194,0,0.03)]`
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      {/* Category thumbnail */}
                      {catImage && (
                        <div className="flex-shrink-0 w-10 h-10 rounded-md overflow-hidden border border-[rgba(230,194,0,0.15)] mt-0.5">
                          <Image src={catImage} alt={eq.category} width={40} height={40} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-sm font-semibold text-[#F0F0F0] truncate">
                            {eq.name}
                          </h3>
                          <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${rarityBg(eq.rarity)} ${rarityColor(eq.rarity)}`}>
                            {eq.rarity}
                          </span>
                        </div>
                        <p className="text-xs text-[#B0B0B0] leading-relaxed line-clamp-2 mb-2">
                          {eq.description}
                        </p>
                        <div className="flex items-center gap-2 text-[10px] text-[#B0B0B0]/60">
                          <span className="uppercase">{eq.category}</span>
                          <span>|</span>
                          <span>{eq.faction === 'mechanicus' ? 'Tech-Priests' : eq.faction === 'necrons' ? 'Necrons' : 'Both'}</span>
                          {prereqName && (
                            <>
                              <span>|</span>
                              <span className="text-[#E6C200]/70">Requires: {prereqName}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Checkbox indicator */}
                    <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#E6C200] border-[#E6C200]'
                        : 'border-[#B0B0B0]/30'
                    }`}>
                      {isSelected && (
                        <svg className="w-3 h-3 text-[#0F2620]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Materials preview */}
                  <div className="mt-3 pt-2 border-t border-[rgba(230,194,0,0.05)]">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {eq.materials.map(mc => {
                        const mat = materials[mc.materialId];
                        const rare = isRareMaterial(mc.materialId);
                        return (
                          <span
                            key={mc.materialId}
                            className={`text-[10px] inline-flex items-center gap-1 ${rare ? 'text-[#E6C200] font-semibold' : 'text-[#B0B0B0]/70'}`}
                          >
                            {mat?.name || mc.materialId} x{mc.quantity}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-12 h-12 mx-auto text-[#B0B0B0]/20 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-sm text-[#B0B0B0]/50">No equipment found matching your filters.</p>
            </div>
          )}
        </div>

        {/* ─── Right: Material Summary ─── */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 rounded-lg border border-[rgba(230,194,0,0.2)] bg-[#0A1F19] overflow-hidden">
            {/* Header */}
            <div className="px-5 py-4 border-b border-[rgba(230,194,0,0.1)] bg-[#162B24]/40">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#F0F0F0]">Materials</h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#E6C200]/15 text-[#E6C200] font-medium">
                  {selectedIds.length} selected
                </span>
              </div>
            </div>

            <div className="p-5">
              {selectedIds.length === 0 ? (
                <div className="py-8 text-center">
                  <svg className="w-10 h-10 mx-auto text-[#B0B0B0]/15 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="text-sm text-[#B0B0B0]/40">
                    Select equipment to calculate materials.
                  </p>
                </div>
              ) : (
                <>
                  {/* Selected items summary */}
                  <div className="mb-4 max-h-36 overflow-y-auto pr-1">
                    <div className="flex flex-wrap gap-1.5">
                      {selectedIds.map(id => {
                        const eq = equipment[id];
                        return eq ? (
                          <button
                            key={id}
                            onClick={() => toggleEquipment(id)}
                            className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] rounded bg-[#E6C200]/10 text-[#E6C200] border border-[#E6C200]/20 hover:bg-[#E6C200]/20 transition-colors"
                          >
                            {eq.name}
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        ) : null;
                      })}
                    </div>
                  </div>

                  {/* Aggregated materials with images */}
                  <div className="space-y-1.5 mb-4 max-h-[50vh] overflow-y-auto pr-1">
                    {aggregatedMaterials.map(([matId, qty]) => {
                      const mat = materials[matId];
                      const rare = isRareMaterial(matId);
                      const matImg = MATERIAL_IMAGES[matId] || '/mat-resources.webp';
                      return (
                        <div
                          key={matId}
                          className={`flex items-center gap-3 py-2 px-2 rounded-md text-xs transition-colors ${
                            rare ? 'bg-[#E6C200]/8 border border-[#E6C200]/15' : 'hover:bg-[#162B24]/60'
                          }`}
                        >
                          {/* Material thumbnail */}
                          <div className="flex-shrink-0 w-8 h-8 rounded overflow-hidden border border-[rgba(230,194,0,0.1)]">
                            <Image src={matImg} alt={mat?.name || matId} width={32} height={32} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className={`font-medium truncate ${rare ? 'text-[#E6C200]' : 'text-[#F0F0F0]'}`}>
                                {mat?.name || matId}
                              </span>
                              <span className={`text-[10px] uppercase flex-shrink-0 ${rarityColor(mat?.rarity || 'common')}`}>
                                {mat?.rarity}
                              </span>
                            </div>
                            {mat?.description && (
                              <p className="text-[10px] text-[#B0B0B0]/40 truncate mt-0.5">{mat.description}</p>
                            )}
                          </div>
                          <span className={`font-mono font-bold flex-shrink-0 text-sm ${rare ? 'text-[#E6C200]' : 'text-[#F0F0F0]'}`}>
                            x{qty}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Summary stats */}
                  <div className="flex items-center justify-between py-2 px-1 mb-3 border-t border-b border-[rgba(230,194,0,0.08)]">
                    <span className="text-[10px] text-[#B0B0B0]/50 uppercase">Total Materials</span>
                    <span className="text-xs font-semibold text-[#F0F0F0]">{aggregatedMaterials.length} types</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={copyMaterials}
                      className="flex-1 px-3 py-2.5 text-xs font-medium rounded-md bg-[#E6C200]/20 border border-[#E6C200]/30 text-[#E6C200] hover:bg-[#E6C200]/30 transition-colors active:scale-[0.98] inline-flex items-center justify-center gap-1.5"
                    >
                      {copied ? (
                        <>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy List
                        </>
                      )}
                    </button>
                    <button
                      onClick={clearAll}
                      className="px-3 py-2.5 text-xs font-medium rounded-md bg-[#1A1A1A] border border-[rgba(230,194,0,0.1)] text-[#B0B0B0] hover:border-[#E6C200]/30 transition-colors active:scale-[0.98] inline-flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Clear
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Cross-link to Build Planner */}
      <div className="mt-10 rounded-lg border border-[rgba(230,194,0,0.15)] bg-[#162B24] p-6">
        <h3 className="text-base font-bold text-[#E6C200] mb-2">Plan Your Unit Builds</h3>
        <p className="text-sm text-[#B0B0B0] mb-3">
          Now that you know what materials you need, head to the Build Planner to configure your optimal unit loadouts for both Tech-Priests and Necrons.
        </p>
        <Link href="/tools/build-planner" className="text-sm font-medium text-[#E6C200] hover:underline inline-flex items-center gap-1">
          Open Build Planner
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
