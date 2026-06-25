// ============================================
// Team Page — Light Theme
// ============================================

import { motion } from 'framer-motion';
import PageTransition from '@components/PageTransition';
import TeamSection from '@components/TeamSection';

const Team = () => {
  return (
    <PageTransition>
      <div className="relative pt-32 pb-16 bg-salon-alt text-center border-b border-salon-border">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-xs tracking-[0.35em] uppercase mb-4">
          The Experts
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl font-bold text-text-primary mb-5">
          Meet Our{' '}
          <span className="text-primary-gradient">
            Team
          </span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-text-secondary max-w-lg mx-auto">
          The passionate artists behind every stunning transformation.
        </motion.p>
      </div>
      <TeamSection />
    </PageTransition>
  );
};

export default Team;
