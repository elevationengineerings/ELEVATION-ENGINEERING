import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Crosshair, Award } from 'lucide-react';

import safetyBg from '../assets/images/safety_quality_bg_1788903187588.jpg';

export default function Safety() {
  return (
    <div className="bg-white pt-[80px] min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={safetyBg} 
            alt="Safety and Quality" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-[1000px] mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Safety & Quality
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light"
          >
            Zero incidents. Uncompromising standards.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Our highest priority.</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                In hazardous industrial environments, safety isn't just a metric—it's a fundamental requirement. We maintain a strict "zero incidents" policy through rigorous training, advanced safety protocols, and uncompromising quality control on every single component we supply and install.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Our certifications comply with the highest international standards for flameproof and explosion-proof equipment.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { icon: <ShieldCheck size={32} />, title: "Zero Incidents", desc: "A flawless track record across 25+ years." },
                { icon: <Crosshair size={32} />, title: "Precision", desc: "Exact engineering for hazardous zones." },
                { icon: <Award size={32} />, title: "Certified", desc: "Statutory compliance and national safety approvals." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl">
                  <div className="text-[#FF6B00] mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 font-light text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
