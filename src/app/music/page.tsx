import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { featuredReleases } from "@/config/placeholder-content";

export const metadata: Metadata = { title: "Musique" };

export default function MusicPage() {
  return (
    <>
      <PageHero eyebrow="Discographie" title="Musique" />
      <section className="container-shell py-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredReleases.map((release) => {
            const isExternal = release.href.startsWith("http");
            const hasLink = release.href !== "#";

            return (
              <a
                key={release.slug}
                href={release.href}
                aria-disabled={!hasLink}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`group block ${hasLink ? "" : "cursor-default"}`}
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
                <div className="mt-3 flex min-w-0 items-start justify-between gap-3">
                  <h2
                    className="min-w-0 font-sans text-sm font-medium leading-snug normal-case text-content sm:text-base"
                    title={release.title}
                  >
                    {release.title}
                  </h2>
                  <span className="shrink-0 whitespace-nowrap text-xs tabular-nums tracking-[0.16em] text-muted">
                    {release.year}
                  </span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                  {release.type}
                </p>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
