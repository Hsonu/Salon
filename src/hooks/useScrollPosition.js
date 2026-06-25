// ============================================
// useScrollPosition Hook
// Returns the current window scroll Y position
// ============================================

import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

export default useScrollPosition;
