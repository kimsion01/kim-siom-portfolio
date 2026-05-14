
'use client';

import { useEffect } from 'react';

type MotionOptions = {
  selector?: string;
  threshold?: number;
};

export function useRevealMotion(options: MotionOptions = {}) {
  const { selector = '[data-reveal]', threshold = 0.14 } = options;

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            target.classList.add('is-visible');
            observer.unobserve(target);
          }
        });
      },
      { threshold },
    );

    targets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${Math.min(index * 35, 280)}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [selector, threshold]);
}

export function useScrollProgress() {
  useEffect(() => {
    const progress = document.querySelector<HTMLElement>('[data-scroll-progress]');
    if (!progress) return;

    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = total > 0 ? window.scrollY / total : 0;
      progress.style.transform = `scaleX(${ratio})`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
}

export function usePointerGlow() {
  useEffect(() => {
    const glow = document.querySelector<HTMLElement>('[data-pointer-glow]');
    if (!glow) return;

    const move = (event: PointerEvent) => {
      glow.style.opacity = '1';
      glow.style.transform = `translate(${event.clientX - 210}px, ${event.clientY - 210}px)`;
    };

    const leave = () => {
      glow.style.opacity = '0';
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerleave', leave);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerleave', leave);
    };
  }, []);
}

export function useTiltMotion(selector = '[data-tilt]') {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(selector);

    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const handleMove = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        card.style.setProperty('--tilt-x', `${(-y * 4).toFixed(2)}deg`);
        card.style.setProperty('--tilt-y', `${(x * 4).toFixed(2)}deg`);
      };

      const handleLeave = () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      };

      card.addEventListener('pointermove', handleMove);
      card.addEventListener('pointerleave', handleLeave);

      cleanups.push(() => {
        card.removeEventListener('pointermove', handleMove);
        card.removeEventListener('pointerleave', handleLeave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [selector]);
}

export function useParallaxMotion(selector = '[data-parallax]') {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    const update = () => {
      if (window.matchMedia('(max-width: 900px)').matches) {
        elements.forEach((element) => {
          element.style.transform = '';
        });
        return;
      }

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        const y = Math.max(Math.min(center * -0.026, 24), -24);
        element.style.setProperty('--parallax-y', `${y}px`);
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [selector]);
}


export function useCardSpotlight(selector = '.motionCard') {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(selector);
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const handleMove = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        card.style.setProperty('--my', `${event.clientY - rect.top}px`);
      };

      card.addEventListener('pointermove', handleMove);
      cleanups.push(() => card.removeEventListener('pointermove', handleMove));
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [selector]);
}
