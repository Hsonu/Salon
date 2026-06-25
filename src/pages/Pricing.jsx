// ============================================
// Pricing Page — Light Theme
// ============================================

import { motion } from 'framer-motion';
import PageTransition from '@components/PageTransition';
import PricingSection from '@components/PricingSection';

const Pricing = () => {
  return (
    <PageTransition>
      <div className="relative pt-32 pb-16 bg-salon-alt text-center border-b border-salon-border">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-xs tracking-[0.35em] uppercase mb-4">
          Transparent Rates
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl font-bold text-text-primary mb-5">
          Our{' '}
          <span className="text-primary-gradient">
            Pricing
          </span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-text-secondary max-w-lg mx-auto">
          Premium quality, fair pricing. No hidden costs, ever.
        </motion.p>
      </div>
      <PricingSection />
    </PageTransition>
  );
};

export default Pricing;
