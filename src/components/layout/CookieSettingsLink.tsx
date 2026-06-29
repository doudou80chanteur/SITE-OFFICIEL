"use client";

import { openConsentSettings } from "@/lib/consent";

/** Rouvre le bandeau de consentement (footer / politique de confidentialité). */
export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      Gérer les cookies
    </button>
  );
}
