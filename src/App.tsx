/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Company from './pages/Company';
import Innovation from './pages/Innovation';
import Sustainability from './pages/Sustainability';
import Safety from './pages/Safety';
import Suppliers from './pages/Suppliers';
import Offering from './pages/Offering';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import InsightSafety from './pages/InsightSafety';
import InsightEfficiency from './pages/InsightEfficiency';
import InsightInfrastructure from './pages/InsightInfrastructure';
import Contact from './pages/Contact';

// SEO Landing Pages
import FlameproofElevatorsIndia from './pages/FlameproofElevatorsIndia';

// Offering Subpages
import FlameproofSupply from './pages/offering/FlameproofSupply';
import PrecisionInstallation from './pages/offering/PrecisionInstallation';
import TestingCommissioning from './pages/offering/TestingCommissioning';
import ModernizationMaintenance from './pages/offering/ModernizationMaintenance';

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/about" element={<AboutUs />} />

            {/* SEO Landing Page */}
            <Route
              path="/flameproof-elevators-in-india"
              element={<FlameproofElevatorsIndia />}
            />

            {/* Offering */}
            <Route path="/offering" element={<Offering />} />
            <Route
              path="/offering/flameproof-materials"
              element={<FlameproofSupply />}
            />
            <Route
              path="/offering/precision-installation"
              element={<PrecisionInstallation />}
            />
            <Route
              path="/offering/testing-commissioning"
              element={<TestingCommissioning />}
            />
            <Route
              path="/offering/modernization-maintenance"
              element={<ModernizationMaintenance />}
            />

            {/* Other Pages */}
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* Insights */}
            <Route
              path="/insights/safety-standards"
              element={<InsightSafety />}
            />
            <Route
              path="/insights/energy-efficiency"
              element={<InsightEfficiency />}
            />
            <Route
              path="/insights/smart-infrastructure"
              element={<InsightInfrastructure />}
            />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
