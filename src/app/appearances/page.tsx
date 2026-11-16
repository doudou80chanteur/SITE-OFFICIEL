import type { Metadata } from "next";
import Image from "next/image";
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
          <div id={`agenda-${month.key}`} key={month.key} className="mb-12 scroll-mt-24 last:mb-0">
            {month.key === "2026-10" && (
              <div className="mb-12 flex justify-center md:justify-end">
                <a
                  href="/support/affiche-novembre-2026.png"
                  target="_blank"
                  rel="noreferrer"
                  className="group block w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-card p-2 shadow-lg transition hover:-translate-y-1 hover:border-accent/60"
                  aria-label="Voir l'affiche de la tournée de novembre 2026 en grand"
                >
                  <Image
                    src="/support/affiche-novembre-2026.png"
                    alt="Affiche de la tournée David Swann de novembre 2026"
                    width={1456}
                    height={1092}
                    className="h-auto w-full rounded-xl"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <p className="px-2 pb-1 pt-3 text-center text-xs uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-accent">
                    Cliquez pour agrandir l&apos;affiche
                  </p>
                </a>
              </div>
            )}
            {month.key === "2026-11" && (
              <div className="mb-12 flex justify-center md:justify-end">
                <a
                  href="/support/affiche-decembre-2026.png"
                  target="_blank"
                  rel="noreferrer"
                  className="group block w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-card p-2 shadow-lg transition hover:-translate-y-1 hover:border-accent/60"
                  aria-label="Voir l'affiche de la tournée de décembre 2026 en grand"
                >
                  <Image
                    src="/support/affiche-decembre-2026.png"
                    alt="Affiche de la tournée David Swann de décembre 2026"
                    width={1456}
                    height={1092}
                    className="h-auto w-full rounded-xl"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <p className="px-2 pb-1 pt-3 text-center text-xs uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-accent">
                    Cliquez pour agrandir l&apos;affiche
                  </p>
                </a>
              </div>
            )}
            {month.key === "2027-0" && (
              <div className="mb-12 flex justify-center md:justify-end">
                <a
                  href="/support/affiche-janvier-2027.png"
                  target="_blank"
                  rel="noreferrer"
                  className="group block w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-card p-2 shadow-lg transition hover:-translate-y-1 hover:border-accent/60"
                  aria-label="Voir l'affiche de la tournée de janvier 2027 en grand"
                >
                  <Image
                    src="/support/affiche-janvier-2027.png"
                    alt="Affiche de la tournée David Swann de janvier 2027"
                    width={1456}
                    height={1092}
                    className="h-auto w-full rounded-xl"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <p className="px-2 pb-1 pt-3 text-center text-xs uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-accent">
                    Cliquez pour agrandir l&apos;affiche
                  </p>
                </a>
              </div>
            )}
            {month.key === "2027-3" && (
              <div className="mb-12 flex justify-center md:justify-end">
                <a
                  href="/support/affiche-avril-2027.png"
                  target="_blank"
                  rel="noreferrer"
                  className="group block w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-card p-2 shadow-lg transition hover:-translate-y-1 hover:border-accent/60"
                  aria-label="Voir l'affiche de la tournée d'avril 2027 en grand"
                >
                  <Image
                    src="/support/affiche-avril-2027.png"
                    alt="Affiche de la tournée David Swann d'avril 2027"
                    width={1456}
                    height={1092}
                    className="h-auto w-full rounded-xl"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <p className="px-2 pb-1 pt-3 text-center text-xs uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-accent">
                    Cliquez pour agrandir l&apos;affiche
                  </p>
                </a>
              </div>
            )}
            {month.key === "2027-5" && (
              <div className="mb-12 flex justify-center md:justify-end">
                <a
                  href="/support/affiche-juin-2027.png"
                  target="_blank"
                  rel="noreferrer"
                  className="group block w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-card p-2 shadow-lg transition hover:-translate-y-1 hover:border-accent/60"
                  aria-label="Voir l'affiche de la tournée de juin 2027 en grand"
                >
                  <Image
                    src="/support/affiche-juin-2027.png"
                    alt="Affiche de la tournée David Swann de juin 2027"
                    width={1456}
                    height={1092}
                    className="h-auto w-full rounded-xl"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <p className="px-2 pb-1 pt-3 text-center text-xs uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-accent">
                    Cliquez pour agrandir l&apos;affiche
                  </p>
                </a>
              </div>
            )}
            {month.key === "2027-7" && (
              <div className="mb-12 flex justify-center md:justify-end">
                <a
                  href="/support/affiche-aout-2027.png"
                  target="_blank"
                  rel="noreferrer"
                  className="group block w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-card p-2 shadow-lg transition hover:-translate-y-1 hover:border-accent/60"
                  aria-label="Voir l'affiche de la tournée d'août 2027 en grand"
                >
                  <Image
                    src="/support/affiche-aout-2027.png"
                    alt="Affiche de la tournée David Swann d'août 2027"
                    width={1456}
                    height={1092}
                    className="h-auto w-full rounded-xl"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <p className="px-2 pb-1 pt-3 text-center text-xs uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-accent">
                    Cliquez pour agrandir l&apos;affiche
                  </p>
                </a>
              </div>
            )}
            {month.key === "2027-8" && (
              <div className="mb-12 flex justify-center md:justify-end">
                <a
                  href="/support/affiche-septembre-2027.png"
                  target="_blank"
                  rel="noreferrer"
                  className="group block w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-card p-2 shadow-lg transition hover:-translate-y-1 hover:border-accent/60"
                  aria-label="Voir l'affiche de la tournée de septembre 2027 en grand"
                >
                  <Image
                    src="/support/affiche-septembre-2027.png"
                    alt="Affiche de la tournée David Swann de septembre 2027"
                    width={1456}
                    height={1092}
                    className="h-auto w-full rounded-xl"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <p className="px-2 pb-1 pt-3 text-center text-xs uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-accent">
                    Cliquez pour agrandir l&apos;affiche
                  </p>
                </a>
              </div>
            )}
            {month.key === "2027-11" && (
              <div className="mb-12 flex justify-center md:justify-end">
                <a
                  href="/support/affiche-decembre-2027.png"
                  target="_blank"
                  rel="noreferrer"
                  className="group block w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-card p-2 shadow-lg transition hover:-translate-y-1 hover:border-accent/60"
                  aria-label="Voir l'affiche de la tournée de décembre 2027 en grand"
                >
                  <Image
                    src="/support/affiche-decembre-2027.png"
                    alt="Affiche de la tournée David Swann de décembre 2027"
                    width={1456}
                    height={1092}
                    className="h-auto w-full rounded-xl"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <p className="px-2 pb-1 pt-3 text-center text-xs uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-accent">
                    Cliquez pour agrandir l&apos;affiche
                  </p>
                </a>
              </div>
            )}
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
