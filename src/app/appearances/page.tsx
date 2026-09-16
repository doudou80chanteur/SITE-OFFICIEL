import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { upcomingDates, type Appearance } from "@/config/placeholder-content";
import { formatAppearanceDate, formatVenue } from "@/lib/dates";

export const metadata: Metadata = { title: "Concerts" };

const MONTH_LABELS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

/** Regroupe les dates par mois (en conservant l'ordre chronologique). */
function groupByMonth(dates: Appearance[]) {
  const groups: { key: string; label: string; items: Appearance[] }[] = [];
  for (const date of dates) {
    const d = new Date(`${date.date}T00:00:00`);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    const label = `${MONTH_LABELS[d.getMonth()]} ${d.getFullYear()}`;
    const last = groups[groups.length - 1];
    if (last && last.key === key) last.items.push(date);
    else groups.push({ key, label, items: [date] });
  }
  return groups;
}

/** Appearances (cf. §7.7) : liste des dates, groupées par mois. */
export default function AppearancesPage() {
  const months = groupByMonth(upcomingDates);
  return (
    <>
      <PageHero eyebrow="Concerts & événements" title="Concerts" />
      <section className="container-shell py-16">
        {months.map((month) => (
          <div key={month.key} className="mb-12 last:mb-0">
            <h2 className="mb-4 font-display text-xl uppercase tracking-[0.16em] text-content">
              {month.label}
            </h2>
            <ul className="divide-y divide-line border-y border-line">
              {month.items.map((date) => {
                const { day, month: mon, weekday } = formatAppearanceDate(date.date);
                return (
                  <li key={date.slug}>
                    <Link
                      href={`/appearances/${date.slug}`}
                      className="group flex flex-wrap items-center gap-x-8 gap-y-2 py-6 transition-colors hover:bg-card"
                    >
                      <div className="flex w-28 shrink-0 items-baseline gap-2">
                        <span className="font-display text-4xl leading-none text-content">
                          {day}
                        </span>
                        <span className="font-display text-base leading-none text-muted">
                          {mon}
                        </span>
                      </div>
                      <span className="w-12 text-xs uppercase tracking-[0.18em] text-muted">
                        {weekday}
                      </span>
                      <div className="flex-1">
                        <p className="font-sans text-lg font-medium text-content">{date.city}</p>
                        <p className="text-sm text-muted">{formatVenue({ region: date.region ?? date.city, venue: date.venue })}</p>
                        {date.note && (
                          <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-accent">
                            {date.note}
                          </p>
                        )}
                      </div>
                      <span className="link-accent shrink-0">
                        Voir les détails
                        <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
