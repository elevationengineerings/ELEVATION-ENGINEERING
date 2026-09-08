import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Clock, CheckCircle2, ArrowRight, RefreshCw, Cpu, PhoneCall, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import modernizationBg from '../../assets/images/modernization_bg_1788903295483.jpg';

export default function ModernizationMaintenance() {
  return (
    <div className="bg-white text-slate-900 pt-[80px]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={modernizationBg}
            alt="Modernization & Maintenance"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
              <RefreshCw size={13} /> Retrofitting & 24/7 Rapid AMC
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Modernization, AMC & Preventative Care
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8">
              Extend the lifecycle of aging industrial elevators, upgrade legacy units to modern flameproof standards, and maintain maximum plant uptime with comprehensive Annual Maintenance Contracts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-[#FF6B00] hover:bg-[#e65100] text-white text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-sm flex items-center gap-2"
              >
                Request Modernization Audit <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
              >
                Inquire AMC Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modernization Advantages */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Upgrading legacy systems without complete shaft demolition
              </h2>
              <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-6">
                Replacing an entire elevator system in an operating refinery or industrial facility can result in significant downtime and disruption. Elevation Engineering provides modular modernization solutions that upgrade key elevator components while retaining the existing shaft and supporting infrastructure wherever possible.
              </p>
              
              <div className="space-y-3">
                {[
                  "Modern, energy-efficient drive and control systems",
                  "Upgraded elevator controls for smoother and more reliable operation",
                  "Modernization solutions for elevators operating in demanding industrial environments",
                  "Preventive maintenance programs to improve equipment reliability and service life",
                  "Dedicated technical support for breakdowns and maintenance requirements",
                  "Genuine, quality-assured replacement components with traceability",
                  "Solutions designed to minimize operational disruption during modernization"
                ].map((spec, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-[#FF6B00] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Clock size={24} className="text-[#FF6B00] mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1">Reliable Industrial Performance</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Planned maintenance and regular inspections help maintain elevator performance, reduce unexpected failures, and extend equipment service life.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <PhoneCall size={24} className="text-[#FF6B00] mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1">Responsive Technical Support</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Dedicated service support for maintenance requirements, breakdowns, and critical operational needs.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <ShieldAlert size={24} className="text-[#FF6B00] mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1">Emergency Assistance</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Prompt technical assistance for urgent elevator issues in industrial and continuous-operation facilities.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Wrench size={24} className="text-[#FF6B00] mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1">Quality Replacement Parts</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Reliable replacement components selected for compatibility, durability, and dependable long-term operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Have older elevators that need life-extension or AMC?</h3>
            <p className="text-slate-500 text-sm font-light mt-1">Our maintenance specialists assess your existing assets and propose tailored maintenance plans.</p>
          </div>
          <Link
            to="/contact"
            className="bg-[#FF6B00] text-white hover:bg-[#e65100] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            Get AMC Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}
