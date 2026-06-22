import type { Metadata } from "next";
import { PageHero, Placeholder } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Date" };

/** Appearance - détail (cf. §7.7). */
export default function AppearanceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <PageHero eyebrow="Date" title="Lieu - Ville" />
      <Placeholder>
        Date <code>{params.slug}</code> - lieu, adresse, date/heure, bouton
        billetterie (lien externe) et éventuelle carte. À compléter.
      </Placeholder>
    </>
  );
}
