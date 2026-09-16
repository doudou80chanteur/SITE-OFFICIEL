import type { Metadata } from "next";
import Image from "next/image";
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
            className="group grid items-center gap-8 border-t border-line py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-16"
          >
            {/* Visuel - alterné gauche/droite */}
            <div
              className={
                "relative aspect-[4/5] min-h-[520px] overflow-hidden rounded-sm md:aspect-[5/6] lg:min-h-[640px] " +
                (i % 2 === 1 ? "lg:order-2" : "")
              }
              style={{
                background: `linear-gradient(140deg, ${show.color}99 0%, #0b0b0b 70%)`,
              }}
            >
              {show.image ? (
                <>
                  <Image
                    src={show.image}
                    alt={show.imageAlt ?? show.name}
                    fill
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                    style={{ objectPosition: show.imagePosition ?? "50% 18%" }}
                    priority={i === 0}
                  />
                  <div
                    className="absolute inset-0 opacity-50 mix-blend-screen"
                    style={{
                      background: `linear-gradient(140deg, ${show.color}66 0%, transparent 62%)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                </>
              ) : (
                <div className="absolute inset-0 grid place-items-center text-xs uppercase tracking-[0.2em] text-content/40">
                  Visuel - à fournir
                </div>
              )}
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
              {show.videoUrl && (
                <div className="mt-7 max-w-xl rounded-sm border border-line bg-card p-4">
                  <p className="eyebrow mb-3 font-sans normal-case">
                    {show.videoTitle ?? "Teaser vidéo"}
                  </p>
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-video w-full rounded-sm bg-black"
                  >
                    <source src={show.videoUrl} type="video/mp4" />
                    Votre navigateur ne prend pas en charge le lecteur vidéo.
                  </video>
                </div>
              )}
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
