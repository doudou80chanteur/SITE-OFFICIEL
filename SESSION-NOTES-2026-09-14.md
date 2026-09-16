# Notes de travail — 14 septembre 2026

Ce fichier conserve les décisions validées pendant la session afin de pouvoir reprendre le travail sans dépendre de l'historique de conversation.

## Spectacles

- **Live Tour 80** utilise `/photos/live-tour-80-photo-originale-satin-blanc.png` : veste blanche satinée et t-shirt blanc satiné, à partir de la photo originale fournie.
- **Soleil 80's** utilise `/photos/soleil-80-tshirt-satine-bleu-lagon.png` : veste blanche et t-shirt satiné bleu lagon.
- Les variantes précédentes sont conservées dans `public/photos/`.

## Musique

- Doublons de pochettes retirés de l'affichage.
- Discographie validée :
  - David SWANN — EP — 2012
  - Exquise Marquise (Remix Officiel) — Single — 2015
  - Mes Années 80 — Album — 2018
  - Le Rythme des Vacances — Single — 2019
  - Tu habites mes rêves — Single — 2020
  - Insomnies — Single — 2023
  - Insomnies (Remix Club Edit) — Single — 2023, placé après Insomnies
  - Elodie — Single — 2024
  - Tu habites mes rêves (Re-Edit 2025) — Single — 2025
  - Le Rythme des Vacances (Re-Edit 2025) — Single — 2025
- Sur la page Musique, le titre complet reste visible, l'année est alignée avec le titre et le type apparaît dessous.

## Carrousel d'accueil

- Contient toutes les sorties, y compris l'album Mes Années 80 et l'EP David SWANN.
- Flèche droite : ordre chronologique croissant, de 2012 à 2025.
- Pour 2023 : Insomnies, puis Insomnies Remix.
- Pour 2025 : Le Rythme des Vacances Re-Edit, puis Tu habites mes rêves Re-Edit.
- Titres réduits et pochettes légèrement rapprochées du centre sur ordinateur ; portrait d'introduction inchangé.

## Concerts

- Les dates fictives ont été remplacées par les dates communiquées, classées chronologiquement de septembre 2026 à décembre 2027.
- Mentions particulières : Poix-Terron le 3 octobre 2026 — Live Tour 80 ; Boulogne-sur-Mer le 5 septembre 2026 — Live Tour 80 ; Saint-Léger le 18 octobre 2026 — Plateau d'artistes solidaire ; Bertrangles le 24 octobre 2026 — Événement privé ; Signy-le-Petit le 8 décembre 2026 — REPAS C.C.A.S.
- L'affiche `/support/concert-poix-terron-3-octobre-2026.jpg` apparaît uniquement dans le détail de Poix-Terron du 3 octobre 2026.
- Les pages de détail calculent désormais l'année depuis la date, ce qui prend en charge 2027.

## Environnement local

- Node.js 24.18.0 et npm 11.16.0 ont été installés.
- Le serveur Next.js utilise `http://127.0.0.1:3000`.
