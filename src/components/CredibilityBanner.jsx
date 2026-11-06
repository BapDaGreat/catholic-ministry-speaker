import React from 'react';
import { Church, Users, GraduationCap, Compass, ShieldCheck } from 'lucide-react';

export default function CredibilityBanner({ onNavigate }) {
  const audiences = [
    {
      title: 'Catholic Parishes',
      description: 'Lenten & Advent Missions, Eucharistic Adoration Evenings, 40 Hours Devotion, and Parish Feasts.',
      icon: Church,
      count: '110+ Parishes'
    },
    {
      title: 'Dioceses & Convocations',
      description: 'Clergy Study Days, Permanent Deacon Convocations, Catechist Rallies, and Diocesan Assemblies.',
      icon: Users,
      count: '42 Dioceses'
    },
    {
      title: 'Catholic Schools & Campus',
      description: 'Faculty In-Service Days, High School Student Retreats, and Collegiate Leadership Formation.',
      icon: GraduationCap,
      count: '35+ Schools & Colleges'
    },
    {
      title: 'Men & Women Retreats',
      description: 'Archdiocesan Conferences, Silent Weekend Contemplative Retreats, and Leadership Discernment.',
      icon: Compass,
      count: '40+ Major Retreats'
    }
  ];

  return (
    <section className="bg-stone-100/90 py-12 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-caps-sub text-xs text-gold-700 font-semibold block mb-2">
            Audiences & Communities Served
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-navy-950">
            Trusted Formation for Leaders Across the Church
          </h2>
          <p className="font-sans text-sm text-stone-700 mt-2">
            Every talk is canonically vetted, grounded in the Magisterium, and tailored to the unique pastoral needs of your community.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-warm-sm hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-900 mb-4">
                    <Icon className="w-5 h-5 text-gold-600" />
                  </div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-serif text-lg font-bold text-navy-950">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-stone-100 text-stone-700 uppercase tracking-wider mb-2">
                    {item.count}
                  </span>
                  <p className="font-sans text-xs text-stone-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Canonical Good Standing Notice */}
        <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
            <span>
              <strong>Canonical Compliance:</strong> Letters of Good Standing and Celebret verification provided via Archdiocese of New Orleans Chancellor's Office.
            </span>
          </div>
          <button
            onClick={() => onNavigate('media')}
            className="text-navy-900 hover:text-gold-700 font-semibold underline underline-offset-4 transition-colors"
          >
            Download Diocesan Clearance & Bio One-Sheet &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
