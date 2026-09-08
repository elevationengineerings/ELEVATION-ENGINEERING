import React from 'react';
import { motion } from 'motion/react';
import { HardHat, Compass, CheckCircle2, ArrowRight, ShieldAlert, Wrench, ShieldCheck, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import precisionBg from '../../assets/images/precision_installation_bg_1788903210603.jpg';

export default function PrecisionInstallation() {
  return (
    <div className="bg-white text-slate-900 pt-[80px]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={precisionBg}
            alt="Precision Industrial Erection"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
              <HardHat size={13} /> Precision Erection & Mechanical Alignment
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Precision Installation & Erection
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8">
              Field-proven execution in high-risk refinery towers, chemical processing columns, and heavy civil structures with millimetric alignment tolerances and strict hot-work safety protocols.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-[#FF6B00] hover:bg-[#e65100] text-white text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-sm flex items-center gap-2"
              >
                Discuss Installation Project <ArrowRight size={16} />
              </Link>
              <Link
                to="/gallery"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
              >
                View Commissioned Sites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Methodologies */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Executing complex vertical transit in active hazardous zones
              </h2>
              <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-6">
                Installing elevators in operational petrochemical refineries or multi-span bridges demands specialized tooling, cold-work techniques when hot-work permits are restricted, and laser-guided rail alignment to counter thermal expansion and dynamic tower sway.
              </p>
              
              <div className="space-y-3">
                {[
                  "Laser plumb-line alignment ensuring guide rail deviation under ±0.5mm per 30m",
                  "Cold-fastening and explosion-safe hydraulic bolting systems",
                  "Structural steel shaft fabrication and cladding",
                  "Certified rigging engineers and high-altitude certified scaffolders",
                  "Zero-hot-work deployment methodologies inside operational hydrocarbon units"
                ].map((spec, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-[#FF6B00] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-slate-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
                  alt="Technicians installing industrial lift system"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Precision Workflow */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Our Precision Installation Process
            </h2>
            <p className="text-slate-500 font-light">
              From site preparation to final safety validation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Site Preparation & Planning",
                desc: "Thorough assessment of the installation environment to ensure safe and efficient execution."
              },
              {
                step: "02",
                title: "Structural Assembly",
                desc: "Careful construction of the framework and structural supports with attention to stability."
              },
              {
                step: "03",
                title: "Systems Integration",
                desc: "Seamlessly connecting electrical and mechanical components to form a unified working system."
              },
              {
                step: "04",
                title: "Safety Validation",
                desc: "Rigorous checks and testing procedures to verify absolute operational safety and reliability."
              }
            ].map((st, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs relative">
                <div className="text-4xl font-extrabold text-slate-200 mb-4">{st.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{st.title}</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Have a challenging vertical installation project?</h3>
            <p className="text-slate-500 text-sm font-light mt-1">Get in touch with our project managers for comprehensive feasibility and site planning.</p>
          </div>
          <Link
            to="/contact"
            className="bg-[#FF6B00] text-white hover:bg-[#e65100] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            Request Site Inspection
          </Link>
        </div>
      </section>
    </div>
  );
}
