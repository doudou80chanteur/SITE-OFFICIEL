/**
 * Articles du blog (section « Actualités »).
 * Contenu réel, éditable ici (à terme via le CMS, cf. §10).
 *
 * Le corps de l'article est décrit en blocs typés ; les champs texte
 * acceptent un markdown léger (**gras**, *italique*, [lien](href)).
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; label: string; text: string }
  | { type: "quote"; text: string }
  | { type: "figure"; src: string; alt: string; caption?: string };

export type FaqItem = { question: string; answer: string };

export type BlogArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  author: string;
  category: string;
  keywords: string[];
  cover: string;
  coverAlt: string;
  body: ArticleBlock[];
  faq: FaqItem[];
};

export const articles: BlogArticle[] = [
  {
    slug: "news-01",
    title:
      "Artistes français des années 80 : le guide d'un interprète",
    metaTitle: "Artistes français années 80 : le guide complet",
    metaDescription:
      "Goldman, Balavoine, Émile et Image, Mylène Farmer… Le guide des artistes français des années 80 par David Swann, chanteur qui fait revivre leurs tubes.",
    excerpt:
      "Goldman, Balavoine, Émile et Image, Mylène Farmer… Le tour d'horizon vécu des artistes français des années 80, par un interprète qui a côtoyé plusieurs d'entre eux.",
    date: "2026-07-02",
    author: "David Swann",
    category: "Rétrospective",
    keywords: [
      "artistes français années 80",
      "chanteurs français des années 80",
      "tubes français 80's",
      "variété française années 80",
      "groupes français années 80",
      "chanson française années 80",
    ],
    cover: "/photos/DSC7062-scaled-1-768x1154.jpg",
    coverAlt:
      "David Swann interprète les tubes des artistes français des années 80 en concert",
    body: [
      {
        type: "p",
        text: "Il suffit des premières notes des *Démons de minuit* pour qu'une salle entière se lève. Après plus de quinze ans à interpréter les **artistes français des années 80** sur les scènes des Hauts-de-France — et à avoir assuré les premières parties de plusieurs d'entre eux — j'ai compris une chose : ces chansons ne vieillissent pas, elles se transmettent.",
      },
      {
        type: "p",
        text: "Vous cherchez à (re)découvrir les grands **chanteurs français des années 80** et leurs tubes ? Ce guide vous propose un tour d'horizon vécu de cette décennie flamboyante, style par style — avec le regard de quelqu'un qui monte sur scène chaque week-end pour faire revivre ce répertoire.",
      },
      {
        type: "h2",
        text: "Pourquoi les années 80 restent l'âge d'or de la variété française",
        id: "age-dor",
      },
      {
        type: "p",
        text: "Les années 80 marquent un tournant dans la **musique française**. Arrivée des synthétiseurs et des boîtes à rythmes, explosion du clip vidéo, radios libres : la **variété française des années 80** devient plus rythmée, plus visuelle, plus universelle.",
      },
      {
        type: "p",
        text: "Les mélodies sont taillées pour durer et les textes — signés Goldman, Berger ou Balavoine — portent une émotion qui traverse les époques. C'est ce qui explique qu'aujourd'hui encore, un spectacle « spécial années 80 » remplit les salles : le public ne vient pas seulement écouter, il vient retrouver sa jeunesse.",
      },
      {
        type: "callout",
        label: "À retenir",
        text: "Les années 80 combinent des mélodies imparables et une charge émotionnelle intacte — d'où leur puissance intergénérationnelle sur scène, quarante ans plus tard.",
      },
      {
        type: "h2",
        text: "Les grandes plumes : Goldman, Berger, Balavoine",
        id: "grandes-plumes",
      },
      {
        type: "p",
        text: "Impossible de parler des **artistes français des années 80** sans commencer par les auteurs-compositeurs qui ont écrit la bande-son de toute une génération.",
      },
      { type: "h3", text: "Jean-Jacques Goldman" },
      {
        type: "p",
        text: "Figure emblématique de la décennie, Jean-Jacques Goldman enchaîne les tubes : *Quand la musique est bonne*, *Je te donne*, *Envole-moi*, *Encore un matin*. Ses compositions restent parmi les plus reprises sur scène — et parmi les plus exigeantes à interpréter, croyez-moi.",
      },
      { type: "h3", text: "Michel Berger" },
      {
        type: "p",
        text: "Auteur de *Chanteur*, de *La Groupie du pianiste* et de l'opéra-rock *Starmania*, Michel Berger a signé des mélodies d'une élégance rare. Son écriture au piano a durablement influencé la **chanson française des années 80**.",
      },
      { type: "h3", text: "Daniel Balavoine" },
      {
        type: "p",
        text: "*Mon fils, ma bataille*, *L'Aziza*, *Le Chanteur*… Balavoine incarnait l'urgence et la sincérité. Dans mon répertoire, ses titres sont ceux qui provoquent le plus d'émotion : un silence, puis une salle qui reprend en chœur.",
      },
      {
        type: "h2",
        text: "Les voix rock et new wave : Téléphone, Indochine, Bashung",
        id: "rock-new-wave",
      },
      {
        type: "p",
        text: "Les années 80, ce n'est pas que la variété. C'est aussi une scène rock et new wave puissante. **Téléphone** enflamme les stades (*Un autre monde*, *Cendrillon*) et reste le groupe de rock français le plus populaire de la décennie.",
      },
      {
        type: "p",
        text: "**Indochine** impose une esthétique new wave (*L'Aventurier*, *Canary Bay*) qui séduit encore les jeunes générations. **Alain Bashung**, lui, perce en 1981 avec *Vertige de l'amour*. Aux côtés de **Renaud** — voix populaire et engagée (*Mistral gagnant*, *Laisse béton*) —, ces artistes rappellent la diversité des **groupes français des années 80**.",
      },
      {
        type: "callout",
        label: "À retenir",
        text: "Réduire les années 80 à la « variété » serait une erreur. Le rock (Téléphone) et la new wave (Indochine, Bashung) forment un pan essentiel du patrimoine.",
      },
      {
        type: "h2",
        text: "Les icônes pop et les grandes voix féminines",
        id: "icones-pop",
      },
      {
        type: "p",
        text: "La décennie voit émerger des icônes pop au style affirmé. **Mylène Farmer** fait son apparition avec *Libertine* (1986) et impose un univers unique, entre voix douce et textes provocateurs. **France Gall**, portée par les compositions de Michel Berger (*Résiste*, *Ella, elle l'a*), signe certains des refrains les plus fédérateurs de l'époque. À leurs côtés, **Marc Lavoine**, **Patrick Bruel** ou **Pierre Bachelet** (*Les Corons*) complètent ce panorama de la **musique française des années 80**.",
      },
      {
        type: "h2",
        text: "Les tubes festifs et disco : Émile et Image, Ottawan, Les Forbans",
        id: "tubes-festifs",
      },
      {
        type: "p",
        text: "C'est sur ce registre que j'ai le plus de souvenirs personnels — et le plus d'anecdotes de scène.",
      },
      {
        type: "ul",
        items: [
          "**Émile et Image** — *Les Démons de minuit* (1986) est peut-être **le** tube de soirée par excellence. Dès l'intro, plus personne ne reste assis.",
          "**Ottawan** — *T'es OK*, *D.I.S.C.O.* : le disco irrésistible qui transforme un concert en piste de danse.",
          "**Les Forbans** — *Chante* : le rock'n'roll festif dans sa version la plus joyeuse.",
        ],
      },
      {
        type: "p",
        text: "Ces morceaux sont des valeurs sûres, ceux qui font basculer une salle dans la fête collective.",
      },
      {
        type: "figure",
        src: "/photos/DSC7049-768x1154.jpg",
        alt: "David Swann, ambiance souvenirs et nostalgie des tubes français des années 80",
        caption: "Souvenirs & nostalgie : le répertoire des années 60, 70 et 80.",
      },
      {
        type: "h2",
        text: "Mon expérience aux côtés de ces artistes",
        id: "mon-experience",
      },
      {
        type: "callout",
        label: "L'avis de David Swann",
        text: "Ce que je vais écrire ici, je ne l'ai pas lu : je l'ai vécu, en coulisses et sur scène.",
      },
      {
        type: "p",
        text: "Au fil de mes tournées, j'ai eu la chance d'**assurer les premières parties** de plusieurs de ces artistes emblématiques.",
      },
      {
        type: "p",
        text: "En première partie d'**Émile et Image**, j'ai pu mesurer la mécanique redoutable des *Démons de minuit* : un refrain pensé pour la piste de danse, qui fonctionne à tous les coups. Avec **Herbert Léonard** (*Pour le plaisir*, 1981), j'ai vu à quel point une mélodie peut devenir un aimant intergénérationnel — les grands-parents la connaissent, les petits-enfants la reprennent.",
      },
      {
        type: "p",
        text: "J'ai aussi partagé l'affiche des **Forbans** et d'**Ottawan**, dont l'énergie festive confirme mon intuition : ces titres rassemblent le plus large public. Et avec **Michel Delpech** (*Le Loir-et-Cher*, *Pour un flirt*), pont vivant entre les années 70 et 80, j'ai appris la force des chansons-tableaux, tendres et populaires.",
      },
      {
        type: "h2",
        text: "Comment je fais revivre les années 80 sur scène",
        id: "sur-scene",
      },
      {
        type: "p",
        text: "Interpréter ces titres n'est pas une simple reprise. Après quatre ans et demi de formation à l'interprétation aux côtés de Youri Capello (maison Barclay), puis une master-class avec Michel Jonasz, j'aborde chaque chanson comme un rôle.",
      },
      {
        type: "p",
        text: "L'objectif : retrouver l'émotion d'origine tout en y mettant ma propre couleur. C'est ce respect du répertoire qui, je crois, fait la différence entre une reprise et une véritable transmission de la **chanson française des années 80**.",
      },
      {
        type: "p",
        text: "*Envie de voir ces tubes interprétés en concert ? Retrouvez [mes dates de tournée](/appearances) dans les Hauts-de-France.*",
      },
      { type: "h2", text: "Conclusion", id: "conclusion" },
      {
        type: "p",
        text: "Des grandes plumes (Goldman, Berger, Balavoine) au rock (Téléphone) en passant par les tubes festifs (Émile et Image, Ottawan), les **artistes français des années 80** ont laissé un héritage d'une richesse rare. Un héritage que je fais vivre chaque semaine, sur scène, avec le respect qu'il mérite.",
      },
      {
        type: "p",
        text: "Si cette époque vous fait vibrer autant que moi, la meilleure façon de la retrouver, c'est encore de l'écouter.",
      },
    ],
    faq: [
      {
        question:
          "Qui est l'artiste français le plus emblématique des années 80 ?",
        answer:
          "Jean-Jacques Goldman est souvent cité comme la figure la plus emblématique des années 80, grâce à des tubes intergénérationnels comme « Quand la musique est bonne » ou « Je te donne ». Balavoine, Berger et France Gall complètent ce panthéon.",
      },
      {
        question: "Quels sont les plus grands tubes français des années 80 ?",
        answer:
          "Parmi les plus repris : « Les Démons de minuit » (Émile et Image), « Pour le plaisir » (Herbert Léonard), « Résiste » (France Gall), « L'Aventurier » (Indochine) et « Quand la musique est bonne » (Jean-Jacques Goldman). Ce sont des valeurs sûres en concert.",
      },
      {
        question: "Quels groupes français ont marqué les années 80 ?",
        answer:
          "Téléphone (rock), Indochine (new wave), Les Forbans (rock'n'roll festif) et Ottawan (disco) figurent parmi les groupes français les plus marquants de la décennie, chacun dans un style différent.",
      },
      {
        question: "Où réécouter les tubes des années 80 aujourd'hui ?",
        answer:
          "Ils sont disponibles sur toutes les plateformes de streaming. David Swann réinterprète également plusieurs de ces classiques dans son propre répertoire, à écouter sur la page Musique du site.",
      },
    ],
  },
];

/** Articles triés du plus récent au plus ancien. */
export const articlesByDate = [...articles].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getArticle(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}
