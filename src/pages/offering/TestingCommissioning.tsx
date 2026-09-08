import React from 'react';
import { motion } from 'motion/react';
import { FileCheck, ShieldCheck, CheckCircle2, ArrowRight, Activity, Gauge, Scale, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import testingBg from '../../assets/images/testing_bg_1788903281946.jpg';

export default function TestingCommissioning() {
  return (
    <div className="bg-white text-slate-900 pt-[80px]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={testingBg}
            alt="Testing & Commissioning"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
              <ShieldCheck size={13} /> Full Load & Explosion Safety Validation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Testing, Certification & Commissioning
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8">
              End-to-end statutory testing, PESO / CIMFR compliance validation, 125% dynamic over-load checks, and government inspectorate approvals before handover.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-[#FF6B00] hover:bg-[#e65100] text-white text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-sm flex items-center gap-2"
              >
                Book Commissioning Audit <ArrowRight size={16} />
              </Link>
              <Link
                to="/safety"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
              >
                Zero-Incident Protocol
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Protocol Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Rigorous testing matrix meeting Indian and international standards
              </h2>
              <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-6">
                Before handing over any industrial elevator to clients like IOCL or HPCL, our commissioning engineers execute a multi-tier test battery ensuring every safety gear, overspeed governor, flameproof gap, and emergency communication line functions flawlessly.
              </p>
              
              <div className="space-y-3">
                {[
                  "Dynamic load limit validation at maximum payload capacity",
                  "Comprehensive emergency safety gear engagement trials",
                  "Flame path and structural integrity inspection",
                  "Electrical resistance and grounding continuity testing",
                  "Emergency descent and secondary safety mode verification"
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
                  <Scale size={24} className="text-[#FF6B00] mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1">Static & Dynamic Load</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Calibration using certified test weights to verify drive torque, traction friction, and buffer deflection.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Activity size={24} className="text-[#FF6B00] mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1">Vibration & Noise</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Acoustic sound pressure testing and ISO 18738 ride quality vibration measurement.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <ShieldCheck size={24} className="text-[#FF6B00] mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1">Statutory Sign-Off</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Coordination with state lift inspectors, PESO, and factory safety departments for legal licensing.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Gauge size={24} className="text-[#FF6B00] mb-3" />
                  <h3 className="font-bold text-slate-900 mb-1">Over-speed Trip</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Tachometric verification of overspeed governors to guarantee mechanical lock under 115% nominal speed.
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
            <h3 className="text-2xl font-bold text-slate-900">Need third-party audit or statutory testing support?</h3>
            <p className="text-slate-500 text-sm font-light mt-1">Our certified inspection engineers assist with plant audits, recertifications, and handover dossiers.</p>
          </div>
          <Link
            to="/contact"
            className="bg-[#FF6B00] text-white hover:bg-[#e65100] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            Inquire for Testing
          </Link>
        </div>
      </section>
    </div>
  );
}
