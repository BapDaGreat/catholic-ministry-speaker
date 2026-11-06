import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, MapPin, Building, Calendar } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';

export default function TestimonialsSection() {
  const [filter, setFilter] = useState('all');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const featuredQuotes = testimonialsData.filter((t) => t.featured);

  const filteredQuotes = filter === 'all'
    ? testimonialsData
    : testimonialsData.filter((t) => t.category === filter);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? featuredQuotes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === featuredQuotes.length - 1 ? 0 : prev + 1));
  };

  const currentFeatured = featuredQuotes[carouselIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-caps-sub text-xs text-gold-700 font-bold block mb-2">
            Pastoral Endorsements
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-950 mb-4">
            Words from Shepherds &amp; Ministry Leaders
          </h2>
          <p className="font-sans text-base sm:text-lg text-stone-700">
            Read firsthand accounts from pastors, diocesan directors, and Catholic school leaders who have welcomed Julian to their communities.
          </p>
        </div>

        {/* 1. Featured Spotlight Carousel Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-navy-950 text-stone-50 rounded-3xl p-8 sm:p-12 shadow-warm-xl relative overflow-hidden border border-navy-800">
            <Quote className="absolute top-6 right-8 w-24 h-24 text-gold-500/10 pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between min-h-[260px]">
              {/* Star Rating & Event Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-gold-400" />
                  ))}
                  <span className="text-xs font-semibold ml-2 text-stone-300">
                    Pastoral Reference
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-navy-800 border border-gold-400/30 text-gold-300">
                  {currentFeatured.event} &middot; {currentFeatured.year}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed text-stone-100 mb-8 italic">
                &ldquo;{currentFeatured.quote}&rdquo;
              </blockquote>

              {/* Author Info & Carousel Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-navy-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-gold-500 text-navy-950 font-serif font-bold text-lg flex items-center justify-center shrink-0">
                    {currentFeatured.author.charAt(currentFeatured.author.indexOf(' ') + 1) || 'J'}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white leading-tight">
                      {currentFeatured.author}
                    </h4>
                    <p className="font-sans text-xs text-gold-400 font-medium">
                      {currentFeatured.role} &middot; {currentFeatured.organization}
                    </p>
                    <p className="font-sans text-xs text-stone-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      {currentFeatured.location}
                    </p>
                  </div>
                </div>

                {/* Next / Prev Controls */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="p-2.5 rounded-full bg-navy-900 hover:bg-navy-800 text-stone-200 border border-navy-700 transition-colors active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono text-stone-400 px-1">
                    0{carouselIndex + 1} / 0{featuredQuotes.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="p-2.5 rounded-full bg-navy-900 hover:bg-navy-800 text-stone-200 border border-navy-700 transition-colors active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Filter Pills for All Testimonials */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'parishes', label: 'Parish Missions' },
            { id: 'dioceses', label: 'Diocesan Convocations' },
            { id: 'schools', label: 'Schools & Campus' },
            { id: 'retreats', label: 'Men & Women Retreats' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 ${
                filter === cat.id
                  ? 'bg-navy-900 text-stone-50 shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3. Clean Card Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuotes.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-warm-sm hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold text-gold-700 uppercase tracking-wider bg-gold-50 px-2.5 py-0.5 rounded border border-gold-200/60">
                    {t.event}
                  </span>
                  <span className="text-xs text-stone-700 font-mono">
                    {t.year}
                  </span>
                </div>

                <p className="font-serif italic text-stone-800 text-base leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-150 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-100 border border-stone-300 text-navy-950 font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  {t.author.charAt(t.author.indexOf(' ') + 1) || 'R'}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-navy-950 leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-xs text-stone-700 mt-0.5 font-medium">
                    {t.role}
                  </p>
                  <p className="text-xs text-stone-700">
                    {t.organization} &middot; {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
