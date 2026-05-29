import { useEffect } from 'react';

export function useMouseSpotlight() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let animationFrame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const update = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      document.documentElement.style.setProperty('--cursor-x', `${currentX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${currentY}px`);
      animationFrame = window.requestAnimationFrame(update);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    animationFrame = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);
}
