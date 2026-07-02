import React from "react";
import Link from "next/link";

/**
 * Rendu inline d'un texte "markdown léger" :
 *   - **gras**
 *   - *italique*
 *   - [libellé](href)  (lien interne Next ou externe en nouvel onglet)
 * Le gras/italique peuvent contenir un lien (parsing récursif).
 */
export function renderInline(text: string, keyPrefix = "i"): React.ReactNode[] {
  const tokens = text.split(
    /(\*\*[^*]+?\*\*|\*[^*]+?\*|\[[^\]]+?\]\([^)]+?\))/g,
  );

  return tokens.filter(Boolean).map((tok, i) => {
    const key = `${keyPrefix}-${i}`;

    if (tok.startsWith("**") && tok.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-content">
          {renderInline(tok.slice(2, -2), key)}
        </strong>
      );
    }

    if (tok.startsWith("*") && tok.endsWith("*")) {
      return <em key={key}>{renderInline(tok.slice(1, -1), key)}</em>;
    }

    const link = tok.match(/^\[([^\]]+?)\]\(([^)]+?)\)$/);
    if (link) {
      const [, label, href] = link;
      const classes =
        "text-accent underline underline-offset-4 transition-opacity hover:opacity-70";
      if (href.startsWith("http")) {
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {label}
          </a>
        );
      }
      return (
        <Link key={key} href={href} className={classes}>
          {label}
        </Link>
      );
    }

    return <React.Fragment key={key}>{tok}</React.Fragment>;
  });
}

/** Retire le balisage markdown léger pour produire du texte brut (JSON-LD, etc.). */
export function stripInline(text: string): string {
  return text
    .replace(/\*\*([^*]+?)\*\*/g, "$1")
    .replace(/\*([^*]+?)\*/g, "$1")
    .replace(/\[([^\]]+?)\]\([^)]+?\)/g, "$1");
}
