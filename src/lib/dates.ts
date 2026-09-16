/**
 * Helpers de formatage des dates de concerts (server-safe, sans dépendance React).
 * Les libellés sont fixes pour rester indépendants de la locale du runtime.
 */

const MONTHS_SHORT = [
  "JANV", "FÉVR", "MARS", "AVR", "MAI", "JUIN",
  "JUIL", "AOÛT", "SEPT", "OCT", "NOV", "DÉC",
] as const;

const WEEKDAYS_SHORT = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"] as const;

export type FormattedDate = {
  day: string; // ex: "8"
  month: string; // ex: "AOÛT"
  weekday: string; // ex: "Sam"
};

/** Décompose une date ISO (yyyy-mm-dd) en jour / mois abrégé / jour de semaine. */
export function formatAppearanceDate(iso: string): FormattedDate {
  const d = new Date(`${iso}T00:00:00`);
  return {
    day: String(d.getDate()),
    month: MONTHS_SHORT[d.getMonth()],
    weekday: WEEKDAYS_SHORT[d.getDay()],
  };
}

/** Vrai si la chaîne est un numéro de département français (ex: "59", "02"). */
function isDepartment(region: string): boolean {
  return /^\d{2,3}$/.test(region);
}

/**
 * Ligne « lieu » d'une date : combine la salle (si connue) et la zone
 * géographique. Le département est mis entre parenthèses, le pays tel quel.
 */
export function formatVenue(appearance: {
  region: string;
  venue?: string;
}): string {
  const place = isDepartment(appearance.region)
    ? `(${appearance.region})`
    : appearance.region;
  return appearance.venue ? `${appearance.venue} · ${place}` : place;
}
