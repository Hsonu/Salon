// ============================================
// useCountUp Hook
// Animates a number from 0 to target when in view
// ============================================

import { useState, useEffect, useRef } from 'react';

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startValue + (target - startValue) * eased));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, start]);

  return count;
};

export default useCountUp;
