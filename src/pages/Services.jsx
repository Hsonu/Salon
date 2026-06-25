// ============================================
// Services Page — Light Theme
// ============================================

import { motion } from 'framer-motion';
import PageTransition from '@components/PageTransition';
import ServicesSection from '@components/ServicesSection';

const Services = () => {
  return (
    <PageTransition>
      <div className="relative pt-32 pb-16 bg-salon-alt text-center border-b border-salon-border">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-xs tracking-[0.35em] uppercase mb-4">
          What We Offer
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl font-bold text-text-primary mb-5">
          Our{' '}
          <span className="text-primary-gradient">
            Services
          </span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-text-secondary max-w-lg mx-auto">
          13 premium services crafted for your ultimate beauty transformation.
        </motion.p>
      </div>
      <ServicesSection />
    </PageTransition>
  );
};

export default Services;
