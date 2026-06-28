// ============================================
// Navbar Component — Sonu Bin Salon Gold Theme
// ============================================

import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import useScrollPosition from '@hooks/useScrollPosition';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Team', path: '/team' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const isScrolled = scrollY > 60;

  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#E5E5E5] py-3 shadow-md shadow-[#C89B3C]/5'
          : 'bg-transparent border-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 bg-primary-gradient">
                <span className="font-display font-bold text-sm text-white">SB</span>
              </div>
              <div>
                <p className={`font-display text-lg font-bold leading-none tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#111111]' : 'text-white'}`}>
                  Sonu Bin Salon
                </p>
                <p className="text-[9px] tracking-[0.22em] uppercase text-[#C89B3C] mt-1 font-semibold">
                  Luxury & Beauty
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink key={link.path} to={link.path} end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 group py-1 ${isActive ? 'text-[#C89B3C]' : (isScrolled ? 'text-[#333333] hover:text-[#C89B3C]' : 'text-white/80 hover:text-white')
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full bg-[#C89B3C]' : 'w-0 bg-[#C89B3C] group-hover:w-full'}`} />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden xl:flex items-center gap-6">
              <a href="tel:+918603632642"
                className={`flex items-center gap-2 text-xs font-semibold transition-colors duration-300 ${isScrolled ? 'text-[#333333] hover:text-[#C89B3C]' : 'text-white/80 hover:text-white'}`}>
                <FiPhone size={14} className="text-[#C89B3C]" />
                <span className="tracking-wide">+91 86036 32642</span>
              </a>
              <Link to="/appointment"
                className="px-5 py-2.5 rounded-full text-xs tracking-wider font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#C89B3C]/25 hover:-translate-y-0.5 bg-primary-gradient shadow-md">
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className={`lg:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-[#111111] hover:text-[#C89B3C]' : 'text-white hover:text-[#C89B3C]'}`} aria-label="Toggle menu">
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FiX size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FiMenu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-[#111111]/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white border-l border-[#E5E5E5] p-8 flex flex-col shadow-2xl overflow-y-auto">
              <div className="mb-10 flex justify-between items-center">
                <div>
                  <p className="font-display text-xl font-bold text-[#111111]">Sonu Bin Salon</p>
                  <p className="text-[9px] tracking-[0.2em] text-[#C89B3C] uppercase mt-1 font-semibold">Luxury & Beauty</p>
                </div>
                <button onClick={() => setMenuOpen(false)} className="text-[#111111] p-1.5 rounded-full border border-[#E5E5E5] hover:text-[#C89B3C]">
                  <FiX size={18} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 flex-1 mb-8">
                {navLinks.map((link, i) => (
                  <motion.div key={link.path} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <NavLink to={link.path} end={link.path === '/'}
                      className={({ isActive }) =>
                        `block py-3 px-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-200 ${isActive ? 'text-white bg-primary-gradient' : 'text-[#333333] hover:text-[#C89B3C] hover:bg-[#F8F8F8]'}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="pt-6 border-t border-[#E5E5E5] space-y-4">
                <a href="tel:+918603632642" className="flex items-center gap-2 text-xs font-semibold text-[#333333] hover:text-[#C89B3C] transition-colors">
                  <FiPhone className="text-[#C89B3C]" />
                  <span>+91 86036 32642</span>
                </a>
                <Link to="/appointment"
                  className="block w-full text-center py-3.5 rounded-full text-xs font-semibold tracking-wider text-white bg-primary-gradient shadow-md shadow-[#C89B3C]/20"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
