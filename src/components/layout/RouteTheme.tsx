"use client";

import { usePathname } from "next/navigation";
import { LightDecor } from "./LightDecor";

/**
 * Applique le thème clair éditorial sur toutes les pages internes,
 * tout en laissant l'accueil (hero 3D) en thème sombre cinématographique.
 */
export function RouteTheme({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLight = pathname !== "/";

  if (!isLight) return <>{children}</>;

  return (
    <div className="theme-light relative min-h-screen bg-surface text-content">
      <LightDecor />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
