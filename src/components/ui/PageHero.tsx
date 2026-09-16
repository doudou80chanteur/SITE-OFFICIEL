/** En-tête de page éditoriale, sous le header fixe. */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="container-shell pt-32 md:pt-40">
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h1 className="text-[clamp(2.5rem,9vw,7rem)] text-content">{title}</h1>
      {intro && (
        <p className="mt-6 max-w-2xl text-base text-muted">{intro}</p>
      )}
    </header>
  );
}

/** Bloc indiquant un emplacement de contenu à compléter. */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-shell py-16">
      <div className="rounded-sm border border-dashed border-line bg-card p-10 text-sm text-muted">
        {children}
      </div>
    </div>
  );
}
