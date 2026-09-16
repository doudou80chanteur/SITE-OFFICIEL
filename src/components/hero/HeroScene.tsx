"use client";

import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { SmokeBackground } from "./SmokeBackground";
import { FloatingCover } from "./FloatingCover";
import type { HeroSlide } from "@/config/hero.config";

/**
 * Scène 3D du hero (cf. §6.2) : canvas WebGL plein cadre, fumée en fond,
 * pochette flottante, éclairage doux + post-processing bloom/vignette.
 */

type HeroSceneProps = {
  slides: HeroSlide[];
  active: number;
  parallax: boolean;
  animate: boolean;
  bloomIntensity: number;
  paused: boolean;
  isMobile: boolean;
};

export function HeroScene({
  slides,
  active,
  parallax,
  animate,
  bloomIntensity,
  paused,
  isMobile,
}: HeroSceneProps) {
  return (
    <Canvas
      // Cap du devicePixelRatio (~2) pour la performance (cf. §6.7)
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      // Throttling : pas de rendu quand le hero n'est pas visible (cf. §6.7)
      frameloop={paused ? "never" : "always"}
    >
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.7} />
      <SmokeBackground color={slides[active].smokeColor} animate={animate} />
      <FloatingCover
        slides={slides}
        active={active}
        parallax={parallax}
        animate={animate}
        isMobile={isMobile}
      />
      <EffectComposer>
        <Bloom
          intensity={bloomIntensity}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.3}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.25} darkness={0.85} />
      </EffectComposer>
    </Canvas>
  );
}
