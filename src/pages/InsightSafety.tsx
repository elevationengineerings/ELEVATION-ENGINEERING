import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InsightSafety() {
  return (
    <div className="pt-20">
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092162384-8987c1d64926?q=80&w=2070&auto=format&fit=crop" 
            alt="Safety Standards" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight max-w-3xl">
            Elevating Safety Standards in Hazardous Environments
          </h1>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
            In industrial settings where flammable gases or combustible dusts are present, standard electrical equipment poses a severe risk. We explore how our next-generation flameproof enclosures and rigorous commissioning protocols are setting new benchmarks for industrial safety across India.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Zero-Incident Philosophy</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Over the past 25 years, our commitment has remained unchanged: zero compromises on safety. By integrating advanced materials and continuous monitoring systems, we ensure that every installation not only meets but exceeds international safety compliance standards.
          </p>
        </div>
      </section>
    </div>
  );
}
