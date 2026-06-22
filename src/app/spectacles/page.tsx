import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { shows } from "@/config/shows";

export const metadata: Metadata = {
  title: "Mes spectacles",
  description:
    "Les spectacles de David Swann : Live Tour 80, Souvenirs et Nostalgie (60's-70's) et Soleil 80's. Un voyage dans les tubes des années 60 à 80.",
};

/** Mes spectacles - formules de show proposées par l'artiste. */
export default function SpectaclesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sur scène"
        title="Mes spectacles"
        intro="Plusieurs formules vous sont proposées afin de partager ensemble un moment chaleureux, de gaieté et de sourire, en chantant avec moi vos tubes préférés… !"
      />

      <section className="container-shell space-y-px pb-24 pt-12">
        {shows.map((show, i) => (
          <article
            key={show.id}
            className="group grid items-center gap-8 border-t border-line py-12 lg:grid-cols-2 lg:gap-16"
          >
            {/* Visuel - alterné gauche/droite */}
            <div
              className={
                "relative aspect-[4/3] overflow-hidden rounded-sm " +
                (i % 2 === 1 ? "lg:order-2" : "")
              }
              style={{
                background: `linear-gradient(140deg, ${show.color}99 0%, #0b0b0b 70%)`,
              }}
            >
              <div className="absolute inset-0 grid place-items-center text-xs uppercase tracking-[0.2em] text-content/40">
                Visuel - à fournir
              </div>
            </div>

            {/* Texte */}
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="flex items-center gap-4">
                <span
                  className="font-display text-2xl"
                  style={{ color: show.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {show.tagline && (
                  <span className="eyebrow">{show.tagline}</span>
                )}
              </div>
              <h2 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] text-content">
                {show.name}
              </h2>
              <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted">
                {show.description}
              </p>
              <Link
                href={show.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent mt-7"
              >
                Découvrir le spectacle
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Appel à réserver */}
      <section className="border-t border-line bg-card py-20">
        <div className="container-shell text-center">
          <h2 className="text-[clamp(1.8rem,5vw,3rem)] text-content">
            Envie de programmer un spectacle ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Gala, fête locale, événement privé ou festival : parlons de votre
            projet.
          </p>
          <Link href="/contact" className="btn-listen mt-8">
            Demander une date
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
