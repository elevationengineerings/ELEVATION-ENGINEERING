import React from 'react';
import { motion } from 'motion/react';
import { Handshake, FileCheck, Globe } from 'lucide-react';

import suppliersBg from '../assets/images/suppliers_bg_1788903199156.jpg';

export default function Suppliers() {
  return (
    <div className="bg-white pt-[80px] min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={suppliersBg} 
            alt="Suppliers" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 max-w-[1000px] mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Suppliers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light"
          >
            Building a resilient and ethical supply chain.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Partnering for Excellence</h2>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              We work closely with our network of global and local suppliers to ensure the highest standards of quality, ethical sourcing, and environmental responsibility. Together, we deliver materials that stand up to the most extreme conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Handshake size={32} />, title: "Ethical Partnerships", desc: "We require all partners to adhere strictly to our Code of Conduct and human rights standards." },
              { icon: <FileCheck size={32} />, title: "Rigorous Vetting", desc: "Every supplier undergoes comprehensive quality and compliance checks." },
              { icon: <Globe size={32} />, title: "Sustainable Sourcing", desc: "Prioritizing partners who demonstrate a commitment to reducing their carbon footprint." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 shadow-lg p-10 rounded-3xl"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-[#FF6B00] mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
