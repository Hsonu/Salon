// ============================================
// Services Section Component — Light Theme
// ============================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import { services, serviceCategories } from '@data/services';
import SectionHeader from './SectionHeader';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-salon-border hover:border-primary/40 transition-all duration-500 card-hover shadow-sm hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase bg-white/90 backdrop-blur-sm border border-primary/30 text-primary font-semibold shadow-sm">
            {service.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
          {service.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-5 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <FiClock size={12} className="text-primary" />
            {service.duration}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-salon-border">
          <div>
            <span className="text-text-muted text-xs">Starting from</span>
            <p className="font-display text-xl font-bold text-primary-gradient">
              ₹{service.startingPrice.toLocaleString('en-IN')}
            </p>
          </div>

          <Link
            to="/appointment"
            className="group/btn flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 bg-primary-gradient"
          >
            Book Now
            <FiArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = ({ limit }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? (limit ? services.slice(0, limit) : services)
    : services.filter((s) => s.category === activeCategory).slice(0, limit || 999);

  return (
    <section id="services" className="py-24 bg-salon-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Expertise"
          title="Premium"
          highlight="Services"
          description="From precision cuts to transformative treatments, every service is delivered with artistry, care, and only the finest products."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-white shadow-md shadow-primary/30 bg-primary-gradient'
                  : 'border border-salon-border text-text-secondary bg-white hover:border-primary/40 hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* View All CTA */}
        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-primary text-primary text-sm font-medium tracking-wider hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Services
              <FiArrowRight size={15} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
