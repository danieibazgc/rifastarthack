// src/hooks/useCountUp.js
// Hook que anima un número desde 0 hasta un valor target en una duración dada

import { useState, useEffect, useRef } from 'react';

/**
 * @param {number} target  — Valor final al que se anima
 * @param {number} duration — Duración de la animación en ms (por defecto 1500)
 * @param {boolean} start  — Dispara la animación cuando es true
 * @returns {number} count — Valor actual animado
 */
export function useCountUp(target, duration = 1500, start = true) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start || target === 0) {
      setCount(0);
      return;
    }

    let startTime = null;
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(startValue + (target - startValue) * eased));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, duration, start]);

  return count;
}
