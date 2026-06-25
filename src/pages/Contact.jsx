// ============================================
// Contact Page — Light Theme
// ============================================

import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import PageTransition from '@components/PageTransition';
import ContactForm from '@components/ContactForm';

const contactInfo = [
  { icon: FiMapPin, title: 'Visit Us', lines: ['Mumbai SEEPZ', '400096'] },
  { icon: FiPhone, title: 'Call / WhatsApp', lines: ['+91 86036 32642'] },
  { icon: FiMail, title: 'Email Us', lines: ['hello@sjsalon.in', 'bookings@sjsalon.in'] },
  { icon: FiClock, title: 'Working Hours', lines: ['Mon – Sat: 9:00 AM – 8:00 PM', 'Sunday: 10:00 AM – 6:00 PM'] },
];

const socials = [
  { icon: FiInstagram, href: '#', label: 'Instagram', color: '#E1306C' },
  { icon: FiFacebook, href: '#', label: 'Facebook', color: '#1877F2' },
  { icon: FiTwitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
  { icon: FiYoutube, href: '#', label: 'YouTube', color: '#FF0000' },
];

const Contact = () => {
  return (
    <PageTransition>
      {/* Banner */}
      <div className="relative pt-32 pb-16 bg-salon-alt text-center border-b border-salon-border">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-xs tracking-[0.35em] uppercase mb-4">
          Get In Touch
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl font-bold text-text-primary mb-5">
          Contact{' '}
          <span className="text-primary-gradient">
            Us
          </span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-text-secondary max-w-lg mx-auto">
          We'd love to hear from you. Reach out for bookings, inquiries, or just a hello.
        </motion.p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Info + Map + Socials */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="p-5 rounded-xl bg-salon-alt border border-salon-border hover:border-primary/20 transition-all duration-300 shadow-sm">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(15,118,110,0.1)' }}>
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <h4 className="text-text-primary font-medium text-sm mb-2">{item.title}</h4>
                    {item.lines.map((line) => <p key={line} className="text-text-secondary text-xs leading-relaxed">{line}</p>)}
                  </motion.div>
                ))}
              </div>

              {/* Google Map Embed */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-salon-border mb-8 shadow-sm" style={{ height: '260px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.4851697826875!2d72.82329791435695!3d18.938882987163545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7a4b5a2a37%3A0x7777e4a94c9bef!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698765432!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="SJ Salon Location"
                />
              </motion.div>

              {/* Social Media */}
              <div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label, color }) => (
                    <a key={label} href={href} aria-label={label}
                      className="w-10 h-10 rounded-full border border-salon-border bg-white flex items-center justify-center text-text-muted hover:border-primary transition-all duration-300"
                      onMouseEnter={(e) => { e.currentTarget.style.color = color; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = ''; }}>
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-salon-border p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-2">Send a Message</h2>
              <p className="text-text-secondary text-sm mb-8">We typically respond within 24 hours.</p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
