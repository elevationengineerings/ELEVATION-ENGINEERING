import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Play, X, Shield, Flame, HardHat, RefreshCw, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import InteractiveIndiaMap from '../components/InteractiveIndiaMap';

export default function Home() {
  const navigate = useNavigate();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const scrollToContent = () => {
    const nextSection = document.getElementById('core-pillars');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-slate-900 flex flex-col">
      {/* 1. Fullscreen Opening Hero Screen */}
      <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-between items-center text-white overflow-hidden select-none">
        {/* Cinematic Atmospheric Industrial Background */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/homepage-video/Drone_ascending_industrial_refin…_1080p_202609090240.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/30 backdrop-brightness-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-black/20 to-slate-950/70" />
        </div>

        {/* Top Spacer for Fixed Header */}
        <div className="h-[80px]" />

        {/* Centered Display Copy */}
        <div className="relative z-10 max-w-[1180px] mx-auto px-4 md:px-8 text-center my-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight text-white leading-[1.12] mb-6 drop-shadow-md font-sans uppercase"
          >
            SUPPLY, INSTALLATION, COMMISSIONING &amp; MAINTENANCE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-xs mb-8"
          >
            Over 25 years of specialized engineering in flameproof elevator systems, heavy-duty industrial vertical transit, and specialized refinery column mobility across India.
          </motion.p>
        </div>

        {/* Bottom Bar: Scroll Indicator & Play Button */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-8 flex items-center justify-between">
          <div className="w-12 hidden md:block" />

          {/* Center: Scroll to know more */}
          <motion.button
            onClick={scrollToContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto flex flex-col items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer group"
          >
            <ChevronDown size={20} className="animate-bounce" />
            <span className="text-xs sm:text-sm font-normal tracking-wide text-white/90 group-hover:text-white">
              Scroll to explore engineering
            </span>
          </motion.button>
          
        </div>
      </section>

      {/* 2. Core Engineering Capabilities Grid */}
      <section id="core-pillars" className="py-16 md:py-24 bg-white border-b border-slate-100 scroll-mt-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase mb-3">
              SUPPLY, INSTALLATION, COMMISSIONING &amp; MAINTENANCE
            </h2>
            <p className="text-slate-600 font-light text-base sm:text-lg">
              Complete lifecycle engineering for heavy-duty industrial facilities, petrochemical refineries, and national infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1: SUPPLY */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF6B00] flex items-center justify-center mb-6">
                  <Flame size={24} />
                </div>
                <div className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider mb-1">01 / Equipment &amp; Spares</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#FF6B00] transition-colors">
                  SUPPLY
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                  Certified Ex-d enclosures, flameproof traction motors, spark-resistant assemblies, and armored FRLS cables for volatile industrial gas groups.
                </p>
              </div>
              <Link
                to="/offering/flameproof-materials"
                className="text-xs font-bold text-slate-900 group-hover:text-[#FF6B00] inline-flex items-center gap-1 mt-auto transition-colors"
              >
                Material Supply Details <ChevronRight size={14} />
              </Link>
            </div>

            {/* Pillar 2: INSTALLATION */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF6B00] flex items-center justify-center mb-6">
                  <HardHat size={24} />
                </div>
                <div className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider mb-1">02 / Precision Erection</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#FF6B00] transition-colors">
                  INSTALLATION
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                  Precision mechanical alignment, laser plumb-line guidance, and zero-hot-work installation inside operational hydrocarbon columns and towers.
                </p>
              </div>
              <Link
                to="/offering/precision-installation"
                className="text-xs font-bold text-slate-900 group-hover:text-[#FF6B00] inline-flex items-center gap-1 mt-auto transition-colors"
              >
                Installation Process <ChevronRight size={14} />
              </Link>
            </div>

            {/* Pillar 3: COMMISSIONING */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF6B00] flex items-center justify-center mb-6">
                  <Shield size={24} />
                </div>
                <div className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider mb-1">03 / Testing &amp; Sign-off</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#FF6B00] transition-colors">
                  COMMISSIONING
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                  125% dynamic over-load verification, PESO &amp; CIMFR regulatory approvals, and multi-tier safety sign-offs before client handover.
                </p>
              </div>
              <Link
                to="/offering/testing-commissioning"
                className="text-xs font-bold text-slate-900 group-hover:text-[#FF6B00] inline-flex items-center gap-1 mt-auto transition-colors"
              >
                Testing Protocols <ChevronRight size={14} />
              </Link>
            </div>

            {/* Pillar 4: MAINTENANCE */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF6B00] flex items-center justify-center mb-6">
                  <RefreshCw size={24} />
                </div>
                <div className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider mb-1">04 / 24/7 AMC &amp; Retrofit</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#FF6B00] transition-colors">
                  MAINTENANCE
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                  Modular modernization packages, 99.8% uptime SLAs, and dedicated technician teams with original OEM spare parts inventory.
                </p>
              </div>
              <Link
                to="/offering/modernization-maintenance"
                className="text-xs font-bold text-slate-900 group-hover:text-[#FF6B00] inline-flex items-center gap-1 mt-auto transition-colors"
              >
                AMC &amp; Modernization <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Flagship Projects Showcase */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-2 block">
                Field Installations
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Featured Landmark Projects
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-[#FF6B00] px-6 py-3 rounded-full transition-colors self-start md:self-auto"
            >
              Browse Full Gallery <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col group">
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                <img
                  src="/images/GUHWATI%20IOCL/IMG-20210207-WA0001.jpg"
                  alt="IOCL Guwahati Refinery Elevator Installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin size={11} className="text-[#FF6B00]" /> Guwahati, Assam
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider mb-2">Petrochemical Refinery</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                  IOCL Guwahati Refinery
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed mb-6 flex-1">
                  Heavy flameproof industrial passenger & freight lifts installed along high-temperature processing columns in Zone 1 environment.
                </p>
                <Link
                  to="/gallery?place=guwahati-iocl"
                  className="text-xs font-bold text-slate-900 group-hover:text-[#FF6B00] inline-flex items-center gap-1 mt-auto"
                >
                  View Project Photos <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col group">
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                <img
                  src="/images/HPCL%20MUMBAI/IMG_20210318_160533068.jpeg"
                  alt="HPCL Mumbai Refinery Lift"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin size={11} className="text-[#FF6B00]" /> Mumbai, Maharashtra
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider mb-2">Petrochemical Complex</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                  HPCL Mumbai Refinery
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed mb-6 flex-1">
                  Complete integrated supply, mechanical alignment, and statutory PESO sign-offs for extreme-duty hazardous traction elevators.
                </p>
                <Link
                  to="/gallery?place=hpcl-mumbai"
                  className="text-xs font-bold text-slate-900 group-hover:text-[#FF6B00] inline-flex items-center gap-1 mt-auto"
                >
                  View Project Photos <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col group">
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                <img
                  src="/images/DELHI%20SIGNATURE%20BRIDGE/IMG_20190819_173532.jpg"
                  alt="Delhi Signature Bridge Elevator"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin size={11} className="text-[#FF6B00]" /> Wazirabad, Delhi
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider mb-2">Landmark Infrastructure</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                  Delhi Signature Bridge Pylon
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed mb-6 flex-1">
                  Custom-engineered inclined vertical elevator installed inside the main bridge pylon for maintenance and structural inspection.
                </p>
                <Link
                  to="/gallery?place=delhi-signature-bridge"
                  className="text-xs font-bold text-slate-900 group-hover:text-[#FF6B00] inline-flex items-center gap-1 mt-auto"
                >
                  View Project Photos <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. National Presence & Interactive Map */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-2 block">
            Pan-India Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Operating Across India's Industrial Corridors
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Click on any project location below to explore photo dossiers, engineering specifications, and client certifications.
          </p>

          {/* Minimalist Map Canvas */}
          <div className="max-w-[580px] mx-auto pt-2">
            <InteractiveIndiaMap
              onSelectSite={(site) => {
                navigate(`/gallery?place=${site.id}`);
              }}
            />
          </div>
        </div>
      </section>

      {/* 5. Proven Metrics */}
      <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">25+</div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Years of Engineering</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">100%</div>
              <p className="text-xs uppercase tracking-widest text-slate-400">PESO &amp; CIMFR Certified</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">50+</div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Refinery &amp; Industrial Lifts</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">Zero</div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Safety Incidents</p>
            </div>
          </div>
        </div>
      </section>

{/* Action Buttons */}
<div className="w-full flex justify-center -mt-1 mb-12">
  <div className="flex items-center justify-center gap-4">
    <Link
      to="/offering"
      className="bg-[#FF6B00] hover:bg-[#e65100] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-all shadow-lg shadow-orange-500/25 flex items-center gap-2"
    >
      Explore Solutions <ArrowRight size={16} />
    </Link>

    <Link
      to="/gallery"
      className="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-colors"
    >
      View Projects
    </Link>
  </div>
</div>
      
      {/* 6. Direct Technical Consultation Call To Action */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="bg-slate-900 rounded-[32px] p-8 sm:p-14 text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-2 block">
                Engineering Consultation
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
                Have an upcoming hazardous or industrial lift tender?
              </h3>
              <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                Connect directly with our senior application engineers for BOQ estimates, shaft feasibility drawings, and explosion protection classification.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                to="/contact"
                className="bg-[#FF6B00] hover:bg-[#e65100] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-md flex items-center gap-2"
              >
                Submit Project Inquiry <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Elevation Engineering Story Reel"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
