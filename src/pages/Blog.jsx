// ============================================
// Blog Page Component — Sonu Bin Salon
// ============================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCalendar, FiUser, FiClock, FiX, FiArrowRight } from 'react-icons/fi';
import { blogArticles, blogCategories } from '@data/blog';
import PageTransition from '@components/PageTransition';

const BlogCard = ({ article, onRead }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] hover:border-[#C89B3C]/35 transition-all duration-500 card-hover shadow-sm hover:shadow-xl flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase bg-white/95 backdrop-blur-sm border border-[#C89B3C]/30 text-[#C89B3C] font-bold shadow-sm">
          {article.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-4 text-[11px] text-[#777777] mb-3">
          <span className="flex items-center gap-1">
            <FiCalendar size={12} className="text-[#C89B3C]" />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <FiClock size={12} className="text-[#C89B3C]" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-[#111111] mb-3 group-hover:text-[#C89B3C] transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#333333] text-sm leading-relaxed mb-6 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Action */}
        <div className="mt-auto pt-4 border-t border-[#E5E5E5]/60 flex items-center justify-between">
          <span className="flex items-center gap-1 text-[11px] text-[#777777]">
            <FiUser className="text-[#C89B3C]" /> By {article.author}
          </span>
          <button
            onClick={() => onRead(article)}
            className="flex items-center gap-1 text-xs font-bold text-[#C89B3C] hover:text-[#A37B2C] group/btn transition-colors"
          >
            Read Article
            <FiArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Filter articles based on search and category
  const filteredArticles = blogArticles.filter(art => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      {/* Banner */}
      <div className="relative pt-32 pb-20 bg-[#111111] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C89B3C] text-xs tracking-[0.35em] uppercase mb-4">Latest Insights</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-6">
            Salon <span className="text-primary-gradient">Journal</span>
          </h1>
          <p className="text-[#777777] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Expert beauty recommendations, premium hair care hacks, radiant skin tips, and state-of-the-art styling trends.
          </p>
        </div>
      </div>

      {/* Main Grid Section */}
      <section className="py-20 bg-[#F8F8F8] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
            {/* Category selection */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {blogCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? 'text-white bg-primary-gradient shadow-md shadow-[#C89B3C]/25'
                      : 'border border-[#E5E5E5] bg-white text-[#333333] hover:border-[#C89B3C]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]" size={16} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E5E5E5] rounded-full pl-11 pr-5 py-3 text-[#111111] text-xs shadow-sm focus:outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/10 transition-all duration-300"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredArticles.length > 0 ? (
                filteredArticles.map(art => (
                  <motion.div
                    key={art.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BlogCard article={art} onRead={setSelectedArticle} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-[#E5E5E5] shadow-sm">
                  <p className="text-[#777777] mb-2">No articles matched your filter or search query.</p>
                  <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }} className="text-[#C89B3C] font-semibold text-sm underline">
                    Reset Filters
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111]/80 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl max-w-2xl w-full my-8 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#111111] hover:text-[#C89B3C] shadow-md transition-colors"
                >
                  <FiX size={18} />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-[9px] tracking-widest uppercase bg-[#C89B3C] text-white font-bold inline-block mb-3">
                    {selectedArticle.category}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8">
                {/* Meta details */}
                <div className="flex flex-wrap gap-6 items-center text-xs text-[#777777] mb-6 pb-4 border-b border-[#E5E5E5]">
                  <span className="flex items-center gap-1.5">
                    <FiUser className="text-[#C89B3C]" /> By {selectedArticle.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="text-[#C89B3C]" /> {selectedArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiClock className="text-[#C89B3C]" /> {selectedArticle.readTime}
                  </span>
                </div>

                {/* Main text */}
                <p className="text-[#333333] text-base leading-relaxed mb-6 font-light">
                  {selectedArticle.content}
                </p>
                <p className="text-[#333333] text-base leading-relaxed font-light">
                  At Sonu Bin Salon, we prioritize the health and style of your hair and skin. Book an appointment today to discuss your personalized beauty regimen with our certified stylists.
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Blog;
