// ============================================
// Footer Component — Full Width + Teal Theme
// Updated: Mumbai SEEPZ 400096 | WA: 8603632642
// ============================================

import { Link } from 'react-router-dom';
import {
  FiInstagram, FiTwitter, FiFacebook, FiYoutube,
  FiMapPin, FiPhone, FiMail, FiClock
} from 'react-icons/fi';

const footerLinks = {
  Services: [
    { label: 'Hair Cut & Style', path: '/services' },
    { label: 'Hair Color', path: '/services' },
    { label: 'Keratin Treatment', path: '/services' },
    { label: 'Bridal Makeup', path: '/services' },
    { label: 'Luxury Facial', path: '/services' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/team' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ],
};

const socials = [
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiFacebook, href: '#', label: 'Facebook' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiYoutube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f172a]">
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #0f766e, #14b8a6, #065f46)' }} />

      {/* Main Footer — full width with horizontal padding */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full border border-[#0f766e]/60 flex items-center justify-center"
                  style={{ background: 'rgba(15,118,110,0.15)' }}>
                  <span className="font-display font-bold text-xl text-[#14b8a6]">SJ</span>
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-white">SJ Salon</p>
                  <p className="text-[10px] tracking-[0.2em] text-[#14b8a6] uppercase">Luxury & Beauty</p>
                </div>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Elevating beauty to an art form. Experience luxury, precision, and transformation at SJ Salon — where every client is treated royally.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#0f766e] transition-all duration-300"
                  style={{}}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(15,118,110,0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = ''; }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold tracking-widest text-xs uppercase mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-[#0f766e]" />
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path}
                      className="text-slate-400 text-sm hover:text-[#14b8a6] transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-0 h-px bg-[#14b8a6] group-hover:w-3 transition-all duration-300 inline-block" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold tracking-widest text-xs uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#0f766e]" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <FiMapPin className="text-[#14b8a6] shrink-0 mt-0.5" size={15} />
                <span className="text-slate-400 text-sm leading-relaxed">
                  SEEPZ, Andheri (East),<br />Mumbai — 400096
                </span>
              </li>
              <li>
                <a href="tel:+918603632642"
                  className="flex gap-3 text-slate-400 text-sm hover:text-[#14b8a6] transition-colors duration-300">
                  <FiPhone className="text-[#14b8a6] shrink-0" size={15} />
                  <span>+91 86036 32642</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/918603632642" target="_blank" rel="noopener noreferrer"
                  className="flex gap-3 text-slate-400 text-sm hover:text-[#14b8a6] transition-colors duration-300">
                  <svg className="text-[#14b8a6] shrink-0 mt-0.5" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.918-1.422A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.952 7.952 0 01-4.065-1.116l-.291-.173-3.023.873.853-3.109-.19-.302A7.952 7.952 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
                  </svg>
                  <span>WhatsApp: 8603632642</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@sjsalon.in"
                  className="flex gap-3 text-slate-400 text-sm hover:text-[#14b8a6] transition-colors duration-300">
                  <FiMail className="text-[#14b8a6] shrink-0" size={15} />
                  <span>hello@sjsalon.in</span>
                </a>
              </li>
              <li className="flex gap-3">
                <FiClock className="text-[#14b8a6] shrink-0 mt-0.5" size={15} />
                <div className="text-slate-400 text-sm">
                  <p>Mon–Sat: 9 AM – 8 PM</p>
                  <p>Sunday: 10 AM – 6 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — full width */}
      <div className="w-full border-t border-slate-800 px-6 sm:px-10 lg:px-16 xl:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-xs tracking-wide">
          © {new Date().getFullYear()} SJ Salon, Mumbai SEEPZ 400096. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
            <a key={item} href="#" className="text-slate-500 text-xs hover:text-[#14b8a6] transition-colors duration-300">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
