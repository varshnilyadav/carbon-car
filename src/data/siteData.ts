export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  benefits: string[];
  included: string[];
  process: { title: string; description: string }[];
  recommendedFor: string;
}

export const services: Service[] = [
  {
    id: "foam-wash",
    slug: "foam-wash",
    title: "Foam Wash",
    tagline: "Safe, effective exterior cleaning.",
    shortDescription: "A meticulous exterior wash using premium snow foam to safely lift dirt without scratching your paint.",
    description: "Our signature foam wash is the foundation of proper car care. We use pH-neutral snow foam to encapsulate and lift dirt particles safely away from your vehicle's clear coat. This prevents the swirl marks commonly caused by traditional tunnel washes or improper hand washing techniques.",
    image: "/services/general.jpg",
    benefits: [
      "Scratch-free cleaning process",
      "Removes road grime and traffic film",
      "Safe for ceramic coatings and PPF",
      "Enhances natural gloss"
    ],
    included: [
      "Snow foam pre-soak",
      "Two-bucket safe hand wash",
      "Wheel face and barrel cleaning",
      "Tire dressing",
      "Streak-free glass cleaning"
    ],
    process: [
      { title: "Pre-Rinse", description: "High-pressure rinse to remove loose debris." },
      { title: "Foam Soak", description: "Thick snow foam applied to lift stubborn dirt." },
      { title: "Agitation", description: "Gentle wash with microfiber mitts using the two-bucket method." },
      { title: "Drying", description: "Safe drying using forced air and plush microfiber towels." }
    ],
    recommendedFor: "Regular maintenance every 2-4 weeks to keep your vehicle looking its best."
  },
  {
    id: "ceramic-coating",
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    tagline: "Long-lasting gloss and extreme protection.",
    shortDescription: "Advanced nano-ceramic technology that bonds to your paint, offering years of protection and incredible shine.",
    description: "Ceramic coating is the ultimate liquid armor for your vehicle. By bonding at a molecular level with your clear coat, it creates a semi-permanent layer of protection that is harder than factory paint. It provides extreme hydrophobicity, making your car self-cleaning and incredibly easy to maintain.",
    image: "/services/ceramic.jpg",
    benefits: [
      "Years of durable protection",
      "Extreme hydrophobic (water-repelling) properties",
      "Candy-like gloss and depth",
      "Protection against UV rays and oxidation",
      "Chemical resistance to bird droppings and sap"
    ],
    included: [
      "Decontamination wash",
      "Clay bar treatment",
      "Single stage paint enhancement (polish)",
      "Panel wipe prep",
      "Professional ceramic coating application"
    ],
    process: [
      { title: "Prep Wash", description: "Thorough stripping wash to remove old waxes." },
      { title: "Decontamination", description: "Chemical and mechanical removal of embedded iron and fallout." },
      { title: "Paint Correction", description: "Machine polishing to remove swirls and maximize gloss." },
      { title: "Application", description: "Careful leveling of the ceramic coating onto all painted surfaces." }
    ],
    recommendedFor: "New vehicles, recently polished vehicles, or anyone wanting long-term protection."
  },
  {
    id: "ppf",
    slug: "ppf-wrap-sunfilm",
    title: "PPF / Wrap / Sunfilm",
    tagline: "The ultimate physical barrier against the elements.",
    shortDescription: "Paint Protection Film (PPF), Vinyl Wraps, and Automotive Sunfilm to protect and customize your ride.",
    description: "Whether you want invisible rock chip protection with PPF, a complete color change with a vinyl wrap, or heat rejection with premium sunfilm, we provide flawless installations using industry-leading materials.",
    image: "/services/ppf.jpg",
    benefits: [
      "Self-healing scratch protection (PPF)",
      "Prevents rock chips and road damage",
      "Customizable aesthetics (Wraps)",
      "Heat and UV rejection (Sunfilm)"
    ],
    included: [
      "Meticulous surface preparation",
      "Custom template cutting",
      "Seamless edge wrapping",
      "Post-installation quality check"
    ],
    process: [
      { title: "Consultation", description: "Choosing the right film for your needs." },
      { title: "Prep", description: "Deep cleaning and decontamination of the surface." },
      { title: "Installation", description: "Expert application using slip solutions and heat." },
      { title: "Curing", description: "Allowing the film to settle and bond properly." }
    ],
    recommendedFor: "High-impact areas (bumper, hood), complete vehicle protection, or custom styling."
  },
  {
    id: "interior-detailing",
    slug: "interior-detailing",
    title: "Interior Detailing",
    tagline: "Restore your cabin to factory freshness.",
    shortDescription: "Deep cleaning, stain removal, and protection for all interior surfaces including leather, fabric, and plastics.",
    description: "You spend all your time inside the car, so it deserves just as much attention as the outside. Our interior detailing service deeply cleans, sanitizes, and protects every inch of your cabin, returning it to a like-new condition.",
    image: "/services/detailing.jpg",
    benefits: [
      "Removal of tough stains and odors",
      "Sanitization of high-touch areas",
      "UV protection for plastics and leather",
      "Restores original matte finish (no greasy shine)"
    ],
    included: [
      "Thorough vacuuming",
      "Steam cleaning of vents and crevices",
      "Leather deep cleaning and conditioning",
      "Fabric extraction (if needed)",
      "Interior glass cleaning"
    ],
    process: [
      { title: "Vacuum & Dust", description: "Removing loose dirt from all surfaces." },
      { title: "Deep Clean", description: "Using specialized cleaners and brushes on panels and seats." },
      { title: "Steam & Extract", description: "Lifting stubborn stains and sanitizing." },
      { title: "Protect", description: "Applying non-greasy UV protectants to all materials." }
    ],
    recommendedFor: "Daily drivers, family vehicles, or preparing a car for sale."
  },
  {
    id: "exterior-detailing",
    slug: "exterior-detailing",
    title: "Exterior Detailing",
    tagline: "Rejuvenate your vehicle's paint and trim.",
    shortDescription: "Comprehensive exterior deep cleaning, decontamination, and gloss enhancement.",
    description: "More than just a wash, our exterior detailing involves a deep chemical and mechanical decontamination of your paint, followed by a polish to enhance gloss and a sealant to protect the finish.",
    image: "/services/paint.jpg",
    benefits: [
      "Removes embedded contamination",
      "Restores smooth-as-glass feel to paint",
      "Enhances depth and clarity",
      "Provides short-to-medium term protection"
    ],
    included: [
      "Foam wash",
      "Iron decontamination",
      "Clay bar treatment",
      "Machine applied polish/sealant",
      "Trim dressing"
    ],
    process: [
      { title: "Wash", description: "Thorough two-bucket wash." },
      { title: "Decontaminate", description: "Removing iron particles and bonded dirt." },
      { title: "Enhance", description: "Light machine polish to boost gloss." },
      { title: "Protect", description: "Application of a premium paint sealant." }
    ],
    recommendedFor: "Vehicles that feel rough to the touch or lack shine."
  },
  {
    id: "ac-sterilization",
    slug: "ac-sterilization",
    title: "A/C Sterilization",
    tagline: "Breathe clean, fresh air.",
    shortDescription: "Eliminates odors, bacteria, and mold from your vehicle's air conditioning system.",
    description: "Over time, your car's A/C system can harbor bacteria and mold, leading to musty odors and poor air quality. Our sterilization process cleans the system from the inside out.",
    image: "/services/restoration.jpg",
    benefits: [
      "Eliminates musty A/C odors",
      "Kills bacteria and mold spores",
      "Improves cabin air quality",
      "Enhances cooling efficiency"
    ],
    included: [
      "A/C vent steam cleaning",
      "Evaporator core cleaning treatment",
      "Ozone generator treatment (optional)",
      "Cabin air filter inspection"
    ],
    process: [
      { title: "Inspect", description: "Checking the cabin air filter condition." },
      { title: "Treat", description: "Injecting antibacterial cleaner into the A/C system." },
      { title: "Circulate", description: "Running the system to distribute the cleaner." },
      { title: "Purify", description: "Optional ozone treatment for severe odors." }
    ],
    recommendedFor: "Cars with bad odors, older vehicles, or allergy sufferers."
  },
  {
    id: "engine-degreasing",
    slug: "engine-degreasing",
    title: "Engine Degreasing",
    tagline: "A clean engine runs cooler and looks better.",
    shortDescription: "Safe and thorough cleaning of your engine bay to remove grease, oil, and dirt.",
    description: "A clean engine bay not only looks great but makes spotting leaks and doing maintenance easier. We use safe degreasers and low-pressure water to clean without damaging sensitive electronics.",
    image: "/services/performance.jpg",
    benefits: [
      "Removes heavy grease and grime",
      "Makes spotting leaks easier",
      "Improves resale value",
      "Protects plastics and hoses from drying out"
    ],
    included: [
      "Covering sensitive electronics",
      "Application of safe degreaser",
      "Agitation with detailing brushes",
      "Low-pressure rinse",
      "Dressing plastics and hoses"
    ],
    process: [
      { title: "Prep", description: "Protecting the alternator, intake, and electrical boxes." },
      { title: "Degrease", description: "Applying cleaner and letting it break down the grime." },
      { title: "Agitate", description: "Brushing all accessible areas." },
      { title: "Dress", description: "Applying a water-based dressing for a satin finish." }
    ],
    recommendedFor: "Before selling a car, after a fluid leak is fixed, or for show cars."
  }
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
