"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { HeroSlide } from "@/config/hero.config";

/**
 * Surcouche HTML au-dessus du canvas (cf. §6.2) : titre H1 net et
 * sélectionnable, CTA, flèches précédent/suivant et indicateurs de
 * position. Tout le texte reste en HTML (accessible, lisible par les
 * lecteurs d'écran).
 */

type HeroOverlayProps = {
  slide: HeroSlide;
  index: number;
  count: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
};

export function HeroOverlay({
  slide,
  index,
  count,
  onPrev,
  onNext,
  onSelect,
}: HeroOverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {/* Scrim pour garantir la lisibilité du texte (zones de sécurité §6.6) */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-ink/70 to-transparent" />

      {/* Contenu du slide */}
      <div className="container-shell relative flex h-full flex-col justify-center pb-28 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="eyebrow mb-5">{slide.eyebrow ?? "Dernières sorties"}</p>
            <h1 className="text-[clamp(3rem,12vw,9.5rem)] text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]">
              {slide.title}
            </h1>
            <div className="pointer-events-auto mt-9">
              <Link
                href={slide.cta.href}
                className="btn-listen"
                {...(slide.cta.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {slide.cta.label}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Flèches de navigation - à gauche et à droite (cf. §6.5) */}
      <button
        type="button"
        aria-label="Sortie précédente"
        onClick={onPrev}
        className="pointer-events-auto absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/20 text-2xl text-white/80 backdrop-blur-sm transition hover:border-white/60 hover:text-white sm:left-6"
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        aria-label="Sortie suivante"
        onClick={onNext}
        className="pointer-events-auto absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/20 text-2xl text-white/80 backdrop-blur-sm transition hover:border-white/60 hover:text-white sm:right-6"
      >
        <span aria-hidden="true">›</span>
      </button>

      {/* Indicateurs de position (points) */}
      <div
        className="pointer-events-auto absolute bottom-32 left-1/2 flex -translate-x-1/2 items-center gap-3"
        role="tablist"
        aria-label="Sélection de la sortie"
      >
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Aller à la sortie ${i + 1}`}
            onClick={() => onSelect(i)}
            className={
              "h-1.5 rounded-full transition-all duration-300 " +
              (i === index
                ? "w-8 bg-white"
                : "w-3 bg-white/35 hover:bg-white/60")
            }
          />
        ))}
      </div>
    </div>
  );
}
