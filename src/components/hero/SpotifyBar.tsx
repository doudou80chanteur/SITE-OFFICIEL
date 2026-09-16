import { site } from "@/config/site.config";
import type { HeroSlide } from "@/config/hero.config";

/**
 * Barre de lecteur Spotify en bas du hero (cf. §7.1 - bloc lecteur).
 * Reprend le principe de la barre basse du site de référence : un bandeau
 * centré, discret, permettant d'écouter l'artiste sans quitter la page.
 */
type SpotifyBarProps = {
  slide: HeroSlide;
};

export function SpotifyBar({ slide }: SpotifyBarProps) {
  const playerUrl =
    slide.spotifyEmbedUrl ??
    `https://open.spotify.com/embed/artist/${site.spotifyArtistId}?utm_source=generator&theme=0`;

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex justify-center px-gutter pb-5">
      <div className="pointer-events-auto w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-md">
        <iframe
          key={playerUrl}
          title={`Lecteur Spotify - ${slide.title}`}
          src={playerUrl}
          width="100%"
          height={80}
          frameBorder={0}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ display: "block", colorScheme: "normal" }}
        />
      </div>
    </div>
  );
}
