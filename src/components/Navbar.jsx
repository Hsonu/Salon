// ============================================
// Navbar Component — Teal Theme
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
  { label: 'Contact', path: '/contact' },
];

const C = '#0f766e'; // primary teal
const CL = '#14b8a6'; // light teal

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
          ? 'bg-white/96 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm shadow-teal-600/10'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-100/70 py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #0f766e, #065f46)' }}>
                <span className="font-display font-bold text-lg text-white">SJ</span>
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-[#0f172a] leading-tight tracking-wide">SJ Salon</p>
                <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: C }}>Luxury & Beauty</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink key={link.path} to={link.path} end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative text-sm font-medium tracking-wider transition-colors duration-300 group ${isActive ? '' : 'text-slate-500 hover:text-[#0f172a]'
                    }`
                  }
                  style={({ isActive }) => isActive ? { color: C } : {}}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                        style={{ background: C }} />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+918603632642"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#0f766e] transition-colors duration-300">
                <FiPhone size={14} style={{ color: C }} />
                <span className="tracking-wide">+91 86036 32642</span>
              </a>
              <Link to="/appointment"
                className="px-5 py-2.5 rounded-full text-sm tracking-wider font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #0f766e, #065f46)', boxShadow: '0 4px 15px rgba(15,118,110,0.25)' }}>
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-[#0f172a] hover:text-[#0f766e] transition-colors duration-300" aria-label="Toggle menu">
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
            <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white border-l border-slate-200 p-8 flex flex-col shadow-2xl">
              <div className="mb-10">
                <p className="font-display text-2xl font-semibold text-[#0f172a]">SJ Salon</p>
                <p className="text-xs tracking-[0.25em] uppercase mt-1" style={{ color: C }}>Luxury & Beauty</p>
              </div>
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div key={link.path} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                    <NavLink to={link.path} end={link.path === '/'}
                      className={({ isActive }) =>
                        `block py-3 px-4 rounded-lg text-base font-medium tracking-wider transition-all duration-200 ${isActive ? 'text-white' : 'text-slate-500 hover:text-[#0f172a] hover:bg-slate-50'}`
                      }
                      style={({ isActive }) => isActive ? { background: 'linear-gradient(135deg, #0f766e, #065f46)', color: '#fff' } : {}}>
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <a href="tel:+918603632642" className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#0f766e] transition-colors">
                  <FiPhone style={{ color: C }} />
                  <span>+91 86036 32642</span>
                </a>
                <Link to="/appointment"
                  className="block w-full text-center py-3 rounded-full text-sm font-semibold tracking-wider text-white"
                  style={{ background: 'linear-gradient(135deg, #0f766e, #065f46)' }}>
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
