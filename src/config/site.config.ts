/**
 * Configuration globale du site.
 * Les valeurs marquées "// TODO" sont des emplacements à compléter
 * avec les informations propres à David Swann.
 */

export const site = {
  name: "DAVID SWANN",
  // TODO: URL de production définitive
  url: "https://davidswann.com",
  description:
    "Site officiel de David Swann - albums, actualités, dates de concerts et contact.",
  // TODO: lien externe vers la boutique (hébergée séparément, hors périmètre)
  shopUrl: "#",
  copyrightYear: 2026,
  // Profil Spotify de l'artiste (lecteur embarqué du hero, cf. §7.1)
  spotifyArtistId: "6KppqOibxtrpdqLOoHud2h",
};

export type NavLink = { label: string; href: string; external?: boolean };

// Navigation principale - utilisée dans le menu plein écran (cf. §5.2)
export const mainNav: NavLink[] = [
  { label: "Biographie", href: "/biographie" },
  { label: "Mes Spectacles", href: "/spectacles" },
  { label: "Musique", href: "/music" },
  { label: "Actualités", href: "/news" },
  { label: "Campagnes", href: "/campaigns" },
  { label: "Concerts", href: "/appearances" },
  { label: "Contact", href: "/contact" },
];

// Liens affichés de part et d'autre du logo dans le header (cf. §5.1).
export const navLeft: NavLink[] = [
  { label: "Biographie", href: "/biographie" },
  { label: "Mes Spectacles", href: "/spectacles" },
  { label: "Musique", href: "/music" },
];
export const navRight: NavLink[] = [
  { label: "Actualités", href: "/news" },
  { label: "Concerts", href: "/appearances" },
  { label: "Contact", href: "/contact" },
];

// Colonnes du footer (cf. §5.3)
export const footerNav = {
  quickLinks: [
    { label: "Biographie", href: "/biographie" },
    { label: "Actualités", href: "/news" },
    { label: "Contact", href: "/contact" },
    { label: "Confidentialité", href: "/privacy-policy" },
  ] as NavLink[],
  catalog: [
    { label: "Musique", href: "/music" },
    { label: "Concerts", href: "/appearances" },
    { label: "Campagnes", href: "/campaigns" },
  ] as NavLink[],
};

// Réseaux sociaux (cf. §5.3)
export const socials: NavLink[] = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC143wQ4KV4d0sDZxCTPj0xw",
    external: true,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/intl-fr/artist/6KppqOibxtrpdqLOoHud2h",
    external: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/dswannofficiel/",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/d.swannchanteur",
    external: true,
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/fr/artist/david-swann/290838438",
    external: true,
  },
  {
    label: "Deezer",
    href: "https://www.deezer.com/fr/artist/3792651",
    external: true,
  },
];
