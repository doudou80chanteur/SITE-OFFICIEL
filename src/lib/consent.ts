/**
 * Gestion du consentement aux traceurs publicitaires (Meta Pixel, Google).
 * Conformité RGPD / ePrivacy : aucun traceur ne doit être activé tant que
 * l'utilisateur n'a pas donné son consentement explicite.
 *
 * Utilisation future (à l'installation des pixels) :
 *   import { hasConsent } from "@/lib/consent";
 *   if (hasConsent()) { ... charger Meta Pixel / Google ... }
 * et réagir aux changements via l'événement "ds-consent-change".
 */

export type ConsentStatus = "accepted" | "refused";

type StoredConsent = { status: ConsentStatus; ts: number };

const STORAGE_KEY = "ds-cookie-consent";
// Le consentement est redemandé après 6 mois (cf. politique de confidentialité).
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182;

/** Événements émis lors d'un changement de choix / d'une demande d'ouverture. */
export const CONSENT_CHANGE_EVENT = "ds-consent-change";
export const OPEN_CONSENT_EVENT = "ds-open-consent";

/** Renvoie le choix stocké, ou null s'il est absent / expiré. */
export function getConsent(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed || (parsed.status !== "accepted" && parsed.status !== "refused")) {
      return null;
    }
    if (Date.now() - parsed.ts > MAX_AGE_MS) return null;
    return parsed.status;
  } catch {
    return null;
  }
}

/** Vrai si l'utilisateur a accepté les traceurs (à appeler avant tout pixel). */
export function hasConsent(): boolean {
  return getConsent() === "accepted";
}

/** Enregistre le choix de l'utilisateur et notifie l'application. */
export function setConsent(status: ConsentStatus): void {
  if (typeof window === "undefined") return;
  try {
    const value: StoredConsent = { status, ts: Date.now() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    /* stockage indisponible : on ignore silencieusement */
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

/** Rouvre le bandeau de gestion des cookies (depuis le footer par ex.). */
export function openConsentSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}
