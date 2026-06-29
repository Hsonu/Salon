// ============================================
// Hero Component — Sonu Bin Salon Gold Theme
// ============================================

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80)',
        }}
      />

      {/* Dark overlay with gold accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/30" />

      {/* Decorative luxury glow */}
      <div className="absolute top-1/4 right-20 w-80 h-80 rounded-full bg-[#C89B3C]/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#C89B3C]/40 bg-[#C89B3C]/10"
          >
            <FiStar className="text-[#C89B3C]" size={12} fill="currentColor" />
            <span className="text-[#C89B3C] text-[10px] tracking-[0.25em] uppercase font-bold">
              Premium Luxury Salon
            </span>
            <FiStar className="text-[#C89B3C]" size={12} fill="currentColor" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6"
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
            className="text-[#777777] text-base sm:text-lg leading-relaxed mb-10 max-w-xl font-light"
          >
            Indulge in unparalleled luxury grooming, customized hair treatments, and exquisite makeup. Under the guidance of owner Sonu Bin, we craft your finest aesthetic.
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
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white tracking-wider text-xs bg-primary-gradient hover:shadow-xl hover:shadow-[#C89B3C]/35 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Book Appointment
              <FiArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/services"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-[#E5E5E5]/20 hover:border-[#C89B3C] hover:text-[#C89B3C] tracking-wider text-xs transition-all duration-300 bg-white/5 backdrop-blur-sm"
            >
              Explore Services
              <FiArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-[#E5E5E5]/10"
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
                <p className="text-[#777777] text-[10px] tracking-widest uppercase font-semibold">{stat.label}</p>
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
        <span className="text-[#777777] text-[9px] tracking-[0.3em] uppercase font-semibold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#C89B3C] to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
