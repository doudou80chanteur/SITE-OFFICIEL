import type { HeroSlide } from "@/config/hero.config";

/**
 * Visuel statique du hero (CSS pur), sans WebGL.
 * Deux usages :
 *  - poster de chargement progressif affiché avant le "réveil" de la
 *    scène WebGL (cf. §6.7) ;
 *  - fallback obligatoire si WebGL est indisponible (cf. §6.8) : fond
 *    dégradé à la couleur du slide + pochette + (titre/CTA/flèches via
 *    l'overlay HTML qui reste fonctionnel).
 */
export function HeroBackdrop({ slide }: { slide: HeroSlide }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      {/* Dégradé radial à la couleur de fumée du slide */}
      <div
        className="absolute inset-0 transition-[background] duration-700"
        style={{
          background: `radial-gradient(60% 55% at 50% 45%, ${slide.smokeColor}55 0%, ${slide.smokeColor}18 35%, transparent 70%)`,
        }}
      />
      {/* Pochette flottante (statique) - vraie image si fournie */}
      <div
        className={
          "absolute inset-0 flex items-center " +
          (slide.offsetX
            ? "justify-center md:justify-end md:pr-[12%]"
            : "justify-center")
        }
      >
        {slide.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={slide.cover}
            alt={`Visuel - ${slide.title}`}
            className="w-[min(44vw,340px)] rounded-sm object-cover shadow-2xl"
            style={{
              aspectRatio: String(slide.aspect ?? 1),
              filter: slide.brightness ? `brightness(${slide.brightness})` : undefined,
            }}
          />
        ) : (
          <div
            className="aspect-square w-[min(46vw,360px)] rounded-sm border border-white/15 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${slide.smokeColor}cc 0%, #0b0b0b 60%)`,
            }}
            aria-hidden="true"
          >
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
              <span
                className="h-7 w-7 rounded-full"
                style={{ background: slide.smokeColor }}
              />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/70">
                Pochette
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/40">
                à fournir
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
