import React from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import ElevationLogo from './ElevationLogo';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200 pt-16 pb-12 mt-auto">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Top Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-100 items-start">
          <div className="lg:col-span-4 flex items-center gap-3">
            <ElevationLogo size={42} />
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="font-black text-lg tracking-tight uppercase leading-none text-slate-900">
                ELEVATION
              </span>
              <span className="font-bold text-lg tracking-tight text-[#FF6B00] uppercase leading-none">
                ENGINEERING
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-3xl">
              At Elevation Engineering, our purpose is to engineer the nation's critical vertical mobility infrastructure. As a pioneer in flameproof material supply, precision installation, statutory testing, and lifecycle maintenance, we ensure hazardous-zone operations are safe, compliant, and uninterrupted across India.
            </p>
          </div>
        </div>

        {/* Multi-column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 py-12 border-b border-slate-100">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><Link to="/about" className="hover:text-[#FF6B00] transition-colors">About Us &amp; Legacy</Link></li>
              <li><Link to="/company" className="hover:text-[#FF6B00] transition-colors">Strategy &amp; Profile</Link></li>
              <li><Link to="/safety" className="hover:text-[#FF6B00] transition-colors">Quality &amp; Safety Management</Link></li>
              <li><Link to="/suppliers" className="hover:text-[#FF6B00] transition-colors">Suppliers &amp; Procurement</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Solutions &amp; Offering
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><Link to="/offering" className="hover:text-[#FF6B00] transition-colors font-semibold">All Solutions Hub</Link></li>
              <li><Link to="/offering/flameproof-materials" className="hover:text-[#FF6B00] transition-colors">01 / Equipment Supply</Link></li>
              <li><Link to="/offering/precision-installation" className="hover:text-[#FF6B00] transition-colors">02 / Installation &amp; Erection</Link></li>
              <li><Link to="/offering/testing-commissioning" className="hover:text-[#FF6B00] transition-colors">03 / Testing &amp; Commissioning</Link></li>
              <li><Link to="/offering/modernization-maintenance" className="hover:text-[#FF6B00] transition-colors">04 / Modernization &amp; AMC</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Projects &amp; Gallery
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><Link to="/gallery" className="hover:text-[#FF6B00] transition-colors font-semibold">National Project Gallery</Link></li>
              <li><Link to="/gallery?place=guwahati-iocl" className="hover:text-[#FF6B00] transition-colors">IOCL Guwahati Refinery</Link></li>
              <li><Link to="/gallery?place=hpcl-mumbai" className="hover:text-[#FF6B00] transition-colors">HPCL Mumbai Complex</Link></li>
              <li><Link to="/gallery?place=delhi-signature-bridge" className="hover:text-[#FF6B00] transition-colors">Delhi Signature Bridge</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Utility & Legal Bar */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <button className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-2 rounded-full border border-slate-200 transition-colors">
              <Globe size={14} className="text-slate-500" />
              India - EN
            </button>
            <span className="text-xs text-slate-400">
              © {new Date().getFullYear()} Elevation Engineering. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-xs text-slate-500">
            <Link to="/company" className="hover:text-[#FF6B00] transition-colors whitespace-nowrap">Legal Notice</Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/safety" className="hover:text-[#FF6B00] transition-colors whitespace-nowrap">Privacy & Safety Policy</Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/contact" className="hover:text-[#FF6B00] transition-colors whitespace-nowrap">Contact Elevation Engineering</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
