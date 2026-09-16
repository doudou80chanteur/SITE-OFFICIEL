import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CdOrderForm } from "@/components/shop/CdOrderForm";

const tracks = ["Le rythme des vacances", "Toi le jazz"];

export const metadata: Metadata = {
  title: "Commander Le rythme des vacances",
  description:
    "Commander le single physique Le rythme des vacances / Toi le jazz de David Swann.",
};

export default function LeRythmeDesVacancesShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Boutique"
        title="Commander Le rythme des vacances"
        intro="Single physique. Tarif unitaire : 7,50 euros, frais de port inclus pour la France."
      />

      <section className="container-shell pb-24 pt-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="space-y-5">
            <div className="relative aspect-square overflow-hidden rounded-sm bg-card shadow-2xl">
              <Image
                src="/covers/le-rythme-des-vacances-toi-le-jazz.jpg"
                alt="Pochette du single Le rythme des vacances / Toi le jazz de David Swann"
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="rounded-sm border border-line bg-card p-5">
              <p className="eyebrow mb-2 font-sans normal-case">Prix single physique</p>
              <p className="text-3xl font-semibold text-content">7,50 €</p>
              <p className="mt-2 text-sm text-muted">
                Frais de port inclus pour la France.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-4xl uppercase tracking-normal text-content md:text-5xl">
                Le rythme des vacances / Toi le jazz
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                Single physique disponible à la commande.
              </p>
            </div>

            <CdOrderForm
              productTitle="Le rythme des vacances / Toi le jazz"
              productKind="le single physique"
            />

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
