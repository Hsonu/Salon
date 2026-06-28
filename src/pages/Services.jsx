// ============================================
// Services Page — Sonu Bin Salon Gold Theme
// ============================================

import { motion } from 'framer-motion';
import PageTransition from '@components/PageTransition';
import ServicesSection from '@components/ServicesSection';

const Services = () => {
  return (
    <PageTransition>
      <div className="relative pt-32 pb-16 bg-[#111111] text-center border-b border-[#C89B3C]/10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#C89B3C] text-xs tracking-[0.35em] uppercase mb-4">
            What We Offer
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl font-bold text-white mb-5">
            Our Luxury <span className="text-primary-gradient">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-[#777777] max-w-lg mx-auto text-sm sm:text-base leading-relaxed font-light">
            Explore 19 premium services crafted under the guidance of Sonu Bin for your ultimate hair, skin, and makeup transformation.
          </motion.p>
        </div>
      </div>
      <ServicesSection />
    </PageTransition>
  );
};

export default Services;
