import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et gestion des données personnelles du site officiel de David Swann.",
};

const LAST_UPDATED = "29 juin 2026";
const CONTACT_EMAIL = "davidswann@live.fr";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-[clamp(1.3rem,3vw,1.9rem)] text-content">{title}</h2>
      <div className="mt-4 space-y-4 text-[1.02rem] leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

/** Politique de confidentialité (cf. §2). */
export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title="Politique de confidentialité"
        intro={`Dernière mise à jour : ${LAST_UPDATED}`}
      />

      <article className="container-shell max-w-3xl pb-24 pt-10">
        <Section title="1. Préambule">
          <p>
            Le présent site est un site vitrine présentant l&apos;artiste David
            Swann, son actualité, sa discographie et ses dates de concerts. Il
            ne propose ni vente en ligne, ni création de compte, et ne collecte
            aucune donnée sensible au sens de l&apos;article 9 du Règlement
            Général sur la Protection des Données (RGPD).
          </p>
          <p>
            La présente politique explique quelles données personnelles sont
            susceptibles d&apos;être traitées dans le cadre de votre navigation
            et de vos échanges avec l&apos;artiste, ainsi que les droits dont
            vous disposez.
          </p>
        </Section>

        <Section title="2. Responsable du traitement">
          <p>
            Le responsable du traitement des données est{" "}
            <strong className="text-content">David Foulon</strong>, domicilié au
            15 rue Nouvelle, 80400 Muille-Villette, et joignable par courriel à{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="link-accent">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="3. Données collectées et finalités">
          <p>
            <strong className="text-content">Demandes de contact.</strong> Le
            formulaire de contact ouvre votre application de messagerie afin que
            vous nous écriviez directement. À cette occasion, vous nous
            transmettez votre nom, votre adresse électronique et le contenu de
            votre message. Ces informations sont utilisées uniquement pour
            traiter et répondre à votre demande (booking, presse, management ou
            autre). La base légale est votre consentement et, le cas échéant,
            l&apos;exécution de mesures précontractuelles.
          </p>
          <p>
            <strong className="text-content">Données de navigation.</strong>{" "}
            Lors de votre visite, et uniquement après votre consentement, des
            traceurs publicitaires peuvent enregistrer des informations
            relatives à votre navigation (pages consultées, identifiants de
            cookies) à des fins de mesure d&apos;audience et de ciblage
            publicitaire (voir la section « Cookies et traceurs »).
          </p>
        </Section>

        <Section title="4. Cookies et traceurs publicitaires">
          <p>
            Ce site utilise des traceurs tiers à des fins de publicité et de
            retargeting (affichage ultérieur d&apos;annonces sur d&apos;autres
            sites ou réseaux sociaux) :
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong className="text-content">Meta Pixel</strong> (Meta
              Platforms Ireland Ltd.) : mesure de l&apos;efficacité des
              campagnes publicitaires et ciblage sur Facebook et Instagram.
            </li>
            <li>
              <strong className="text-content">Google</strong> (Google Ireland
              Ltd.) : balises Google Ads / Google Analytics permettant la mesure
              d&apos;audience et le retargeting via le réseau publicitaire
              Google.
            </li>
          </ul>
          <p>
            Conformément à la réglementation (RGPD et directive ePrivacy), ces
            traceurs ne sont déposés et activés qu&apos;
            <strong className="text-content">
              après recueil de votre consentement
            </strong>{" "}
            via le bandeau d&apos;information affiché lors de votre première
            visite. Vous pouvez accepter ou refuser ces traceurs, et modifier ou
            retirer votre consentement à tout moment via le lien «&nbsp;Gérer les
            cookies&nbsp;» situé en bas de page. Le refus des traceurs
            n&apos;affecte pas l&apos;accès au contenu du site.
          </p>
          <p>
            La durée de conservation des cookies déposés n&apos;excède pas treize
            (13) mois ; votre choix de consentement est conservé pendant une
            durée maximale de six (6) mois.
          </p>
        </Section>

        <Section title="5. Destinataires et transferts hors Union européenne">
          <p>
            Les données issues de vos demandes de contact sont destinées à
            l&apos;artiste et à son équipe, à l&apos;exclusion de toute cession à
            des tiers à des fins commerciales.
          </p>
          <p>
            Les traceurs Meta et Google impliquent un traitement par des
            sociétés susceptibles de transférer des données vers les États-Unis.
            Ces transferts sont encadrés par des garanties appropriées (clauses
            contractuelles types de la Commission européenne et, le cas échéant,
            adhésion au Data Privacy Framework UE–États-Unis).
          </p>
        </Section>

        <Section title="6. Durée de conservation">
          <p>
            Les courriels échangés sont conservés le temps nécessaire au
            traitement de votre demande, puis archivés ou supprimés. Les données
            liées aux traceurs sont conservées selon les durées indiquées à la
            section « Cookies et traceurs ».
          </p>
        </Section>

        <Section title="7. Vos droits">
          <p>
            Conformément au RGPD et à la loi « Informatique et Libertés », vous
            disposez d&apos;un droit d&apos;accès, de rectification,
            d&apos;effacement, de limitation, d&apos;opposition et de
            portabilité de vos données, ainsi que du droit de retirer votre
            consentement à tout moment.
          </p>
          <p>
            Pour exercer ces droits, écrivez à{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="link-accent">
              {CONTACT_EMAIL}
            </a>
            . Vous pouvez également introduire une réclamation auprès de la
            Commission Nationale de l&apos;Informatique et des Libertés (CNIL,{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              www.cnil.fr
            </a>
            ).
          </p>
        </Section>

        <Section title="8. Sécurité">
          <p>
            Des mesures techniques et organisationnelles appropriées sont mises
            en œuvre afin de protéger les données contre tout accès non
            autorisé, perte ou divulgation.
          </p>
        </Section>

        <Section title="9. Hébergement">
          <p>
            Le site est hébergé par Cloudflare, Inc., 101 Townsend Street, San
            Francisco, CA 94107, États-Unis (
            <a
              href="https://www.cloudflare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              www.cloudflare.com
            </a>
            ).
          </p>
        </Section>

        <Section title="10. Modifications">
          <p>
            La présente politique peut être mise à jour à tout moment afin de
            refléter les évolutions légales ou techniques. La date de dernière
            mise à jour figure en haut de cette page. Pour toute question,{" "}
            <Link href="/contact" className="link-accent">
              contactez-moi
            </Link>
            .
          </p>
        </Section>
      </article>
    </>
  );
}
