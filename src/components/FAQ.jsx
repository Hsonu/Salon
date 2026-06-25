// ============================================
// FAQ Accordion — Light Theme
// ============================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { faqs } from '@data/faq';
import SectionHeader from './SectionHeader';

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'border-primary/40 bg-salon-alt'
          : 'border-salon-border bg-white hover:border-primary/20'
      } shadow-sm`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className={`font-medium text-base pr-6 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-text-primary'}`}>
          {faq.question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen ? 'text-white bg-primary-gradient' : 'border border-salon-border text-text-muted'
          }`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="minus" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }} transition={{ duration: 0.2 }}>
                <FiMinus size={14} />
              </motion.div>
            ) : (
              <motion.div key="plus" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                <FiPlus size={14} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <p className="px-6 pb-5 text-text-secondary text-sm leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Got Questions?"
          title="Frequently Asked"
          highlight="Questions"
          description="Everything you need to know about SJ Salon's services, policies, and experience."
        />

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
