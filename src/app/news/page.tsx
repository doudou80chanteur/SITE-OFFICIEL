import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { articlesByDate } from "@/config/articles";

export const metadata: Metadata = { title: "Actualités" };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/** News - liste (cf. §7.2). Grille de cartes, tri par date décroissante. */
export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="Le journal" title="Actualités" />
      <section className="container-shell py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articlesByDate.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-card">
                <Image
                  src={item.cover}
                  alt={item.coverAlt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <time className="mt-4 block text-xs uppercase tracking-[0.18em] text-muted">
                {formatDate(item.date)}
              </time>
              <h2 className="mt-2 font-sans text-lg font-medium normal-case tracking-normal text-content transition-colors group-hover:text-accent">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
