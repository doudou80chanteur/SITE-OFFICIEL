import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { featuredReleases } from "@/config/placeholder-content";

export const metadata: Metadata = { title: "Musique" };

/** Music / Discographie (cf. §7.4) : grille des sorties. */
export default function MusicPage() {
  return (
    <>
      <PageHero eyebrow="Discographie" title="Musique" />
      <section className="container-shell py-16">
        {/* TODO: filtres (albums / singles / EP), tri par année - cf. §7.4 */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredReleases.map((release) => (
            <a
              key={release.slug}
              href={release.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-sm bg-card">
                <Image
                  src={release.cover}
                  alt={`Pochette - ${release.title}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-2">
                <h2 className="font-sans text-base font-medium normal-case text-content">
                  {release.title}
                </h2>
                <span className="text-xs uppercase tracking-[0.16em] text-muted">
                  {release.type} · {release.year}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
