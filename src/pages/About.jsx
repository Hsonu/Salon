// ============================================
// About Page — Light Theme
// ============================================

import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiTarget } from 'react-icons/fi';
import PageTransition from '@components/PageTransition';
import TeamSection from '@components/TeamSection';
import SectionHeader from '@components/SectionHeader';

const About = () => {
  return (
    <PageTransition>
      {/* Hero Banner */}
      <div className="relative pt-24 pb-20 overflow-hidden bg-salon-alt border-b border-salon-border">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, var(--color-primary) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-xs tracking-[0.35em] uppercase mb-4">
            Our Story
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl font-bold text-text-primary mb-5">
            About{' '}
            <span className="text-primary-gradient">
              SJ Salon
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-text-secondary max-w-xl mx-auto leading-relaxed">
            A story of passion, artistry, and an unwavering commitment to luxury beauty.
          </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">Est. 2012</p>
              <h2 className="font-display text-4xl font-bold text-text-primary mb-6 leading-tight">
                Born from a Passion<br />for Timeless Beauty
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>SJ Salon was founded in 2012 by Sophia James with a singular vision: to create a sanctuary where luxury, expertise, and genuine care converge. What began as a boutique studio has evolved into Mumbai's most acclaimed luxury salon.</p>
                <p>Over the past 12 years, we've served over 10,000 clients — from everyday beauty enthusiasts to celebrities, brides, and fashion icons. Every person who walks through our doors receives the same unwavering dedication to excellence.</p>
                <p>Our philosophy is simple: beauty is personal, and every client deserves a tailored experience. We listen, we craft, and we transform — always with artistry and authenticity.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden h-48 shadow-md"><img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80" alt="Salon" className="w-full h-full object-cover" /></div>
                  <div className="rounded-2xl overflow-hidden h-64 shadow-md"><img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80" alt="Salon" className="w-full h-full object-cover" /></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl overflow-hidden h-64 shadow-md"><img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80" alt="Salon" className="w-full h-full object-cover" /></div>
                  <div className="rounded-2xl overflow-hidden h-48 shadow-md"><img src="https://images.unsplash.com/photo-1596701062351-8ac031668975?w=400&q=80" alt="Salon" className="w-full h-full object-cover" /></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl opacity-15 bg-primary-gradient" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 bg-salon-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Our Purpose" title="Mission &" highlight="Vision" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FiTarget, title: 'Our Mission', desc: 'To deliver exceptional beauty experiences through expert craftsmanship, premium products, and heartfelt care — making every client feel extraordinary.' },
              { icon: FiHeart, title: 'Our Vision', desc: "To be India's most trusted luxury salon brand, setting the benchmark for beauty excellence through innovation, artistry, and client devotion." },
              { icon: FiAward, title: 'Our Values', desc: 'Excellence, Integrity, Creativity, and Care are the pillars of everything we do. We believe beauty is confidence, and confidence changes lives.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-salon-border hover:border-primary/30 transition-all duration-500 text-center shadow-sm hover:shadow-lg hover:shadow-primary/10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'rgba(15,118,110,0.1)', border: '1px solid rgba(15,118,110,0.2)' }}>
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-4">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
    </PageTransition>
  );
};

export default About;
