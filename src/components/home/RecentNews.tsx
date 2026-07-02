import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { articlesByDate } from "@/config/articles";

/** Section "Actualités récentes" (cf. §7.1). */
export function RecentNews() {
  const items = articlesByDate.slice(0, 3);

  return (
    <section className="container-shell py-20 md:py-28">
      <SectionHeader
        title="Actualités récentes"
        linkLabel="Voir toutes les actus"
        linkHref="/news"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/news/${item.slug}`}
            className="group block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-white/5">
              <Image
                src={item.cover}
                alt={item.coverAlt}
                fill
                sizes="(max-width: 768px) 92vw, 30vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <time className="mt-4 block text-xs uppercase tracking-[0.18em] text-bone-muted">
              {new Date(item.date).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
            <h3 className="mt-2 font-sans text-lg font-medium normal-case tracking-normal text-white transition-colors group-hover:text-accent">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
