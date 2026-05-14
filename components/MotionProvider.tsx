
'use client';

import {
  useParallaxMotion,
  usePointerGlow,
  useRevealMotion,
  useScrollProgress,
  useTiltMotion,
  useCardSpotlight,
} from '@/lib/motion';

export function MotionProvider() {
  useRevealMotion();
  useScrollProgress();
  usePointerGlow();
  useTiltMotion();
  useParallaxMotion();
  useCardSpotlight();

  return (
    <>
      <div className="scrollProgress" data-scroll-progress />
      <div className="pointerGlow" data-pointer-glow />
    </>
  );
}
