import React, { useState } from 'react';
import { Church, Users, GraduationCap, Compass, ArrowRight, Check, Clock, Sparkles } from 'lucide-react';
import servicesData from '../data/services.json';

const iconMap = {
  Church,
  Users,
  GraduationCap,
  Compass,
};

export default function OfferingsSection({ onNavigate }) {
  const [selectedFormat, setSelectedFormat] = useState('weekend-mission');

  return (
    <section id="services" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-caps-sub text-xs text-gold-700 font-bold block mb-2">
            Speaking &amp; Facilitation Ministry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-950 mb-4">
            Formation Rooted in Truth &amp; Sacramental Grace
          </h2>
          <p className="font-sans text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            Whether preparing a parish for Holy Week, renewing the spiritual fire of Catholic educators, or facilitating deep discernment for a diocesan leadership team, each event is custom-aligned with your community's pastoral goals.
          </p>
        </div>

        {/* 1. Segmented Offerings Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {servicesData.offerings.map((offering) => {
            const Icon = iconMap[offering.icon] || Church;
            return (
              <div
                key={offering.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-stone-200 shadow-warm-sm hover-lift flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Category Pill and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-warm-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-navy-900 border border-stone-200">
                      {offering.tag}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-2xl font-bold text-navy-950 mb-2">
                    {offering.title}
                  </h3>
                  <p className="font-sans text-sm font-medium text-gold-700 mb-4">
                    {offering.tagline}
                  </p>

                  <p className="font-sans text-stone-700 text-sm leading-relaxed mb-6">
                    {offering.description}
                  </p>

                  {/* Sample Popular Themes */}
                  <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 mb-6">
                    <span className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                      Popular Themes &amp; Keynote Topics:
                    </span>
                    <ul className="space-y-2 text-xs text-stone-700">
                      {offering.popularThemes.map((theme, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                          <span>{theme}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-150 flex items-center justify-between">
                  <span className="text-xs text-stone-700 font-medium">
                    Best for: {offering.bestFor.split(' ')[0]} {offering.bestFor.split(' ')[1]}
                  </span>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-navy-900 hover:text-gold-700 transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Detailed Format Breakdown Tabs */}
        <div className="bg-navy-950 rounded-3xl p-8 sm:p-12 text-stone-50 shadow-warm-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-caps-sub text-xs text-gold-400 font-semibold tracking-widest block mb-2">
                Flexible Scheduling &amp; Structure
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-50 mb-3">
                Event Format Breakdown
              </h3>
              <p className="font-sans text-sm sm:text-base text-stone-300 max-w-2xl mx-auto">
                Select a presentation format to view schedule models, duration recommendations, and comprehensive parish deliverables.
              </p>
            </div>

            {/* Format Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 bg-navy-900/90 rounded-xl border border-navy-800 mb-8">
              {servicesData.formats.map((fmt) => (
                <button
                  key={fmt.id}
                  onClick={() => setSelectedFormat(fmt.id)}
                  className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 text-center ${
                    selectedFormat === fmt.id
                      ? 'bg-gold-500 text-navy-950 shadow-sm'
                      : 'text-stone-300 hover:text-white hover:bg-navy-800'
                  }`}
                >
                  {fmt.name.split(' ')[0]} {fmt.name.split(' ')[1] || ''}
                </button>
              ))}
            </div>

            {/* Selected Format Content Card */}
            {(() => {
              const current = servicesData.formats.find((f) => f.id === selectedFormat) || servicesData.formats[0];
              return (
                <div className="bg-navy-900/90 rounded-2xl p-6 sm:p-8 border border-navy-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-navy-800/80 mb-6">
                    <div>
                      <h4 className="font-serif text-2xl font-bold text-stone-50 mb-1">
                        {current.name}
                      </h4>
                      <p className="text-sm text-stone-300">
                        {current.description}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-navy-800 border border-gold-500/30 text-gold-400 text-xs font-semibold shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{current.duration}</span>
                    </div>
                  </div>

                  {/* Included Deliverables */}
                  <div>
                    <h5 className="font-sans text-xs uppercase tracking-wider text-gold-400 font-bold mb-4">
                      What is Included for Event Chairs:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {current.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200">
                          <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct CTA */}
                  <div className="pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-stone-400">
                      Custom schedules available for bilingual or clustered parish missions.
                    </span>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-xs sm:text-sm transition-all active:scale-[0.97]"
                    >
                      <span>Inquire About {current.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* 3. Included in Every Engagement Guarantee */}
        <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-xl font-bold text-navy-950 mb-2">
                The Julian Moreau Ministry Commitment
              </h4>
              <p className="font-sans text-xs sm:text-sm text-stone-700 max-w-2xl leading-relaxed">
                Every speaking engagement includes thorough advance pastoral consultation, promotion templates, custom handouts, and canonical compliance letters sent directly to your Diocesan Chancery.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-lg bg-navy-900 hover:bg-navy-850 text-stone-50 text-xs sm:text-sm font-semibold shrink-0 shadow-warm-sm active:scale-[0.97]"
            >
              Start Event Planning Call &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
