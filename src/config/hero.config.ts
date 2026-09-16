import { featuredReleases } from "@/config/placeholder-content";

/**
 * Configuration du hero 3D / carousel (cf. §6.5 et annexe §13).
 * Chaque entrée du tableau `slides` décrit un bloc du carousel.
 *
 * À terme, cette configuration sera pilotée depuis le CMS headless
 * (cf. §10 - "POINT CLÉ"). Les valeurs ci-dessous sont des
 * emplacements de démonstration, à remplacer par les sorties réelles
 * de David Swann.
 */

export type HeroSlide = {
  id: string;
  title: string; // affiché en H1
  eyebrow?: string; // sur-titre (défaut : "Dernières sorties")
  cover?: string; // URL de la pochette / photo (texture du mesh flottant)
  aspect?: number; // largeur/hauteur du visuel (1 = carré, < 1 = portrait)
  offsetX?: number; // décalage horizontal du visuel (unités 3D, défaut 0 = centré)
  brightness?: number; // luminosité du visuel (1 = tel quel ; > 1 = éclairci)
  smokeColor: string; // couleur de la fumée du bloc
  accentLight?: string; // couleur de la lumière d'accent (option)
  spotifyEmbedUrl?: string;
  cta: {
    label: string;
    href: string; // page album interne OU lien streaming
    external?: boolean;
  };
  model?: string; // GLB optionnel propre au slide
  active: boolean;
  order: number;
};

export type HeroConfig = {
  autoplay: boolean;
  autoplayDelay: number; // ms
  loop: boolean;
  parallax: boolean; // désactivé sur mobile / reduced-motion
  bloom: { intensity: number };
  slides: HeroSlide[];
};

const releaseColors = [
  "#FF3C9E",
  "#9D3CFF",
  "#3C8CFF",
  "#FFB13C",
  "#00B8A9",
  "#E85D75",
  "#7A6CFF",
  "#F08A5D",
] as const;

const sameYearCarouselOrder = new Map([
  ["insomnies", 0],
  ["insomnies-remix-club-edit", 1],
  ["le-rythme-des-vacances-re-edit-2025", 0],
  ["tu-habites-mes-reves-re-edit-2025", 1],
]);

const releasesInCarouselOrder = featuredReleases
  .map((release, position) => ({ release, position }))
  .sort(
    (a, b) =>
      Number(a.release.year) - Number(b.release.year) ||
      (sameYearCarouselOrder.get(a.release.slug) ?? a.position) -
        (sameYearCarouselOrder.get(b.release.slug) ?? b.position) ||
      a.position - b.position,
  )
  .map(({ release }) => release);

const releaseSlides: HeroSlide[] = releasesInCarouselOrder
  .map((release, index) => ({
    id: `release-${release.slug}`,
    eyebrow: `${release.type} · ${release.year}`,
    title: release.title,
    cover: release.cover,
    offsetX: 1.7,
    smokeColor: releaseColors[index % releaseColors.length],
    cta: { label: "Découvrir", href: "/music" },
    active: true,
    order: index + 1,
  }));

export const hero: HeroConfig = {
  autoplay: true,
  autoplayDelay: 7000,
  loop: true,
  parallax: true,
  bloom: { intensity: 0.6 },
  slides: [
    {
      id: "s0",
      eyebrow: "L'artiste",
      title: "David Swann",
      cover: "/photos/david-portrait.jpg",
      aspect: 768 / 1154, // portrait
      offsetX: 2.5, // centrée entre le nom et la flèche droite
      brightness: 1.55, // éclaircie pour rester nette devant la fumée
      smokeColor: "#F2F2F4", // fumée blanche
      cta: { label: "Biographie", href: "/biographie" },
      active: true,
      order: 0,
    },
    ...releaseSlides,
  ],
};

export const activeSlides = hero.slides
  .filter((s) => s.active)
  .sort((a, b) => a.order - b.order);
