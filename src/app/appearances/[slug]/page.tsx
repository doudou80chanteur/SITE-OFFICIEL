import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { upcomingDates } from "@/config/placeholder-content";
import { formatAppearanceDate, formatVenue } from "@/lib/dates";

function getAppearance(slug: string) {
  return upcomingDates.find((d) => d.slug === slug);
}

export function generateStaticParams() {
  return upcomingDates.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const appearance = getAppearance(params.slug);
  if (!appearance) return { title: "Date" };
  return { title: `${appearance.city} - Concert David Swann` };
}

/** Appearance - détail (cf. §7.7). */
export default function AppearanceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const appearance = getAppearance(params.slug);
  if (!appearance) notFound();

  const { day, month, weekday } = formatAppearanceDate(appearance.date);

  return (
    <>
      <PageHero
        eyebrow={`${weekday} ${day} ${month} 2026`}
        title={appearance.city}
        intro={formatVenue(appearance)}
      />
      <section className="container-shell py-16">
        {appearance.note && (
          <p className="mb-8 inline-block text-sm uppercase tracking-[0.16em] text-accent">
            {appearance.note}
          </p>
        )}
        <dl className="grid max-w-xl gap-6 border-y border-line py-8">
          <div className="flex justify-between gap-6">
            <dt className="text-sm uppercase tracking-[0.14em] text-muted">Date</dt>
            <dd className="text-content">
              {weekday} {day} {month} 2026
            </dd>
          </div>
          <div className="flex justify-between gap-6">
            <dt className="text-sm uppercase tracking-[0.14em] text-muted">Lieu</dt>
            <dd className="text-right text-content">{formatVenue(appearance)}</dd>
          </div>
        </dl>
        <p className="mt-8 text-sm text-muted">
          Billetterie et informations pratiques à venir. Pour toute demande,{" "}
          <Link href="/contact" className="link-accent">
            contactez-moi
          </Link>
          .
        </p>
        <p className="mt-10">
          <Link href="/appearances" className="link-accent">
            <span aria-hidden="true">←</span> Toutes les dates
          </Link>
        </p>
      </section>
    </>
  );
}
