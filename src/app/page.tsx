import { Hero } from "@/components/hero/Hero";
import { RecentNews } from "@/components/home/RecentNews";
import { FeaturedReleases } from "@/components/home/FeaturedReleases";
import { TourDates } from "@/components/home/TourDates";

/**
 * Accueil (cf. §7.1) : hero 3D plein écran, puis empilement des sections
 * Actualités récentes · Sorties à la une · Dates.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <RecentNews />
      <FeaturedReleases />
      <TourDates />
    </>
  );
}
