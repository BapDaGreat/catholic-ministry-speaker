import React from 'react';
import { Cross, Mail, Phone, MapPin, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import speakerData from '../data/speaker.json';

export default function Footer({ onNavigate, onOpenTechModal }) {
  return (
    <footer className="bg-navy-950 text-stone-200 border-t border-navy-800">
      {/* Top Banner with Scripture Quote */}
      <div className="bg-navy-900/80 border-b border-navy-800/80 py-6 text-center px-4">
        <p className="font-serif italic text-lg sm:text-xl text-gold-300 max-w-2xl mx-auto">
          &ldquo;Duc in altum &mdash; Put out into deep water and let down your nets for a catch.&rdquo;
        </p>
        <span className="font-sans text-xs text-stone-400 uppercase tracking-widest block mt-1">
          Luke 5:4 &middot; Motto of the Catholic New Evangelization
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-900 border border-gold-400/40 flex items-center justify-center text-gold-400">
                <Cross className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold text-white tracking-tight leading-none">
                  Julian R. Moreau, <span className="text-gold-400 font-sans text-sm font-semibold">M.T.S.</span>
                </span>
                <span className="block font-sans text-[11px] text-stone-400 uppercase tracking-wider mt-1">
                  Catholic Speaker &middot; Retreat Director &middot; New Orleans, LA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-md">
              Rekindling Eucharistic wonder, sacramental realism, and apostolic courage for parishes, dioceses, and Catholic educators throughout the United States.
            </p>

            <div className="flex items-center gap-2 text-xs text-gold-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Canonical Letter of Good Standing &middot; Archdiocese of New Orleans</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider text-xs">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-gold-400 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-gold-400 transition-colors">
                  About &amp; Theological Charism
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-gold-400 transition-colors">
                  Speaking &amp; Retreat Formats
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="hover:text-gold-400 transition-colors">
                  Pastoral Endorsements
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('media')} className="hover:text-gold-400 transition-colors">
                  Media &amp; Press Toolkit
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-gold-400 transition-colors">
                  Book Speaking Engagement
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Booking Support */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider text-xs">
              Ministry Inquiries
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-300">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:booking@julianmoreau.com" className="text-gold-400 hover:underline">
                  booking@julianmoreau.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>(504) 418-7290</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span>New Orleans, Louisiana 70179</span>
              </p>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenTechModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-850 text-gold-300 border border-gold-500/30 text-xs font-medium transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Suggested Tech Stack &amp; Architecture Report</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & USCCB Compliance */}
        <div className="pt-8 border-t border-navy-800 text-xs text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} Julian R. Moreau, M.T.S. All rights reserved. Canonically compliant with USCCB Charter.
          </p>
          <p className="flex items-center gap-1 text-[11px]">
            Designed with Catholic reverent craft for New Orleans &amp; beyond.
          </p>
        </div>
      </div>
    </footer>
  );
}
