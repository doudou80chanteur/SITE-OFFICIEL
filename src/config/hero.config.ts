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
    {
      id: "s1",
      title: "Insomnies",
      cover: "/covers/insomnies.jpg",
      smokeColor: "#FF3C9E",
      cta: {
        label: "Écouter",
        href: "https://open.spotify.com/album/5UFB7CPlPl3ZoQzNFylOnc",
        external: true,
      },
      active: true,
      order: 1,
    },
    {
      id: "s2",
      title: "Exquise Marquise",
      cover: "/covers/exquise-marquise.jpg",
      smokeColor: "#9D3CFF",
      cta: {
        label: "Écouter",
        href: "https://open.spotify.com/album/3UFWhY7RnrA5VkNEjhqUvZ",
        external: true,
      },
      active: true,
      order: 2,
    },
    {
      id: "s3",
      title: "David Swann",
      cover: "/covers/david-swann-ep.jpg",
      smokeColor: "#FF9E3C",
      cta: {
        label: "Écouter",
        href: "https://open.spotify.com/album/6ISJwQtjMiY1XLP3sCLvqo",
        external: true,
      },
      active: true,
      order: 3,
    },
    // Slides suivants : désactivés tant que les visuels ne sont pas fournis.
    {
      id: "s4",
      title: "Sortie 04",
      smokeColor: "#FFB13C",
      cta: { label: "Pré-enregistrer", href: "/music/sortie-04" },
      active: false,
      order: 4,
    },
    {
      id: "s5",
      title: "Sortie 05",
      smokeColor: "#3C8CFF",
      cta: { label: "Écouter", href: "/music/sortie-05" },
      active: false,
      order: 5,
    },
  ],
};

export const activeSlides = hero.slides
  .filter((s) => s.active)
  .sort((a, b) => a.order - b.order);
