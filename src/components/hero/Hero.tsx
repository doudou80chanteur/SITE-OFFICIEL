"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { hero, activeSlides } from "@/config/hero.config";
import {
  isWebGLAvailable,
  usePrefersReducedMotion,
  useIsMobile,
} from "@/lib/utils";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroOverlay } from "./HeroOverlay";
import { SpotifyBar } from "./SpotifyBar";

// La scène WebGL n'est chargée que côté client (chargement progressif §6.7)
const HeroScene = dynamic(
  () => import("./HeroScene").then((m) => m.HeroScene),
  { ssr: false },
);

const slides = activeSlides;

export function Hero() {
  const [active, setActive] = useState(0);
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [sceneReady, setSceneReady] = useState(false);
  const [inView, setInView] = useState(true);
  const [interacting, setInteracting] = useState(false);

  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  const count = slides.length;
  const go = useCallback(
    (dir: number) => setActive((i) => (i + dir + count) % count),
    [count],
  );
  const next = useCallback(() => go(1), [go]);
  const prev = useCallback(() => go(-1), [go]);

  // Détection WebGL + réveil de la scène après montage (poster d'abord)
  useEffect(() => {
    const ok = isWebGLAvailable();
    setWebgl(ok);
    if (ok) {
      const id = window.setTimeout(() => setSceneReady(true), 120);
      return () => window.clearTimeout(id);
    }
  }, []);

  // Pause du rendu quand le hero n'est pas visible (cf. §6.7)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-play (cf. §6.5) - en pause au survol/interaction, hors écran,
  // ou si l'utilisateur préfère les animations réduites.
  useEffect(() => {
    if (!hero.autoplay || reducedMotion || interacting || !inView) return;
    const id = window.setInterval(next, hero.autoplayDelay);
    return () => window.clearInterval(id);
  }, [next, reducedMotion, interacting, inView]);

  // Navigation clavier (cf. §8)
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  // Swipe tactile (cf. §6.5)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setInteracting(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStartX.current = null;
    setInteracting(false);
  };

  const animate = !reducedMotion;
  const parallax = hero.parallax && !isMobile && !reducedMotion;
  const showScene = webgl === true && sceneReady;

  return (
    <section
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Sorties à la une de David Swann"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink outline-none"
    >
      {/* Poster statique / fallback (toujours présent en dessous) */}
      <HeroBackdrop slide={slides[active]} />

      {/* Scène WebGL au-dessus du poster une fois prête */}
      {showScene && (
        <div className="absolute inset-0 z-10 animate-[fade-up_0.8s_ease]">
          <HeroScene
            slides={slides}
            active={active}
            parallax={parallax}
            animate={animate}
            bloomIntensity={hero.bloom.intensity}
            paused={!inView}
            isMobile={isMobile}
          />
        </div>
      )}

      {/* Overlay HTML : titre, CTA, flèches, points */}
      <HeroOverlay
        slide={slides[active]}
        index={active}
        count={count}
        onPrev={prev}
        onNext={next}
        onSelect={setActive}
      />

      {/* Barre de lecteur Spotify en bas du hero */}
      <SpotifyBar />
    </section>
  );
}
