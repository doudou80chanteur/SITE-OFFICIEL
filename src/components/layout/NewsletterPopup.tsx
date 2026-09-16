"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Pop-up d'inscription à la newsletter (cf. §7.1 / élément transverse §2) :
 * consentement RGPD + lien vers la politique de confidentialité.
 * Double opt-in recommandé. Branchement service email à venir.
 */
const STORAGE_KEY = "ds_newsletter_dismissed";

export function NewsletterPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const id = window.setTimeout(() => setOpen(true), 6000);
    return () => window.clearTimeout(id);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
          role="dialog"
          aria-label="Inscription à la newsletter"
          className="fixed bottom-5 left-1/2 z-50 w-[min(92vw,460px)] -translate-x-1/2 border border-white/15 bg-ink/95 p-6 backdrop-blur-md sm:bottom-8"
        >
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl text-white">Rejoindre la liste</h2>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Fermer"
              className="text-bone-muted transition hover:text-white"
            >
              ✕
            </button>
          </div>
          <p className="mt-2 text-sm text-bone-muted">
            {/* TODO: accroche newsletter */}
            Sorties, dates et exclus, directement par email.
          </p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              dismiss(); // TODO: brancher le service email (double opt-in)
            }}
          >
            <input
              type="email"
              required
              placeholder="votre@email.com"
              aria-label="Adresse email"
              className="w-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white focus:outline-none"
            />
            <label className="flex items-start gap-2 text-xs text-bone-muted">
              <input type="checkbox" required className="mt-0.5 accent-accent" />
              <span>
                J&apos;accepte de recevoir des emails et la{" "}
                <Link href="/privacy-policy" className="underline hover:text-white">
                  politique de confidentialité
                </Link>
                .
              </span>
            </label>
            <button type="submit" className="btn-listen w-full">
              S&apos;inscrire
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
