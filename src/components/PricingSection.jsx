// ============================================
// Pricing Section — Light Theme
// ============================================

import { motion } from 'framer-motion';
import { FiCheck, FiX, FiArrowRight } from 'react-icons/fi';
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
      className={`relative rounded-2xl p-8 flex flex-col transition-all duration-500 shadow-sm ${
        isGold
          ? 'shadow-primary/20 shadow-xl'
          : 'border border-salon-border bg-white hover:border-primary/20 hover:shadow-lg'
      }`}
      style={
        isGold
          ? {
              background: 'linear-gradient(160deg, var(--color-salon-alt) 0%, rgba(20,184,166,0.06) 100%)',
              border: '1px solid rgba(15,118,110,0.4)',
            }
          : {}
      }
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-white shadow-md bg-primary-gradient">
          Most Popular
        </div>
      )}

      {/* Plan name */}
      <div className="mb-6">
        <h3 className={`font-display text-2xl font-bold mb-1 ${isGold ? 'text-primary' : 'text-text-primary'}`}>
          {plan.name}
        </h3>
        <p className="text-text-secondary text-sm">{plan.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-end gap-1">
          <span className="text-text-muted text-lg font-light">₹</span>
          <span className={`font-display text-5xl font-bold leading-none ${isGold ? 'text-primary-gradient' : 'text-text-primary'}`}>
            {plan.price.toLocaleString('en-IN')}
          </span>
        </div>
        <p className="text-text-muted text-xs mt-1 tracking-wider">{plan.period}</p>
      </div>

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: 'rgba(15,118,110,0.15)' }}
            >
              <FiCheck size={11} className="text-primary" strokeWidth={2.5} />
            </div>
            <span className="text-text-secondary text-sm">{feature}</span>
          </li>
        ))}
        {plan.notIncluded.map((feature) => (
          <li key={feature} className="flex items-start gap-3 opacity-50">
            <div className="w-5 h-5 rounded-full border border-salon-border flex items-center justify-center shrink-0 mt-0.5">
              <FiX size={11} className="text-text-muted" />
            </div>
            <span className="text-text-muted text-sm line-through">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        to="/appointment"
        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 ${
          isGold
            ? 'text-white bg-primary-gradient hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1'
            : 'border border-salon-border text-text-primary hover:border-primary hover:text-primary'
        }`}
      >
        {plan.cta}
        <FiArrowRight size={14} />
      </Link>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Investment in You"
          title="Transparent"
          highlight="Pricing"
          description="Premium quality with no hidden costs. Choose the perfect package for your beauty journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* Service Price List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-salon-alt border border-salon-border rounded-2xl p-8"
        >
          <h3 className="font-display text-2xl font-semibold text-text-primary mb-6 text-center">
            Individual Service Rates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {servicesPricing.map((item) => (
              <div
                key={item.service}
                className="flex items-center justify-between py-3 px-4 rounded-xl bg-white border border-salon-border"
              >
                <span className="text-text-secondary text-sm">{item.service}</span>
                <span className="text-primary text-sm font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
