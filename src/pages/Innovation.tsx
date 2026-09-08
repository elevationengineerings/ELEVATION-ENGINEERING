import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Innovation() {
  return (
    <div className="bg-white pt-[80px] min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
            alt="Innovation" 
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
            Innovation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light"
          >
            Pioneering the next generation of smart, resilient, and flameproof infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Shaping the future with intelligent solutions.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                Innovation is at the core of our strategy. By constantly pushing the boundaries of what is possible in hazardous environments, we aim to deliver solutions that are not only safer but also significantly more efficient and sustainable.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                We heavily invest in R&D, collaborating with leading material scientists and tech pioneers to integrate smart sensors and IoT into flameproof casings—making proactive maintenance a reality.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[32px] overflow-hidden bg-slate-100"
            >
              <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop" alt="Lab testing" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Smart Monitoring", desc: "Real-time analytics and predictive maintenance integrated into critical components.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" },
              { title: "Advanced Materials", desc: "Next-gen polymers and alloys offering superior heat resistance and durability.", img: "https://images.unsplash.com/photo-1531297172864-45dc6a4eb5db?q=80&w=600&auto=format&fit=crop" },
              { title: "Digital Twins", desc: "Virtual modeling of facilities to simulate stress and optimize infrastructure layout.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6 bg-slate-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
