import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { recentNews } from "@/config/placeholder-content";

export const metadata: Metadata = { title: "Actualités" };

/** News - liste (cf. §7.2). Grille de cartes, tri par date décroissante. */
export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="Le journal" title="Actualités" />
      <section className="container-shell py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentNews.map((item) => (
            <Link key={item.slug} href={`/news/${item.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-card">
                <div className="absolute inset-0 grid place-items-center text-xs uppercase tracking-[0.2em] text-content/25 transition-transform duration-500 group-hover:scale-105">
                  Image actu
                </div>
              </div>
              <h2 className="mt-4 font-sans text-lg font-medium normal-case text-content transition-colors group-hover:text-accent">
                {item.title}
              </h2>
            </Link>
          ))}
        </div>
        {/* TODO: chargement progressif (bouton "Charger plus" ou scroll infini) - cf. §7.2 */}
        <div className="mt-12 flex justify-center">
          <button className="btn-listen" type="button">
            Charger plus
          </button>
        </div>
      </section>
    </>
  );
}
