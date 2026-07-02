import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/config/articles";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleJsonLd } from "@/components/blog/ArticleJsonLd";

/** Pré-génère une page statique par article. */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

/** Métadonnées SEO par article (title, description, Open Graph, canonical). */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return { title: "Article introuvable" };

  const path = `/news/${article.slug}`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.metaDescription,
      url: path,
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.cover }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.cover],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <article>
      <ArticleJsonLd article={article} />

      {/* En-tête éditorial */}
      <header className="container-shell pt-32 md:pt-40">
        <p className="eyebrow mb-4">{article.category}</p>
        <h1 className="max-w-4xl text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.05] text-content">
          {article.title}
        </h1>
        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span className="mx-2 text-line">•</span>
          Par {article.author}
        </p>
      </header>

      {/* Visuel principal */}
      <div className="container-shell mt-12 flex justify-center">
        <Image
          src={article.cover}
          alt={article.coverAlt}
          width={768}
          height={1154}
          priority
          sizes="(max-width: 768px) 92vw, 520px"
          className="h-auto w-[min(92vw,520px)] rounded-sm object-cover shadow-2xl"
        />
      </div>

      {/* Corps de l'article */}
      <div className="container-shell pb-8 pt-14">
        <div className="max-w-3xl">
          <ArticleBody blocks={article.body} />
        </div>
      </div>

      {/* FAQ */}
      <section className="container-shell pb-8">
        <div className="max-w-3xl">
          <h2 className="mt-8 text-[clamp(1.5rem,4vw,2.3rem)] text-content">
            FAQ : les artistes français des années 80
          </h2>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {article.faq.map((item) => (
              <div key={item.question} className="py-6">
                <dt className="font-sans text-lg font-medium normal-case tracking-normal text-content">
                  {item.question}
                </dt>
                <dd className="mt-2 text-[1.05rem] leading-relaxed text-muted">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA écoute */}
      <section className="container-shell pb-12">
        <div className="max-w-3xl border-l-2 border-accent pl-6">
          <p className="font-display text-[clamp(1.3rem,3vw,2rem)] uppercase leading-tight text-content">
            Envie de réentendre l&apos;esprit des années 80 ?
          </p>
          <p className="mt-3 text-muted">
            J&apos;ai réenregistré et réarrangé plusieurs de ces classiques dans
            l&apos;esprit de l&apos;époque. Embarquez pour un voyage dans le
            temps.
          </p>
          <Link href="/music" className="btn-listen mt-6 inline-flex">
            🎧 Écouter ma musique
          </Link>
        </div>
      </section>

      {/* Bio auteur */}
      <section className="container-shell pb-24">
        <div className="max-w-3xl border-t border-line pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            À propos de l&apos;auteur
          </p>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">
            <strong className="font-semibold text-content">David Swann</strong>{" "}
            est un artiste-interprète originaire des Hauts-de-France. Sociétaire
            de la SACEM et de l&apos;ADAMI-SPEDIDAM, il a assuré les premières
            parties de nombreux artistes (Michel Delpech, Herbert Léonard, Émile
            et Image, Les Forbans, Ottawan…) et se produit régulièrement avec un
            répertoire dédié aux tubes des années 60, 70 et 80.{" "}
            <Link
              href="/biographie"
              className="text-accent underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              Découvrir son parcours
            </Link>
            .
          </p>
        </div>
      </section>
    </article>
  );
}
