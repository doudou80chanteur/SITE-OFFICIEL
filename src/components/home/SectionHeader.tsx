import Link from "next/link";

export function SectionHeader({
  title,
  linkLabel,
  linkHref,
}: {
  title: string;
  linkLabel?: string;
  linkHref?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
      <h2 className="text-[clamp(1.8rem,5vw,3rem)] text-white">{title}</h2>
      {linkLabel && linkHref && (
        <Link href={linkHref} className="link-accent shrink-0">
          {linkLabel}
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
