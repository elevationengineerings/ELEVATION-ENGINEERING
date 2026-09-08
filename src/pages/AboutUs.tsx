import React from 'react';
import { motion } from 'motion/react';
import aboutBg from '../assets/images/about_us_bg_1788903223758.jpg';

export default function AboutUs() {
  const boxes = [
    {
      title: "Our Heritage",
      desc: "Founded on the principles of extreme safety, we have spent over 25 years engineering infrastructure that withstands the most hostile industrial environments in India.",
      img: aboutBg,
      colSpan: "md:col-span-2",
      aspect: "aspect-[2/1]"
    },
    {
      title: "Our Mission",
      desc: "To deliver zero-incident flameproof environments.",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
      colSpan: "md:col-span-1",
      aspect: "aspect-square"
    },
    {
      title: "Global Standards",
      desc: "Adhering to strict statutory compliance and national safety standards.",
      img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop",
      colSpan: "md:col-span-1",
      aspect: "aspect-square"
    },
    {
      title: "National Reach",
      desc: "Bringing critical infrastructure solutions to refineries, chemical plants, and heavy manufacturing hubs nationwide.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
      colSpan: "md:col-span-2",
      aspect: "aspect-[2/1]"
    }
  ];

  return (
    <div className="bg-white pt-[80px] min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight"
          >
            About Elevation.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We don't just build infrastructure. We engineer the impossible, securing the nation's most critical operations.
          </motion.p>
        </div>
      </section>

      {/* Gallery-Based Boxes */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boxes.map((box, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative group rounded-[32px] overflow-hidden bg-slate-900 ${box.colSpan} ${box.aspect}`}
              >
                <img 
                  src={box.img} 
                  alt={box.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{box.title}</h2>
                  <p className="text-lg text-slate-200 font-light max-w-lg">{box.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
