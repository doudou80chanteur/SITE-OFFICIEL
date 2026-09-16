import type { Metadata } from "next";
import { PageHero, Placeholder } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Album" };

/** Album - détail (cf. §7.5). */
export default function AlbumPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <PageHero eyebrow="Sortie" title="Titre de l'album" />
      <Placeholder>
        Album <code>{params.slug}</code> - grande pochette, année, crédits,
        tracklist (numéro / titre / durée), boutons de streaming (Spotify, Apple
        Music, YouTube, Deezer…), lecteur embarqué et section « Autres sorties ».
        À compléter.
      </Placeholder>
    </>
  );
}
