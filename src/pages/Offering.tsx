import React from 'react';
import { motion } from 'motion/react';
import { Flame, HardHat, ShieldCheck, RefreshCw, ArrowRight, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import offeringBg from '../assets/images/offering_bg_1788903249675.jpg';
import precisionBg from '../assets/images/precision_installation_bg_1788903210603.jpg';

export default function Offering() {
  const offerings = [
    {
      id: "flameproof-materials",
      pillar: "01 / SUPPLY",
      title: "Flameproof Material & Equipment Supply",
      subtitle: "Certified Explosion-Proof Industrial Hardware",
      desc: "Supplying precision-engineered Ex-d certified control panels, heavy-duty traction machines, armored traveling cables, and limit switches engineered to withstand volatile industrial gas atmospheres.",
      link: "/offering/flameproof-materials",
      icon: Flame,
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop",
      highlights: [
        "Gas Group IIA, IIB, and IIC certified",
        "PESO and CIMFR compliant enclosures",
        "Cast iron and SS316 explosion containment"
      ]
    },
    {
      id: "precision-installation",
      pillar: "02 / INSTALLATION",
      title: "Precision Installation & Erection",
      subtitle: "Precision Mechanical Alignment & Shaft Construction",
      desc: "Comprehensive installation services in high-risk refinery towers, tall chemical processing columns, and suspension bridges with millimeter-precision laser plumb alignment.",
      link: "/offering/precision-installation",
      icon: HardHat,
      img: precisionBg,
      highlights: [
        "Zero-hot-work deployment methodologies",
        "Laser-guided guide rail alignment",
        "High-altitude certified rigging teams"
      ]
    },
    {
      id: "testing-commissioning",
      pillar: "03 / COMMISSIONING",
      title: "Testing, Certification & Commissioning",
      subtitle: "Statutory Sign-off & 125% Load Validation",
      desc: "Full pre-commissioning test batteries including free-fall drop tests, dynamic over-load verification, spark-gap audits, and coordination with government lift inspectorates.",
      link: "/offering/testing-commissioning",
      icon: ShieldCheck,
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
      highlights: [
        "125% dynamic over-load testing",
        "Full statutory safety sign-offs",
        "Vibration and ride quality acoustics"
      ]
    },
    {
      id: "modernization-maintenance",
      pillar: "04 / MAINTENANCE",
      title: "Modernization, AMC & Preventative Care",
      subtitle: "24/7 Rapid Response & Asset Lifecycle Extension",
      desc: "Modular modernization packages that upgrade legacy elevator machines, controllers, and doors to modern energy-efficient standards without full shaft replacement.",
      link: "/offering/modernization-maintenance",
      icon: RefreshCw,
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
      highlights: [
        "99.8% uptime SLA with preventative visits",
        "Energy savings up to 40% with VVVF drives",
        "Original OEM flameproof spares stock"
      ]
    }
  ];

  return (
    <div className="bg-white text-slate-900 pt-[80px]">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={offeringBg}
            alt="Industrial Engineering Solutions"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 md:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Comprehensive Engineering Lifecycle
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 uppercase">
            SUPPLY, INSTALLATION, COMMISSIONING &amp; MAINTENANCE
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            From certified flameproof hardware supply to precision erection, statutory testing, and lifetime maintenance across India's hazardous industrial facilities.
          </p>
        </div>
      </section>

      {/* Offerings List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="space-y-16">
            {offerings.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16 p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-slate-200">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-bold bg-[#FF6B00]/10 text-[#FF6B00] px-3 py-1 rounded-full uppercase tracking-wider">
                        {item.pillar}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider mb-1">
                      {item.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                      {item.title}
                    </h2>
                    <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2 mb-8">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-[#FF6B00] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        to={item.link}
                        className="bg-[#FF6B00] hover:bg-[#e65100] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-sm flex items-center gap-2"
                      >
                        Explore Solution Details <ArrowRight size={14} />
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-colors"
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a Custom Engineering Quotation?</h2>
          <p className="text-slate-400 font-light max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Submit your technical specifications, tender requirements, or BOQ for immediate engineering review.
          </p>
          <Link
            to="/contact"
            className="bg-[#FF6B00] hover:bg-[#e65100] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-md inline-flex items-center gap-2"
          >
            Submit RFP / Inquiry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
