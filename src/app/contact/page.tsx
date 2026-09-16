import type { Metadata } from "next";
import Image from "next/image";
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
              <h2 className="eyebrow mb-3 font-sans normal-case">Artiste & production</h2>
              <div className="grid max-w-sm gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex h-24 items-center justify-center rounded-sm border border-white/10 bg-white px-3 py-2">
                  <Image
                    src="/logos/david-swann-logo-cropped.png"
                    alt="Logo David Swann"
                    width={462}
                    height={339}
                    className="h-20 w-auto max-w-full object-contain"
                    priority
                  />
                </div>
                <div className="flex h-24 items-center justify-center rounded-sm border border-white/10 bg-white px-4 py-3">
                  <Image
                    src="/logos/productions-freddy-hanouna.png"
                    alt="Logo Productions Freddy Hanouna"
                    width={251}
                    height={89}
                    className="h-auto w-full max-w-72 object-contain"
                  />
                </div>
                <div className="flex h-24 items-center justify-center overflow-hidden rounded-sm border border-white/10 bg-black px-3 py-2">
                  <Image
                    src="/logos/news-artist-logo.jpg"
                    alt="Logo News Artist'"
                    width={600}
                    height={318}
                    className="h-full w-auto max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
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
                <a
                  href="https://wa.me/33661895928?text=Bonjour%2C%20je%20vous%20contacte%20depuis%20votre%20site%20officiel."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  06 61 89 59 28
                </a>
              </p>
            </div>
            <div>
              <h2 className="eyebrow mb-3 font-sans normal-case">WhatsApp</h2>
              <a
                href="https://wa.me/33661895928?text=Bonjour%2C%20je%20vous%20contacte%20depuis%20votre%20site%20officiel."
                target="_blank"
                rel="noopener noreferrer"
                className="flex max-w-sm items-center gap-4 rounded-sm border border-line bg-card p-4 transition-opacity hover:opacity-80"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                  <Image
                    src="/logos/whatsapp-logo.svg"
                    alt="Logo WhatsApp"
                    width={34}
                    height={34}
                    className="h-9 w-9"
                  />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-content">
                    Discuter sur WhatsApp
                  </span>
                  <span className="mt-1 block text-xs text-muted">Message direct</span>
                </span>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
