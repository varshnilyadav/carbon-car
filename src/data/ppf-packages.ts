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
    coverage: "Front-end / high-impact areas", // TODO(owner): confirm coverage details
    features: [
      "Self-healing top coat",
      "Protection against stone chips and road debris",
      "Hydrophobic, easy-to-clean finish",
      "Professional installation by trained technicians",
      "5-year warranty", // TODO(owner): confirm warranty terms
    ],
    bestFor: "Daily drivers and first-time PPF buyers",
  },
  {
    id: "advance",
    name: "ADVANCE",
    years: 7,
    badge: "MOST POPULAR",
    tagline: "Extended protection with broader coverage",
    coverage: "Extended coverage, such as front-end plus side panels", // TODO(owner): confirm coverage details
    features: [
      "Everything in Essential",
      "Enhanced optical clarity and durability", // TODO(owner): confirm with studio
      "Stain and environmental resistance", // TODO(owner): confirm with studio
      "7-year warranty", // TODO(owner): confirm warranty terms
      "Complimentary post-install care guidance",
    ],
    bestFor: "Owners who want long-term protection and value retention",
  },
  {
    id: "ultimate",
    name: "ULTIMATE",
    years: 10,
    tagline: "Complete, long-term protection",
    coverage: "Full-body coverage", // TODO(owner): confirm coverage details
    features: [
      "Everything in Advance",
      "High-clarity film with maximum gloss retention", // TODO(owner): confirm with studio
      "Edge-wrapped borders wherever panel gaps allow", // TODO(owner): confirm with studio
      "10-year warranty", // TODO(owner): confirm warranty terms
      "Priority inspections and check-ups", // TODO(owner): confirm with studio
    ],
    bestFor: "Flagship luxury & sports vehicles, and owners who want the best possible finish",
  },
];

export const ppfComparisonRows: PPFComparisonRow[] = [
  {
    attribute: "Warranty Duration",
    essential: "5 Years", // TODO(owner): confirm warranty terms
    advance: "7 Years", // TODO(owner): confirm warranty terms
    ultimate: "10 Years", // TODO(owner): confirm warranty terms
  },
  {
    attribute: "Coverage",
    essential: "Front-end / high-impact areas",
    advance: "Extended front-end plus side panels",
    ultimate: "Full-body comprehensive coverage",
  },
  {
    attribute: "Film Type",
    essential: "Confirmed at consultation",
    advance: "Confirmed at consultation",
    ultimate: "Confirmed at consultation",
  },
  {
    attribute: "Self-Healing",
    essential: "Confirmed at consultation",
    advance: "Confirmed at consultation",
    ultimate: "Confirmed at consultation",
  },
  {
    attribute: "Hydrophobic Finish",
    essential: "Confirmed at consultation",
    advance: "Confirmed at consultation",
    ultimate: "Confirmed at consultation",
  },
  {
    attribute: "Gloss Retention",
    essential: "Confirmed at consultation",
    advance: "Confirmed at consultation",
    ultimate: "Confirmed at consultation",
  },
  {
    attribute: "Ideal For",
    essential: "Daily drivers & first-time PPF buyers",
    advance: "Owners seeking long-term protection",
    ultimate: "Flagship luxury & sports vehicles",
  },
];

export const ppfPackagesNote =
  "Coverage and warranty terms vary by vehicle and film. Our team will confirm details during your consultation.";
