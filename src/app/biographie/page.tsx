import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { discography, firstParts } from "@/config/biography";

export const metadata: Metadata = {
  title: "Biographie",
  description:
    "Biographie de David Swann - un parcours de scène, du rideau aux projecteurs, des années 60's-70's-80's.",
};

/** Photo de l'artiste, portrait, avec légende discrète. */
function BioPhoto({ src, caption }: { src: string; caption?: string }) {
  return (
    <figure className="my-16 flex flex-col items-center">
      <Image
        src={src}
        alt={caption ? `David Swann - ${caption}` : "David Swann"}
        width={768}
        height={1154}
        sizes="(max-width: 768px) 88vw, 460px"
        className="h-auto w-[min(88vw,460px)] rounded-sm object-cover shadow-2xl"
      />
      {caption && (
        <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
      {children}
    </p>
  );
}

export default function BiographiePage() {
  return (
    <>
      <PageHero eyebrow="L'artiste" title="Biographie" />

      <article className="container-shell pb-24 pt-10">
        {/* Accroche */}
        <p className="max-w-4xl font-display text-[clamp(1.6rem,4.5vw,2.8rem)] uppercase leading-[1.05] text-content">
          Une jeunesse bousculée et introvertie.
          <span className="text-accent">
            {" "}
            Un leitmotiv de réussite existentiel qui fait ma force.
          </span>
        </p>

        <div className="mt-14 max-w-3xl">
          <P>
            Je me prénomme David, je suis originaire de Picardie, dans les
            Hauts-de-France.
          </P>
          <P>
            Au travers d&apos;une scolarité chaotique due à un certain
            harcèlement scolaire, et s&apos;ajoutant à un caractère introverti
            et une timidité envahissante, un paradoxe m&apos;envahit de longues
            années durant. La victoire du plus faible.
          </P>
          <P>
            Cette victoire future qui sera mon leitmotiv et chemin de vie… Une
            longue route parsemée d&apos;embûches, de joies, de plaisirs divers,
            dans le dépassement de soi.
          </P>
          <P>
            Un chemin menant à la vie du spectacle, de la scène et du monde
            artistique. En un mot : saltimbanque… !
          </P>
          <P>
            J&apos;ai démarré dans ce milieu du spectacle, derrière le rideau,
            en tant que technicien de plateau et assistant en régie. Les
            applaudissements du public et la lumière auprès des artistes me
            donnent l&apos;envie à mon tour d&apos;être sur la scène. Non plus
            derrière… mais devant le rideau. Cette attirance croissante me
            décide d&apos;en faire un métier à part entière.
          </P>
        </div>

        <BioPhoto src="/photos/DSC7021-scaled-1-768x1154.jpg" caption="David Swann" />

        <div className="max-w-3xl">
          <P>
            En intégrant une association locale de ma région mettant en avant de
            jeunes talents de la chanson, je fais mes premiers pas sur scène. De
            fêtes locales en événements privés, certaines opportunités se
            présentent à moi pour assurer mes premières parties :
          </P>
        </div>

        {/* Premières parties */}
        <ul className="mt-8 flex max-w-4xl flex-wrap gap-3">
          {firstParts.map((name) => (
            <li
              key={name}
              className="border border-line px-4 py-2 text-sm uppercase tracking-[0.12em] text-content"
            >
              {name}
            </li>
          ))}
          <li className="flex items-center px-2 text-sm italic text-muted">
            … et beaucoup d&apos;autres !
          </li>
        </ul>

        <BioPhoto src="/photos/DSC7062-scaled-1-768x1154.jpg" caption="Sur scène" />

        <div className="max-w-3xl">
          <P>
            J&apos;intègre au début des années 2000 une troupe théâtrale «
            Marnaise », avec le challenge d&apos;un premier rôle dans la pièce «
            Adrienne Lecouvreur, son charme immortel », où j&apos;incarne le
            Comte de Saxe, qui séduit l&apos;héroïne, célèbre tragédienne du
            XVIII&nbsp;siècle.
          </P>
          <P>
            Durant 4 ans et demi, je me forme aux côtés de Youri Capello
            (artiste de la maison Barclay), avec qui je travaille
            l&apos;interprétation, l&apos;expression scénique, la technicité, les
            nuances et le caractère vocal, afin d&apos;aller chercher au plus
            profond de soi.
          </P>
          <P>
            En 2008, je sors mon premier album… D&apos;autres singles verront le
            jour… Ma discographie prend forme.
          </P>
        </div>

        {/* Discographie */}
        <h2 className="mt-20 text-[clamp(1.6rem,4vw,2.5rem)] text-content">
          Discographie
        </h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {discography.map((d) => (
            <li
              key={`${d.year}-${d.title}`}
              className="flex flex-col gap-1 py-6 sm:flex-row sm:gap-8"
            >
              <span className="w-28 shrink-0 font-display text-xl uppercase text-accent">
                {d.year}
              </span>
              <div>
                <h3 className="font-sans text-lg font-medium normal-case tracking-normal text-content">
                  {d.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{d.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <BioPhoto src="/photos/DSC7049-768x1154.jpg" caption="Souvenirs & Nostalgie" />

        <div className="max-w-3xl">
          <P>
            Allant de nombreux galas en collaborations diverses, et passant par
            la promotion auprès de la TV (IDF.1), je décide de structurer plus
            largement mon activité d&apos;artiste-chanteur en me formant à
            l&apos;univers de l&apos;industrie musicale, devenant ainsi
            sociétaire auprès de la SPPF / ADAMI-SPEDIDAM (producteur musical
            indépendant et droits d&apos;interprète).
          </P>
          <P>
            Grâce à la sortie du single « Insomnies » en août 2023, je fais mon
            entrée dans la « grande maison » SACEM.
          </P>
          <P>
            Mi-mars 2024, au Luxembourg, j&apos;intègre une Master-Class
            chant-interprétation orchestrée par Monsieur Michel Jonasz.
          </P>
          <P>
            Depuis 2021, je travaille avec les Productions Freddy Hanouna qui
            m&apos;apportent soutien et conseils, et m&apos;accompagnent sur mes
            tournées et galas dans les Hauts-de-France, où les dates
            s&apos;enchaînent au son des années 60&apos;s, 70&apos;s et 80 !
          </P>
        </div>

        {/* Invitation finale */}
        <div className="mt-16 max-w-3xl border-l-2 border-accent pl-6">
          <p className="font-display text-[clamp(1.3rem,3vw,2rem)] uppercase leading-tight text-content">
            Embarquez pour un voyage dans le temps à travers les tubes des
            années 60&apos;s, 70&apos;s et 80 !
          </p>
          <p className="mt-3 text-muted">
            Souvenirs et nostalgie - un voyage à ne pas manquer.
          </p>
        </div>
      </article>
    </>
  );
}
