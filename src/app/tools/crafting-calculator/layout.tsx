import type { Metadata } from 'next';
import { getSoftwareApplicationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Mechanicus 2 Crafting Calculator - Equipment Material Costs',
  description:
    'Calculate crafting material costs for Mechanicus 2 equipment. Filter weapons, armor, implants, mods. Batch items and export your material shopping list.',
  openGraph: {
    title: 'Mechanicus 2 Crafting Calculator - Material Costs',
    description:
      'Calculate crafting material costs for Mechanicus 2 equipment. Filter, batch, and export your material list.',
    type: 'website',
  },
};

export default function CraftingCalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getSoftwareApplicationSchema({
              name: 'Mechanicus 2 Crafting Calculator',
              description: 'Calculate crafting material costs for all Mechanicus 2 equipment. Filter by category, batch items, and export your material shopping list.',
              slug: 'crafting-calculator',
              applicationCategory: 'GameExtension',
            })
          ),
        }}
      />
      {children}
    </>
  );
}
