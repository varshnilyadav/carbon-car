export interface Service {
  id: string;
  number: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "ppf",
    number: "01",
    name: "PPF",
    title: "Paint Protection Film",
    description: "Invisible armor for your vehicle. Advanced self-healing PPF shields your paint from stone chips, scratches, and environmental damage.",
    image: "/services/ppf.jpg",
  },
  {
    id: "bodykits",
    number: "02",
    name: "BODYKITS",
    title: "Bespoke Automotive Styling",
    description: "Transform your vehicle's presence with precision-fit aerodynamic body kits, splitters, diffusers, and carbon fiber components.",
    image: "/services/bodykits.jpg",
  },
  {
    id: "performance",
    number: "03",
    name: "PERFORMANCE",
    title: "Stage 1 / Stage 2 Performance Upgrades",
    description: "Unlock your engine's true potential with ECU remapping, intake upgrades, exhaust systems, and complete Stage 1 & Stage 2 performance packages.",
    image: "/services/performance.jpg",
  },
  {
    id: "restoration",
    number: "04",
    name: "RESTORATION",
    title: "Complete Vehicle Restoration",
    description: "Meticulous, ground-up restoration returning vehicles to showroom condition or beyond. Paint, mechanical, interior — every detail addressed.",
    image: "/services/restoration.jpg",
  },
  {
    id: "paint",
    number: "05",
    name: "PAINT",
    title: "Premium Automotive Paint & Refinishing",
    description: "Expert paint correction, custom color changes, and professional refinishing using premium automotive paint systems.",
    image: "/services/paint.jpg",
  },
  {
    id: "detailing",
    number: "06",
    name: "DETAILING",
    title: "Precision Exterior & Interior Detailing",
    description: "Multi-stage paint correction, leather conditioning, engine bay detailing, and complete interior restoration to factory-fresh perfection.",
    image: "/services/detailing.jpg",
  },
  {
    id: "ceramic",
    number: "07",
    name: "CERAMIC COATING",
    title: "Long-Term Paint Protection",
    description: "Professional-grade ceramic coatings delivering years of hydrophobic protection, UV resistance, and unmatched gloss depth.",
    image: "/services/ceramic.jpg",
  },
  {
    id: "general",
    number: "08",
    name: "GENERAL SERVICE",
    title: "Professional Automotive Maintenance",
    description: "Comprehensive mechanical servicing, periodic maintenance, fluid changes, brake service, and electrical diagnostics.",
    image: "/services/general.jpg",
  },
  {
    id: "wrapping",
    number: "09",
    name: "WRAPPING",
    title: "Premium Automotive Vinyl Wrapping",
    description: "Complete color change wraps, accent wraps, chrome deletes, and custom liveries using premium cast vinyl films.",
    image: "/services/wrapping.jpg",
  },
];

export interface Package {
  id: string;
  name: string;
  idealFor: string;
  services: string[];
  featured: boolean;
}

export const packages: Package[] = [
  {
    id: "essential",
    name: "ESSENTIAL",
    idealFor: "Regular maintenance & upkeep",
    services: [
      "Exterior hand wash & dry",
      "Interior vacuum & wipe down",
      "Tire & wheel cleaning",
      "Glass cleaning",
      "Air freshener treatment",
    ],
    featured: false,
  },
  {
    id: "advanced",
    name: "ADVANCED",
    idealFor: "Deep clean & minor correction",
    services: [
      "Everything in Essential",
      "Single-stage paint correction",
      "Interior deep clean",
      "Leather conditioning",
      "Engine bay cleaning",
      "Headlight restoration",
    ],
    featured: false,
  },
  {
    id: "signature",
    name: "SIGNATURE",
    idealFor: "Complete transformation detail",
    services: [
      "Everything in Advanced",
      "Multi-stage paint correction",
      "Clay bar treatment",
      "Paint sealant application",
      "Trim restoration",
      "Wheel detailing & coating",
      "Exhaust tip polishing",
    ],
    featured: true,
  },
  {
    id: "ultimate",
    name: "ULTIMATE",
    idealFor: "The absolute best for your vehicle",
    services: [
      "Everything in Signature",
      "Ceramic coating application",
      "Interior ceramic coating",
      "Paint protection film (high-impact areas)",
      "Fabric protection",
      "Detailed photo documentation",
      "Priority scheduling",
    ],
    featured: false,
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What services does Carbon offer?",
    answer: "Carbon offers a comprehensive range of automotive transformation services including Paint Protection Film (PPF), ceramic coating, precision detailing, vinyl wrapping, bodykit installation, Stage 1 & Stage 2 performance upgrades, complete vehicle restoration, paint refinishing, and professional general servicing.",
  },
  {
    question: "What is PPF?",
    answer: "PPF (Paint Protection Film) is a transparent, self-healing urethane film applied to a vehicle's painted surfaces to protect against stone chips, scratches, bug acids, bird droppings, and environmental contaminants. It preserves your vehicle's factory paint while maintaining a flawless finish.",
  },
  {
    question: "How long does PPF installation take?",
    answer: "A full-vehicle PPF installation typically requires 3–5 days depending on the vehicle's complexity and the coverage package selected. Partial coverage (front-end, high-impact areas) can be completed in 1–2 days.",
  },
  {
    question: "What is ceramic coating?",
    answer: "Ceramic coating is a liquid polymer applied to exterior surfaces that chemically bonds with the factory paint, creating a permanent or semi-permanent layer of protection. It provides hydrophobic properties, UV protection, chemical resistance, and an enhanced gloss that lasts for years.",
  },
  {
    question: "Do you offer Stage 1 and Stage 2 performance upgrades?",
    answer: "Yes. Our performance division offers ECU remapping (Stage 1) and comprehensive hardware upgrades combined with custom tuning (Stage 2) for a wide range of vehicles. Each tune is tailored to your specific vehicle and performance goals.",
  },
  {
    question: "Can you customize my vehicle with a bodykit?",
    answer: "Absolutely. We source and install premium aerodynamic body kits, spoilers, diffusers, side skirts, and carbon fiber components. Each installation is precision-fitted and finished to seamlessly integrate with your vehicle's design.",
  },
  {
    question: "Do you offer vehicle restoration?",
    answer: "Yes. Our restoration services cover complete ground-up builds as well as targeted restorations including paint, interior, mechanical systems, and trim. We work with both modern and classic vehicles to bring them back to their best condition.",
  },
  {
    question: "How do I get a quote?",
    answer: "You can request a custom quote by filling out our consultation form on the website, contacting us via WhatsApp, or visiting our studio in Hyderabad. Every vehicle is different, so we assess each project individually to provide accurate pricing.",
  },
  {
    question: "Do I need an appointment?",
    answer: "While walk-ins are welcome for consultations, we recommend booking an appointment for all services to ensure availability and dedicated attention for your vehicle.",
  },
  {
    question: "Where is Carbon located?",
    answer: "Carbon is located in Hyderabad, India. You can find us on Google Maps for directions and visit our studio to see our workspace and discuss your vehicle's transformation in person.",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  vehicle: string;
  service: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Customer Review",
    vehicle: "Performance Vehicle",
    service: "PPF & Ceramic Coating",
    review: "Exceptional craftsmanship and attention to detail. The PPF installation was flawless and the ceramic coating finish is absolutely stunning. My vehicle has never looked better.",
  },
  {
    id: "t2",
    name: "Customer Review",
    vehicle: "Luxury SUV",
    service: "Complete Detailing",
    review: "Carbon transformed my vehicle inside and out. The multi-stage paint correction brought back a mirror finish I didn't think was possible. Professional team, premium results.",
  },
  {
    id: "t3",
    name: "Customer Review",
    vehicle: "Sports Car",
    service: "Performance Upgrade",
    review: "The Stage 2 performance upgrade exceeded all expectations. The team was knowledgeable, transparent about the process, and the results are incredible. Highly recommended.",
  },
];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: "/gallery/gallery-1.jpg", alt: "PPF installation on luxury vehicle", category: "PPF" },
  { id: "g2", src: "/gallery/gallery-2.jpg", alt: "Ceramic coating application", category: "DETAILING" },
  { id: "g3", src: "/gallery/gallery-3.jpg", alt: "Vehicle vinyl wrap", category: "WRAPPING" },
  { id: "g4", src: "/gallery/gallery-4.jpg", alt: "Engine performance upgrade", category: "PERFORMANCE" },
  { id: "g5", src: "/gallery/gallery-5.jpg", alt: "Complete vehicle restoration", category: "RESTORATION" },
  { id: "g6", src: "/gallery/gallery-6.jpg", alt: "Bodykit installation", category: "BODYKITS" },
  { id: "g7", src: "/gallery/gallery-7.jpg", alt: "Paint correction detail", category: "DETAILING" },
  { id: "g8", src: "/gallery/gallery-8.jpg", alt: "Premium vehicle detailing", category: "DETAILING" },
];

export const galleryCategories = [
  "ALL", "DETAILING", "PPF", "WRAPPING", "PERFORMANCE", "RESTORATION", "BODYKITS"
];
