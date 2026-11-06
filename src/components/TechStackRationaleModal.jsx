import React from 'react';
import { X, Check, AlertCircle, Sparkles, Layers, Cpu, Globe, Lock, ShieldCheck, DollarSign } from 'lucide-react';

export default function TechStackRationaleModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-stone-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-navy-950 text-stone-50 p-6 sm:p-8 flex items-start justify-between border-b border-navy-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900 border border-gold-400/30 text-gold-400 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Senior Web Architect Deliverable &middot; Section 2</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Platform Architecture &amp; Tech Stack Rationale
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
              Objective comparison of headless architectures vs. visual builders for a Catholic ministry speaker website.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-navy-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans text-stone-800 text-sm">
          
          {/* Executive Recommendation Callout */}
          <div className="bg-stone-50 border border-gold-400/40 rounded-2xl p-6">
            <h4 className="font-serif text-xl font-bold text-navy-950 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold-600" />
              Executive Recommendation: Astro / Modern Vite SSG + TinaCMS / GitHub
            </h4>
            <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
              For a high-trust Catholic speaker site where the client wants <strong>$0/month ongoing hosting overhead</strong>, lightning-fast static speeds (perfect 100 PageSpeed scores for diocesan committees on mobile), and total ownership without vendor lock-in, <strong>Astro or Vite + Git-backed CMS (TinaCMS/Decap)</strong> is the superior architectural choice over expensive proprietary platforms like Webflow.
            </p>
          </div>

          {/* Three-Way Comparison Table */}
          <div>
            <h4 className="font-serif text-lg font-bold text-navy-950 mb-4">
              Comprehensive Platform Comparison Matrix
            </h4>
            <div className="overflow-x-auto border border-stone-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-100 text-navy-950 uppercase font-bold tracking-wider border-b border-stone-200">
                  <tr>
                    <th className="p-3.5">Evaluation Criteria</th>
                    <th className="p-3.5 bg-gold-50/60 text-gold-900 font-extrabold">Astro / Vite + TinaCMS</th>
                    <th className="p-3.5">Webflow</th>
                    <th className="p-3.5">Jamstack + Sanity.io</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  <tr>
                    <td className="p-3.5 font-semibold text-navy-950">Ongoing Maintenance Cost</td>
                    <td className="p-3.5 bg-gold-50/30 text-green-700 font-bold">$0/month (GitHub Pages / Cloudflare)</td>
                    <td className="p-3.5 text-stone-600">$29 – $49/mo CMS Plan + form fees</td>
                    <td className="p-3.5 text-stone-600">$0-$15/mo (Sanity free tier limits)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-navy-950">Non-Technical Client Editing</td>
                    <td className="p-3.5 bg-gold-50/30">Visual on-page editing or JSON schema forms</td>
                    <td className="p-3.5">Intuitive visual editor, but complex UI for new sections</td>
                    <td className="p-3.5">Polished Sanity Studio dashboard</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-navy-950">Mobile Performance &amp; CWV</td>
                    <td className="p-3.5 bg-gold-50/30 font-bold text-green-700">Zero JS by default; 98-100 mobile score</td>
                    <td className="p-3.5 text-stone-600">65-80 score due to heavy Webflow JS/CSS runtime</td>
                    <td className="p-3.5">90-95 score depending on hydration bundle</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-navy-950">Contact Form Handling</td>
                    <td className="p-3.5 bg-gold-50/30">Formspree / Web3Forms / Resend (Generous free tiers)</td>
                    <td className="p-3.5">Native forms, but capped at 50/month on lower tiers</td>
                    <td className="p-3.5">Serverless endpoint via Resend/SendGrid</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-navy-950">Vendor Lock-in &amp; Portability</td>
                    <td className="p-3.5 bg-gold-50/30 text-green-700 font-bold">Zero: pure Markdown/JSON + React/Astro code</td>
                    <td className="p-3.5 text-red-600 font-medium">High lock-in: cannot export CMS interactions</td>
                    <td className="p-3.5">Moderate: proprietary Sanity GROQ schema</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Platform Rationale Breakdowns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Option A */}
            <div className="p-5 rounded-xl border border-stone-200 bg-stone-50">
              <span className="text-[11px] font-bold text-gold-700 uppercase tracking-wider block mb-1">
                Option 1: Recommended
              </span>
              <h5 className="font-serif text-base font-bold text-navy-950 mb-2">
                Astro / Vite + Markdown &amp; TinaCMS
              </h5>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                Generates pure pre-rendered static HTML. Deploys cleanly to GitHub Pages, Cloudflare Pages, or Vercel. 
              </p>
              <ul className="space-y-1 text-xs text-stone-700">
                <li className="flex items-center gap-1.5 text-green-700">
                  <Check className="w-3.5 h-3.5" /> 100% Free hosting on GitHub/Cloudflare
                </li>
                <li className="flex items-center gap-1.5 text-green-700">
                  <Check className="w-3.5 h-3.5" /> Client can edit in browser via Tina or Git
                </li>
                <li className="flex items-center gap-1.5 text-green-700">
                  <Check className="w-3.5 h-3.5" /> Sub-second global CDN TTFB
                </li>
              </ul>
            </div>

            {/* Option B */}
            <div className="p-5 rounded-xl border border-stone-200 bg-stone-50">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                Option 2: No-Code Visual
              </span>
              <h5 className="font-serif text-base font-bold text-navy-950 mb-2">
                Webflow CMS
              </h5>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                Great visual drag-and-drop designer for marketing agencies, but comes with recurring SaaS tax and bloated runtime.
              </p>
              <ul className="space-y-1 text-xs text-stone-700">
                <li className="flex items-center gap-1.5 text-green-700">
                  <Check className="w-3.5 h-3.5" /> Easy for visual designers
                </li>
                <li className="flex items-center gap-1.5 text-amber-700">
                  <AlertCircle className="w-3.5 h-3.5" /> ~$350-$600/year subscription cost
                </li>
                <li className="flex items-center gap-1.5 text-amber-700">
                  <AlertCircle className="w-3.5 h-3.5" /> Sub-optimal mobile PageSpeed scores
                </li>
              </ul>
            </div>

            {/* Option C */}
            <div className="p-5 rounded-xl border border-stone-200 bg-stone-50">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                Option 3: Enterprise Headless
              </span>
              <h5 className="font-serif text-base font-bold text-navy-950 mb-2">
                Next.js / Jamstack + Sanity
              </h5>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                Powerhouse headless CMS with structured real-time collaboration. Ideal for multi-author publishing networks.
              </p>
              <ul className="space-y-1 text-xs text-stone-700">
                <li className="flex items-center gap-1.5 text-green-700">
                  <Check className="w-3.5 h-3.5" /> Dedicated Sanity Studio CMS interface
                </li>
                <li className="flex items-center gap-1.5 text-stone-600">
                  <Check className="w-3.5 h-3.5" /> Real-time preview mode
                </li>
                <li className="flex items-center gap-1.5 text-amber-700">
                  <AlertCircle className="w-3.5 h-3.5" /> Requires developer maintenance for schema changes
                </li>
              </ul>
            </div>

          </div>

          {/* Form Handling Strategy */}
          <div className="border-t border-stone-200 pt-6">
            <h4 className="font-serif text-lg font-bold text-navy-950 mb-2">
              Form Pipeline Recommendation (Formspree vs. Resend vs. Web3Forms)
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-3">
              For Catholic parish speakers, having form submissions immediately land in both the speaker’s personal email (with reply-to set to the pastor) AND logged into a Google Sheet or Notion database is critical so no retreat inquiry slips through the cracks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-stone-100 rounded-lg">
                <strong className="text-navy-950 block mb-1">Web3Forms / Formspree (Selected for Demo):</strong>
                <span>Zero server maintenance, CAPTCHA spam protection, instant forwarding to speaker's inbox, and webhooks to Zapier/Google Sheets.</span>
              </div>
              <div className="p-3.5 bg-stone-100 rounded-lg">
                <strong className="text-navy-950 block mb-1">Resend + React Email:</strong>
                <span>Best if the speaker wants gorgeous, custom-designed transactional email receipts sent immediately to the pastor or event chair.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-stone-100 p-4 sm:p-6 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-navy-900 text-stone-50 text-xs font-semibold hover:bg-navy-850 active:scale-[0.98]"
          >
            Close Rationale
          </button>
        </div>

      </div>
    </div>
  );
}
