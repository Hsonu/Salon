// ============================================
// Hero Component — Light Theme
// ============================================

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80)',
        }}
      />

      {/* Light cream overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />

      {/* Decorative primary glow */}
      <div className="absolute top-1/4 right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-primary-light/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/40 bg-primary/10"
          >
            <FiStar className="text-primary" size={12} fill="currentColor" />
            <span className="text-primary text-xs tracking-[0.25em] uppercase font-medium">
              Premium Luxury Salon
            </span>
            <FiStar className="text-primary" size={12} fill="currentColor" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-primary leading-[1.05] mb-6"
          >
            Where Beauty
            <br />
            <span className="text-primary-gradient">
              Meets Art
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Experience unparalleled luxury grooming and beauty services. Each visit is a curated
            journey crafted to bring out your finest version.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/appointment"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white tracking-wider text-sm bg-primary-gradient hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              Book Appointment
              <FiArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/services"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-medium text-text-primary border border-salon-border hover:border-primary hover:text-primary tracking-wider text-sm transition-all duration-300 bg-white/70 backdrop-blur-sm"
            >
              Explore Services
              <FiArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-salon-border"
          >
            {[
              { value: '10K+', label: 'Happy Clients' },
              { value: '15+', label: 'Expert Stylists' },
              { value: '12+', label: 'Years of Excellence' },
              { value: '4.9★', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold mb-1 text-primary-gradient">
                  {stat.value}
                </p>
                <p className="text-text-muted text-xs tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
