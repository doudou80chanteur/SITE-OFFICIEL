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
            ? slide.id.startsWith("release-")
              ? "justify-center md:justify-end md:pr-[18%]"
              : "justify-center md:justify-end md:pr-[12%]"
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
          // Fallback static image when no cover is provided
          // Ensure you copy the generated image to public/hero_fallback.png
          <img
            src="/hero_fallback.png"
            alt="Fallback hero image"
            className="w-[min(44vw,340px)] rounded-sm object-cover shadow-2xl"
            style={{
              aspectRatio: String(slide.aspect ?? 1),
              filter: slide.brightness ? `brightness(${slide.brightness})` : undefined,
            }}
          />
        )}
      </div>
    </div>
  );
}
