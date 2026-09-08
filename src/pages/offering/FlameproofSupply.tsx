import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, CheckCircle2, ArrowRight, FileCheck, Layers, Cpu, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import flameproofBg from '../../assets/images/flameproof_supply_bg_1788903268110.jpg';

export default function FlameproofSupply() {
  return (
    <div className="bg-white text-slate-900 pt-[80px]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={flameproofBg}
            alt="Flameproof Material Manufacturing"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
              <Flame size={13} /> Certified Industrial Hardware
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Flameproof Material & Component Supply
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8">
              We engineer, source, and supply certified explosion-proof electrical enclosures, heavy-duty traction drives, spark-resistant assemblies, and control units built for volatile environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-[#FF6B00] hover:bg-[#e65100] text-white text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-sm flex items-center gap-2"
              >
                Request Material Catalog <ArrowRight size={16} />
              </Link>
              <Link
                to="/safety"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
              >
                View Safety Certifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Technical Certifications */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Engineered to prevent ignition in explosive gas and dust atmospheres
              </h2>
              <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-6">
                In petrochemical refineries, chemical processing facilities, and fertilizer plants, electrical sparks and ignition sources can create serious safety risks. Elevation Engineering supplies robust flameproof electrical equipment designed to operate safely in hazardous and demanding industrial environments.
              </p>
              
              <div className="space-y-3">
                {[
                  "Suitable for hazardous and explosive atmospheres",
                  "Robust construction using high-quality industrial materials",
                  "Designed to contain internal ignition and prevent external flame propagation",
                  "Protection against dust, moisture, chemicals, and harsh weather conditions",
                  "Built for reliable performance in demanding industrial applications",
                  "Manufactured to meet relevant industrial safety and quality standards"
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
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center mb-4">
                    <Shield size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Ex-d Enclosures</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Heavy-duty junction boxes, push-button stations, and controller housings designed with precision machined flame paths.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center mb-4">
                    <Zap size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Flameproof Motors</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    High-efficiency VVVF traction machines with flameproof brake coils and thermal protection sensors.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center mb-4">
                    <Cpu size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Intrinsic Safety Relays</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Ex-i galvanic isolation barriers ensuring signal circuits operate under minimum ignition energy limits.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center mb-4">
                    <Layers size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Armored Cables & Glands</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Double-compression flameproof barrier glands and flame-retardant low-smoke (FRLS) traveling cables.
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
            <h3 className="text-2xl font-bold text-slate-900">Need specific BOM sourcing or custom flameproof parts?</h3>
            <p className="text-slate-500 text-sm font-light mt-1">Our engineering team provides fast turnaround for tender specifications and BOQ costing.</p>
          </div>
          <Link
            to="/contact"
            className="bg-[#FF6B00] text-white hover:bg-[#e65100] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            Contact Engineering Desk
          </Link>
        </div>
      </section>
    </div>
  );
}
