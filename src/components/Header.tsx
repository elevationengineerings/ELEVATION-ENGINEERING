import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import ElevationLogo from './ElevationLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on navigation
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Determine if header should be transparent dark mode (top of homepage) or solid white
  const isTransparent = isHomePage && !isScrolled && !activeDropdown && !mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent text-white border-b border-white/10'
            : 'bg-white text-slate-900 border-b border-slate-200 shadow-xs'
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-[80px]">
            {/* Left: Logo & Primary Nav */}
            <div className="flex items-center gap-10">
              <Link to="/" className="flex items-center gap-3 group">
                <ElevationLogo size={40} />
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className={`font-black text-lg sm:text-[19px] tracking-tight leading-none transition-colors ${
                    isTransparent ? 'text-white' : 'text-slate-900'
                  }`}>
                    ELEVATION
                  </span>
                  <span className="font-bold text-lg sm:text-[19px] tracking-tight leading-none text-[#FF6B00]">
                    ENGINEERING
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Items */}
              <nav className="hidden lg:flex items-center gap-7 text-[15px] font-normal">
                <div
                  className={`relative h-[80px] flex items-center cursor-pointer transition-colors ${
                    isTransparent ? 'text-white hover:text-white/80' : 'text-slate-700 hover:text-[#FF6B00]'
                  }`}
                  onMouseEnter={() => setActiveDropdown('company')}
                >
                  <span className="flex items-center gap-1">
                    Company
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180 text-[#FF6B00]' : 'opacity-70'}`} />
                  </span>
                </div>

                <div
                  className={`relative h-[80px] flex items-center cursor-pointer transition-colors ${
                    isTransparent ? 'text-white hover:text-white/80' : 'text-slate-700 hover:text-[#FF6B00]'
                  }`}
                  onMouseEnter={() => setActiveDropdown('offering')}
                >
                  <span className="flex items-center gap-1">
                    Offering
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'offering' ? 'rotate-180 text-[#FF6B00]' : 'opacity-70'}`} />
                  </span>
                </div>

                <Link
                  to="/gallery"
                  className={`h-[80px] flex items-center transition-colors ${
                    isTransparent ? 'text-white hover:text-white/80' : 'text-slate-700 hover:text-[#FF6B00]'
                  }`}
                  onMouseEnter={() => setActiveDropdown(null)}
                >
                  Gallery & Projects
                </Link>

                <Link
                  to="/sustainability"
                  className={`h-[80px] flex items-center transition-colors ${
                    isTransparent ? 'text-white hover:text-white/80' : 'text-slate-700 hover:text-[#FF6B00]'
                  }`}
                  onMouseEnter={() => setActiveDropdown(null)}
                >
                  Sustainability
                </Link>

                <Link
                  to="/safety"
                  className={`h-[80px] flex items-center transition-colors ${
                    isTransparent ? 'text-white hover:text-white/80' : 'text-slate-700 hover:text-[#FF6B00]'
                  }`}
                  onMouseEnter={() => setActiveDropdown(null)}
                >
                  Safety & Compliance
                </Link>
              </nav>
            </div>

            {/* Right: Direct Contact CTA (Desktop) & Mobile Hamburger (Mobile Only) */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden lg:inline-flex bg-[#FF6B00] hover:bg-[#e65100] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-xs"
              >
                Contact Us
              </Link>

              {/* Hamburger Button (Mobile / Tablet ONLY, hidden on desktop) */}
              <button
                className={`lg:hidden p-2 transition-colors ${
                  isTransparent ? 'text-white hover:text-white/80' : 'text-slate-700 hover:text-[#FF6B00]'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Company Dropdown Menu */}
        {activeDropdown === 'company' && (
          <div
            className="absolute top-[80px] left-0 w-full bg-white text-slate-900 border-b border-slate-200 shadow-2xl pb-12 pt-8 z-40 hidden lg:block"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex gap-12">
              <div className="w-[260px] shrink-0 border-r border-slate-100 pr-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Company Overview
                </h3>
                <ul className="space-y-3.5 text-sm font-medium text-slate-700">
                  <li>
                    <Link to="/about" className="hover:text-[#FF6B00] transition-colors block py-0.5">
                      About Elevation Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to="/company" className="hover:text-[#FF6B00] transition-colors block py-0.5">
                      Strategy & Corporate Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/safety" className="hover:text-[#FF6B00] transition-colors block py-0.5">
                      Quality & Safety Management
                    </Link>
                  </li>
                  <li>
                    <Link to="/suppliers" className="hover:text-[#FF6B00] transition-colors block py-0.5">
                      Suppliers & Procurement
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex-1 grid grid-cols-3 gap-6">
                {[
                  {
                    title: "25+ Years of Engineering",
                    desc: "Pioneering specialized vertical mobility in hazardous zones.",
                    link: "/about",
                    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    title: "National Infrastructure",
                    desc: "Commissioning landmark sites from refineries to suspension bridges.",
                    link: "/gallery",
                    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    title: "Zero Compromise on Safety",
                    desc: "Certified explosion-proof engineering standards.",
                    link: "/safety",
                    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                  }
                ].map((item, i) => (
                  <Link to={item.link} key={i} className="group block">
                    <div className="h-[140px] mb-3 overflow-hidden rounded-xl bg-slate-100 relative">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Offering Dropdown Menu */}
        {activeDropdown === 'offering' && (
          <div
            className="absolute top-[80px] left-0 w-full bg-white text-slate-900 border-b border-slate-200 shadow-2xl pb-12 pt-8 z-40 hidden lg:block"
            onMouseEnter={() => setActiveDropdown('offering')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex gap-12">
              <div className="w-[280px] shrink-0 border-r border-slate-100 pr-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Core Solutions
                </h3>
                <ul className="space-y-3.5 text-sm font-medium text-slate-700">
                  <li>
                    <Link to="/offering" className="hover:text-[#FF6B00] transition-colors block py-0.5 font-bold">
                      All Offerings Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/offering/flameproof-materials" className="hover:text-[#FF6B00] transition-colors block py-0.5">
                      Flameproof Material Supply
                    </Link>
                  </li>
                  <li>
                    <Link to="/offering/precision-installation" className="hover:text-[#FF6B00] transition-colors block py-0.5">
                      Precision Installation & Erection
                    </Link>
                  </li>
                  <li>
                    <Link to="/offering/testing-commissioning" className="hover:text-[#FF6B00] transition-colors block py-0.5">
                      Testing & Commissioning
                    </Link>
                  </li>
                  <li>
                    <Link to="/offering/modernization-maintenance" className="hover:text-[#FF6B00] transition-colors block py-0.5">
                      Modernization & 24/7 AMC
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex-1 grid grid-cols-3 gap-6">
                {[
                  {
                    title: "Ex-d Flameproof Supply",
                    desc: "Certified control panels, explosion-proof motors, and armored cables.",
                    link: "/offering/flameproof-materials",
                    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    title: "Precision Erection",
                    desc: "Precision mechanical alignment inside operational refinery columns.",
                    link: "/offering/precision-installation",
                    img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    title: "Statutory Testing & AMC",
                    desc: "PESO / CIMFR compliance testing and 24/7 preventative maintenance.",
                    link: "/offering/testing-commissioning",
                    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
                  }
                ].map((item, i) => (
                  <Link to={item.link} key={i} className="group block">
                    <div className="h-[140px] mb-3 overflow-hidden rounded-xl bg-slate-100 relative">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#FF6B00] transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-slate-900 border-b border-slate-200 px-6 py-6 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col space-y-3 text-sm font-semibold text-slate-900">
              <Link to="/" className="py-2 border-b border-slate-100">Home</Link>
              <Link to="/company" className="py-2 border-b border-slate-100">Company & Strategy</Link>
              <Link to="/about" className="py-2 border-b border-slate-100">About Us & Legacy</Link>
              <Link to="/offering" className="py-2 border-b border-slate-100">All Solutions & Offering</Link>
              <Link to="/offering/flameproof-materials" className="py-1.5 pl-4 text-xs font-normal text-slate-600 border-b border-slate-50">• Flameproof Material Supply</Link>
              <Link to="/offering/precision-installation" className="py-1.5 pl-4 text-xs font-normal text-slate-600 border-b border-slate-50">• Precision Installation</Link>
              <Link to="/offering/testing-commissioning" className="py-1.5 pl-4 text-xs font-normal text-slate-600 border-b border-slate-50">• Testing & Commissioning</Link>
              <Link to="/offering/modernization-maintenance" className="py-1.5 pl-4 text-xs font-normal text-slate-600 border-b border-slate-50">• Modernization & AMC</Link>
              <Link to="/gallery" className="py-2 border-b border-slate-100 text-[#FF6B00]">Gallery & Projects</Link>
              <Link to="/sustainability" className="py-2 border-b border-slate-100">Sustainability</Link>
              <Link to="/safety" className="py-2 border-b border-slate-100">Safety & Compliance</Link>
              <Link to="/suppliers" className="py-2 border-b border-slate-100">Suppliers</Link>
              <Link to="/contact" className="py-2.5 mt-2 text-center bg-[#FF6B00] text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
