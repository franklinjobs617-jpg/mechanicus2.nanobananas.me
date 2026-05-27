import type { Metadata } from 'next';
import { getSoftwareApplicationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Mechanicus 2 Build Planner - Unit Loadout Simulator',
  description:
    'Plan Mechanicus 2 unit builds for Tech-Priests and Necrons. Configure weapons, armor, implants, mods. Save builds and copy loadouts to share.',
  openGraph: {
    title: 'Mechanicus 2 Build Planner - Unit Loadouts',
    description:
      'Plan Mechanicus 2 unit builds for both factions. Configure, save, and share your loadouts.',
    type: 'website',
  },
};

export default function BuildPlannerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getSoftwareApplicationSchema({
              name: 'Mechanicus 2 Build Planner',
              description: 'Plan Mechanicus 2 unit builds for Tech-Priests and Necrons. Configure weapons, armor, implants, and mods. Save and share your loadouts.',
              slug: 'build-planner',
              applicationCategory: 'GameExtension',
            })
          ),
        }}
      />
      {children}
    </>
  );
}
