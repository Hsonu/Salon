// ============================================
// Home Page — Light Theme
// ============================================

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiAward, FiHeart, FiUsers } from 'react-icons/fi';
import PageTransition from '@components/PageTransition';
import Hero from '@components/Hero';
import ServicesSection from '@components/ServicesSection';
import Testimonials from '@components/Testimonials';
import FAQ from '@components/FAQ';
import SectionHeader from '@components/SectionHeader';
import useCountUp from '@hooks/useCountUp';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

// ---- Stats Counter Section ----
// ---- Stats Counter Section ----
const StatItem = ({ value, suffix, label }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  const count = useCountUp(value, 2000, isVisible);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl font-bold mb-2 text-primary-gradient">
        {count}{suffix}
      </p>
      <p className="text-text-secondary text-sm tracking-wider uppercase">{label}</p>
    </div>
  );
};

// ---- Why Choose Us ----
const whyUs = [
  { icon: FiAward, title: 'Award-Winning Stylists', desc: 'Our team has won national awards for creative excellence and technical mastery in beauty arts.' },
  { icon: FiShield, title: 'Premium Products Only', desc: 'We exclusively use internationally certified, dermatologist-approved products for all services.' },
  { icon: FiHeart, title: 'Personalized Experience', desc: 'Every appointment is tailored to your unique hair type, skin tone, and lifestyle preferences.' },
  { icon: FiUsers, title: 'Trusted by Thousands', desc: 'Over 10,000 satisfied clients have entrusted us with their beauty over 12+ years.' },
];

const Home = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <Hero />

      {/* Featured Services */}
      <ServicesSection limit={8} />

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Why SJ Salon" title="The" highlight="SJ Difference"
            description="We go beyond beauty — we craft transformative experiences with precision, passion, and artistry." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-7 rounded-2xl border border-salon-border bg-salon-alt hover:border-primary/30 transition-all duration-500 card-hover text-center shadow-sm hover:shadow-lg hover:shadow-primary/10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(15,118,110,0.1)', border: '1px solid rgba(15,118,110,0.2)' }}>
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-salon-alt border-y border-salon-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            <StatItem value={10000} suffix="+" label="Happy Clients" />
            <StatItem value={15} suffix="+" label="Expert Stylists" />
            <StatItem value={12} suffix="+" label="Years of Excellence" />
            <StatItem value={50} suffix="+" label="Services Offered" />
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Our Portfolio" title="Gallery" highlight="Showcase" description="A glimpse of our stunning transformations." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
              'https://images.unsplash.com/photo-1596701062351-8ac031668975?w=400&q=80',
              'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80',
              'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80',
              'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80',
              'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80',
              'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80',
              'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80',
            ].map((url, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm">
                <img src={url} alt="Gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-400" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-primary text-primary text-sm font-medium tracking-wider hover:bg-primary hover:text-white transition-all duration-300">
              View Full Gallery <FiArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Contact CTA */}
      <section className="py-24 bg-salon-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative bg-white rounded-3xl p-12 border border-salon-border overflow-hidden shadow-sm">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, var(--color-primary) 0%, transparent 70%)' }} />
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">Ready for a Transformation?</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary mb-5 leading-tight">
              Book Your Luxury<br />
              <span className="text-primary-gradient">
                Experience Today
              </span>
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto leading-relaxed">
              Join thousands of delighted clients. Our expert team is ready to craft your perfect look.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/appointment"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 bg-primary-gradient">
                Book Appointment <FiArrowRight />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-salon-border text-text-primary text-sm font-medium tracking-wider hover:border-primary hover:text-primary transition-all duration-300 bg-white">
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
