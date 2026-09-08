import React from 'react';
import { INDIA_MAP_PATHS } from '../data/indiaMapPaths';
import { ProjectSite } from '../data/projectsData';

interface StateMiniMapProps {
  site: ProjectSite;
  className?: string;
}

export default function StateMiniMap({ site, className = "w-16 h-16" }: StateMiniMapProps) {
  const activePath = INDIA_MAP_PATHS[site.stateKey];

  return (
    <div className={`relative flex items-center justify-center bg-transparent ${className}`}>
      <svg
        viewBox="0 0 770 800"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Render all non-active states in black with thin white borders */}
        {Object.entries(INDIA_MAP_PATHS).map(([stateName, pathData]) => {
          const isCurrent = stateName.toLowerCase() === site.stateKey.toLowerCase();
          if (isCurrent) return null;
          return (
            <path
              key={stateName}
              d={pathData}
              fill="#000000"
              stroke="#FFFFFF"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />
          );
        })}

        {/* Highlight current state in Orange */}
        {activePath && (
          <path
            d={activePath}
            fill="#FF6B00"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  );
}
