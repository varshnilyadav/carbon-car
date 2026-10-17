export interface PPFPackage {
  id: "essential" | "advance" | "ultimate";
  name: string;
  years: number;
  badge?: string;
  tagline: string;
  coverage: string;
  features: string[];
  bestFor: string;
}

export interface PPFComparisonRow {
  attribute: string;
  essential: string;
  advance: string;
  ultimate: string;
}

export const ppfPackages: PPFPackage[] = [
  {
    id: "essential",
    name: "ESSENTIAL",
    years: 5,
    tagline: "Everyday protection against chips and scratches",
    coverage: "Front-end / high-impact areas", // TODO: confirm with studio
    features: [
      "Self-healing top coat",
      "Protection against stone chips and road debris",
      "Hydrophobic, easy-to-clean finish",
      "Professional installation by trained technicians",
      "5-year manufacturer-backed warranty" // TODO: confirm terms
    ],
    bestFor: "Daily drivers and first-time PPF buyers"
  },
  {
    id: "advance",
    name: "ADVANCE",
    years: 7,
    badge: "MOST POPULAR",
    tagline: "Extended protection with broader coverage",
    coverage: "Extended coverage, such as front-end plus panels", // TODO: confirm with studio
    features: [
      "Everything in Essential",
      "Higher-grade film for improved clarity and durability", // TODO: confirm with studio
      "Stain and yellowing resistance", // TODO: verify claim for the chosen film
      "7-year warranty", // TODO: confirm terms
      "Complimentary post-install care guidance"
    ],
    bestFor: "Owners who want long-term protection and value retention"
  },
  {
    id: "ultimate",
    name: "ULTIMATE",
    years: 10,
    tagline: "Complete, long-term protection",
    coverage: "Full-body coverage", // TODO: confirm with studio
    features: [
      "Everything in Advance",
      "Premium top-tier film with maximum clarity and gloss", // TODO: confirm with studio
      "Full-vehicle wrap-around edges where possible", // TODO: confirm with studio
      "10-year warranty", // TODO: confirm terms
      "Priority servicing and inspections" // TODO: confirm with studio
    ],
    bestFor: "Premium and performance vehicles, and owners who want the best possible finish"
  }
];

export const ppfComparisonRows: PPFComparisonRow[] = [
  {
    attribute: "Warranty Duration",
    essential: "5 Years", // TODO: confirm with studio
    advance: "7 Years", // TODO: confirm with studio
    ultimate: "10 Years" // TODO: confirm with studio
  },
  {
    attribute: "Coverage",
    essential: "Front-end / high-impact areas", // TODO: confirm with studio
    advance: "Extended front-end plus side panels", // TODO: confirm with studio
    ultimate: "Full-body comprehensive wrap" // TODO: confirm with studio
  },
  {
    attribute: "Film Type",
    essential: "Automotive Grade TPU", // TODO: confirm with studio
    advance: "Optical Clarity Enhanced TPU", // TODO: confirm with studio
    ultimate: "Ultra-Premium Multi-Layer TPU" // TODO: confirm with studio
  },
  {
    attribute: "Self-Healing",
    essential: "Heat-activated (Ambient / Sun)", // TODO: confirm with studio
    advance: "Advanced Elastomeric Healing", // TODO: confirm with studio
    ultimate: "Rapid Micro-Scratch Recovery" // TODO: confirm with studio
  },
  {
    attribute: "Hydrophobic Finish",
    essential: "Standard Hydrophobic", // TODO: confirm with studio
    advance: "Enhanced Stain-Resistant Top Coat", // TODO: confirm with studio
    ultimate: "Maximum Contact-Angle Hydrophobic" // TODO: confirm with studio
  },
  {
    attribute: "Gloss Retention",
    essential: "High Gloss OEM Finish", // TODO: confirm with studio
    advance: "Deep Mirror Gloss", // TODO: confirm with studio
    ultimate: "Ultra-Reflective Optical Clarity" // TODO: confirm with studio
  },
  {
    attribute: "Ideal For",
    essential: "Daily drivers & first-time PPF buyers",
    advance: "Owners seeking long-term protection & value",
    ultimate: "Premium & performance vehicles"
  }
];

export const ppfPackagesNote =
  "Coverage and warranty terms vary by vehicle and film. Our team will confirm details during your consultation.";
