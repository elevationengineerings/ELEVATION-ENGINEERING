import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { INDIA_MAP_PATHS } from '../data/indiaMapPaths';
import { PROJECT_SITES, ProjectSite, getProjectByStateKey } from '../data/projectsData';

interface InteractiveIndiaMapProps {
  className?: string;
  onSelectSite?: (site: ProjectSite) => void;
  selectedSiteId?: string | null;
}

export default function InteractiveIndiaMap({
  className = "",
  onSelectSite,
  selectedSiteId = null,
}: InteractiveIndiaMapProps) {
  const navigate = useNavigate();
  const [hoveredSite, setHoveredSite] = useState<ProjectSite | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleStateClick = (site: ProjectSite) => {
    if (onSelectSite) {
      onSelectSite(site);
    } else {
      navigate(`/gallery?place=${site.id}`);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className={`relative w-full max-w-[500px] mx-auto select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredSite(null)}
    >
      {/* SVG Map of India */}
      <div className="w-full aspect-[770/800] relative flex items-center justify-center">
        <svg
          viewBox="0 0 770 800"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Render All Indian States */}
          {Object.entries(INDIA_MAP_PATHS).map(([stateName, pathData]) => {
            const project = getProjectByStateKey(stateName);
            const isActive = !!project;
            const isHovered = hoveredSite?.id === project?.id;
            const isSelected = selectedSiteId === project?.id;

            if (!isActive) {
              // Non-active state: Solid, crisp black with razor-thin white boundary lines
              return (
                <path
                  key={stateName}
                  id={`state-${stateName.replace(/\s+/g, '-')}`}
                  d={pathData}
                  fill="#000000"
                  stroke="#FFFFFF"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  className="pointer-events-none transition-colors duration-200"
                  style={{ pointerEvents: 'none' }}
                />
              );
            }

            // Interactive Active States: Rajasthan, Delhi, Assam, Maharashtra, Bihar, Jharkhand
            return (
              <path
                key={stateName}
                id={`state-${stateName.replace(/\s+/g, '-')}`}
                d={pathData}
                fill={isHovered || isSelected ? "#e65100" : "#FF6B00"}
                stroke="#FFFFFF"
                strokeWidth={isHovered || isSelected ? "1.5" : "1.0"}
                strokeLinejoin="round"
                strokeLinecap="round"
                className="cursor-pointer transition-colors duration-200"
                onClick={() => handleStateClick(project)}
                onMouseEnter={() => setHoveredSite(project)}
                onMouseLeave={() => setHoveredSite(null)}
              />
            );
          })}
        </svg>
      </div>

      {/* Minimalist Floating Pill Tooltip */}
      <AnimatePresence>
        {hoveredSite && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.12 }}
            className="absolute z-30 pointer-events-none transform -translate-x-1/2 -translate-y-full"
            style={{
              left: tooltipPos.x,
              top: tooltipPos.y - 12,
            }}
          >
            <div className="bg-black/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-white/20 flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]"></span>
              <span>{hoveredSite.placeName}</span>
              <span className="text-white/60 font-normal text-[11px]">• View Photos</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
