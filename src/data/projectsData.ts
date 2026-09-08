export interface ProjectSite {
  id: string; // url slug e.g. "delhi", "guhwati", "mumbai", "barauni", "sindhri", "rajasthan"
  placeName: string; // "Delhi", "Guwahati", "Mumbai", "Barauni", "Sindhri", "Rajasthan"
  aliases: string[]; // for matching url params
  stateName: string; // "Delhi", "Assam", "Maharashtra", "Bihar", "Jharkhand", "Rajasthan"
  stateKey: string; // key in SVG map
  projectTitle: string; // "Delhi Signature Bridge", "Guwahati IOCL", etc.
  galleryFolderKey: string; // exact key in gallery.json
  shortDesc: string;
  badge: string;
  centerCoords: { x: number; y: number }; // SVG pin point
  stats: {
    safetyRecord: string;
    scope: string;
  };
}

export const PROJECT_SITES: ProjectSite[] = [
  {
    id: "delhi",
    placeName: "Delhi",
    aliases: ["delhi", "delhi-signature-bridge", "delhi signature bridge"],
    stateName: "Delhi (UT)",
    stateKey: "Delhi",
    projectTitle: "Delhi Signature Bridge",
    galleryFolderKey: "DELHI SIGNATURE BRIDGE",
    shortDesc: "Flameproof electrical installations & specialized safety infrastructure on Delhi's landmark Signature Bridge.",
    badge: "Infrastructure Landmark",
    centerCoords: { x: 234, y: 220 },
    stats: {
      safetyRecord: "100% Zero-Hazard Compliance",
      scope: "Specialized Illumination & Junction Systems"
    }
  },
  {
    id: "guhwati",
    placeName: "Guhwati",
    aliases: ["guhwati", "guwahati", "guhwati-iocl", "guwahati-iocl", "assam"],
    stateName: "Assam",
    stateKey: "Assam",
    projectTitle: "Guwahati IOCL Refinery",
    galleryFolderKey: "GUHWATI IOCL",
    shortDesc: "Flameproof apparatus, junction enclosures & critical refinery safety systems for Indian Oil Corporation Ltd.",
    badge: "Refinery Complex",
    centerCoords: { x: 620, y: 275 },
    stats: {
      safetyRecord: "Class 1 Div 1 Certified",
      scope: "IOCL Refinery Safety Apparatus"
    }
  },
  {
    id: "mumbai",
    placeName: "Mumbai",
    aliases: ["mumbai", "hpcl-mumbai", "hpcl mumbai", "maharashtra"],
    stateName: "Maharashtra",
    stateKey: "Maharashtra",
    projectTitle: "HPCL Mumbai Refinery",
    galleryFolderKey: "HPCL MUMBAI",
    shortDesc: "End-to-end explosion-proof supply, installation and commissioning for Hindustan Petroleum Corporation Limited.",
    badge: "Petrochemical Major",
    centerCoords: { x: 140, y: 470 },
    stats: {
      safetyRecord: "Heavy Hydrocarbon Zone Certified",
      scope: "Comprehensive Flameproof Infrastructure"
    }
  },
  {
    id: "barauni",
    placeName: "Barauni",
    aliases: ["barauni", "hurl-barauni", "hurl barauni", "bihar"],
    stateName: "Bihar",
    stateKey: "Bihar",
    projectTitle: "HURL Barauni Fertilizer",
    galleryFolderKey: "HURL BARAUNI",
    shortDesc: "Heavy industrial fertilizer plant hazardous-zone electrical fittings and flameproof distribution panels.",
    badge: "Fertilizer Complex",
    centerCoords: { x: 440, y: 290 },
    stats: {
      safetyRecord: "Ammonia Zone Safety Verified",
      scope: "High-Capacity Power Distribution"
    }
  },
  {
    id: "sindhri",
    placeName: "Sindhri",
    aliases: ["sindhri", "sindri", "hurl-sindhri", "hurl sindhri", "jharkhand"],
    stateName: "Jharkhand",
    stateKey: "Jharkhand",
    projectTitle: "HURL Sindhri Fertilizer",
    galleryFolderKey: "HURL SINDHRI",
    shortDesc: "Comprehensive flameproof commissioning & hazardous area instrumentation at HURL Sindri unit.",
    badge: "Heavy Chemical Corridor",
    centerCoords: { x: 475, y: 350 },
    stats: {
      safetyRecord: "Zero Methane/Gas Flashpoints",
      scope: "Plant-Wide Flameproof Panels"
    }
  },
  {
    id: "rajasthan",
    placeName: "Rajasthan",
    aliases: ["rajasthan", "rajasthan-hrrl", "rajasthan hrrl", "pachpadra", "barmer"],
    stateName: "Rajasthan",
    stateKey: "Rajasthan",
    projectTitle: "Rajasthan HRRL",
    galleryFolderKey: "RAJASTHAN HRRL",
    shortDesc: "Extensive explosion-proof infrastructure across HPCL Rajasthan Refinery Limited's mega petroleum complex.",
    badge: "Mega Petroleum Project",
    centerCoords: { x: 140, y: 270 },
    stats: {
      safetyRecord: "Extreme Temperature & Gas Rated",
      scope: "Integrated Flameproof Electrical Works"
    }
  }
];

export const ACTIVE_STATE_KEYS = PROJECT_SITES.map(s => s.stateKey);

export function getProjectByStateKey(stateKey: string): ProjectSite | undefined {
  return PROJECT_SITES.find(s => s.stateKey.toLowerCase() === stateKey.toLowerCase());
}

export function getProjectByIdOrAlias(query: string): ProjectSite | undefined {
  const q = query.toLowerCase().trim();
  return PROJECT_SITES.find(s => 
    s.id.toLowerCase() === q || 
    s.placeName.toLowerCase() === q || 
    s.stateKey.toLowerCase() === q || 
    s.stateName.toLowerCase().includes(q) ||
    s.aliases.some(a => a.toLowerCase() === q)
  );
}
