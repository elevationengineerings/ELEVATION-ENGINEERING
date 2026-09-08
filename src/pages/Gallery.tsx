import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Camera, 
  ArrowRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  CheckCircle2, 
  Layers, 
  Building, 
  Flame, 
  Filter
} from 'lucide-react';
import galleryData from '../data/gallery.json';
import { PROJECT_SITES, ProjectSite, getProjectByIdOrAlias } from '../data/projectsData';

import galleryBg from '../assets/images/gallery_bg_1788904402646.jpg';

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const placeParam = searchParams.get('place');
  const sectorParam = searchParams.get('sector');

  // Filter state
  const [selectedPlace, setSelectedPlace] = useState<string>(placeParam || 'all');
  const [selectedSector, setSelectedSector] = useState<string>(sectorParam || 'all');
  
  // Lightbox modal state
  const [lightboxSite, setLightboxSite] = useState<ProjectSite | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Group images by site folder key
  const groupedImages = useMemo(() => {
    const acc: Record<string, string[]> = {};
    PROJECT_SITES.forEach((site) => {
      acc[site.galleryFolderKey] = galleryData
        .filter((item) => item.site === site.galleryFolderKey)
        .map((item) => item.img);
    });
    return acc;
  }, []);

  // Update filter from URL param
  useEffect(() => {
    if (placeParam) {
      const matched = getProjectByIdOrAlias(placeParam);
      if (matched) {
        setSelectedPlace(matched.id);
      } else {
        setSelectedPlace('all');
      }
    } else {
      setSelectedPlace('all');
    }
  }, [placeParam]);

  const handlePlaceFilter = (placeId: string) => {
    setSelectedPlace(placeId);
    if (placeId === 'all') {
      searchParams.delete('place');
    } else {
      searchParams.set('place', placeId);
    }
    setSearchParams(searchParams);
  };

  const handleSectorFilter = (sector: string) => {
    setSelectedSector(sector);
    if (sector === 'all') {
      searchParams.delete('sector');
    } else {
      searchParams.set('sector', sector);
    }
    setSearchParams(searchParams);
  };

  // Filter project sites
  const filteredSites = useMemo(() => {
    return PROJECT_SITES.filter((site) => {
      const matchesPlace = selectedPlace === 'all' || site.id === selectedPlace;
      const matchesSector = selectedSector === 'all' || site.badge.toLowerCase().includes(selectedSector.toLowerCase());
      return matchesPlace && matchesSector;
    });
  }, [selectedPlace, selectedSector]);

  // Lightbox handlers
  const openLightbox = (site: ProjectSite, index: number = 0) => {
    setLightboxSite(site);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxSite(null);
    setLightboxIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightboxSite || lightboxIndex === null) return;
    const images = groupedImages[lightboxSite.galleryFolderKey] || [];
    setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightboxSite || lightboxIndex === null) return;
    const images = groupedImages[lightboxSite.galleryFolderKey] || [];
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, lightboxSite]);

  const totalPhotos = galleryData.length;

  return (
    <div className="bg-slate-50 min-h-screen pt-[80px]">
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={galleryBg}
            alt="Engineering Projects Portfolio"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 md:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <Camera size={13} /> Project Documentation & Site Photography
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
            Projects & Field Gallery
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            A visual record of hazardous-zone vertical mobility installations, refinery tower lifts, and specialized structural projects across India.
          </p>
        </div>
      </section>

      {/* Clean Filter Bar */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-4 shadow-xs">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Location Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0">
            <button
              onClick={() => handlePlaceFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors shrink-0 ${
                selectedPlace === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Projects ({totalPhotos})
            </button>

            {PROJECT_SITES.map((site) => {
              const count = (groupedImages[site.galleryFolderKey] || []).length;
              const isActive = selectedPlace === site.id;
              return (
                <button
                  key={site.id}
                  onClick={() => handlePlaceFilter(site.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#FF6B00] text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <MapPin size={12} className={isActive ? 'text-white' : 'text-slate-400'} />
                  <span>{site.placeName}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Reset button if filtered */}
          {selectedPlace !== 'all' && (
            <button
              onClick={() => handlePlaceFilter('all')}
              className="text-xs text-[#FF6B00] font-bold hover:underline shrink-0 flex items-center gap-1 self-start md:self-auto"
            >
              <span>Reset filter</span>
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Projects Showcase */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="space-y-20">
            {filteredSites.map((site) => {
              const images = groupedImages[site.galleryFolderKey] || [];
              const mainCover = images[0] || '';
              const thumbnailImages = images.slice(1, 5);

              return (
                <div
                  key={site.id}
                  className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs transition-shadow hover:shadow-md"
                >
                  {/* Project Top Meta */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[11px] font-bold text-[#FF6B00] bg-orange-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {site.badge}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                          <MapPin size={12} className="text-[#FF6B00]" />
                          {site.placeName}, {site.stateName}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        {site.projectTitle}
                      </h2>
                      <p className="text-sm text-slate-500 font-light mt-1 max-w-3xl">
                        {site.shortDesc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => openLightbox(site, 0)}
                        className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors flex items-center gap-2"
                      >
                        <Camera size={14} />
                        View All {images.length} Photos
                      </button>
                    </div>
                  </div>

                  {/* Clean Photography Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* Large Featured Photo */}
                    <div
                      onClick={() => openLightbox(site, 0)}
                      className="lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative group cursor-pointer border border-slate-100"
                    >
                      {mainCover ? (
                        <img
                          src={mainCover}
                          alt={`${site.projectTitle} Featured`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          <Camera size={32} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <span className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                          <ZoomIn size={14} /> Click to Enlarge
                        </span>
                      </div>
                    </div>

                    {/* 2x2 Grid of Additional Thumbnails */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                      {thumbnailImages.map((thumb, idx) => (
                        <div
                          key={idx}
                          onClick={() => openLightbox(site, idx + 1)}
                          className="aspect-square rounded-2xl overflow-hidden bg-slate-100 relative group cursor-pointer border border-slate-100"
                        >
                          <img
                            src={thumb}
                            alt={`${site.projectTitle} - photo ${idx + 2}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                            <ZoomIn size={18} />
                          </div>
                        </div>
                      ))}
                      {thumbnailImages.length < 4 && (
                        <div
                          onClick={() => openLightbox(site, 0)}
                          className="aspect-square rounded-2xl bg-slate-50 border border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:text-slate-700 cursor-pointer p-4 text-center transition-colors"
                        >
                          <Camera size={24} className="mb-2 text-[#FF6B00]" />
                          <span className="text-xs font-bold text-slate-900">
                            {images.length} Verified Photos
                          </span>
                          <span className="text-[10px] text-slate-500 font-light mt-0.5">Click to browse</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Technical Spec Strip */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                    <div className="flex flex-wrap items-center gap-4 text-slate-600">
                      <div><span className="text-slate-400">Environment:</span> <span className="font-semibold text-slate-800">{site.stats.environment}</span></div>
                      <div><span className="text-slate-400">Safety Metric:</span> <span className="font-semibold text-slate-800">{site.stats.safetyRecord}</span></div>
                      <div><span className="text-slate-400">Commissioning:</span> <span className="font-semibold text-slate-800">{site.stats.handoverYear}</span></div>
                    </div>
                    <Link
                      to="/contact"
                      className="text-[#FF6B00] font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Inquire Similar Project <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxSite && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 md:p-8 select-none"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-white z-10" onClick={(e) => e.stopPropagation()}>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#FF6B00] font-bold">
                  {lightboxSite.placeName} • {lightboxSite.projectTitle}
                </span>
                <div className="text-xs text-slate-400 mt-0.5">
                  Photo {lightboxIndex + 1} of {(groupedImages[lightboxSite.galleryFolderKey] || []).length}
                </div>
              </div>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Center Image */}
            <div className="relative flex items-center justify-center flex-1 my-4" onClick={(e) => e.stopPropagation()}>
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-md z-10"
              >
                <ChevronLeft size={24} />
              </button>

              <img
                src={(groupedImages[lightboxSite.galleryFolderKey] || [])[lightboxIndex]}
                alt="Enlarged Project Photo"
                className="max-h-[78vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              />

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-md z-10"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="text-center text-xs text-slate-400 z-10">
              Use <span className="text-white">←</span> and <span className="text-white">→</span> keys to navigate photos • Press <span className="text-white">Esc</span> to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
