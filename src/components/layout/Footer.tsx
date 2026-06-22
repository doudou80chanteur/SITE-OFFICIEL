import Link from "next/link";
import { footerNav, socials, site } from "@/config/site.config";
import { SocialIcon } from "./SocialIcon";

/** Footer sombre en colonnes (cf. §5.3). */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-pure">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <Link
            href="/"
            className="font-display text-2xl uppercase tracking-[0.15em] text-white"
          >
            {site.name}
          </Link>
          <p className="mt-4 max-w-xs text-sm text-bone-muted">
            {/* TODO: courte accroche / tagline de l'artiste */}
            Site officiel - sorties, actualités et dates.
          </p>
        </div>

        <FooterColumn title="Liens rapides" links={footerNav.quickLinks} />
        <FooterColumn title="Catalogue" links={footerNav.catalog} />

        <div>
          <h3 className="eyebrow mb-5 font-sans normal-case">Réseaux</h3>
          <div className="flex flex-wrap gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-bone-muted transition-colors hover:text-white"
              >
                <SocialIcon name={s.label} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-6 text-xs text-bone-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.copyrightYear} {site.name}</p>
          <Link href="/privacy-policy" className="hover:text-white">
            Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h3 className="eyebrow mb-5 font-sans normal-case">{title}</h3>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              {...(l.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm text-bone-muted transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
