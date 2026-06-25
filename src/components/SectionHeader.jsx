// ============================================
// SectionHeader — Light Theme
// ============================================

import { motion } from 'framer-motion';

const SectionHeader = ({ subtitle, title, highlight, description, center = true }) => {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary text-xs tracking-[0.3em] uppercase font-medium mb-3"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl font-bold text-text-primary mb-4 leading-tight"
      >
        {title}{' '}
        {highlight && (
          <span className="text-primary-gradient">
            {highlight}
          </span>
        )}
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-0.5 bg-gradient-to-r from-primary to-primary-light mb-5 ${center ? 'mx-auto' : ''}`}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`text-text-secondary text-base leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
