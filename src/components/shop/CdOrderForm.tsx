"use client";

const CONTACT_EMAIL = "davidswann@live.fr";

export function CdOrderForm({
  productTitle,
  productKind = "support physique",
}: {
  productTitle: string;
  productKind?: string;
}) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const address = String(data.get("address") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const quantity = String(data.get("quantity") || "1");
    const payment = String(data.get("payment") || "").trim();
    const notes = String(data.get("notes") || "").trim();

    const subject = `Commande ${productTitle} - ${name}`;
    const body = [
      "Bonjour David,",
      "",
      `Je souhaite commander ${productKind} « ${productTitle} ».`,
      "",
      `Nom et prénom : ${name}`,
      `Adresse complète : ${address}`,
      `Téléphone : ${phone}`,
      `Email : ${email}`,
      `Quantité : ${quantity}`,
      `Mode de paiement souhaité : ${payment}`,
      "",
      notes ? `Notes : ${notes}` : "Notes :",
      "",
      "Merci.",
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="space-y-5 rounded-sm border border-line bg-card p-6" onSubmit={handleSubmit}>
      <div>
        <h3 className="eyebrow mb-4 font-sans normal-case">Trame d'achat</h3>
        <p className="text-sm leading-6 text-muted">
          Remplissez les informations de commande. Le bouton prépare ensuite un
          email complet à envoyer.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nom et prénom" htmlFor="name">
          <input id="name" name="name" required className="field" />
        </Field>

        <Field label="Téléphone" htmlFor="phone">
          <input id="phone" name="phone" required className="field" />
        </Field>
      </div>

      <Field label="Adresse complète" htmlFor="address">
        <textarea id="address" name="address" required rows={3} className="field resize-none" />
      </Field>

      <Field label="Email" htmlFor="email">
        <input id="email" name="email" type="email" required className="field" />
      </Field>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Quantité" htmlFor="quantity">
          <select id="quantity" name="quantity" required className="field">
            <option value="1">1 CD</option>
            <option value="2">2 CD</option>
            <option value="3">3 CD</option>
            <option value="4">4 CD</option>
            <option value="5">5 CD</option>
          </select>
        </Field>

        <Field label="Mode de paiement" htmlFor="payment">
          <select id="payment" name="payment" required className="field">
            <option value="Paypal">Paypal</option>
            <option value="Virement">Virement</option>
            <option value="Chèque">Chèque</option>
          </select>
        </Field>
      </div>

      <Field label="Notes" htmlFor="notes">
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="field resize-none"
          placeholder="Précision éventuelle pour la commande"
        />
      </Field>

      <label className="flex items-start gap-2 text-xs text-muted">
        <input type="checkbox" required className="mt-0.5 accent-accent" />
        <span>J'accepte que mes informations soient utilisées pour traiter ma commande.</span>
      </label>

      <button type="submit" className="btn-listen w-full">
        Commander
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
