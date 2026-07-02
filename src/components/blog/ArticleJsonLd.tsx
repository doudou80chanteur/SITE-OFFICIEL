import type { BlogArticle } from "@/config/articles";
import { site } from "@/config/site.config";

/**
 * Données structurées Schema.org pour un article de blog :
 *  - Article (auteur, date, image, éditeur)
 *  - FAQPage (questions/réponses → éligibilité aux rich results & AI Overviews)
 */
export function ArticleJsonLd({ article }: { article: BlogArticle }) {
  const url = `${site.url}/news/${article.slug}`;
  const image = `${site.url}${article.cover}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: [image],
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "fr-FR",
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    author: {
      "@type": "Person",
      name: article.author,
      url: `${site.url}/biographie`,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
