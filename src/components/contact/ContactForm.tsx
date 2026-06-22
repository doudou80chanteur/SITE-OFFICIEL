"use client";

import { useState } from "react";

/**
 * Formulaire de contact (cf. §7.8) : nom, email, objet, message,
 * consentement RGPD. Validation côté client ; côté serveur, anti-spam
 * (hCaptcha / honeypot) et envoi email via API route à brancher.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-sm border border-line bg-card p-8">
        <h2 className="text-2xl text-content">Message envoyé</h2>
        <p className="mt-2 text-sm text-muted">
          Merci, nous revenons vers vous rapidement.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: POST vers /api/contact (Resend/SendGrid) + hCaptcha - cf. §3 / §7.8
        setSent(true);
      }}
    >
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

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
