import React from 'react';
import { motion } from 'motion/react';
import { Building2, Shield, Users, Award, Target, ChevronRight, Globe2, Briefcase, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import companyBg from '../assets/images/company_bg_1788903235837.jpg';

export default function Company() {
  return (
    <div className="bg-white text-slate-900 pt-[80px]">
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={companyBg}
            alt="Corporate Headquarters & Engineering Architecture"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <Building2 size={13} /> Corporate Profile & Vision
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              Engineering Safe Mobility For Critical National Assets
            </h1>
            <p className="text-lg sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
              Elevation Engineering is a pioneer in hazardous-zone vertical transportation, executing high-consequence projects across refineries, chemical complexes, and heavy infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF6B00] flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                To engineer and deliver flawless vertical mobility solutions in hazardous and extreme environments, protecting human lives and guaranteeing unbroken operational uptime for critical national infrastructure.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF6B00] flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Zero-Compromise Safety</h3>
              <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                Every component, enclosure, and cable assembly is rigorously certified by PESO, CIMFR, and international explosion-proof bodies to eliminate spark risk in explosive hydrocarbon zones.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF6B00] flex items-center justify-center mb-6">
                <Globe2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Pan-India Execution</h3>
              <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                With landmark installations spanning Assam to Maharashtra, Bihar, and Delhi NCR, our certified rigging and commissioning teams mobilize seamlessly across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Company Numbers */}
      <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#FF6B00] mb-2">25+</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Years of Engineering</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#FF6B00] mb-2">100%</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">PESO / CIMFR Compliant</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#FF6B00] mb-2">50+</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Refinery & Industrial Lifts</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#FF6B00] mb-2">Zero</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Safety Incidents Recorded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Quick Links */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore More About Elevation Engineering</h2>
          <p className="text-slate-500 font-light mb-10 max-w-2xl mx-auto">Learn about our heritage, safety standards, and client project portfolios.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              Our History & Legacy <ChevronRight size={14} />
            </Link>
            <Link
              to="/safety"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              Safety Compliance <ChevronRight size={14} />
            </Link>
            <Link
              to="/gallery"
              className="bg-[#FF6B00] hover:bg-[#e65100] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              View Projects Gallery <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
