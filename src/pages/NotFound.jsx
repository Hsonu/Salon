// ============================================
// 404 NotFound Page — Sonu Bin Salon Gold Theme
// ============================================

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import PageTransition from '@components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#111111] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Luxury radial gold glow */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)' }} />

        <div className="text-center relative z-10">
          {/* 404 Number */}
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: 'spring' }} className="relative mb-6">
            <p className="font-display text-[180px] sm:text-[240px] font-bold leading-none select-none text-primary-gradient opacity-20">
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-[#C89B3C]/30 bg-primary-gradient">
                <span className="font-display text-2xl font-bold text-white">SB</span>
              </div>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Page Not Found
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-[#777777] mb-10 max-w-md mx-auto leading-relaxed font-light text-sm">
            The page you're looking for doesn't exist or has been moved. Let's get you back to your beauty journey.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-4">
            <button onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#E5E5E5]/20 text-[#777777] text-xs font-bold hover:text-white hover:border-[#C89B3C] transition-all duration-300 bg-white/5 backdrop-blur-sm">
              <FiArrowLeft size={14} /> Go Back
            </button>
            <Link to="/"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#C89B3C]/30 hover:-translate-y-1 bg-primary-gradient">
              <FiHome size={14} /> Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
