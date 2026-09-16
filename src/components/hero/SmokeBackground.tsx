"use client";

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

/**
 * Fond de fumée - shader GPU recréé (bruit fbm + domain warping),
 * teinté par la couleur du slide actif, concentré derrière la pochette
 * et se dissipant vers les bords (cf. §6.4). Aucune ressource du site
 * de référence n'est réutilisée (cf. §11).
 */

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uIntensity;
  uniform float uDensity;
  uniform vec2 uResolution;
  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 345.45));
    p += dot(p, p + 34.345);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  // fbm doux (grosses volutes arrondies)
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 6; i++) {
      v += a * noise(p);
      p = m * p;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    // Ancré en bas-centre : la fumée s'élève depuis le bas de la scène
    vec2 p = vec2((uv.x - 0.5) * aspect, uv.y);
    float t = uTime * 0.05;

    // Domain warping pour un roulis organique + advection vers le haut
    vec2 warp = vec2(
      fbm(p * 1.25 + vec2(0.0, -t * 2.0)),
      fbm(p * 1.25 + vec2(5.2, -t * 2.0 + 3.0))
    );
    vec2 q = p * 1.7 + (warp - 0.5) * 1.15;
    q.y -= t * 2.3; // monte

    // Grosses volutes douces + détail pour le duvet des bords
    float base = fbm(q);
    float detail = fbm(q * 2.4 + 11.0);
    float n = base * 0.72 + detail * 0.28;

    // Dôme de fumée s'élevant du sol : dégradé vertical (dense en bas,
    // s'éteint vers le haut), bombé au centre, bord supérieur duveteux
    // défini par le bruit -> aspect fog-machine d'ouverture de concert.
    float h = uv.y;
    float vfall = clamp(1.0 - h / 0.88, 0.0, 1.0);            // hauteur du dôme
    float cbias = 1.0 - pow(abs(uv.x - 0.5) * 2.0, 1.8) * 0.5; // sommet bombé
    float amount = (vfall * cbias + (n - 0.5) * 0.7) * uDensity;

    // Bords doux et duveteux
    float density = smoothstep(0.0, 0.5, amount);
    density *= 0.8 + 0.2 * detail;                            // grain interne

    // Contre-jour : noyau lumineux derrière la pochette
    float d = length((uv - vec2(0.5, 0.52)) * vec2(1.1, 1.0));
    float core = smoothstep(0.9, 0.0, d);

    // Fumée colorée dense et douce, éclairée plus fort au centre,
    // crêtes les plus denses légèrement blanchies (fog qui capte la lumière).
    vec3 lightCol = uColor;
    float bright = 0.82 + 0.5 * core;
    vec3 col = lightCol * density * bright;
    col += mix(lightCol, vec3(1.0), 0.4) * pow(density, 3.0) * core * 0.35;
    col *= uIntensity;

    gl_FragColor = vec4(col, 1.0);
  }
`;

type SmokeBackgroundProps = {
  color: string;
  animate: boolean;
  intensity?: number;
  density?: number;
};

export function SmokeBackground({
  color,
  animate,
  intensity = 1.85,
  density = 1.2,
}: SmokeBackgroundProps) {
  const { viewport } = useThree();
  const target = useMemo(() => new THREE.Color(color), [color]);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: new THREE.Color(color) },
          uIntensity: { value: intensity },
          uDensity: { value: density },
          uResolution: { value: new THREE.Vector2(1, 1) },
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useFrame((state, dt) => {
    const u = material.uniforms;
    if (animate) u.uTime.value = state.clock.elapsedTime;
    (u.uResolution.value as THREE.Vector2).set(state.size.width, state.size.height);
    // Transition douce de teinte au changement de slide (cf. §6.4)
    target.set(color);
    (u.uColor.value as THREE.Color).lerp(target, 1 - Math.pow(0.0015, dt));
  });

  return (
    <mesh
      position={[0, 0, 0]}
      scale={[viewport.width * 1.05, viewport.height * 1.05, 1]}
    >
      <planeGeometry args={[1, 1]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}
