"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLeft, navRight, socials, site } from "@/config/site.config";
import { cx } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { SocialIcon } from "./SocialIcon";

/**
 * Header collant (cf. §5.1) : transparent sur le hero, fond sombre au
 * scroll. Burger (gauche) · logo DAVID SWANN (centre) · navigation +
 * réseaux + recherche (droite).
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  // Accueil = thème sombre (par-dessus le hero) ; pages internes = thème clair
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={cx(
        // Barre toujours sombre (texte blanc) : transparente sur le hero,
        // noire sur les pages claires pour le contraste (demande client).
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        !isHome
          ? "border-b border-line bg-surface/95 backdrop-blur-md"
          : scrolled || menuOpen
            ? "border-b border-line bg-surface/90 backdrop-blur-md"
            : "bg-transparent",
      )}
    >
      <div className="container-shell flex h-16 items-center gap-4 md:h-20">
        {/* Colonne gauche : burger + liens (cf. §5.1) */}
        <div className="flex min-w-0 flex-1 items-center gap-7">
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="flex shrink-0 items-center gap-2 text-content md:gap-3"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="h-px w-6 bg-current" />
              <span className="h-px w-6 bg-current" />
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.2em] sm:inline">
              Menu
            </span>
          </button>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Navigation (gauche)"
          >
            {navLeft.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-content"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Centre : logo - centré entre deux colonnes de largeur égale */}
        <Link
          href="/"
          aria-label="David Swann - accueil"
          className="shrink-0 whitespace-nowrap font-display text-xl uppercase tracking-[0.15em] text-content md:text-2xl"
        >
          {site.name}
        </Link>

        {/* Colonne droite : liens + réseaux + recherche */}
        <div className="flex min-w-0 flex-1 items-center justify-end gap-7">
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Navigation (droite)"
          >
            {navRight.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-content"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            {socials.slice(0, 4).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted transition-colors hover:text-content"
              >
                <SocialIcon name={s.label} />
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Rechercher"
            onClick={() => setSearchOpen(true)}
            className="shrink-0 text-content"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Recherche (cf. §5.1) - UI prête, branchement contenu à venir */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-surface/95 backdrop-blur-md">
          <div className="container-shell flex h-20 items-center justify-end">
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="link-accent"
            >
              Fermer
            </button>
          </div>
          <div className="container-shell mt-16">
            <label htmlFor="site-search" className="eyebrow mb-4 block">
              Rechercher dans le contenu
            </label>
            <input
              id="site-search"
              type="search"
              autoFocus
              placeholder="News, albums…"
              className="w-full border-b border-line bg-transparent pb-4 font-display text-4xl uppercase text-content placeholder:text-content/25 focus:border-content focus:outline-none md:text-6xl"
            />
            {/* TODO: brancher la recherche (news, albums) - cf. §5.1 */}
          </div>
        </div>
      )}
    </>
  );
}
