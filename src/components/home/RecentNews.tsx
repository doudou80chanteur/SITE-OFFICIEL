import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { recentNews } from "@/config/placeholder-content";

/** Section "Actualités récentes" (cf. §7.1). */
export function RecentNews() {
  return (
    <section className="container-shell py-20 md:py-28">
      <SectionHeader
        title="Actualités récentes"
        linkLabel="Voir toutes les actus"
        linkHref="/news"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {recentNews.map((item) => (
          <Link key={item.slug} href={`/news/${item.slug}`} className="group block">
            {/* Visuel - image à fournir */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-white/5">
              <div className="absolute inset-0 grid place-items-center text-xs uppercase tracking-[0.2em] text-white/25 transition-transform duration-500 group-hover:scale-105">
                Image actu
              </div>
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
