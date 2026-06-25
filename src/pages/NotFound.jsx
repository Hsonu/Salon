// ============================================
// 404 NotFound Page — Light Theme
// ============================================

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import PageTransition from '@components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-salon-alt flex items-center justify-center px-4">
        <div className="text-center">
          {/* 404 Number */}
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: 'spring' }} className="relative mb-6">
            <p className="font-display text-[180px] sm:text-[240px] font-bold leading-none select-none"
              style={{ background: 'linear-gradient(135deg, rgba(15, 118, 110, 0.15), rgba(20, 184, 166, 0.08))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 bg-primary-gradient">
                <span className="font-display text-2xl font-bold text-white">SJ</span>
              </div>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Page Not Found
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-text-secondary mb-10 max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back to your beauty journey.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-4">
            <button onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-salon-border text-text-secondary text-sm hover:text-text-primary hover:border-primary/30 transition-all duration-300 bg-white">
              <FiArrowLeft size={14} /> Go Back
            </button>
            <Link to="/"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 bg-primary-gradient">
              <FiHome size={14} /> Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
