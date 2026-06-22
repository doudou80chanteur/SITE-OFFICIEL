import type { Metadata } from "next";
import { PageHero, Placeholder } from "@/components/ui/PageHero";

// TODO: générer les métadonnées SEO par article (Open Graph, Twitter Card) - cf. §7.3
export const metadata: Metadata = { title: "Article" };

/** News - article (cf. §7.3). */
export default function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <article>
      <PageHero eyebrow="Actualité" title="Titre de l'article" />
      <Placeholder>
        Article <code>{params.slug}</code> - visuel principal, date, corps de
        texte riche (paragraphes, images, citations, vidéos), boutons de partage
        et bloc « Articles liés ». À compléter.
      </Placeholder>
    </article>
  );
}
