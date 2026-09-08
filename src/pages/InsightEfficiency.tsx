import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InsightEfficiency() {
  return (
    <div className="pt-20">
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Energy Efficiency" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight max-w-3xl">
            Optimizing Energy Efficiency in Industrial Plants
          </h1>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
            Modern infrastructure demands more than just reliability; it requires sustainable, energy-efficient operations. Learn how our latest installation techniques reduce power consumption and carbon footprint without sacrificing performance.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Sustainable Operations</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            By analyzing load distribution and upgrading legacy systems with our state-of-the-art materials, we've helped facilities across the nation cut energy waste by up to 30%. This not only lowers operational costs but significantly contributes to global sustainability goals.
          </p>
        </div>
      </section>
    </div>
  );
}
