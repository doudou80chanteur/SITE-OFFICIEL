import Image from "next/image";
import type { ArticleBlock } from "@/config/articles";
import { renderInline } from "@/lib/richText";

/** Rend le corps d'un article de blog à partir de ses blocs typés. */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        const key = `block-${i}`;

        switch (block.type) {
          case "h2":
            return (
              <h2
                key={key}
                id={block.id}
                className="mt-16 scroll-mt-28 text-[clamp(1.5rem,4vw,2.3rem)] text-content"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={key}
                className="mt-10 font-sans text-xl font-medium normal-case tracking-normal text-content"
              >
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p
                key={key}
                className="mt-5 text-[1.05rem] leading-relaxed text-muted"
              >
                {renderInline(block.text, key)}
              </p>
            );

          case "ul":
            return (
              <ul key={key} className="mt-5 space-y-3">
                {block.items.map((item, j) => (
                  <li
                    key={`${key}-${j}`}
                    className="relative pl-6 text-[1.05rem] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                  >
                    {renderInline(item, `${key}-${j}`)}
                  </li>
                ))}
              </ul>
            );

          case "callout":
            return (
              <aside
                key={key}
                className="mt-8 border-l-2 border-accent bg-card/50 py-5 pl-6 pr-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {block.label}
                </p>
                <p className="mt-2 text-[1.05rem] leading-relaxed text-content">
                  {renderInline(block.text, key)}
                </p>
              </aside>
            );

          case "quote":
            return (
              <blockquote
                key={key}
                className="mt-8 border-l-2 border-line pl-6 text-[1.15rem] italic leading-relaxed text-content"
              >
                {renderInline(block.text, key)}
              </blockquote>
            );

          case "figure":
            return (
              <figure key={key} className="my-14 flex flex-col items-center">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={768}
                  height={1154}
                  sizes="(max-width: 768px) 88vw, 460px"
                  className="h-auto w-[min(88vw,460px)] rounded-sm object-cover shadow-2xl"
                />
                {block.caption && (
                  <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
