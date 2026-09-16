# Site officiel - DAVID SWANN

Trame de base du site d'artiste (réf. projet **DSWANN-WEB-01**), centrée sur la
page d'accueil et le **hero 3D immersif** (fumée animée multicolore, pochette
flottante, carousel). Conforme à la stack et au design imposés par le cahier des
charges.

## Stack (cf. §3 du cahier des charges)

| Couche | Techno |
| --- | --- |
| Framework | Next.js 14 (App Router) · React 18 · TypeScript |
| Rendu 3D | React Three Fiber + Three.js + @react-three/drei |
| Post-processing | @react-three/postprocessing (bloom / vignette) |
| Animations UI | Framer Motion |
| Styles | Tailwind CSS |
| Polices | Anton (display) + Inter (corps), auto-hébergées via `next/font` |

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Ce qui est en place

- **Hero 3D** ([src/components/hero](src/components/hero)) : shader de fumée
  recréé (fbm + domain warping) teinté par slide, pochette flottante
  (lévitation + parallaxe souris), carousel (flèches, points, swipe, autoplay,
  boucle, clavier), bloom, **fallback statique** si WebGL indisponible (§6.8),
  chargement progressif (poster d'abord), respect de `prefers-reduced-motion`,
  cap du `devicePixelRatio` et pause hors écran (§6.7).
- **Gabarit global** : header collant (transparent → sombre), menu plein écran
  mobile, recherche, footer en colonnes, pop-up newsletter RGPD.
- **Accueil** : sections Actualités récentes · Sorties à la une · Dates.
- **Toutes les routes** du périmètre (§2) en trame : `/news`, `/news/[slug]`,
  `/music`, `/music/[slug]`, `/campaigns`, `/appearances`, `/appearances/[slug]`,
  `/contact` (formulaire), `/privacy-policy`.
- **SEO de base** : métadonnées par page, `robots.ts`, `sitemap.ts`, skip-link,
  focus visibles.

## Emplacements à compléter

Toutes les données propres à David Swann sont des **placeholders** marqués
`// TODO` :

- [src/config/hero.config.ts](src/config/hero.config.ts) - slides du carousel
  (titres, pochettes, couleurs de fumée, CTA).
- [src/config/site.config.ts](src/config/site.config.ts) - liens réseaux, shop, URL.
- [src/config/placeholder-content.ts](src/config/placeholder-content.ts) - news,
  sorties, dates de démonstration.
- Pochettes / visuels / textes à fournir (cf. §11). Les pochettes sont
  actuellement générées en placeholder ([src/lib/placeholderTexture.ts](src/lib/placeholderTexture.ts)).

## Étapes suivantes (hors trame de base)

- Branchement **CMS headless** (Sanity / Contentful / Strapi) pour piloter le
  carousel et les contenus (§10).
- **API route** de contact + service email (Resend / SendGrid) + hCaptcha (§7.8).
- Données structurées schema.org, analytics, optimisation `next/image` (§9).
- Modèles **GLB** propres (plaque + décor) compressés Draco/meshopt en
  remplacement de la plaque procédurale (§6.7).
