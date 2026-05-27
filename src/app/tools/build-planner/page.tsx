'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  type Faction,
  type Unit,
  type EquipSlot,
  type EquipItem,
  type SavedBuild,
  type UnitStats,
  SLOT_LABELS,
  ROLE_LABELS,
  getUnitsForFaction,
  getEquipmentForSlot,
  getUnitById,
  getEquipById,
  calculateBuildStats,
  generateBuildText,
  TOOL_COPYRIGHT_NOTICE,
} from '@/lib/build-planner-data';

const RARITY_COLORS: Record<string, string> = {
  common: 'bg-gray-600',
  uncommon: 'bg-emerald-700',
  rare: 'bg-yellow-700',
  exotic: 'bg-orange-700',
};

const RARITY_TEXT: Record<string, string> = {
  common: 'text-gray-300',
  uncommon: 'text-emerald-400',
  rare: 'text-yellow-400',
  exotic: 'text-orange-400',
};

const STAT_LABELS: Record<keyof UnitStats, string> = {
  hp: 'HP',
  armor: 'Armor',
  damage: 'Damage',
  critChance: 'Crit %',
  initiative: 'Initiative',
  movement: 'Movement',
};

const STORAGE_KEY = 'mechanicus2-build-planner';

export default function BuildPlannerPage() {
  const [faction, setFaction] = useState<Faction>('mechanicus');
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [equipment, setEquipment] = useState<Record<EquipSlot, string | null>>({
    primary_weapon: null,
    secondary_weapon: null,
    armor: null,
    implant: null,
    mod: null,
    relic: null,
  });
  const [savedBuilds, setSavedBuilds] = useState<SavedBuild[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [copied, setCopied] = useState(false);
  const [buildName, setBuildName] = useState('');
  const [showSavePanel, setShowSavePanel] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSavedBuilds(JSON.parse(stored) as SavedBuild[]);
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist saved builds
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedBuilds));
    } catch {
      // ignore
    }
  }, [savedBuilds]);

  // Reset selection when faction changes
  useEffect(() => {
    setSelectedUnitId(null);
    setEquipment({ primary_weapon: null, secondary_weapon: null, armor: null, implant: null, mod: null, relic: null });
    setSearchQuery('');
    setRoleFilter('all');
  }, [faction]);

  const units = getUnitsForFaction(faction);
  const selectedUnit = selectedUnitId ? getUnitById(selectedUnitId) : null;
  const currentStats = selectedUnit ? calculateBuildStats(selectedUnit, equipment) : null;

  // Filter units
  const filteredUnits = units.filter((u) => {
    const matchRole = roleFilter === 'all' || u.role === roleFilter;
    const matchSearch = searchQuery === '' || u.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchRole && matchSearch;
  });

  const handleSelectUnit = useCallback((unitId: string) => {
    setSelectedUnitId(unitId);
    setEquipment({ primary_weapon: null, secondary_weapon: null, armor: null, implant: null, mod: null, relic: null });
  }, []);

  const handleEquip = useCallback((slot: EquipSlot, itemId: string | null) => {
    setEquipment((prev) => ({ ...prev, [slot]: itemId }));
  }, []);

  const handleClearAll = useCallback(() => {
    setEquipment({ primary_weapon: null, secondary_weapon: null, armor: null, implant: null, mod: null, relic: null });
  }, []);

  const handleCopy = useCallback(() => {
    if (!selectedUnit || !currentStats) return;
    const text = generateBuildText(selectedUnit, equipment, currentStats);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [selectedUnit, currentStats, equipment]);

  const handleSave = useCallback(() => {
    if (!selectedUnit || !buildName.trim()) return;
    const newBuild: SavedBuild = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: buildName.trim(),
      faction,
      unitId: selectedUnit.id,
      equipment: { ...equipment },
      savedAt: Date.now(),
    };
    setSavedBuilds((prev) => [newBuild, ...prev]);
    setBuildName('');
  }, [selectedUnit, buildName, faction, equipment]);

  const handleLoad = useCallback((build: SavedBuild) => {
    setFaction(build.faction);
    setSelectedUnitId(build.unitId);
    setEquipment({ ...build.equipment });
  }, []);

  const handleDelete = useCallback((buildId: string) => {
    setSavedBuilds((prev) => prev.filter((b) => b.id !== buildId));
  }, []);

  const statDiff = (stat: keyof UnitStats): number => {
    if (!selectedUnit) return 0;
    return (currentStats?.[stat] ?? 0) - selectedUnit.baseStats[stat];
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0F2620' }}>
      {/* Copyright Notice */}
      <div className="border-b border-[#E6C200]/20 bg-[#0A1F19]">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <p className="text-center text-xs text-[#B0B0B0] leading-relaxed">
            {TOOL_COPYRIGHT_NOTICE}
          </p>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src="/build-planner-hero.webp"
          alt="Mechanicus 2 build planner - customize unit loadouts and equipment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2620] via-[#0F2620]/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#F0F0F0] tracking-wide">BUILD PLANNER</h1>
            <p className="mt-2 text-[#B0B0B0] text-sm md:text-base">Configure units and equipment for both factions</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* How to Use Guide */}
        <div className="mb-6 rounded-lg border border-[rgba(230,194,0,0.12)] bg-[#162B24]/60 px-5 py-4">
          <h2 className="text-sm font-bold text-[#E6C200] tracking-wide mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How to Use the Build Planner
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-[#B0B0B0] leading-relaxed">
            <li><span className="text-[#F0F0F0]">Choose Your Faction:</span> Switch between Tech-Priests and Necrons to access their unique units and equipment.</li>
            <li><span className="text-[#F0F0F0]">Pick Your Unit:</span> Select a unit from the list to view its base stats and available equipment slots.</li>
            <li><span className="text-[#F0F0F0]">Customize Your Loadout:</span> Assign weapons, armor, and mods to each slot. The &quot;Total Stats&quot; section updates in real time.</li>
            <li><span className="text-[#F0F0F0]">Save &amp; Share:</span> Click &quot;Save Build&quot; to store your setup in your browser, or &quot;Copy Build&quot; to share your optimal loadout with others.</li>
          </ol>
          <p className="mt-3 text-xs text-[#B0B0B0]/60 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-[#E6C200]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Important: All stats are simplified for planning purposes and may not match in-game values exactly. This is an unofficial fan-made tool.
          </p>
        </div>

        {/* Faction Switcher */}
        <div className="mb-6 flex justify-center gap-3">
          {(['mechanicus', 'necrons'] as Faction[]).map((f) => (
            <button
              key={f}
              onClick={() => setFaction(f)}
              className={`px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-200 ${
                faction === f
                  ? 'bg-[#E6C200] text-[#0F2620] shadow-lg shadow-[#E6C200]/20'
                  : 'bg-[#162B24] text-[#B0B0B0] border border-[#E6C200]/20 hover:border-[#E6C200]/50 hover:text-[#F0F0F0]'
              }`}
            >
              {f === 'mechanicus' ? 'Adeptus Mechanicus' : 'Necron Dynasty'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Unit Selection */}
          <div className="lg:col-span-3">
            <div className="rounded-lg border border-[#E6C200]/20 bg-[#162B24] p-4">
              <h2 className="text-lg font-bold text-[#E6C200] mb-3 tracking-wide">SELECT UNIT</h2>
              
              {/* Search */}
              <div className="relative mb-3">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0B0B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input
                  type="text"
                  placeholder="Search units..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-[#0A1F19] border border-[#E6C200]/20 rounded-lg text-sm text-[#F0F0F0] placeholder-[#B0B0B0]/50 focus:outline-none focus:border-[#E6C200]/50"
                />
              </div>

              {/* Role Filter */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                <button
                  onClick={() => setRoleFilter('all')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    roleFilter === 'all' ? 'bg-[#E6C200]/20 text-[#E6C200]' : 'bg-[#0A1F19] text-[#B0B0B0] hover:text-[#F0F0F0]'
                  }`}
                >
                  All
                </button>
                {Object.entries(ROLE_LABELS).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setRoleFilter(key)}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                      roleFilter === key ? 'bg-[#E6C200]/20 text-[#E6C200]' : 'bg-[#0A1F19] text-[#B0B0B0] hover:text-[#F0F0F0]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Unit List */}
              <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                {filteredUnits.map((unit) => (
                  <button
                    key={unit.id}
                    onClick={() => handleSelectUnit(unit.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                      selectedUnitId === unit.id
                        ? 'bg-[#E6C200]/10 border-[#E6C200]/50'
                        : 'bg-[#0A1F19] border-[#E6C200]/10 hover:border-[#E6C200]/30 hover:bg-[#0A1F19]/80'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#F0F0F0]">{unit.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${RARITY_COLORS[unit.role === 'commander' ? 'exotic' : unit.role === 'elite' ? 'rare' : unit.role === 'heavy' ? 'uncommon' : 'common']} text-white`}>
                        {ROLE_LABELS[unit.role]}
                      </span>
                    </div>
                    <p className="text-xs text-[#B0B0B0] mt-1 line-clamp-2">{unit.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Center: Equipment Config */}
          <div className="lg:col-span-5">
            {selectedUnit ? (
              <div className="rounded-lg border border-[#E6C200]/20 bg-[#162B24] p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-[#F0F0F0]">{selectedUnit.name}</h2>
                    <p className="text-xs text-[#E6C200] mt-0.5">
                      {faction === 'mechanicus' ? 'Adeptus Mechanicus' : 'Necron Dynasty'} &middot; {ROLE_LABELS[selectedUnit.role]}
                    </p>
                  </div>
                  <button
                    onClick={handleClearAll}
                    className="text-xs text-[#B0B0B0] hover:text-[#E6C200] transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    Clear all
                  </button>
                </div>

                <p className="text-sm text-[#B0B0B0] mb-4">{selectedUnit.description}</p>

                {/* Equipment Slots */}
                <div className="space-y-4">
                  {selectedUnit.availableSlots.map((slot) => {
                    const slotItems = getEquipmentForSlot(faction, slot);
                    const currentEquipId = equipment[slot];
                    const currentEquip = currentEquipId ? getEquipById(currentEquipId) : null;

                    return (
                      <div key={slot} className="rounded-lg border border-[#E6C200]/10 bg-[#0A1F19] p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-[#E6C200] tracking-wide uppercase">{SLOT_LABELS[slot]}</span>
                          {currentEquip && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${RARITY_COLORS[currentEquip.rarity]} text-white`}>
                              {currentEquip.rarity.toUpperCase()}
                            </span>
                          )}
                        </div>

                        {currentEquip ? (
                          <div className="mb-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-[#F0F0F0]">{currentEquip.name}</span>
                              <button
                                onClick={() => handleEquip(slot, null)}
                                className="text-xs text-red-400 hover:text-red-300 transition-colors ml-2"
                              >
                                Remove
                              </button>
                            </div>
                            <p className="text-xs text-[#B0B0B0] mt-1">{currentEquip.description}</p>
                            <div className="flex flex-wrap gap-2 mt-1.5">
                              {Object.entries(currentEquip.statBonus).map(([stat, val]) => (
                                <span key={stat} className={`text-[11px] font-mono ${typeof val === 'number' && val > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                                  {STAT_LABELS[stat as keyof UnitStats]}: {typeof val === 'number' && val > 0 ? '+' : ''}{val}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : null}

                        {/* Equipment Selection Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {slotItems.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => handleEquip(slot, currentEquipId === item.id ? null : item.id)}
                              className={`text-left p-2 rounded border text-xs transition-all duration-150 ${
                                currentEquipId === item.id
                                  ? 'bg-[#E6C200]/15 border-[#E6C200]/50'
                                  : 'bg-[#0F2620] border-[#E6C200]/10 hover:border-[#E6C200]/30'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${RARITY_COLORS[item.rarity]}`} />
                                <span className="text-[#F0F0F0] font-medium truncate">{item.name}</span>
                              </div>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {Object.entries(item.statBonus).map(([stat, val]) => (
                                  <span key={stat} className={`font-mono text-[10px] ${typeof val === 'number' && val > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                                    {STAT_LABELS[stat as keyof UnitStats]}{typeof val === 'number' && val > 0 ? '+' : ''}{val}
                                  </span>
                                ))}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-[#E6C200]/20 bg-[#162B24] p-8 flex flex-col items-center justify-center min-h-[400px]">
                <svg className="w-16 h-16 text-[#E6C200]/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p className="text-[#B0B0B0] text-center">Select a unit from the left panel to begin configuring equipment</p>
              </div>
            )}
          </div>

          {/* Right: Stats + Actions */}
          <div className="lg:col-span-4 space-y-4">
            {/* Stats Panel */}
            {selectedUnit && currentStats ? (
              <div className="rounded-lg border border-[#E6C200]/20 bg-[#162B24] p-4 sticky top-20">
                <h3 className="text-sm font-bold text-[#E6C200] mb-3 tracking-wide">UNIT STATS</h3>
                
                <div className="space-y-2">
                  {(Object.keys(STAT_LABELS) as (keyof UnitStats)[]).map((stat) => {
                    const diff = statDiff(stat);
                    return (
                      <div key={stat} className="flex items-center justify-between py-1.5 border-b border-[#E6C200]/5 last:border-0">
                        <span className="text-sm text-[#B0B0B0]">{STAT_LABELS[stat]}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-mono font-bold text-[#F0F0F0]">{currentStats[stat]}</span>
                          {diff !== 0 && (
                            <span className={`text-xs font-mono font-medium ${diff > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                              ({diff > 0 ? '+' : ''}{diff})
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Stat Bars */}
                <div className="mt-4 space-y-2">
                  {(Object.keys(STAT_LABELS) as (keyof UnitStats)[]).map((stat) => {
                    const maxVal = stat === 'hp' ? 300 : stat === 'armor' ? 50 : stat === 'damage' ? 50 : stat === 'critChance' ? 50 : stat === 'initiative' ? 25 : 10;
                    const pct = Math.min(100, (currentStats[stat] / maxVal) * 100);
                    return (
                      <div key={stat} className="flex items-center gap-2">
                        <span className="text-[10px] text-[#B0B0B0] w-16 text-right">{STAT_LABELS[stat]}</span>
                        <div className="flex-1 h-2 bg-[#0A1F19] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${pct}%`,
                              backgroundColor: pct > 75 ? '#E6C200' : pct > 40 ? '#4ade80' : '#60a5fa',
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="mt-5 space-y-2">
                  <button
                    onClick={handleCopy}
                    className="w-full py-2.5 rounded-lg bg-[#E6C200] text-[#0F2620] font-bold text-sm tracking-wide hover:bg-[#E6C200]/90 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                    {copied ? 'Copied!' : 'Copy Build Plan'}
                  </button>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Build name..."
                      value={buildName}
                      onChange={(e) => setBuildName(e.target.value)}
                      className="flex-1 px-3 py-2 bg-[#0A1F19] border border-[#E6C200]/20 rounded-lg text-sm text-[#F0F0F0] placeholder-[#B0B0B0]/50 focus:outline-none focus:border-[#E6C200]/50"
                    />
                    <button
                      onClick={handleSave}
                      disabled={!buildName.trim()}
                      className="px-4 py-2 rounded-lg bg-[#162B24] border border-[#E6C200]/20 text-[#E6C200] font-medium text-sm hover:bg-[#0A1F19] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-[#E6C200]/20 bg-[#162B24] p-6 flex flex-col items-center justify-center min-h-[200px]">
                <svg className="w-12 h-12 text-[#E6C200]/20 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                <p className="text-[#B0B0B0] text-sm text-center">Stats will appear here when a unit is selected</p>
              </div>
            )}

            {/* Saved Builds */}
            <div className="rounded-lg border border-[#E6C200]/20 bg-[#162B24] p-4">
              <button
                onClick={() => setShowSavePanel(!showSavePanel)}
                className="w-full flex items-center justify-between text-sm font-bold text-[#E6C200] tracking-wide"
              >
                <span>SAVED BUILDS ({savedBuilds.length})</span>
                <svg className={`w-4 h-4 transition-transform ${showSavePanel ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>

              {showSavePanel && (
                <div className="mt-3 space-y-2 max-h-[300px] overflow-y-auto">
                  {savedBuilds.length === 0 ? (
                    <p className="text-xs text-[#B0B0B0] text-center py-4">No saved builds yet. Configure a unit and save it above.</p>
                  ) : (
                    savedBuilds.map((build) => {
                      const buildUnit = getUnitById(build.unitId);
                      const buildStats = buildUnit ? calculateBuildStats(buildUnit, build.equipment) : null;
                      return (
                        <div key={build.id} className="p-3 rounded-lg border border-[#E6C200]/10 bg-[#0A1F19]">
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="text-sm font-medium text-[#F0F0F0]">{build.name}</span>
                              <p className="text-[10px] text-[#B0B0B0] mt-0.5">
                                {buildUnit?.name ?? 'Unknown'} &middot; {build.faction === 'mechanicus' ? 'Mechanicus' : 'Necrons'}
                              </p>
                              {buildStats && (
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {(Object.keys(STAT_LABELS) as (keyof UnitStats)[]).map((stat) => (
                                    <span key={stat} className="text-[10px] font-mono text-[#B0B0B0]">
                                      {STAT_LABELS[stat]}:{buildStats[stat]}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <div className="flex gap-1.5">
                              <button
                                onClick={() => handleLoad(build)}
                                className="text-xs px-2 py-1 rounded bg-[#E6C200]/10 text-[#E6C200] hover:bg-[#E6C200]/20 transition-colors"
                              >
                                Load
                              </button>
                              <button
                                onClick={() => handleDelete(build.id)}
                                className="text-xs px-2 py-1 rounded bg-red-900/20 text-red-400 hover:bg-red-900/40 transition-colors"
                              >
                                Del
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="rounded-lg border border-[#E6C200]/20 bg-[#162B24] p-4">
              <h3 className="text-sm font-bold text-[#E6C200] mb-2 tracking-wide">RELATED TOOLS</h3>
              <Link
                href="/tools/crafting-calculator"
                className="flex items-center gap-2 text-sm text-[#B0B0B0] hover:text-[#E6C200] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                Crafting Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Cross-link to Crafting Calculator */}
      <div className="mt-10 rounded-lg border border-[rgba(230,194,0,0.15)] bg-[#162B24] p-6">
        <h3 className="text-base font-bold text-[#E6C200] mb-2">Calculate Your Crafting Materials</h3>
        <p className="text-sm text-[#B0B0B0] mb-3">
          Found the perfect build? Use the Crafting Calculator to find out exactly which materials you need to forge all the equipment for your loadout.
        </p>
        <Link href="/tools/crafting-calculator" className="text-sm font-medium text-[#E6C200] hover:underline inline-flex items-center gap-1">
          Open Crafting Calculator
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
