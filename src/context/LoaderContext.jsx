// ============================================
// LoaderContext — Global loading state
// ============================================

import { createContext, useContext, useState, useEffect } from 'react';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) throw new Error('useLoader must be used within LoaderProvider');
  return context;
};
