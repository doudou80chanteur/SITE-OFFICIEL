import * as THREE from "three";

/**
 * Génère une pochette de substitution (placeholder) tant que les
 * visuels réels de David Swann ne sont pas fournis (cf. §11).
 * À remplacer par le chargement de `slide.cover` une fois les
 * pochettes haute résolution disponibles.
 */
export function makePlaceholderCover(
  color: string,
  label: string,
  size = 512,
): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // Fond sombre
  ctx.fillStyle = "#0b0b0b";
  ctx.fillRect(0, 0, size, size);

  // Halo diagonal teinté de la couleur du slide
  const grad = ctx.createLinearGradient(0, 0, size, size);
  grad.addColorStop(0, color);
  grad.addColorStop(0.55, "rgba(0,0,0,0)");
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  ctx.globalAlpha = 1;

  // Cadre fin
  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 2;
  ctx.strokeRect(20, 20, size - 40, size - 40);

  // Pastille de couleur
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2 - 40, 26, 0, Math.PI * 2);
  ctx.fill();

  // Libellé "placeholder"
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.textAlign = "center";
  ctx.font = "600 30px Inter, Helvetica, sans-serif";
  ctx.fillText(label.toUpperCase(), size / 2, size / 2 + 40);
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "500 16px Inter, Helvetica, sans-serif";
  ctx.fillText("POCHETTE - À FOURNIR", size / 2, size / 2 + 78);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}
