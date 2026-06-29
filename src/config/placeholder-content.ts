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
  date: string; // ISO yyyy-mm-dd (jour/mois/jour-de-semaine dérivés à l'affichage)
  city: string;
  region: string; // département (ex: "59") ou pays (ex: "Belgique")
  venue?: string; // salle / lieu précis quand connu
  note?: string; // ex: "LIVE TOUR 80", "Événement privé"
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

/**
 * Tournée 2026 « Souvenirs et Nostalgie » - dates réelles fournies par l'artiste.
 * Triées chronologiquement.
 */
export const upcomingDates: Appearance[] = [
  { slug: "estaimpuis-0808", date: "2026-08-08", city: "Estaimpuis", region: "Belgique", venue: "Haras des Chartreux", note: "LIVE TOUR 80" },
  { slug: "aix-noulette-0819", date: "2026-08-19", city: "Aix-Noulette", region: "62" },
  { slug: "solesmes-0826", date: "2026-08-26", city: "Solesmes", region: "59" },
  { slug: "soissons-0831", date: "2026-08-31", city: "Soissons", region: "02" },
  { slug: "nesle-0904", date: "2026-09-04", city: "Nesle", region: "80" },
  { slug: "wattignies-0917", date: "2026-09-17", city: "Wattignies", region: "59" },
  { slug: "machiennes-0918", date: "2026-09-18", city: "Machiennes", region: "59" },
  { slug: "sainghien-en-weppes-0924", date: "2026-09-24", city: "Sainghien-en-Weppes", region: "59" },
  { slug: "cambrai-0925", date: "2026-09-25", city: "Cambrai", region: "59" },
  { slug: "fere-en-tardenois-0929", date: "2026-09-29", city: "Fère-en-Tardenois", region: "02" },
  { slug: "crouy-en-thelle-0930", date: "2026-09-30", city: "Crouy-en-Thelle", region: "60" },
  { slug: "poix-terron-1003", date: "2026-10-03", city: "Poix-Terron", region: "08", note: "LIVE TOUR 80" },
  { slug: "oignies-1005", date: "2026-10-05", city: "Oignies", region: "59" },
  { slug: "crecy-en-ponthieu-1007", date: "2026-10-07", city: "Crécy-en-Ponthieu", region: "80" },
  { slug: "wasquehal-1008", date: "2026-10-08", city: "Wasquehal", region: "59" },
  { slug: "bavay-1009", date: "2026-10-09", city: "Bavay", region: "59" },
  { slug: "neuville-en-ferrain-1010", date: "2026-10-10", city: "Neuville-en-Ferrain", region: "59" },
  { slug: "bourbourg-1015", date: "2026-10-15", city: "Bourbourg", region: "59" },
  { slug: "tracy-le-mont-1016", date: "2026-10-16", city: "Tracy-le-Mont", region: "60" },
  { slug: "saint-leger-1018", date: "2026-10-18", city: "Saint-Léger", region: "Belgique", note: "Just'Elle - événement privé" },
  { slug: "solesmes-1021", date: "2026-10-21", city: "Solesmes", region: "59" },
  { slug: "beauvais-1022", date: "2026-10-22", city: "Beauvais", region: "60" },
  { slug: "bertrangles-1024", date: "2026-10-24", city: "Bertrangles", region: "80", note: "Événement privé" },
  { slug: "sallaumines-1027", date: "2026-10-27", city: "Sallaumines", region: "62" },
  { slug: "dreux-1028", date: "2026-10-28", city: "Dreux", region: "28" },
  { slug: "crecy-en-ponthieu-1119", date: "2026-11-19", city: "Crécy-en-Ponthieu", region: "80" },
  { slug: "gonnehem-1124", date: "2026-11-24", city: "Gonnehem", region: "62" },
  { slug: "esquelbecq-1126", date: "2026-11-26", city: "Esquelbecq", region: "59" },
  { slug: "signy-le-petit-1208", date: "2026-12-08", city: "Signy-le-Petit", region: "08", note: "Événement privé" },
  { slug: "beauvais-1217", date: "2026-12-17", city: "Beauvais", region: "60" },
  { slug: "crecy-en-ponthieu-1218", date: "2026-12-18", city: "Crécy-en-Ponthieu", region: "80" },
  { slug: "crouy-en-thelle-1230", date: "2026-12-30", city: "Crouy-en-Thelle", region: "60" },
];
