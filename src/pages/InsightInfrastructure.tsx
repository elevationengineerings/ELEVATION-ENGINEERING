import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InsightInfrastructure() {
  return (
    <div className="pt-20">
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Smart Infrastructure" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight max-w-3xl">
            Building Smart and Resilient Infrastructure
          </h1>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
            The cities of tomorrow require infrastructure that adapts to rapid urbanization. Discover our approach to integrating smart monitoring tools with robust, flameproof hardware to create resilient industrial ecosystems.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Future-Ready Technology</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Our maintenance solutions now incorporate predictive analytics, allowing facility managers to identify potential issues before they cause downtime. This seamless integration of digital intelligence with heavy-duty engineering is redefining what's possible in the sector.
          </p>
        </div>
      </section>
    </div>
  );
}
