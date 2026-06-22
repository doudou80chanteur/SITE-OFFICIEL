/**
 * Contenu de démonstration (placeholder) pour visualiser la mise en page.
 * À remplacer par les données réelles, à terme servies par le CMS (cf. §10).
 * Les champs textuels sont volontairement génériques - emplacements vides.
 */

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // ISO
};

export type Release = {
  slug: string;
  title: string;
  year: string;
  type: "Album" | "Single" | "EP";
  cover: string; // pochette
  href: string; // lien d'écoute (Spotify)
  color: string; // teinte d'accent
};

export type Appearance = {
  slug: string;
  day: string;
  month: string;
  weekday: string;
  city: string;
  venue: string;
};

export const recentNews: NewsItem[] = [
  { slug: "news-01", title: "Titre de l'actualité 01", date: "2026-06-01" },
  { slug: "news-02", title: "Titre de l'actualité 02", date: "2026-05-20" },
  { slug: "news-03", title: "Titre de l'actualité 03", date: "2026-05-04" },
];

// Sorties à la une (reprend les vraies sorties du carousel)
export const featuredReleases: Release[] = [
  {
    slug: "insomnies",
    title: "Insomnies",
    year: "2023",
    type: "Single",
    cover: "/covers/insomnies.jpg",
    href: "https://open.spotify.com/album/5UFB7CPlPl3ZoQzNFylOnc",
    color: "#FF3C9E",
  },
  {
    slug: "exquise-marquise",
    title: "Exquise Marquise",
    year: "2015",
    type: "Single",
    cover: "/covers/exquise-marquise.jpg",
    href: "https://open.spotify.com/album/3UFWhY7RnrA5VkNEjhqUvZ",
    color: "#9D3CFF",
  },
  {
    slug: "david-swann",
    title: "David Swann",
    year: "2012",
    type: "EP",
    cover: "/covers/david-swann-ep.jpg",
    href: "https://open.spotify.com/album/6ISJwQtjMiY1XLP3sCLvqo",
    color: "#FF9E3C",
  },
];

export const upcomingDates: Appearance[] = [
  { slug: "date-01", day: "12", month: "JUIL", weekday: "Sam", city: "Ville", venue: "Salle / Festival" },
  { slug: "date-02", day: "19", month: "JUIL", weekday: "Sam", city: "Ville", venue: "Salle / Festival" },
  { slug: "date-03", day: "02", month: "AOÛT", weekday: "Dim", city: "Ville", venue: "Salle / Festival" },
];
