/**
 * CLARO PPF - In-house PPF Brand Data
 * 
 * Set SHOW_CLARO_SECTION to true to display the section on /services/ppf.
 * All fields are optional / placeholder-ready; if empty, subsections hide gracefully.
 */

// Toggle section visibility
export const SHOW_CLARO_SECTION = true; // TODO: toggle false if you want to hide until launch

export interface ClaroHighlight {
  title: string;
  description: string;
  iconName?: "shield" | "sparkles" | "sun" | "feather";
}

export interface ClaroSpec {
  property: string;
  value: string;
}

export interface ClaroPPFData {
  brandName: string;
  tagline?: string;
  description?: string;
  brandImage?: string;
  logoUrl?: string; // TODO: add path e.g. "/images/claro-logo.png" when ready
  videoUrl?: string; // TODO: add path e.g. "/videos/claro-showcase.mp4" or YouTube embed URL
  galleryImages?: { src: string; alt: string }[];
  highlights?: ClaroHighlight[];
  specifications?: ClaroSpec[];
}

export const claroPPFData: ClaroPPFData = {
  brandName: "CLARO PPF",
  // TODO: confirm tagline with studio
  tagline: "Proprietary Engineered Paint Protection Developed for Indian Terrains",
  // TODO: confirm brand description with studio
  description:
    "Claro PPF is Carbon's in-house paint protection film solution, engineered in collaboration with world-class polymer laboratories to withstand high tropical heat, heavy UV exposure, and abrasive road debris. Built with advanced aliphatic TPU and high-tensile elastomeric top-coats, Claro provides exceptional optical transparency and durable self-healing defense.",
  brandImage: "/images/claro-ppf.webp",
  logoUrl: "",
  videoUrl: "",
  galleryImages: [], // TODO: drop Claro installation photos when available
  highlights: [
    {
      title: "Engineered TPU Core", // TODO: confirm with studio
      description: "High-tensile polyurethane absorbing stone chip impacts and gravel strikes with high elasticity.",
      iconName: "shield"
    },
    {
      title: "Optical Clarity & Depth", // TODO: confirm with studio
      description: "Formulated without orange-peel haze, preserving factory metallic flake depth and crisp reflections.",
      iconName: "sparkles"
    },
    {
      title: "Thermal Self-Healing", // TODO: confirm with studio
      description: "Elastomeric top layer clears fine wash swirls and micro-abrasions under direct ambient sun exposure.",
      iconName: "sun"
    },
    {
      title: "Stain & Yellowing Resistance", // TODO: confirm with studio
      description: "Infused with UV stabilizers to resist premature discoloration, acid rain etching, and road grime.",
      iconName: "feather"
    }
  ],
  specifications: [
    { property: "Base Film Material", value: "Premium Aliphatic TPU" }, // TODO: confirm with studio
    { property: "Total Thickness", value: "approx. 190-210 microns (8-8.5 mil)" }, // TODO: confirm with studio
    { property: "Top Coat Technology", value: "Instant/Thermal Self-Healing Elastomer" }, // TODO: confirm with studio
    { property: "Gloss Level", value: "> 92 GU (High Gloss)" }, // TODO: confirm with studio
    { property: "Warranty Coverage", value: "Up to 8-10 Years (Terms Apply)" } // TODO: confirm with studio
  ]
};
