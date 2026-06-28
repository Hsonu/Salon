// ============================================
// FAQ Page Component — Sonu Bin Salon
// ============================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiPlus, FiMinus, FiPhone, FiMail } from 'react-icons/fi';
import { faqCategories } from '@data/faq';
import PageTransition from '@components/PageTransition';

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
      isOpen ? 'border-[#C89B3C] bg-white shadow-lg shadow-[#C89B3C]/5' : 'border-[#E5E5E5] bg-white hover:border-[#C89B3C]/35'
    }`}>
      <button onClick={onToggle} className="w-full flex items-center justify-between px-6 py-5 text-left">
        <span className={`font-semibold text-base pr-6 transition-colors duration-300 ${isOpen ? 'text-[#C89B3C]' : 'text-[#111111]'}`}>
          {item.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
          isOpen ? 'text-white bg-primary-gradient' : 'border border-[#E5E5E5] text-[#777777]'
        }`}>
          {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-1 border-t border-[#E5E5E5]/50 text-[#333333] text-sm leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  // Filter FAQs based on search and category
  const filteredCategories = faqCategories.map(cat => {
    const matchedItems = cat.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, items: matchedItems };
  }).filter(cat => 
    (activeCategory === 'all' || cat.id === activeCategory) && cat.items.length > 0
  );

  return (
    <PageTransition>
      {/* Banner */}
      <div className="relative pt-32 pb-20 bg-[#111111] text-center overflow-hidden">
        {/* Luxury Gold lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C89B3C] text-xs tracking-[0.35em] uppercase mb-4">Support & FAQ</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-primary-gradient">Questions</span>
          </h1>
          <p className="text-[#777777] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Find answers to standard questions about appointments, hair treatments, spa packages, pricing, and salon guidelines.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-[#F8F8F8] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search bar */}
          <div className="relative mb-12">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777777]" size={20} />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E5E5E5] rounded-full pl-14 pr-6 py-4.5 text-[#111111] text-sm shadow-sm focus:outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/10 transition-all duration-300"
            />
          </div>

          {/* Categories Tab */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => { setActiveCategory('all'); setOpenIndex(null); }}
              className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'text-white bg-primary-gradient shadow-md shadow-[#C89B3C]/25'
                  : 'border border-[#E5E5E5] bg-white text-[#333333] hover:border-[#C89B3C]'
              }`}
            >
              All Topics
            </button>
            {faqCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'text-white bg-primary-gradient shadow-md shadow-[#C89B3C]/25'
                    : 'border border-[#E5E5E5] bg-white text-[#333333] hover:border-[#C89B3C]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className="space-y-8">
            {filteredCategories.length > 0 ? (
              filteredCategories.map(cat => (
                <div key={cat.id} className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-[#111111] border-b border-[#E5E5E5] pb-2 mb-4">
                    {cat.name}
                  </h3>
                  <div className="space-y-3">
                    {cat.items.map((item, idx) => {
                      const globalIdx = `${cat.id}-${idx}`;
                      return (
                        <FAQItem
                          key={globalIdx}
                          item={item}
                          isOpen={openIndex === globalIdx}
                          onToggle={() => setOpenIndex(openIndex === globalIdx ? null : globalIdx)}
                        />
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-[#E5E5E5] shadow-sm">
                <p className="text-[#777777] mb-2">No answers matched your search query.</p>
                <button onClick={() => setSearchQuery('')} className="text-[#C89B3C] font-semibold text-sm underline">
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* Need help footer section */}
          <div className="mt-20 p-8 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm text-center">
            <h3 className="font-display text-2xl font-bold text-[#111111] mb-2">Still have questions?</h3>
            <p className="text-[#777777] text-sm mb-6 max-w-lg mx-auto">
              Our support team is online and ready to assist you. Get in touch directly and we will clear up any doubts.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+918603632642" className="flex items-center gap-2 text-sm text-[#333333] hover:text-[#C89B3C] transition-colors">
                <FiPhone className="text-[#C89B3C]" />
                <span>+91 86036 32642</span>
              </a>
              <a href="mailto:hello@sonubinsalon.in" className="flex items-center gap-2 text-sm text-[#333333] hover:text-[#C89B3C] transition-colors">
                <FiMail className="text-[#C89B3C]" />
                <span>hello@sonubinsalon.in</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};

export default FAQPage;
