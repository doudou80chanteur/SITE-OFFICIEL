import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { upcomingDates } from "@/config/placeholder-content";

export const metadata: Metadata = { title: "Concerts" };

/** Appearances (cf. §7.7) : liste des dates. */
export default function AppearancesPage() {
  return (
    <>
      <PageHero eyebrow="Concerts & événements" title="Concerts" />
      <section className="container-shell py-16">
        {/* TODO: séparation à venir / passées, tri chronologique - cf. §7.7 */}
        <ul className="divide-y divide-line border-y border-line">
          {upcomingDates.map((date) => (
            <li key={date.slug}>
              <Link
                href={`/appearances/${date.slug}`}
                className="group flex flex-wrap items-center gap-x-8 gap-y-2 py-6 transition-colors hover:bg-card"
              >
                <div className="flex w-28 shrink-0 items-baseline gap-2">
                  <span className="font-display text-4xl leading-none text-content">
                    {date.day}
                  </span>
                  <span className="font-display text-base leading-none text-muted">
                    {date.month}
                  </span>
                </div>
                <span className="w-12 text-xs uppercase tracking-[0.18em] text-muted">
                  {date.weekday}
                </span>
                <div className="flex-1">
                  <p className="font-sans text-lg font-medium text-content">{date.city}</p>
                  <p className="text-sm text-muted">{date.venue}</p>
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
    </>
  );
}
