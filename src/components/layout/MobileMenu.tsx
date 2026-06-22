"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav, socials } from "@/config/site.config";
import { SocialIcon } from "./SocialIcon";

/**
 * Menu plein écran (cf. §5.2) : overlay sombre, liens empilés en grandes
 * capitales, icônes sociales en bas, animation d'ouverture/fermeture
 * (fade + slide).
 */
export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col bg-ink"
        >
          <div className="container-shell flex h-16 items-center justify-end md:h-20">
            <button type="button" onClick={onClose} className="link-accent">
              Fermer
            </button>
          </div>

          <nav
            className="container-shell flex flex-1 flex-col justify-center gap-2"
            aria-label="Navigation principale"
          >
            {mainNav.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i + 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="font-display text-[clamp(2.5rem,9vw,5rem)] uppercase leading-none text-white transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="container-shell flex items-center gap-5 pb-10">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
