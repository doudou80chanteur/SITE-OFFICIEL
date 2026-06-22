/**
 * Spectacles de David Swann (cf. page « Mes spectacles »).
 * Texte fourni par l'artiste. Les liens pointent pour l'instant vers les
 * pages existantes - à internaliser plus tard en pages dédiées si besoin.
 */

export type Show = {
  id: string;
  name: string;
  tagline?: string; // intitulé du spectacle
  description: string;
  color: string; // teinte d'accent (ambiance du spectacle)
  href: string;
};

export const shows: Show[] = [
  {
    id: "annees-80",
    name: "Les Années 80",
    tagline: "Spectacle Live Tour 80",
    description:
      "Tous les tubes légendaires qui ont enflammé les pistes de danse et qui résonnent encore dans nos têtes ! L'effervescence, les paillettes ! C'est le moment de faire la fête et de danser au rythme de cette décennie inoubliable !",
    color: "#FF3C9E",
    href: "https://david-swann.com/?page_id=77",
  },
  {
    id: "annees-60-70",
    name: "Les Années 60's & 70's",
    tagline: "Spectacle Souvenirs et Nostalgie",
    description:
      "Retrouvez tous vos succès préférés où se mêlent les refrains populaires de la grande vague de ces années « Juke-Box » ! Un moment de convivialité et de partage, où tout le public chante en chœur !",
    color: "#FFB13C",
    href: "https://david-swann.com/?page_id=138",
  },
  {
    id: "soleil-80",
    name: "Soleil 80's",
    tagline: "Spectacle estival",
    description:
      "C'est l'été, vive les vacances ! Sur la plage, venez danser sur le rythme enflammé des tubes légendaires de la décennie 80…",
    color: "#3C8CFF",
    href: "https://david-swann.com/?page_id=170",
  },
];
