import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = { title: "Contact" };

/** Contact (cf. §7.8). */
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking · Presse · Management"
        title="Contact"
        intro="Pour toute demande de booking, presse ou management."
      />
      <section className="container-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <ContactForm />
          <aside className="space-y-6 text-sm text-muted">
            <div>
              <h2 className="eyebrow mb-2 font-sans normal-case">Email</h2>
              <p>
                <a href="mailto:davidswann@live.fr" className="link-accent">
                  davidswann@live.fr
                </a>
              </p>
            </div>
            <div>
              <h2 className="eyebrow mb-2 font-sans normal-case">Téléphone</h2>
              <p>
                <a href="tel:+33661895928" className="link-accent">
                  06 61 89 59 28
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
