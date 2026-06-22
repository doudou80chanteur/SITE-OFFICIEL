/**
 * Contenu de la page Biographie de David Swann.
 * Texte fourni par l'artiste - à éditer ici (à terme, via le CMS, cf. §10).
 */

// Artistes pour lesquels David Swann a assuré les premières parties
export const firstParts: string[] = [
  "Michel Delpech",
  "Herbert Léonard",
  "Émile et Image",
  "Pascal Danel",
  "Christian Delagrange",
  "Eve Angeli",
  "Les Forbans",
  "Laam",
  "Ottawan",
  "Claude Barzotti",
];

export type DiscographyEntry = {
  year: string;
  title: string;
  description: string;
};

export const discography: DiscographyEntry[] = [
  {
    year: "2008",
    title: "Album « Florilège »",
    description: "12 titres mêlant compositions et reprises.",
  },
  {
    year: "2012",
    title: "Maxi-Single « David Swann » (4 titres)",
    description:
      "« Exquise Marquise », « Disco », « Toutes..Toutes..Toutes.. », « Une pluie de soleil ». L'époque des premiers clips vidéos : « Disco » s'affiche jusqu'en Chine sur le réseau « Youku », le cousin de YouTube.",
  },
  {
    year: "2015",
    title: "Remix « dance-floor » d'« Exquise Marquise »",
    description:
      "Édité sous le label « NJOY-RECORDS » d'Alan Pride, classé 15 jours de suite dans le Top 50 des diffusions médias chez « YACAST-MuziCenter ».",
  },
  {
    year: "2018",
    title: "Single « Chrysalide »",
    description: "Dance-music.",
  },
  {
    year: "2019",
    title: "Single « Le Rythme des Vacances »",
    description: "Variétés-soleil.",
  },
  {
    year: "2020",
    title: "Single « Tu habites mes Rêves »",
    description: "Variétés-funk.",
  },
  {
    year: "2023",
    title: "Single « Insomnies »",
    description: "Variétés-funk-dance.",
  },
  {
    year: "Hiver 2023",
    title: "« Insomnies » - Remix Club Edit + Extended",
    description: "Électro deep-house.",
  },
  {
    year: "2024",
    title: "Single « Élodie » feat. DIVAA",
    description: "Variétés reggae-pop.",
  },
  {
    year: "2025",
    title: "Single « Le Rythme des Vacances » (Re-Edit 2025)",
    description: "Variétés-soleil.",
  },
  {
    year: "Hiver 2025",
    title: "Single « Tu habites mes Rêves » (Re-Edit 2025)",
    description: "Variétés-funky-pop.",
  },
];
