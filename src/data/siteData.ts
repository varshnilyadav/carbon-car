export interface ServiceGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

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
  images?: ServiceGalleryImage[];
}

export const services: Service[] = [
  {
    id: "interior-exterior-detailing",
    slug: "interior-exterior-detailing",
    title: "Interior & Exterior Detailing",
    tagline: "Comprehensive care restoring pristine cleanliness and refined gloss across all surfaces.",
    shortDescription: "Complete vehicle care designed to restore cleanliness, enhance gloss, and refresh every detail. From deep interior cleaning and upholstery care to exterior washing, decontamination, and finishing, every surface receives meticulous attention.",
    description: "Our Interior & Exterior Detailing service delivers complete, meticulous care engineered to restore cleanliness, enhance gloss, and refresh every single detail of your vehicle. The exterior begins with a multi-stage pH-neutral snow foam wash, followed by chemical iron fallout removal and mechanical clay decontamination to clear embedded road contaminants. Exterior surfaces, plastics, and wheels are then treated to a refined protective finishing sealant. Inside the cabin, every crevice receives surgical attention: deep fiber extraction, thorough vacuuming, steam sanitization of vents, and pH-balanced conditioning of leather and vinyl surfaces. Note: This service is designed for thorough rejuvenation and surface cleansing; it is clearly distinguished from multi-stage abrasive paint correction or permanent ceramic and film installations.",
    image: "/images/services/interior-exterior-detailing.webp",
    benefits: [
      "Non-abrasive surface cleansing safe for factory finishes, clear coats, and trim",
      "Comprehensive leather conditioning and upholstery extraction to prevent cracking and wear",
      "Removal of bonded industrial fallout, road grime, and brake dust without micro-scratching",
      "Deep cabin steam sanitization eliminating allergens, bacteria, and interior odors",
      "Hydrophobic finishing sealant application for short-to-medium term shine and water repellency"
    ],
    included: [
      "Multi-stage pH-neutral snow foam pre-soak & two-bucket scratch-free contact wash",
      "Chemical iron fallout dissolution and mechanical fine-grade clay bar decontamination",
      "High-pressure wheel face, inner barrel, and brake caliper cleaning with satin tire dressing",
      "Complete cabin deep vacuuming including trunk, seat tracks, and hard-to-reach crevices",
      "Steam cleaning of air vents, dashboard seams, center console, and door jambs",
      "Leather deep cleaning followed by matte UV-protectant conditioning / fabric extraction",
      "Streak-free interior and exterior optical glass polishing",
      "Protective paint sealant and trim rejuvenation dressing"
    ],
    process: [
      { title: "Decontamination Wash", description: "Snow foam pre-soak, iron dissolution, and mechanical clay bar treatment to lift bonded road grime." },
      { title: "Cabin Steam Extraction", description: "Deep vacuuming, high-temperature steam sanitization of vents, and upholstery extraction." },
      { title: "Conditioning & Treatment", description: "Nourishing leather with pH-balanced conditioners and dressing interior plastics with non-greasy UV blockers." },
      { title: "Finishing & Sealant", description: "Hand-applied paint sealant, optical glass cleaning, and final lighting inspection." }
    ],
    recommendedFor: "Daily drivers requiring an intensive seasonal refresh, vehicles returning from road trips, pre-sale preparations, and owners seeking immaculate maintenance without heavy machine paint correction."
  },
  {
    id: "graphene-coating",
    slug: "graphene-coating",
    title: "Graphene Coating",
    tagline: "Next-generation carbon-matrix surface defense delivering extreme slickness and heat dissipation.",
    shortDescription: "Advanced graphene-infused surface protection designed to enhance gloss, improve water repellency, and make routine maintenance easier. A premium finish for owners seeking long-lasting paint protection.",
    description: "Graphene Coating represents the forefront of modern nano-surface protection. Infused with reduced graphene oxide matrices, this advanced formulation bonds tightly with your vehicle's clear coat to deliver an ultra-slick, resilient protective barrier. Graphene's honeycomb molecular structure offers natural heat dissipation properties, which helps reduce surface temperatures in direct sunlight and significantly lowers the risk of mineral water spotting compared to conventional coatings. The result is a hyper-reflective wet-look gloss, remarkable water contact angles, and effortless washing characteristics. Durability and ongoing performance depend on surface preparation, adherence to manufacturer curing schedules, environmental exposure, and proper pH-neutral maintenance washing routines.",
    image: "/images/services/graphene-coating.webp",
    benefits: [
      "High contact angle hydrophobicity delivering rapid water sheeting and self-cleaning performance",
      "Superior thermal dissipation properties that help mitigate mineral water-spot etching",
      "Deep, glass-like reflective depth and unmatched slickness to the touch",
      "Chemical resistance against aggressive environmental fallout, bird droppings, and tree sap",
      "Simplifies routine maintenance, reducing wash times and minimizing the risk of wash-induced swirls"
    ],
    included: [
      "Intensive exterior decontamination wash, chemical fallout remover, and clay bar treatment",
      "Single to multi-stage machine polishing to enhance paint clarity and reflectivity",
      "Complete panel wipe using isopropyl alcohol solvent to ensure a grease-free bonding surface",
      "Hand application of professional-grade graphene coating across all painted body panels",
      "Coating of exterior plastics, headlights, and front-facing trim components",
      "Controlled infrared (IR) heat curing adhering strictly to product-specific cure cycles"
    ],
    process: [
      { title: "Surface Preparation", description: "Multi-stage decontamination wash and clay bar to remove all bonded fallout and contaminants." },
      { title: "Paint Enhancement", description: "Machine polishing to level minor blemishes and optimize clear coat clarity for bonding." },
      { title: "Graphene Application", description: "Precise hand application in overlapping cross-hatch sections with timed flash-off leveling." },
      { title: "Controlled Curing", description: "Studio dwell time and infrared heat curing to complete initial cross-linking before vehicle release." }
    ],
    recommendedFor: "Owners seeking cutting-edge surface protection with superior water-spot resistance, deep gloss, and reduced maintenance effort under demanding climate conditions."
  },
  {
    id: "ceramic-coating",
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    tagline: "Durable nano-ceramic liquid glass shield providing candy-like gloss and chemical resistance.",
    shortDescription: "A durable protective coating that enhances paint gloss, adds a slick finish, and helps resist environmental contaminants. Keep your vehicle looking refined with easier cleaning and maintenance.",
    description: "Ceramic Coating is an established standard in high-end automotive surface protection. Utilizing advanced silicon dioxide (SiO2) nanotechnology, the liquid coating chemically bonds with the vehicle's factory clear coat, curing into a semi-permanent sacrificial glass shield. Prior to application, the paint undergoes thorough surface decontamination and optional machine polishing to remove swirl marks, haze, and oxidation, ensuring the optical clarity beneath the coating is flawless. Once cured, ceramic coating shields the paint from UV oxidation, bird droppings, acid rain, and road film, while imparting a rich candy-like depth and intense hydrophobic behavior that keeps your vehicle cleaner for longer between washes.",
    image: "/images/services/ceramic-coating.webp",
    benefits: [
      "Semi-permanent sacrificial barrier protecting factory clear coat from environmental fallout",
      "Intense candy-like gloss, optical clarity, and color depth that enhances paintwork",
      "High hydrophobicity causing water and contaminants to bead and slide effortlessly off surfaces",
      "UV protection guarding against clear coat oxidation, premature aging, and fading",
      "Low surface energy making routine maintenance washes substantially faster and safer"
    ],
    included: [
      "Comprehensive multi-step exterior wash and iron fallout dissolution",
      "Mechanical clay bar treatment to remove embedded industrial fallout",
      "Paint enhancement / machine polishing to eliminate light swirls and maximize gloss",
      "Solvent panel wipe to inspect clear coat and ensure optimal coating bonding",
      "Multi-panel hand application and leveling of premium nano-ceramic coating",
      "Ceramic coating of external plastics, wheel faces, and glass surfaces",
      "Climate-controlled initial curing period under studio inspection lights"
    ],
    process: [
      { title: "Decontamination", description: "Thorough multi-stage stripping wash and clay bar decontamination to purify the clear coat." },
      { title: "Machine Polishing", description: "Precision machine refinement to eliminate swirls, light scratches, and haze." },
      { title: "Ceramic Bonding", description: "Careful hand-leveling of nano-ceramic SiO2 coating across all exterior painted surfaces." },
      { title: "Cure & Verification", description: "Controlled temperature curing and 360-degree LED inspection before customer handover." }
    ],
    recommendedFor: "Brand-new vehicles preserving factory paint integrity, restored pre-owned cars, and discerning owners wanting long-lasting gloss with easy maintenance."
  },
  {
    id: "ppf",
    slug: "ppf",
    title: "Paint Protection Film (PPF)",
    tagline: "Optically clear, self-healing polyurethane armor shielding your paint from stone chips and road debris.",
    shortDescription: "A transparent protective film designed to help shield your vehicle's paint from stone chips, minor scratches, road debris, and everyday wear. Preserve your original paint while maintaining its factory appearance.",
    description: "Paint Protection Film (PPF) is the definitive physical barrier engineered to protect your vehicle's factory paintwork against real-world driving conditions. Constructed from advanced high-tensile thermoplastic polyurethane (TPU), the film provides robust impact absorption against airborne stone chips, highway gravel, road salt, bug splatter, and minor surface abrasions. The top layer features advanced elastomeric polymers that self-heal light swirl marks and fine scratches when exposed to natural ambient heat or warm water. Every installation begins with a rigorous paint inspection and panel prep, utilizing precision computer-cut templates or custom bespoke bulk wrapping with tucked edges for a near-invisible finish. While PPF offers superior protection against standard road debris and daily driving hazards, it is designed to mitigate impacts rather than guarantee absolute invulnerability against severe collisions.",
    image: "/images/services/ppf.webp",
    benefits: [
      "High impact resistance shielding vulnerable paintwork from high-speed stone chips and gravel",
      "Self-healing elastomeric topcoat that erases fine swirl marks and light scratches with heat",
      "Optically transparent finish that preserves the exact factory depth, color, and metallic sparkle",
      "Stain, chemical, and UV resistance preventing premature paint discoloration and yellowing",
      "Edge-wrapped installation methodology wherever panel gaps permit for a seamless appearance"
    ],
    included: [
      "Full vehicle exterior wash, iron chemical decontamination, and surface claying",
      "Pre-installation single-stage polish to ensure clear coat perfection beneath the film",
      "Computer-aided precision template plotting or bespoke custom panel cut pattern selection",
      "Dust-controlled bay installation using specialized slip and tack solutions",
      "Edge wrapping around hood corners, fenders, door edges, and bumper recesses",
      "Post-installation heat setting, seam inspection, and final quality control check"
    ],
    process: [
      { title: "Paint Inspection & Prep", description: "Meticulous surface decontamination and gloss refinement under specialized studio lighting." },
      { title: "Template Alignment", description: "Digital design plotting or bespoke custom wrapping mapped to exact vehicle body lines." },
      { title: "Precision Installation", description: "Dust-free application in dedicated bays with specialized squeegeeing to prevent silvering." },
      { title: "Edge Wrapping & Cure", description: "Tucking edges into panel gaps, followed by post-heating and inspection for zero lifting." }
    ],
    recommendedFor: "New luxury vehicles, sports cars, highway commuters, and any vehicle owner seeking the highest level of physical protection against stone chips and road hazards."
  },
  {
    id: "color-ppf",
    slug: "color-ppf",
    title: "Color PPF",
    tagline: "Bespoke styling and personalized aesthetics combined with authentic protective film durability.",
    shortDescription: "Transform your vehicle's appearance with colored paint protection film that combines a fresh visual identity with a protective layer. Explore bold colors and sophisticated finishes while helping protect the underlying paint.",
    description: "Color PPF bridges the gap between the vibrant aesthetics of vehicle vinyl wraps and the heavy-duty physical defense of authentic thermoplastic polyurethane protection film. Unlike traditional thin vinyl wraps that offer minimal impact resistance, Color PPF features full-thickness TPU construction with self-healing properties, UV blockers, and deep color saturation free of vinyl's typical orange-peel texture. Available in a curated spectrum of finishes—including ultra-high gloss, stealth satin, deep metallics, and bespoke tones—it allows you to redefine your vehicle's visual identity while safeguarding the original factory paint beneath. The transformation is completely reversible, preserving the resale value and untouched condition of your original clear coat.",
    image: "/images/services/color-ppf.webp",
    benefits: [
      "Striking visual transformation with the clarity, depth, and mirror reflection of OEM-grade paint",
      "Genuine full-thickness TPU film providing robust stone chip and scratch protection",
      "Self-healing topcoat technology that clears minor wash swirls and scuffs with ambient heat",
      "100% reversible installation that shields and preserves the factory clear coat underneath",
      "Variety of finishes available including high-gloss solid colors, satin stealth, and metallic tones"
    ],
    included: [
      "In-studio color and finish consultation exploring gloss, satin, and metallic selections",
      "Full exterior strip wash, chemical iron removal, and mechanical decontamination",
      "Careful disassembly of non-structural components (emblems, lights, trim) for seamless edge tucking",
      "Full-body precision installation of selected colored paint protection film",
      "Deep edge wrapping into door apertures, panel seams, and bumper recesses",
      "Thermal post-heating cycle and 24-hour settling inspection before client handover"
    ],
    process: [
      { title: "Consultation & Selection", description: "Choosing the exact color palette, metallic flake density, or stealth satin finish for your vehicle." },
      { title: "Vehicle Prep & Teardown", description: "Purification wash, decontamination, and safe removal of badges and trims for flush coverage." },
      { title: "Color Film Installation", description: "Tension-balanced wet installation ensuring uniform color distribution without stretching distortion." },
      { title: "Edge Sealing & Inspection", description: "Post-heating all wrapped borders and inspecting under multi-angle studio lighting." }
    ],
    recommendedFor: "Automotive enthusiasts wanting a custom, head-turning color change combined with real stone-chip protection that standard vinyl wraps cannot match."
  },
  {
    id: "sun-films",
    slug: "sun-films",
    title: "Sun Films",
    tagline: "High-performance automotive window films for solar rejection, UV defense, and cabin comfort.",
    shortDescription: "Upgrade cabin comfort and privacy with automotive window films selected for your vehicle. Depending on the film specification, enjoy reduced solar heat and glare, UV protection, and a cleaner, more refined appearance. All installations must comply with applicable Indian vehicle-window tint regulations.",
    description: "Our Sun Films service provides premium automotive window films specifically engineered to elevate cabin comfort, reduce glare, and protect vehicle interiors from the harsh tropical sun. Utilizing advanced nano-ceramic and infrared-rejecting technology, these films reject a substantial portion of solar heat without relying on illegal dark dyes. The non-metallized construction ensures zero interference with electronic systems including GPS, cellular signals, and RFID toll tags. Depending on film specification, occupants enjoy up to 99% UV radiation blocking—preventing leather upholstery fading and dashboard cracking while minimizing eye fatigue during daytime driving. All film recommendations and installations are executed with strict adherence to applicable Indian vehicle-window tint regulations, balancing optical transparency, legal compliance, and thermal comfort.",
    image: "/images/services/sun-films.webp",
    benefits: [
      "Blocks up to 99% of harmful UV radiation, protecting occupants' skin and interior leather/dash trims",
      "Substantial infrared heat reduction, significantly lowering cabin temperatures in direct sunlight",
      "Reduces harsh sun glare and headlight reflection for improved driving clarity and comfort",
      "Non-metallic nano-ceramic construction with zero interference with mobile, GPS, or RFID systems",
      "Installed in full alignment with applicable Indian motor vehicle glass transparency regulations"
    ],
    included: [
      "Detailed film consultation reviewing thermal rejection specs and regulatory transparency guidelines",
      "Multi-stage mechanical glass cleaning and micro-particulate scraping on all window panes",
      "Exterior precision heat shrinking for seamless, bubble-free contouring on curved glass",
      "Interior slip installation performed in a dedicated low-dust detailing bay",
      "Micro-edge shaved finishing along frameless or roll-down window top edges",
      "Post-installation moisture check and curing guidelines"
    ],
    process: [
      { title: "Glass Preparation", description: "Deep mechanical scrubbing and blade decontamination of interior and exterior glass." },
      { title: "Thermal Contouring", description: "Heat-shrinking the film on the glass exterior to mirror exact curvature and eliminate tension." },
      { title: "Clean Room Application", description: "Slip installation on interior glass using filtered solutions and precision squeegeeing." },
      { title: "Edge Finishing", description: "Micro-edge shaving and heat-setting of all borders for a clean, factory-like aesthetic." }
    ],
    recommendedFor: "Vehicle owners seeking relief from solar heat, protection against leather fading and interior cracking, and reduced driving glare while remaining compliant with vehicle tint regulations."
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
