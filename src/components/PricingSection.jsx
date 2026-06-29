// ============================================
// Pricing Section — Sonu Bin Salon Gold Theme
// ============================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { pricingPlans, servicesPricing } from '@data/pricing';
import SectionHeader from './SectionHeader';

const PricingCard = ({ plan, index }) => {
  const isGold = plan.color === 'gold';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-3xl p-8 flex flex-col transition-all duration-500 shadow-sm border ${
        isGold
          ? 'border-[#C89B3C] shadow-lg shadow-[#C89B3C]/10 bg-[#111111] text-white'
          : 'border-[#E5E5E5] bg-white hover:border-[#C89B3C]/40 hover:shadow-lg text-[#333333]'
      }`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase text-white shadow-md bg-primary-gradient">
          Most Popular
        </div>
      )}

      {/* Plan name */}
      <div className="mb-6">
        <h3 className={`font-display text-2xl font-bold mb-1 ${isGold ? 'text-[#C89B3C]' : 'text-[#111111]'}`}>
          {plan.name}
        </h3>
        <p className="text-xs text-[#777777]">{plan.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-end gap-1">
          <span className="text-[#C89B3C] text-lg font-light">₹</span>
          <span className={`font-display text-5xl font-bold leading-none ${isGold ? 'text-primary-gradient' : 'text-[#111111]'}`}>
            {plan.price.toLocaleString('en-IN')}
          </span>
        </div>
        <p className="text-[#777777] text-[10px] mt-1.5 tracking-wider uppercase font-semibold">{plan.period}</p>
      </div>

      {/* Features */}
      <ul className="space-y-4 flex-1 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#C89B3C]/15 flex items-center justify-center shrink-0 mt-0.5">
              <FiCheck size={11} className="text-[#C89B3C]" strokeWidth={2.5} />
            </div>
            <span className={`text-xs ${isGold ? 'text-slate-200' : 'text-[#333333]'} font-light`}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        to="/appointment"
        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-xs tracking-wider transition-all duration-300 ${
          isGold
            ? 'text-white bg-primary-gradient hover:shadow-lg hover:shadow-[#C89B3C]/30 hover:-translate-y-0.5'
            : 'border border-[#E5E5E5] text-[#111111] hover:border-[#C89B3C] hover:text-[#C89B3C]'
        }`}
      >
        {plan.cta}
        <FiArrowRight size={13} />
      </Link>
    </motion.div>
  );
};

const PricingSection = () => {
  const categories = Object.keys(servicesPricing);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="py-24 bg-[#F8F8F8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Grooming Investment"
          title="Transparent"
          highlight="Packages"
          description="Bespoke luxury grooming experiences crafted under the direction of Sonu Bin. Select the perfect package."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* Category Price List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#E5E5E5] rounded-3xl p-6 sm:p-10 shadow-sm"
        >
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold">Bespoke Rates</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111111] mt-2">
              Individual Service Rates
            </h3>
            <div className="primary-divider mt-4" />
          </div>

          {/* Pricing Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === cat
                    ? 'text-white bg-primary-gradient shadow-md shadow-[#C89B3C]/25'
                    : 'border border-[#E5E5E5] bg-[#F8F8F8] text-[#333333] hover:border-[#C89B3C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Pricing Items Grid */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {servicesPricing[activeTab].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-4 px-5 rounded-2xl bg-[#F8F8F8] border border-[#E5E5E5] hover:border-[#C89B3C]/30 hover:bg-white transition-all duration-300"
                  >
                    <span className="text-sm text-[#333333] font-medium">{item.service}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-[#777777] font-light">Starting from</span>
                      <span className="text-[#C89B3C] text-sm font-bold">{item.price}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="text-center mt-12 pt-6 border-t border-[#E5E5E5]/60">
            <p className="text-xs text-[#777777] font-light mb-4">Looking for a custom combination of beauty treatments?</p>
            <Link to="/appointment" className="inline-flex items-center gap-2 text-xs font-bold text-[#C89B3C] hover:text-[#A37B2C] group">
              Customize Your Booking <FiArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
