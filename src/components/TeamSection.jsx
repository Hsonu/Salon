// ============================================
// Team Section — Light Theme
// ============================================

import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiTwitter, FiStar } from 'react-icons/fi';
import { team } from '@data/team';
import SectionHeader from './SectionHeader';

const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-salon-border hover:border-primary/40 transition-all duration-500 card-hover shadow-sm hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

        {/* Social overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-400 bg-black/25">
          {[
            { icon: FiInstagram, href: member.instagram },
            { icon: FiFacebook, href: member.facebook },
            { icon: FiTwitter, href: member.twitter },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon size={14} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-primary text-xs tracking-wider uppercase font-medium mt-1 mb-3">
          {member.role}
        </p>
        <p className="text-text-secondary text-xs leading-relaxed mb-4">{member.speciality}</p>

        {/* Stats */}
        <div className="flex gap-4 pt-3 border-t border-salon-border">
          <div>
            <p className="text-text-muted text-[10px] uppercase tracking-wider">Experience</p>
            <p className="text-text-primary text-sm font-medium">{member.experience}</p>
          </div>
          <div>
            <p className="text-text-muted text-[10px] uppercase tracking-wider">Rating</p>
            <p className="text-sm font-medium flex items-center gap-1 text-primary-gradient">
              <FiStar size={10} fill="currentColor" className="text-primary" />
              {member.rating}
            </p>
          </div>
          <div>
            <p className="text-text-muted text-[10px] uppercase tracking-wider">Clients</p>
            <p className="text-text-primary text-sm font-medium">{member.clients}+</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section className="py-24 bg-salon-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="The Experts"
          title="Meet Our"
          highlight="Dream Team"
          description="A passionate collective of beauty artists dedicated to crafting your most radiant self."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
