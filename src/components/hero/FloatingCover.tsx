"use client";

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { makePlaceholderCover } from "@/lib/placeholderTexture";
import type { HeroSlide } from "@/config/hero.config";

/**
 * Pochette flottante - texture appliquée sur un mesh "plaque" (cf. §6.3) :
 * lévitation permanente, parallaxe souris, et transition en fondu + recul
 * au changement de slide. Pochettes de substitution générées tant que les
 * visuels David Swann ne sont pas fournis (cf. §11).
 */

type FloatingCoverProps = {
  slides: HeroSlide[];
  active: number;
  parallax: boolean;
  animate: boolean;
  isMobile: boolean;
};

export function FloatingCover({
  slides,
  active,
  parallax,
  animate,
  isMobile,
}: FloatingCoverProps) {
  const mesh = useRef<THREE.Mesh>(null!);
  const mat = useRef<THREE.MeshBasicMaterial>(null!);

  // Pochette réelle (slide.cover) si fournie, sinon placeholder généré (cf. §11)
  const textures = useMemo(
    () =>
      slides.map((s) => {
        if (s.cover) {
          const tex = new THREE.TextureLoader().load(s.cover);
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.anisotropy = 8;
          return tex;
        }
        return makePlaceholderCover(s.smokeColor, s.title);
      }),
    [slides],
  );

  // Dimensions du plan par slide : carré pour les pochettes, portrait
  // (plus haut) pour les photos - pour ne jamais déformer le visuel.
  const sizes = useMemo(
    () =>
      slides.map((s) => {
        const aspect = s.aspect ?? 1;
        const h = aspect < 0.9 ? 3.5 : 2.55;
        return [h * aspect, h] as const;
      }),
    [slides],
  );
  const offsets = useMemo(() => slides.map((s) => s.offsetX ?? 0), [slides]);
  const brights = useMemo(() => slides.map((s) => s.brightness ?? 1), [slides]);

  const display = useRef(active);
  const fade = useRef(1);

  useFrame((state, dt) => {
    const t = animate ? state.clock.elapsedTime : 0;

    // Transition de slide : fondu + léger recul (cf. §6.3)
    if (display.current !== active) {
      fade.current = Math.max(0, fade.current - dt * 3.5);
      if (fade.current <= 0.02) {
        display.current = active;
        mat.current.map = textures[display.current];
        mat.current.needsUpdate = true;
      }
    } else {
      fade.current = Math.min(1, fade.current + dt * 3.5);
    }
    mat.current.opacity = fade.current;

    // Format + position + luminosité du visuel courant
    mesh.current.scale.set(sizes[display.current][0], sizes[display.current][1], 1);
    // Sur mobile : visuel recentré (le décalage droite ne vaut que desktop)
    mesh.current.position.x = isMobile ? 0 : offsets[display.current];
    mat.current.color.setScalar(brights[display.current]);

    // Lévitation lente + recul pendant la transition
    mesh.current.position.y =
      (animate ? Math.sin(t * 0.8) * 0.07 : 0) + (1 - fade.current) * 0.22;
    mesh.current.position.z = 1 - (1 - fade.current) * 0.4;

    // Parallaxe souris (desktop) - désactivée sur mobile / reduced-motion
    const px = parallax ? state.pointer.x : 0;
    const py = parallax ? state.pointer.y : 0;
    const k = 1 - Math.pow(0.002, dt);
    mesh.current.rotation.y += (px * 0.22 - mesh.current.rotation.y) * k;
    mesh.current.rotation.x += (-py * 0.16 - mesh.current.rotation.x) * k;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        ref={mat}
        map={textures[active]}
        transparent
        toneMapped={false}
      />
    </mesh>
  );
}
