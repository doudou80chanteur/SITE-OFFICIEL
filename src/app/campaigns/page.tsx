import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Campagnes" };

/** Campaigns (cf. §7.6) : grille des campagnes / partenariats / marques. */
export default function CampaignsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partenariats"
        title="Campagnes"
        intro="Campagnes, partenariats et collaborations de marque."
      />
      <section className="container-shell py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-sm border border-dashed border-line bg-card"
            >
              <div className="grid h-full place-items-center text-xs uppercase tracking-[0.2em] text-content/25">
                Campagne - à compléter
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
