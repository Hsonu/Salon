// ============================================
// Loader Component — Luxury animated intro (Light Theme)
// ============================================

import { motion, AnimatePresence } from 'framer-motion';
import { useLoader } from '@context/LoaderContext';

const Loader = () => {
  const { isLoading } = useLoader();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Animated circles */}
          <div className="relative flex items-center justify-center w-32 h-32 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary opacity-80"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-3 rounded-full border-b-2 border-l-2 border-primary-light opacity-40"
            />
            {/* Center logo */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="z-10 text-center"
            >
              <span className="font-display text-2xl font-bold text-primary-gradient">
                SJ
              </span>
            </motion.div>
          </div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-3xl tracking-widest text-text-primary mb-2"
          >
            SJ Salon
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-primary font-light"
          >
            Luxury · Beauty · Wellness
          </motion.p>

          {/* Loading bar */}
          <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-px bg-salon-border overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
              className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
