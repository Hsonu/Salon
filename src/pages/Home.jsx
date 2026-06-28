// ============================================
// Home Page — Sonu Bin Salon Gold Theme
// ============================================

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiAward, FiHeart, FiUsers, FiInstagram, FiMapPin, FiPhone, FiClock } from 'react-icons/fi';
import PageTransition from '@components/PageTransition';
import Hero from '@components/Hero';
import ServicesSection from '@components/ServicesSection';
import Testimonials from '@components/Testimonials';
import FAQ from '@components/FAQ';
import SectionHeader from '@components/SectionHeader';
import useCountUp from '@hooks/useCountUp';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { team } from '@data/team';

// ---- Stats Counter Section ----
const StatItem = ({ value, suffix, label }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  const count = useCountUp(value, 2000, isVisible);
  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-2xl border border-[#E5E5E5] shadow-sm hover:border-[#C89B3C]/30 transition-all duration-300">
      <p className="font-display text-5xl font-bold mb-2 text-primary-gradient">
        {count}{suffix}
      </p>
      <p className="text-[#777777] text-xs tracking-wider uppercase font-semibold">{label}</p>
    </div>
  );
};

// ---- Why Choose Us ----
const whyUs = [
  { icon: FiAward, title: 'Award-Winning Stylists', desc: 'Our team is trained directly under master stylist Sonu Bin, ensuring national-standard technical quality.' },
  { icon: FiShield, title: 'Premium Products Only', desc: 'We exclusively use dermatologically approved, internationally certified gold-standard beauty formulas.' },
  { icon: FiHeart, title: 'Bespoke Experience', desc: 'Every styling treatment is custom-tailored to suit your individual hair structure, skin type, and lifestyle.' },
  { icon: FiUsers, title: 'Trusted by Thousands', desc: 'Over 10,000 satisfied clients in Mumbai have trusted us for their beauty transformations since 2012.' },
];

const Home = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <Hero />

      {/* Featured Services */}
      <ServicesSection limit={4} />

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Why Sonu Bin Salon" title="The" highlight="Sonu Bin Difference"
            description="We redefine personal beauty by blending classic craftsmanship with luxury wellness experiences." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-7 rounded-2xl border border-[#E5E5E5] bg-[#F8F8F8] hover:border-[#C89B3C]/30 transition-all duration-500 card-hover text-center shadow-sm hover:shadow-lg hover:shadow-[#C89B3C]/10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(200, 155, 60, 0.1)', border: '1px solid rgba(200, 155, 60, 0.2)' }}>
                  <item.icon size={24} className="text-[#C89B3C]" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#111111] mb-3">{item.title}</h3>
                <p className="text-[#333333] text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-[#F8F8F8] border-y border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatItem value={10000} suffix="+" label="Delighted Clients" />
            <StatItem value={15} suffix="+" label="Expert Stylists" />
            <StatItem value={12} suffix="+" label="Years of Legacy" />
            <StatItem value={19} suffix="" label="Luxury Services" />
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="The Specialists" title="Master" highlight="Stylists"
            description="Our handpicked beauty architects dedicated to creating your most spectacular self." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {team.slice(0, 3).map((member, i) => (
              <motion.div key={member.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative bg-[#F8F8F8] rounded-2xl overflow-hidden border border-[#E5E5E5] hover:border-[#C89B3C]/30 transition-all duration-300 card-hover shadow-sm"
              >
                <div className="h-80 overflow-hidden relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-[10px] tracking-widest uppercase text-[#C89B3C] font-bold">{member.role}</p>
                    <h3 className="font-display text-xl font-bold mt-1">{member.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/team" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#C89B3C] text-[#C89B3C] text-xs font-bold tracking-wider hover:bg-[#C89B3C] hover:text-white transition-all duration-300">
              Meet Full Team <FiArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Transformations" title="Our Studio" highlight="Gallery" description="A curated glimpse of our client makeovers." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80',
              'https://images.unsplash.com/photo-1596701062351-8ac031668975?w=500&q=80',
              'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&q=80',
              'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80',
              'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&q=80',
              'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80',
              'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80',
              'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80',
            ].map((url, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-[#E5E5E5]">
                <img src={url} alt="Gallery Portfolio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
                  <FiInstagram size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#C89B3C] text-[#C89B3C] text-xs font-bold tracking-wider hover:bg-[#C89B3C] hover:text-white transition-all duration-300">
              View Full Gallery <FiArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Style Gallery */}
      <section className="py-20 bg-[#F8F8F8] border-t border-[#E5E5E5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold flex justify-center items-center gap-2">
            <FiInstagram /> @sonubinsalon
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111111] mt-2">Follow Our Journal</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
          {[
            'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&q=80',
            'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80',
            'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&q=80',
            'https://images.unsplash.com/photo-1596701062351-8ac031668975?w=300&q=80',
            'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&q=80',
            'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&q=80'
          ].map((url, idx) => (
            <a key={idx} href="#" className="group relative block aspect-square overflow-hidden rounded-xl">
              <img src={url} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#111111]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <FiInstagram size={18} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ Accordions */}
      <FAQ />

      {/* Contact Preview Section */}
      <section className="py-24 bg-white border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Visit Us" title="Contact" highlight="Sonu Bin Salon" description="Our luxurious studio is situated in Andheri East, Mumbai. Stop by for your style check." />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Info panel */}
            <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center shrink-0">
                  <FiMapPin className="text-[#C89B3C]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#777777] uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-[#111111] text-sm mt-1 font-medium">SEEPZ Gate No.1, Andheri East, Mumbai, MH - 400096, India</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center shrink-0">
                  <FiPhone className="text-[#C89B3C]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#777777] uppercase tracking-wider font-semibold">Call or WhatsApp</p>
                  <p className="text-[#111111] text-sm mt-1 font-medium">+91 86036 32642</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center shrink-0">
                  <FiClock className="text-[#C89B3C]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#777777] uppercase tracking-wider font-semibold">Working Hours</p>
                  <p className="text-[#111111] text-sm mt-1 font-medium">Mon–Sat: 9 AM – 8 PM | Sunday: 10 AM – 6 PM</p>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="h-80 rounded-3xl overflow-hidden border border-[#E5E5E5] shadow-sm relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7562095941195!2d72.87679361530948!3d19.11835735560934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83fbf119777%3A0x73ebca5c39ee730e!2sSEEPZ%20Gate%20No.%201%2C%20SEEPZ%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400096!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sonu Bin Salon Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment CTA */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative bg-white rounded-3xl p-12 border border-[#E5E5E5] overflow-hidden shadow-sm">
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, #C89B3C 0%, transparent 70%)' }} />
            <p className="text-[#C89B3C] text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Ready for a Transformation?</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#111111] mb-5 leading-tight">
              Book Your Luxury<br />
              <span className="text-primary-gradient">Experience Today</span>
            </h2>
            <p className="text-[#333333] mb-8 max-w-xl mx-auto leading-relaxed font-light text-sm sm:text-base">
              Experience the royal touch. Under custom direction, our expert stylists are waiting to sculpt your perfect look.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/appointment"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-xs tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C89B3C]/35 bg-primary-gradient shadow-md">
                Book Appointment <FiArrowRight />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#E5E5E5] text-[#333333] text-xs font-bold tracking-wider hover:border-[#C89B3C] hover:text-[#C89B3C] transition-all duration-300 bg-white">
                Contact Us <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
