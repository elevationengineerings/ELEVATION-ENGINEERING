import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-[80px] bg-slate-50 min-h-screen">
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-slate-900 tracking-tight">Get in Touch.</h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-16 font-light leading-relaxed">
              Have inquiries regarding flameproof materials, installation, or commissioning across India? Reach out to us directly.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 md:gap-12 bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-slate-100"
          >
            {/* Phone */}
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-[#FF6B00] group-hover:scale-110 transition-transform duration-300">
                <Phone size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest">Call Us</h3>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-2xl text-slate-700 font-medium">
                <a href="tel:+919725903622" className="hover:text-[#FF6B00] transition-colors">+91 97259 03622</a>
                <span className="hidden md:block text-slate-300">|</span>
                <a href="tel:+919207803622" className="hover:text-[#FF6B00] transition-colors">+91 92078 03622</a>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100 my-4"></div>

            {/* Email */}
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-[#FF6B00] group-hover:scale-110 transition-transform duration-300">
                <Mail size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest">Email Us</h3>
              <a href="mailto:info@elevationengineering.com" className="text-2xl text-slate-700 font-medium hover:text-[#FF6B00] transition-colors">
                info@elevationengineering.com
              </a>
            </div>

            <div className="w-full h-px bg-slate-100 my-4"></div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-[#FF6B00] group-hover:scale-110 transition-transform duration-300">
                <Linkedin size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest">Connect</h3>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-700 font-medium hover:text-[#FF6B00] transition-colors flex items-center gap-2">
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
