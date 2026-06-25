// ============================================
// ScrollToTop — Back to top button
// ============================================

import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import useScrollPosition from '@hooks/useScrollPosition';

const ScrollToTop = () => {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > 400;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          aria-label="Back to top"
          className="fixed bottom-24 right-5 z-40 w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:shadow-primary/30 transition-all duration-300 group bg-primary-gradient"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowUp size={18} className="text-white font-bold" strokeWidth={2.5} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
