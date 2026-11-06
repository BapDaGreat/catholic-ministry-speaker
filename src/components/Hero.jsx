import React, { useState } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Award, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Hero({ onNavigate }) {
  const [quickDate, setQuickDate] = useState('');
  const [quickOrg, setQuickOrg] = useState('');

  const handleQuickInquiry = (e) => {
    e.preventDefault();
    if (!quickOrg) {
      toast.error('Please enter your parish or organization name.');
      return;
    }
    toast.success(`Checking date availability for ${quickOrg}... Transferring to inquiry form!`);
    // Pre-populate or navigate
    setTimeout(() => {
      onNavigate('contact');
    }, 400);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-stone-50 border-b border-stone-200/70">
      {/* Subtle sacred geometry background accent */}
      <div className="absolute inset-0 bg-parchment-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-navy-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Location & Status Tag */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-stone-150 border border-stone-300/80 text-stone-800 text-xs font-semibold tracking-wide uppercase font-sans mb-5 shadow-warm-sm">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>Based in New Orleans, Louisiana &middot; Serving Nationwide</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-navy-950 leading-[1.08] mb-6">
              Rekindling <span className="italic font-normal text-gold-600">Sacramental Wonder</span>, Eucharistic Faith & Apostolic Mission.
            </h1>

            {/* Value Proposition */}
            <p className="font-sans text-lg sm:text-xl text-stone-700 leading-relaxed max-w-2xl mb-8 font-normal">
              For over sixteen years, Julian Moreau has bridged high theological orthodoxy with warm Southern storytelling. Bringing parish missions, diocesan keynotes, and faculty retreats that awaken hearts to the Real Presence of Christ and empower disciples to step boldly into the breach.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-navy-900 hover:bg-navy-850 text-stone-50 font-semibold text-base shadow-warm-md hover:shadow-warm-lg border border-navy-700 transition-all duration-150 active:scale-[0.97]"
              >
                <Calendar className="w-5 h-5 text-gold-400" />
                <span>Book a Speaking Engagement</span>
                <ArrowRight className="w-4 h-4 text-stone-300 ml-1" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-stone-100 hover:bg-stone-200/80 text-navy-950 font-semibold text-base border border-stone-300 transition-colors duration-150 active:scale-[0.97]"
              >
                <span>Explore Offerings & Formats</span>
              </button>
            </div>

            {/* Quick Credibility Hook Bar */}
            <div className="pt-6 border-t border-stone-200/90 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-navy-950">180+</span>
                <span className="block font-sans text-xs text-stone-700 uppercase tracking-wider font-medium mt-0.5">
                  Missions & Talks
                </span>
              </div>
              <div className="border-l border-stone-200 pl-4">
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-navy-950">42</span>
                <span className="block font-sans text-xs text-stone-700 uppercase tracking-wider font-medium mt-0.5">
                  Dioceses Visited
                </span>
              </div>
              <div className="border-l border-stone-200 pl-4">
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-navy-950">16 Yrs</span>
                <span className="block font-sans text-xs text-stone-700 uppercase tracking-wider font-medium mt-0.5">
                  Pastoral Ministry
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Portrait Card & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-gold-500/20 via-stone-200 to-navy-900/10 blur-sm -z-10" />
              
              {/* Speaker Card Container */}
              <div className="relative rounded-2xl bg-white p-3 shadow-warm-xl border border-stone-200/90">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=900"
                    alt="Julian R. Moreau, Catholic Speaker and Retreat Leader"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  
                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-gold-600/90 text-stone-950 font-sans text-[11px] font-bold uppercase tracking-wider mb-1">
                      M.T.S. Theology &middot; Catholic Speaker
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-50 leading-tight">
                      Julian R. Moreau
                    </h2>
                    <p className="font-sans text-xs text-stone-200">
                      Notre Dame Seminary Graduate &middot; Archdiocese of New Orleans
                    </p>
                  </div>
                </div>

                {/* Floating Credential Pill Top-Right */}
                <div className="absolute -top-3 -right-3 bg-navy-900 text-stone-50 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-warm-md border border-gold-400/30 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>Canonical Mandatum Approved</span>
                </div>

                {/* Quick Date Availability Hook */}
                <form
                  onSubmit={handleQuickInquiry}
                  className="mt-3 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between text-xs text-stone-700 font-medium">
                    <span className="flex items-center gap-1 text-navy-950 font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                      Check Event Date Availability
                    </span>
                    <span className="text-[11px] text-stone-700">2026-2027 Calendar</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Parish or Diocese Name"
                      value={quickOrg}
                      onChange={(e) => setQuickOrg(e.target.value)}
                      className="flex-1 px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-stone-50 text-xs font-semibold whitespace-nowrap active:scale-[0.97]"
                    >
                      Inquire
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
