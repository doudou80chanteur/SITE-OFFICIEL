import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CdOrderForm } from "@/components/shop/CdOrderForm";

const tracks = [
  "Exquise Marquise",
  "Une pluie de soleil",
  "Toutes..Toutes..Toutes..",
  "Disco",
  "Exquise Marquise (karaoké Club-Mix)",
];

export const metadata: Metadata = {
  title: "Commander David SWANN - EP",
  description:
    "Commander le maxi-single physique David SWANN - EP avec Exquise Marquise, Une pluie de soleil, Toutes..Toutes..Toutes.. et Disco.",
};

export default function DavidSwannEpShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Boutique"
        title="Commander David SWANN - EP"
        intro="Maxi-single physique. Tarif unitaire : 7,50 euros, frais de port inclus pour la France."
      />

      <section className="container-shell pb-24 pt-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="space-y-5">
            <div className="relative aspect-square overflow-hidden rounded-sm bg-card shadow-2xl">
              <Image
                src="/covers/david-swann-ep.jpg"
                alt="Pochette du maxi-single David SWANN - EP"
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="rounded-sm border border-line bg-card p-5">
              <p className="eyebrow mb-2 font-sans normal-case">Prix maxi-single</p>
              <p className="text-3xl font-semibold text-content">7,50 €</p>
              <p className="mt-2 text-sm text-muted">
                Frais de port inclus pour la France.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-4xl uppercase tracking-normal text-content md:text-5xl">
                David SWANN - EP
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                Maxi-single physique disponible à la commande.
              </p>
            </div>

            <CdOrderForm productTitle="David SWANN - EP" productKind="le maxi-single physique" />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-sm border border-line bg-card p-6">
                <h3 className="eyebrow mb-4 font-sans normal-case">
                  Informations de commande
                </h3>
                <ul className="space-y-3 text-sm leading-6 text-muted">
                  <li>Quantité au choix : 1 à 5 exemplaires.</li>
                  <li>Paiement possible : Paypal, virement ou chèque.</li>
                  <li>La demande de commande est préparée par email.</li>
                  <li>
                    Contact direct :{" "}
                    <a href="tel:+33661895928" className="link-accent">
                      06 61 89 59 28
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-sm border border-line bg-card p-6">
                <h3 className="eyebrow mb-4 font-sans normal-case">Titres</h3>
                <ol className="grid gap-2 text-sm leading-6 text-muted">
                  {tracks.map((track, index) => (
                    <li key={track} className="flex gap-3">
                      <span className="w-6 shrink-0 text-content">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{track}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-muted">
              <Link href="/music" className="link-accent">
                Retour à la discographie
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
