/**
 * Décor de fond très subtil pour les pages claires : anneaux concentriques
 * fins (rappel du cercle néon de la pochette « Insomnies ») et un halo
 * d'accent à peine perceptible, pour casser le fond blanc sans surcharger.
 * Fixe au viewport, derrière le contenu, non interactif.
 */
export function LightDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Anneaux haut-droite */}
      <svg
        viewBox="0 0 600 600"
        fill="none"
        className="absolute -right-[12%] -top-[22%] h-[70vmax] w-[70vmax] text-content opacity-[0.018]"
      >
        <circle cx="300" cy="300" r="299" stroke="currentColor" strokeWidth="1" />
        <circle cx="300" cy="300" r="232" stroke="currentColor" strokeWidth="1" />
        <circle cx="300" cy="300" r="165" stroke="currentColor" strokeWidth="1" />
        <circle cx="300" cy="300" r="98" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Anneaux bas-gauche */}
      <svg
        viewBox="0 0 600 600"
        fill="none"
        className="absolute -bottom-[26%] -left-[16%] h-[55vmax] w-[55vmax] text-content opacity-[0.015]"
      >
        <circle cx="300" cy="300" r="299" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="300" cy="300" r="210" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="300" cy="300" r="120" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      {/* Halo d'accent à peine perceptible */}
      <div
        className="absolute -right-[10%] top-[8%] h-[42vmax] w-[42vmax] rounded-full opacity-[0.025]"
        style={{
          background:
            "radial-gradient(circle, rgb(185 28 74) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
