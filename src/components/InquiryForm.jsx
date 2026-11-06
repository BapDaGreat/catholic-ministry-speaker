import React, { useState } from 'react';
import { Send, Calendar, CheckCircle2, Phone, Mail, MapPin, Building, Users, DollarSign, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: 'Pastor',
    eventType: 'Parish Mission (2-3 Nights)',
    targetDate: '',
    alternateDate: '',
    attendance: '150 - 500 Attendees',
    budgetRange: '$3,000 - $5,000',
    location: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.organization) {
      toast.error('Please complete required fields (Name, Email, Parish/Organization).');
      return;
    }

    setSubmitting(true);

    // Using toast.promise from sonner
    const sendInquiry = new Promise((resolve) => setTimeout(resolve, 1200));

    toast.promise(sendInquiry, {
      loading: 'Submitting booking inquiry to Julian Moreau’s ministry team...',
      success: () => {
        setSubmitting(false);
        setSubmitted(true);
        return `Inquiry received for ${formData.organization}! Julian’s coordinator will review and reply within 24–48 hours.`;
      },
      error: 'There was an issue sending your inquiry. Please email booking@julianmoreau.com directly.'
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-caps-sub text-xs text-gold-700 font-bold block mb-2">
            Schedule an Event
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-navy-950 mb-4">
            Book a Speaking Engagement
          </h2>
          <p className="font-sans text-base sm:text-lg text-stone-700">
            Submit your event details below to check Julian's 2026–2027 calendar availability, receive a customized proposal, and reserve your date.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contacts & Ministry Commitment */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-navy-950 text-stone-50 rounded-2xl p-7 sm:p-8 shadow-warm-lg border border-navy-800">
              <h3 className="font-serif text-2xl font-bold text-stone-50 mb-3">
                Ministry Logistics
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                Julian's calendar fills 6 to 12 months in advance, especially for Advent and Lent. We do our best to accommodate short-notice requests whenever feasible.
              </p>

              <div className="space-y-4 text-xs sm:text-sm border-t border-navy-800 pt-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Email Inquiries:</span>
                    <a href="mailto:booking@julianmoreau.com" className="text-gold-400 hover:underline">
                      booking@julianmoreau.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Ministry Office Phone:</span>
                    <span className="text-stone-300">(504) 418-7290 (Direct)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Base Location:</span>
                    <span className="text-stone-300">New Orleans, Louisiana (Travels Worldwide)</span>
                  </div>
                </div>
              </div>

              {/* Honorarium Policy */}
              <div className="mt-8 pt-6 border-t border-navy-800">
                <span className="font-serif font-bold text-sm text-gold-400 block mb-1">
                  Honorarium &amp; Travel Policy:
                </span>
                <p className="text-[11px] text-stone-300 leading-relaxed">
                  We believe no parish should be denied the Word of God due to financial constraints. While standard honorarium ranges assist in supporting Julian’s family and apostolate, tiered and sliding-scale arrangements are gladly made for rural or missionary parishes.
                </p>
              </div>
            </div>

            {/* Canonical Verification Pill */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-warm-sm flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-navy-950 block mb-0.5">
                  Diocesan Approval Guaranteed
                </span>
                <p className="text-stone-700">
                  Every parish booking is accompanied by an official Canonical Letter of Good Standing dispatched through the Archdiocese of New Orleans Chancellor.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-stone-200 shadow-warm-lg">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 text-green-700 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mb-2">
                    Inquiry Received, In Deo Speramus
                  </h3>
                  <p className="font-sans text-sm text-stone-700 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for inviting Julian to minister to {formData.organization}. Our event coordinator will review the date ({formData.targetDate || 'your requested window'}) and follow up within 24 to 48 business hours with availability and full details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-lg bg-navy-900 text-stone-50 text-xs font-semibold hover:bg-navy-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Row 1: Contact Name & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Rev. David Miller / Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                        Your Role / Title
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                      >
                        <option>Pastor / Associate Pastor</option>
                        <option>Director of Religious Ed (DRE)</option>
                        <option>School President / Principal</option>
                        <option>Campus Minister</option>
                        <option>Diocesan Staff / Director</option>
                        <option>Men's / Women's Retreat Chair</option>
                        <option>Pastoral Council Member</option>
                        <option>Other Ministry Coordinator</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                        Work / Ministry Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="pastor@stmarysparish.org"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(504) 555-0192"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>
                  </div>

                  {/* Row 3: Parish/Organization & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                        Organization / Parish / Diocese *
                      </label>
                      <input
                        type="text"
                        name="organization"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. St. Jude Parish / Diocese of Dallas"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                        City &amp; State
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Lafayette, LA / Austin, TX"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>
                  </div>

                  {/* Row 4: Event Type & Target Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                      >
                        <option>Parish Mission (2-3 Nights)</option>
                        <option>Keynote Address (60-90 min)</option>
                        <option>Half-Day Parish/School Retreat (3-4 hrs)</option>
                        <option>Full-Day Leadership Conclave (6-8 hrs)</option>
                        <option>Weekend Conference / Men's/Women's Retreat</option>
                        <option>Pastoral Council Strategic Facilitation</option>
                        <option>Other Custom Format</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                        Target Event Date
                      </label>
                      <input
                        type="date"
                        name="targetDate"
                        value={formData.targetDate}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>
                  </div>

                  {/* Row 5: Estimated Attendance & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                        Estimated Attendance
                      </label>
                      <select
                        name="attendance"
                        value={formData.attendance}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                      >
                        <option>Under 50 (Small Leadership/Staff)</option>
                        <option>50 - 150 (Faculty / Small Parish)</option>
                        <option>150 - 500 (Standard Parish Mission)</option>
                        <option>500 - 1,000 (Major Assembly)</option>
                        <option>1,000+ (Diocesan Conference)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                        Honorarium Budget Range
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                      >
                        <option>$1,500 - $3,000 (Half-day / Day of Reflection)</option>
                        <option>$3,000 - $5,000 (Full-day / Parish Mission)</option>
                        <option>$5,000 - $8,000 (Weekend Mission / Multi-Day)</option>
                        <option>$8,000+ (Major Diocesan Keynote + Workshops)</option>
                        <option>Sliding Scale / Financial Assistance Requested</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 6: Pastoral Notes & Theme Ideas */}
                  <div>
                    <label className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                      Pastoral Goals, Themes &amp; Event Notes
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Share your pastoral vision for this event, any specific challenges or themes (e.g. Eucharistic revival, post-COVID renewal, Advent preparation)..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-navy-900 hover:bg-navy-850 text-stone-50 font-semibold text-sm shadow-warm-md flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70"
                  >
                    <Send className="w-4 h-4 text-gold-400" />
                    <span>{submitting ? 'Sending Inquiry...' : 'Submit Booking Inquiry'}</span>
                  </button>

                  <p className="text-center text-[11px] text-stone-700">
                    Your information is held in strict pastoral confidentiality. Julian’s team will reply within 24 to 48 hours.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
