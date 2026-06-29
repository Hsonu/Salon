// ============================================
// Footer Component — Sonu Bin Salon Gold Theme
// ============================================

import { Link } from 'react-router-dom';
import {
  FiInstagram, FiFacebook,
  FiMapPin, FiPhone, FiMail, FiClock, FiSend
} from 'react-icons/fi';

const footerLinks = {
  Services: [
    { label: 'Hair Cut & Styling', path: '/services' },
    { label: 'Hair Spa', path: '/services' },
    { label: 'Keratin Treatment', path: '/services' },
    { label: 'Bridal Makeup', path: '/services' },
    { label: 'Massage Therapy', path: '/services' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Pricing', path: '/pricing' },
    { label: 'Meet the Team', path: '/team' },
    { label: 'Stunning Gallery', path: '/gallery' },
    { label: 'Careers', path: '/careers' },
  ],
};

const socials = [
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiFacebook, href: '#', label: 'Facebook' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] text-white border-t border-[#C89B3C]/10">
      {/* Top accent bar */}
      <div className="h-[2px] w-full bg-primary-gradient" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-gradient flex items-center justify-center">
                  <span className="font-display font-bold text-base text-white">SB</span>
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white leading-none">Sonu Bin Salon</p>
                  <p className="text-[8px] tracking-[0.25em] text-[#C89B3C] uppercase mt-1 font-semibold">Luxury & Beauty</p>
                </div>
              </div>
            </Link>

            <p className="text-[#777777] text-xs leading-relaxed mb-6 font-light">
              Elevating personal beauty to a state of art. Experience master styling, organic wellness therapies, and bridal transformations under the guidance of owner Sonu Bin.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#E5E5E5]/10 flex items-center justify-center text-[#777777] hover:text-white hover:border-[#C89B3C] transition-all duration-300 hover:bg-[#C89B3C]/10"
                >
                  <Icon size={14} />
                </a>
              ))}
              <a href="https://wa.me/918603632642" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-[#E5E5E5]/10 flex items-center justify-center text-[#777777] hover:text-white hover:border-[#C89B3C] transition-all duration-300 hover:bg-[#C89B3C]/10"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.918-1.422A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.952 7.952 0 01-4.065-1.116l-.291-.173-3.023.873.853-3.109-.19-.302A7.952 7.952 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold tracking-widest text-[10px] uppercase mb-5 flex items-center gap-2">
                <span className="w-3 h-[1px] bg-[#C89B3C]" />
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path}
                      className="text-[#777777] text-xs hover:text-[#C89B3C] transition-colors duration-300 flex items-center gap-2 group font-light"
                    >
                      <span className="w-0 h-[1px] bg-[#C89B3C] group-hover:w-2 transition-all duration-300 inline-block" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold tracking-widest text-[10px] uppercase mb-5 flex items-center gap-2">
              <span className="w-3 h-[1px] bg-[#C89B3C]" />
              Address & Hours
            </h3>
            <ul className="space-y-4 text-xs font-light text-[#777777]">
              <li className="flex gap-2">
                <FiMapPin className="text-[#C89B3C] shrink-0 mt-0.5" size={14} />
                <span className="leading-relaxed">
                  SEEPZ Gate No.1, Andheri East,<br />
                  Mumbai, Maharashtra — 400096
                </span>
              </li>
              <li>
                <a href="tel:+918603632642" className="flex gap-2 hover:text-[#C89B3C] transition-colors duration-300">
                  <FiPhone className="text-[#C89B3C] shrink-0" size={14} />
                  <span>+91 86036 32642</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@sonubinsalon.in" className="flex gap-2 hover:text-[#C89B3C] transition-colors duration-300">
                  <FiMail className="text-[#C89B3C] shrink-0" size={14} />
                  <span>hello@sonubinsalon.in</span>
                </a>
              </li>
              <li className="flex gap-2">
                <FiClock className="text-[#C89B3C] shrink-0 mt-0.5" size={14} />
                <div>
                  <p>Mon–Sat: 9:00 AM – 8:00 PM</p>
                  <p>Sunday: 10:00 AM – 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-[#E5E5E5]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-lg font-bold">Subscribe to our newsletter</h4>
            <p className="text-xs text-[#777777] mt-1 font-light">Get special offers, luxury beauty hacks, and trending hairstyle suggestions direct to your inbox.</p>
          </div>
          <div className="relative w-full md:w-80">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-[#FCFCFC]/5 border border-[#E5E5E5]/10 rounded-full pl-5 pr-12 py-3 text-xs text-white placeholder:text-[#777777] focus:outline-none focus:border-[#C89B3C] transition-all duration-300"
            />
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-primary-gradient flex items-center justify-center text-white hover:scale-105 transition-all duration-300">
              <FiSend size={12} />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-[#E5E5E5]/10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#777777] text-[10px] tracking-wide font-light">
            © {new Date().getFullYear()} Sonu Bin Salon. Managed by Owner Sonu Bin. All rights reserved.
          </p>
          <div className="flex gap-5 text-[10px] tracking-wide text-[#777777] font-light">
            <Link to="/privacy-policy" className="hover:text-[#C89B3C] transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-[#C89B3C] transition-colors">Terms & Conditions</Link>
            <Link to="/refund-policy" className="hover:text-[#C89B3C] transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
