import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Recycle, Wind } from 'lucide-react';

export default function Sustainability() {
  return (
    <div className="bg-white pt-[80px] min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" 
            alt="Sustainability" 
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
            Sustainability
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light"
          >
            Building better cities. Protecting the environment.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Our Commitment to the Planet</h2>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              We believe that true engineering excellence goes hand-in-hand with environmental responsibility. Our goal is to reduce our carbon footprint, utilize eco-friendly materials, and design infrastructure that supports a circular economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Wind size={40} />, title: "Carbon Reduction", desc: "Optimizing our supply chains and installation processes to drastically lower emissions." },
              { icon: <Recycle size={40} />, title: "Circular Economy", desc: "Implementing recycling protocols for legacy materials and promoting reusable components." },
              { icon: <Leaf size={40} />, title: "Eco-Efficiency", desc: "Designing systems that consume less energy while maintaining peak operational reliability." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-10 rounded-3xl text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[#FF6B00] mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
