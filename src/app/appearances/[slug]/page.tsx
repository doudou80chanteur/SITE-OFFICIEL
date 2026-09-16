import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import Image from "next/image";
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
  const year = appearance.date.slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={`${weekday} ${day} ${month} ${year}`}
        title={appearance.city}
        intro={formatVenue({ region: appearance.region ?? appearance.city, venue: appearance.venue })}
      />
      {appearance.poster && (
        <div className="container-shell flex justify-center py-10">
          <Image
            src={appearance.poster}
            alt={appearance.posterAlt ?? `Affiche du concert à ${appearance.city}`}
            width={1054}
            height={1490}
            className="h-auto w-full max-w-3xl rounded-lg shadow-2xl"
            priority
          />
        </div>
      )}
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
              {weekday} {day} {month} {year}
            </dd>
          </div>
          <div className="flex justify-between gap-6">
            <dt className="text-sm uppercase tracking-[0.14em] text-muted">Lieu</dt>
            <dd className="text-right text-content">{formatVenue({ region: appearance.region ?? appearance.city, venue: appearance.venue })}</dd>
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
