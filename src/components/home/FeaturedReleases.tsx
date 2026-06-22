import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { featuredReleases } from "@/config/placeholder-content";

/** Section "Sorties à la une" (cf. §7.1) - reprend les vraies sorties. */
export function FeaturedReleases() {
  return (
    <section className="bg-ink-pure py-20 md:py-28">
      <div className="container-shell">
        <SectionHeader
          title="Sorties à la une"
          linkLabel="Voir toute la discographie"
          linkHref="/music"
        />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {featuredReleases.map((release) => (
            <a
              key={release.slug}
              href={release.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Pochette carrée */}
              <div className="relative aspect-square overflow-hidden rounded-sm bg-white/5">
                <Image
                  src={release.cover}
                  alt={`Pochette - ${release.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="btn-listen w-full">Écouter</span>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-sans text-lg font-medium normal-case tracking-normal text-white">
                  {release.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.18em] text-bone-muted">
                  {release.type} · {release.year}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
