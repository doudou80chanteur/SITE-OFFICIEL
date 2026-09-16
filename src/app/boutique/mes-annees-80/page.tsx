import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CdOrderForm } from "@/components/shop/CdOrderForm";

const tracks = [
  "Manureva",
  "Les yeux révolver",
  "T'as le look coco",
  "Femme que j'aime",
  "Dream in blue",
  "Joue pas",
  "Il est libre Max",
  "La gitane",
  "Le géant de papier",
  "Les divas du dancing",
  "Nice baie des Anges",
  "Stand the ghetto",
];

export const metadata: Metadata = {
  title: "Commander Mes Années 80",
  description:
    "Commander l'album physique Mes Années 80 de David Swann, édition CD avec frais de port inclus pour la France.",
};

export default function MesAnnees80ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Boutique"
        title="Commander Mes Années 80"
        intro="Album physique édité en CD. Tarif unitaire : 13,50 euros, frais de port inclus pour la France."
      />

      <section className="container-shell pb-24 pt-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="space-y-5">
            <div className="relative aspect-square overflow-hidden rounded-sm bg-card shadow-2xl">
              <Image
                src="/covers/mes-annees-80.jpg"
                alt="Pochette de l'album Mes Années 80 de David Swann"
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="rounded-sm border border-line bg-card p-5">
              <p className="eyebrow mb-2 font-sans normal-case">Prix CD</p>
              <p className="text-3xl font-semibold text-content">13,50 €</p>
              <p className="mt-2 text-sm text-muted">
                Frais de port inclus pour la France.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-4xl uppercase tracking-normal text-content md:text-5xl">
                Mes Années 80
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                Retrouvez les grands titres emblématiques des années 80 dans un
                album physique disponible à la commande.
              </p>
            </div>

            <CdOrderForm productTitle="Mes Années 80" productKind="l'album physique" />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-sm border border-line bg-card p-6">
                <h3 className="eyebrow mb-4 font-sans normal-case">
                  Informations de commande
                </h3>
                <ul className="space-y-3 text-sm leading-6 text-muted">
                  <li>Quantité au choix : 1 à 5 CD.</li>
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
                <h3 className="eyebrow mb-4 font-sans normal-case">Tracklist</h3>
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
