"use client";

/**
 * Formulaire de contact (cf. §7.8) : nom, email, objet, message,
 * consentement RGPD. À l'envoi, ouvre l'application de messagerie du
 * visiteur avec un message pré-rempli adressé à davidswann@live.fr.
 */

const CONTACT_EMAIL = "davidswann@live.fr";

const SUBJECT_LABELS: Record<string, string> = {
  booking: "Booking",
  presse: "Presse",
  management: "Management",
  autre: "Autre",
};

export function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subjectKey = String(data.get("subject") || "autre");
    const message = String(data.get("message") || "").trim();

    const subject = `${SUBJECT_LABELS[subjectKey] ?? "Contact"} — ${name}`;
    const body = [
      `Nom : ${name}`,
      `Email : ${email}`,
      `Objet : ${SUBJECT_LABELS[subjectKey] ?? "Contact"}`,
      "",
      message,
    ].join("\n");

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Field label="Nom" htmlFor="name">
        <input id="name" name="name" required className="field" />
      </Field>

      <Field label="Email" htmlFor="email">
        <input id="email" name="email" type="email" required className="field" />
      </Field>

      <Field label="Objet" htmlFor="subject">
        <select id="subject" name="subject" required className="field">
          <option value="booking">Booking</option>
          <option value="presse">Presse</option>
          <option value="management">Management</option>
          <option value="autre">Autre</option>
        </select>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea id="message" name="message" required rows={5} className="field resize-none" />
      </Field>

      <label className="flex items-start gap-2 text-xs text-muted">
        <input type="checkbox" required className="mt-0.5 accent-accent" />
        <span>J&apos;accepte que mes données soient utilisées pour traiter ma demande.</span>
      </label>

      <button type="submit" className="btn-listen">
        Envoyer
      </button>

      <p className="text-xs text-muted">
        Le bouton ouvre votre application de messagerie avec le message
        pré-rempli. Vous pouvez aussi écrire directement à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="link-accent">
          {CONTACT_EMAIL}
        </a>
        .
      </p>

      <style>{`
        .field {
          width: 100%;
          background: transparent;
          border: 1px solid var(--line);
          padding: 0.75rem 1rem;
          color: rgb(var(--content-rgb));
          font-size: 0.95rem;
        }
        .field:focus { outline: none; border-color: rgb(var(--content-rgb)); }
        .field::placeholder { color: var(--muted); }
        select.field option { color: #000; }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="eyebrow mb-2 block">
        {label}
      </label>
      {children}
    </div>
  );
}
