import React from 'react';
import { Award, BookOpen, Heart, Church, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import speakerData from '../data/speaker.json';

export default function AboutSection({ onNavigate }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Narrative Grid: Photo + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Multi-photo Gallery & Badges */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-white p-2.5 shadow-warm-lg border border-stone-200">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900"
                  alt="Julian Moreau delivering keynote address"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <span className="block font-serif text-base font-bold text-navy-950">
                  Julian R. Moreau, M.T.S.
                </span>
                <span className="text-xs text-stone-700">
                  Speaking at the Gulf Coast Men's Conference (1,200 attendees)
                </span>
              </div>
            </div>

            {/* Secondary Supporting Photos (At Notre Dame Seminary / Eucharistic Adoration) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-stone-200 bg-white p-1.5 shadow-warm-sm">
                <div className="aspect-video rounded-lg overflow-hidden bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1548625361-16a798544e45?auto=format&fit=crop&q=80&w=600"
                    alt="Eucharistic Adoration and prayer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="block text-[11px] font-medium text-stone-700 text-center mt-1">
                  Sacramental Adoration
                </span>
              </div>

              <div className="rounded-xl overflow-hidden border border-stone-200 bg-white p-1.5 shadow-warm-sm">
                <div className="aspect-video rounded-lg overflow-hidden bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600"
                    alt="Pastoral Council Facilitation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="block text-[11px] font-medium text-stone-700 text-center mt-1">
                  Parish Team Facilitation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-7">
            <span className="font-caps-sub text-xs text-gold-700 font-bold block mb-2">
              The Speaker's Journey &amp; Vocation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-950 mb-6 leading-tight">
              A Voice Formed in Silence, Scripture &amp; the Sacraments
            </h2>

            <div className="space-y-4 font-sans text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
              {speakerData.fullNarrative.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Mission Quote Callout */}
            <div className="mt-8 p-6 rounded-2xl bg-white border-l-4 border-gold-500 border border-stone-200 shadow-warm-sm">
              <p className="font-serif italic text-lg sm:text-xl text-navy-950 leading-snug mb-3">
                &ldquo;The modern Catholic does not suffer from lack of information; we suffer from lack of awe. When we recover the sacramental imagination, our faith ceases to be a list of obligations and becomes a radiant encounter with the living God.&rdquo;
              </p>
              <span className="font-sans text-xs uppercase tracking-wider font-bold text-stone-700">
                &mdash; Julian Moreau, M.T.S.
              </span>
            </div>
          </div>

        </div>

        {/* Theological Grounding & Charism (4 Pillars) */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-caps-sub text-xs text-gold-700 font-bold block mb-2">
              Theological Grounding
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
              The Four Pillars of Ministry
            </h3>
            <p className="font-sans text-stone-700 text-sm mt-2">
              {speakerData.theologicalGrounding.tradition}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakerData.theologicalGrounding.pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-stone-200 shadow-warm-sm hover-lift"
              >
                <div className="w-8 h-8 rounded-full bg-gold-100 text-gold-800 flex items-center justify-center font-serif font-bold text-sm mb-4">
                  0{i + 1}
                </div>
                <h4 className="font-serif text-lg font-bold text-navy-950 mb-2">
                  {pillar.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Degrees & Canonical Faculties */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-stone-200 shadow-warm-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-200 mb-8">
            <div>
              <span className="font-caps-sub text-xs text-gold-700 font-bold block mb-1">
                Verified Ecclesial Credentials
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                Academic Background &amp; Diocesan Clearances
              </h3>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 text-stone-50 text-xs sm:text-sm font-semibold hover:bg-navy-850 active:scale-[0.97]"
            >
              <span>Request Letter of Good Standing</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {speakerData.credentials.map((cred, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-navy-950">
                    {cred.degree}
                  </h4>
                  <p className="text-xs font-semibold text-gold-700 mb-1">
                    {cred.institution}
                  </p>
                  <p className="text-xs text-stone-700">
                    {cred.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
