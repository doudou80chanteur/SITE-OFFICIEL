"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getConsent,
  setConsent,
  OPEN_CONSENT_EVENT,
} from "@/lib/consent";

/**
 * Bandeau de consentement aux traceurs publicitaires (cf. politique de
 * confidentialité). S'affiche tant qu'aucun choix valide n'est enregistré,
 * et peut être rouvert via openConsentSettings() (lien « Gérer les cookies »).
 *
 * Aucun traceur n'est chargé ici : l'installation des pixels (Meta / Google)
 * se fera plus tard, conditionnée à hasConsent().
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Affichage initial : seulement si aucun choix valide n'est encore stocké.
    if (getConsent() === null) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  function choose(status: "accepted" | "refused") {
    setConsent(status);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Gestion des cookies"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/15 bg-ink-pure/95 backdrop-blur-sm"
    >
      <div className="container-shell flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-bone-muted">
          Ce site utilise des traceurs (Meta, Google) à des fins de mesure
          d&apos;audience et de publicité. Ils ne sont activés qu&apos;avec votre
          accord. Vous pouvez accepter ou refuser, et modifier votre choix à tout
          moment.{" "}
          <Link href="/privacy-policy" className="link-accent">
            En savoir plus
          </Link>
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={() => choose("refused")}
            className="border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
          >
            Tout refuser
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="border border-accent bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
