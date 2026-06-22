import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { upcomingDates } from "@/config/placeholder-content";

/** Section "Dates" (cf. §7.1). */
export function TourDates() {
  return (
    <section className="container-shell py-20 md:py-28">
      <SectionHeader
        title="Dates"
        linkLabel="Voir le calendrier complet"
        linkHref="/appearances"
      />
      <ul className="divide-y divide-white/10 border-y border-white/10">
        {upcomingDates.map((date) => (
          <li key={date.slug}>
            <Link
              href={`/appearances/${date.slug}`}
              className="group flex flex-wrap items-center gap-x-8 gap-y-2 py-6 transition-colors hover:bg-white/[0.03]"
            >
              <div className="flex w-28 shrink-0 items-baseline gap-2">
                <span className="font-display text-4xl leading-none text-white">
                  {date.day}
                </span>
                <span className="font-display text-base leading-none text-bone-muted">
                  {date.month}
                </span>
              </div>
              <span className="w-12 text-xs uppercase tracking-[0.18em] text-bone-muted">
                {date.weekday}
              </span>
              <div className="flex-1">
                <p className="font-sans text-lg font-medium text-white">
                  {date.city}
                </p>
                <p className="text-sm text-bone-muted">{date.venue}</p>
              </div>
              <span className="link-accent shrink-0">
                Voir les détails
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
