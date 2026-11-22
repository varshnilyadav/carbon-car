export interface ServiceGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  benefits: string[];
  included: string[];
  process: { title: string; description: string }[];
  recommendedFor: string;
  images?: ServiceGalleryImage[];
  faqs: ServiceFAQ[];
}

export const services: Service[] = [
  {
    id: "interior-exterior-detailing",
    slug: "interior-exterior-detailing",
    title: "Interior & Exterior Detailing",
    metaTitle: "Car Detailing in Hyderabad | CARBON",
    metaDescription:
      "Deep interior steam sanitization, leather care, and exterior multi-stage decontamination for your car in Hyderabad. Schedule your studio appointment today.",
    tagline: "Comprehensive care restoring pristine cleanliness and refined gloss across all surfaces.",
    shortDescription:
      "Complete vehicle care designed to restore cleanliness, enhance gloss, and refresh every detail. From deep interior cleaning and upholstery care to exterior washing, decontamination, and finishing, every surface receives meticulous attention.",
    description:
      "Our Interior & Exterior Detailing service delivers complete, meticulous care engineered to restore cleanliness, enhance gloss, and refresh every single detail of your vehicle. The exterior begins with a multi-stage pH-neutral snow foam wash, followed by chemical iron fallout removal and mechanical clay decontamination to clear embedded road contaminants. Exterior surfaces, plastics, and wheels are then treated to a refined protective finishing sealant. Inside the cabin, every crevice receives focused attention: deep fiber extraction, thorough vacuuming, steam sanitization of vents, and pH-balanced conditioning of leather and interior surfaces. Note: This service is designed for thorough rejuvenation and surface cleansing; it is clearly distinguished from multi-stage abrasive paint correction or permanent protective film installations.",
    image: "/images/services/interior-exterior-detailing.webp",
    benefits: [
      "Non-abrasive surface cleansing safe for factory finishes, clear coats, and trim",
      "Comprehensive leather conditioning and upholstery extraction to prevent cracking and wear",
      "Removal of bonded industrial fallout, road grime, and brake dust without micro-scratching",
      "Deep cabin steam sanitization eliminating allergens, bacteria, and interior odors",
      "Hydrophobic finishing sealant application for short-to-medium term shine and water repellency",
    ],
    included: [
      "Multi-stage pH-neutral snow foam pre-soak & two-bucket scratch-free contact wash",
      "Chemical iron fallout dissolution and mechanical fine-grade clay bar decontamination",
      "High-pressure wheel face, inner barrel, and brake caliper cleaning with satin tire dressing",
      "Complete cabin deep vacuuming including trunk, seat tracks, and hard-to-reach crevices",
      "Steam cleaning of air vents, dashboard seams, center console, and door jambs",
      "Leather deep cleaning followed by matte UV-protectant conditioning / fabric extraction",
      "Streak-free interior and exterior optical glass polishing",
      "Protective paint sealant and trim rejuvenation dressing",
    ],
    process: [
      {
        title: "Decontamination Wash",
        description:
          "Snow foam pre-soak, iron dissolution, and mechanical clay bar treatment to lift bonded road grime.",
      },
      {
        title: "Cabin Steam Extraction",
        description:
          "Deep vacuuming, high-temperature steam sanitization of vents, and upholstery extraction.",
      },
      {
        title: "Conditioning & Treatment",
        description:
          "Nourishing leather with pH-balanced conditioners and dressing interior plastics with non-greasy UV blockers.",
      },
      {
        title: "Finishing & Sealant",
        description:
          "Hand-applied paint sealant, optical glass cleaning, and final lighting inspection.",
      },
    ],
    recommendedFor:
      "Daily drivers requiring an intensive seasonal refresh, vehicles returning from road trips, pre-sale preparations, and owners seeking immaculate maintenance without heavy machine paint correction.",
    images: [
      {
        src: "/images/services/interior-exterior-detailing.webp",
        alt: "Complete interior and exterior detailing transformation",
        caption: "Full Vehicle Detail & Cleansing",
      },
      {
        src: "/services/interior-exterior-detailing/exterior-detailing.webp",
        alt: "Exterior detailing snow foam pre-wash and contact decontamination",
        caption: "Multi-Stage Exterior Decontamination",
      },
      {
        src: "/services/interior-exterior-detailing/interior-detailing.webp",
        alt: "Cabin steam sanitization, leather conditioning, and deep extraction",
        caption: "Dedicated Interior Detailing",
      },
    ],
    faqs: [
      {
        question: "How often should I get full interior and exterior detailing in Hyderabad?",
        answer:
          "For vehicles driven regularly in Hyderabad's dusty urban traffic and tropical climate, we generally recommend comprehensive detailing every four to six months. Routine maintenance washes keep surface dirt at bay, but quarterly or bi-annual deep detailing cleans deep into upholstery fibers, conditions leather against sun cracking, and decontaminates clear coat surfaces from industrial fallout and road grime.",
      },
      {
        question: "What is the difference between regular car washing and studio detailing?",
        answer:
          "A standard roadside wash typically uses harsh detergents, recycled water, and abrasive sponges that induce swirl marks into clear coat finishes. Professional studio detailing at CARBON uses multi-bucket pH-neutral foam cleansing, mechanical clay decontamination, interior steam extraction, and dedicated UV dressings, focusing on thorough surface preservation without scratching delicate surfaces.",
      },
      {
        question: "How long does a complete detailing session take at CARBON?",
        answer:
          "A thorough interior and exterior detailing session generally requires one full working day (approximately 6 to 9 hours), depending on vehicle size and initial cabin condition. This dedicated duration allows our team to thoroughly extract carpets, steam-sanitize climate vents, decontaminate exterior panels, and apply protective dressings without rushed shortcuts.",
      },
      {
        question: "Can interior detailing remove stubborn stains and cabin odors?",
        answer:
          "Our specialized interior detailing utilizes pressurized steam extraction and pH-balanced stain dissolving agents to lift deep-seated spills, sweat, dust, and organic odors from fabrics and leather. While severe chemical burns or physical fiber discoloration may be permanent, our systematic sanitization cleans and refreshes virtually all reachable cabin surfaces.",
      },
    ],
  },
  {
    id: "graphene-coating",
    slug: "graphene-coating",
    title: "Graphene Coating",
    metaTitle: "Graphene Coating in Hyderabad | CARBON",
    metaDescription:
      "Advanced graphene surface defense delivering thermal heat dissipation, deep gloss, and high water-spot resistance in Hyderabad. Inquire for consultation.",
    tagline: "Next-generation carbon-matrix surface defense delivering extreme slickness and heat dissipation.",
    shortDescription:
      "Advanced graphene-infused surface protection designed to enhance gloss, improve water repellency, and make routine maintenance easier. A premium finish for owners seeking long-lasting paint protection.",
    description:
      "Graphene Coating represents the forefront of modern nano-surface protection. Infused with reduced graphene oxide matrices, this advanced formulation bonds tightly with your vehicle's clear coat to deliver an ultra-slick, resilient protective barrier. Graphene's honeycomb molecular structure offers natural heat dissipation properties, which helps reduce surface temperatures in direct sunlight and significantly lowers the risk of mineral water spotting compared to conventional coatings. The result is a hyper-reflective wet-look gloss, remarkable water contact angles, and effortless washing characteristics. Durability and ongoing protection depend on surface preparation, adherence to manufacturer curing schedules, environmental exposure, and proper pH-neutral maintenance washing routines.",
    image: "/images/services/graphene-coating.webp",
    benefits: [
      "High contact angle hydrophobicity delivering rapid water sheeting and self-cleaning behavior",
      "Superior thermal dissipation properties that help mitigate mineral water-spot etching",
      "Deep, glass-like reflective depth and unmatched slickness to the touch",
      "Chemical resistance against aggressive environmental fallout, bird droppings, and tree sap",
      "Simplifies routine maintenance, reducing wash times and minimizing the risk of wash-induced swirls",
    ],
    included: [
      "Intensive exterior decontamination wash, chemical fallout remover, and clay bar treatment",
      "Single to multi-stage machine polishing to enhance paint clarity and reflectivity",
      "Complete panel wipe using isopropyl alcohol solvent to ensure a grease-free bonding surface",
      "Hand application of professional-grade graphene coating across all painted body panels",
      "Coating of exterior plastics, headlights, and front-facing trim components",
      "Controlled infrared (IR) heat curing adhering strictly to product-specific cure cycles",
    ],
    process: [
      {
        title: "Surface Preparation",
        description: "Multi-stage decontamination wash and clay bar to remove all bonded fallout and contaminants.",
      },
      {
        title: "Paint Enhancement",
        description: "Machine polishing to level minor blemishes and optimize clear coat clarity for bonding.",
      },
      {
        title: "Graphene Application",
        description: "Precise hand application in overlapping cross-hatch sections with timed flash-off leveling.",
      },
      {
        title: "Controlled Curing",
        description: "Studio dwell time and infrared heat curing to complete initial cross-linking before vehicle release.",
      },
    ],
    recommendedFor:
      "Owners seeking cutting-edge surface protection with superior water-spot resistance, deep gloss, and reduced maintenance effort under demanding climate conditions.",
    faqs: [
      {
        question: "How does graphene coating differ from traditional ceramic coating?",
        answer:
          "While ceramic coatings rely primarily on silicon dioxide (SiO2), graphene coatings incorporate reduced graphene oxide into the nano-matrix. Graphene provides natural thermal dissipation properties that help reduce clear coat surface temperatures in Hyderabad's intense summer sun, substantially lowering the incidence of stubborn mineral water-spot etching while delivering an ultra-slick, glossy finish.",
      },
      {
        question: "How long does graphene coating last on a vehicle?",
        answer:
          "The durability of a graphene coating depends on the specific formulation applied, proper paint preparation, studio curing cycles, and how the vehicle is maintained afterwards. With regular pH-neutral hand washing and bi-annual maintenance check-ups at the studio, graphene protection delivers long-lasting hydrophobic defense and deep gloss over an extended multi-year service life.",
      },
      {
        question: "What care is required after getting graphene coating installed?",
        answer:
          "Following application, the vehicle must be kept dry during the initial 48-hour cure period. Ongoing maintenance requires washing every one to two weeks with dedicated pH-neutral automotive shampoo and clean microfiber wash mitts. Avoid automatic scratch-inducing roller car washes, abrasive polishes, and harsh alkaline detergents to preserve the coating's hydrophobic properties.",
      },
      {
        question: "Is machine paint correction required before applying graphene coating?",
        answer:
          "Yes. Graphene coatings create a semi-permanent bond directly with the clear coat. Any swirl marks, oxidation, water spots, or micro-scratches left on the surface would be sealed beneath the protective glass layer. We perform multi-stage machine polishing prior to coating application to ensure optical paint clarity and maximum chemical adhesion.",
      },
    ],
  },
  {
    id: "ceramic-coating",
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    metaTitle: "Ceramic Coating in Hyderabad | CARBON",
    metaDescription:
      "Long-lasting nano-ceramic coating offering candy-like gloss, UV protection, and hydrophobic defense in Hyderabad. Schedule your car inspection with us.",
    tagline: "Durable nano-ceramic liquid glass shield providing candy-like gloss and chemical resistance.",
    shortDescription:
      "A durable protective coating that enhances paint gloss, adds a slick finish, and helps resist environmental contaminants. Keep your vehicle looking refined with easier cleaning and maintenance.",
    description:
      "Ceramic Coating is an established standard in high-end automotive surface protection. Utilizing advanced silicon dioxide (SiO2) nanotechnology, the liquid coating chemically bonds with the vehicle's factory clear coat, curing into a semi-permanent sacrificial glass shield. Prior to application, the paint undergoes thorough surface decontamination and optional machine polishing to remove swirl marks, haze, and oxidation, ensuring the optical clarity beneath the coating is flawless. Once cured, ceramic coating shields the paint from UV oxidation, bird droppings, acid rain, and road film, while imparting a rich candy-like depth and intense hydrophobic behavior that keeps your vehicle cleaner for longer between washes.",
    image: "/images/services/ceramic-coating.webp",
    benefits: [
      "Sacrificial barrier protecting factory clear coat from environmental fallout",
      "Intense candy-like gloss, optical clarity, and color depth that enhances paintwork",
      "High hydrophobicity causing water and contaminants to bead and slide effortlessly off surfaces",
      "UV protection guarding against clear coat oxidation, premature aging, and fading",
      "Low surface energy making routine maintenance washes substantially faster and safer",
    ],
    included: [
      "Comprehensive multi-step exterior wash and iron fallout dissolution",
      "Mechanical clay bar treatment to remove embedded industrial fallout",
      "Paint enhancement / machine polishing to eliminate light swirls and maximize gloss",
      "Solvent panel wipe to inspect clear coat and ensure optimal coating bonding",
      "Multi-panel hand application and leveling of premium nano-ceramic coating",
      "Ceramic coating of external plastics, wheel faces, and glass surfaces",
      "Climate-controlled initial curing period under studio inspection lights",
    ],
    process: [
      {
        title: "Decontamination",
        description: "Thorough multi-stage stripping wash and clay bar decontamination to purify the clear coat.",
      },
      {
        title: "Machine Polishing",
        description: "Precision machine refinement to eliminate swirls, light scratches, and haze.",
      },
      {
        title: "Ceramic Bonding",
        description: "Careful hand-leveling of nano-ceramic SiO2 coating across all exterior painted surfaces.",
      },
      {
        title: "Cure & Verification",
        description: "Controlled temperature curing and 360-degree LED inspection before customer handover.",
      },
    ],
    recommendedFor:
      "Brand-new vehicles preserving factory paint integrity, pre-owned cars seeking gloss enhancement, and discerning owners wanting long-lasting gloss with easy maintenance.",
    faqs: [
      {
        question: "Is ceramic coating scratch-proof and permanent?",
        answer:
          "No automotive coating is completely scratch-proof or permanent. Ceramic coating creates a durable, sacrificial nano-ceramic glass layer that resists micro-marring, chemical etching, bird droppings, and UV oxidation. However, it will not prevent heavy rock chips or intentional abrasive damage. Longevity is long-lasting when supported by regular pH-neutral washing and periodic maintenance inspections.",
      },
      {
        question: "Can ceramic coating be applied to brand-new cars?",
        answer:
          "Applying ceramic coating immediately after taking delivery of a new car in Hyderabad is ideal. Factory clear coats are fresh and unweathered, minimizing the polishing required. Installing ceramic protection early seals the pristine factory finish against industrial fallout, harsh sun, and road grime from day one.",
      },
      {
        question: "How long does ceramic coating installation take at the studio?",
        answer:
          "A professional ceramic coating installation typically requires two to three days. Day one focuses on multi-stage decontamination and machine paint correction under LED inspection lighting. The coating is then hand-applied in controlled environments and allowed to cure under infrared lamps and studio dwell times to ensure proper cross-linking before release.",
      },
      {
        question: "What factors influence the cost of ceramic coating?",
        answer:
          "The investment depends on vehicle dimensions, clear coat paint condition, the level of machine correction required to remove preexisting swirls, and the number of exterior surfaces coated (such as paint, wheels, trim, and glass). We provide individualized vehicle inspections at our Jubilee Hills studio to offer an accurate, transparent quotation.",
      },
    ],
  },
  {
    id: "ppf",
    slug: "ppf",
    title: "Paint Protection Film (PPF)",
    metaTitle: "Paint Protection Film in Hyderabad | CARBON",
    metaDescription:
      "Optically clear, self-healing TPU paint protection film shielding your luxury car from stone chips and scratches in Hyderabad. Book a consultation today.",
    tagline: "Optically clear, self-healing polyurethane armor shielding your paint from stone chips and road debris.",
    shortDescription:
      "A transparent protective film designed to help shield your vehicle's paint from stone chips, minor scratches, road debris, and everyday wear. Preserve your original paint while maintaining its factory appearance.",
    description:
      "Paint Protection Film (PPF) is the definitive physical barrier engineered to protect your vehicle's factory paintwork against real-world driving conditions. Constructed from advanced high-tensile thermoplastic polyurethane (TPU), the film provides robust impact absorption against airborne stone chips, highway gravel, road salt, bug splatter, and minor surface abrasions. The top layer features advanced elastomeric polymers that self-heal light swirl marks and fine scratches when exposed to natural ambient heat or warm water. Every installation begins with a rigorous paint inspection and panel prep, utilizing precision computer-cut templates or custom bespoke bulk wrapping with tucked edges for a near-invisible finish. While PPF offers superior protection against standard road debris and daily driving hazards, it is designed to mitigate impacts rather than guarantee absolute invulnerability against severe collisions.",
    image: "/images/services/ppf.webp",
    benefits: [
      "High impact resistance shielding vulnerable paintwork from high-speed stone chips and gravel",
      "Self-healing elastomeric topcoat that erases fine swirl marks and light scratches with heat",
      "Optically transparent finish that preserves the exact factory depth, color, and metallic sparkle",
      "Stain, chemical, and UV resistance preventing premature paint discoloration and yellowing",
      "Edge-wrapped installation methodology wherever panel gaps permit for a seamless appearance",
    ],
    included: [
      "Full vehicle exterior wash, iron chemical decontamination, and surface claying",
      "Pre-installation single-stage polish to ensure clear coat perfection beneath the film",
      "Computer-aided precision template plotting or bespoke custom panel cut pattern selection",
      "Dust-controlled bay installation using specialized slip and tack solutions",
      "Edge wrapping around hood corners, fenders, door edges, and bumper recesses",
      "Post-installation heat setting, seam inspection, and final quality control check",
    ],
    process: [
      {
        title: "Paint Inspection & Prep",
        description: "Meticulous surface decontamination and gloss refinement under specialized studio lighting.",
      },
      {
        title: "Template Alignment",
        description: "Digital design plotting or bespoke custom wrapping mapped to exact vehicle body lines.",
      },
      {
        title: "Precision Installation",
        description: "Dust-free application in dedicated bays with specialized squeegeeing to prevent silvering.",
      },
      {
        title: "Edge Wrapping & Cure",
        description: "Tucking edges into panel gaps, followed by post-heating and inspection for zero lifting.",
      },
    ],
    recommendedFor:
      "New luxury vehicles, sports cars, highway commuters, and any vehicle owner seeking the highest level of physical protection against stone chips and road hazards.",
    faqs: [
      {
        question: "How does Paint Protection Film (PPF) compare to ceramic coating?",
        answer:
          "PPF provides physical impact defense. Made from high-tensile thermoplastic polyurethane (TPU), it absorbs high-speed gravel, stone chips, scratches, and parking scuffs that liquid coatings cannot stop. Ceramic coating provides chemical resistance, gloss, and water beading. Many owners combine both by applying ceramic coating over PPF for the ultimate combination of impact armor and self-cleaning gloss.",
      },
      {
        question: "How does the self-healing technology in PPF work?",
        answer:
          "Modern high-grade TPU films feature an elastomeric polymer topcoat with shape-memory properties. When fine scratches, wash swirls, or micro-abrasions occur on the surface, exposure to ambient heat—such as Hyderabad's afternoon sunlight or warm water—relaxes the polymer chains back into their original smooth structure, making light scratches vanish.",
      },
      {
        question: "Will PPF yellow, peel, or damage factory paint upon removal?",
        answer:
          "High-quality aliphatic TPU films formulated with advanced UV stabilizers do not yellow prematurely under harsh sunlight. When professionally installed with tucked edges in dust-controlled bays and maintained properly, PPF can be cleanly removed years later without lifting factory clear coat, preserving the original vehicle paintwork underneath.",
      },
      {
        question: "How long does a full PPF installation take?",
        answer:
          "A full-body PPF installation typically requires three to five business days. This timeframe covers detailed surface decontamination, pre-installation polish, precision computer-cut plotting or bespoke hand-wrapping around edge borders, and a mandatory post-installation settling inspection to verify that all seams remain perfectly bonded.",
      },
    ],
  },
  {
    id: "color-ppf",
    slug: "color-ppf",
    title: "Color PPF",
    metaTitle: "Color PPF in Hyderabad | CARBON",
    metaDescription:
      "Transform your vehicle with protective high-gloss or satin color paint protection film that shields factory paint in Hyderabad. Request your quote today.",
    tagline: "Bespoke styling and personalized aesthetics combined with authentic protective film durability.",
    shortDescription:
      "Transform your vehicle's appearance with colored paint protection film that combines a fresh visual identity with a protective layer. Explore bold colors and sophisticated finishes while helping protect the underlying paint.",
    description:
      "Color PPF bridges the gap between vibrant vehicle styling and the heavy-duty physical defense of authentic thermoplastic polyurethane protection film. Unlike thin traditional films that offer minimal impact resistance, Color PPF features full-thickness TPU construction with self-healing properties, UV blockers, and deep color saturation free of orange-peel texture. Available in a curated spectrum of finishes—including ultra-high gloss, stealth satin, deep metallics, and bespoke tones—it allows you to redefine your vehicle's visual identity while safeguarding the original factory paint beneath. The transformation is completely reversible, preserving the resale value and untouched condition of your original clear coat.",
    image: "/images/services/color-ppf.webp",
    benefits: [
      "Striking visual transformation with the clarity, depth, and mirror reflection of OEM-grade paint",
      "Genuine full-thickness TPU film providing robust stone chip and scratch protection",
      "Self-healing topcoat technology that clears minor wash swirls and scuffs with ambient heat",
      "100% reversible installation that shields and preserves the factory clear coat underneath",
      "Variety of finishes available including high-gloss solid colors, satin stealth, and metallic tones",
    ],
    included: [
      "In-studio color and finish consultation exploring gloss, satin, and metallic selections",
      "Full exterior strip wash, chemical iron removal, and mechanical decontamination",
      "Careful disassembly of non-structural components (emblems, lights, trim) for seamless edge tucking",
      "Full-body precision installation of selected colored paint protection film",
      "Deep edge wrapping into door apertures, panel seams, and bumper recesses",
      "Thermal post-heating cycle and 24-hour settling inspection before client handover",
    ],
    process: [
      {
        title: "Consultation & Selection",
        description: "Choosing the exact color palette, metallic flake density, or stealth satin finish for your vehicle.",
      },
      {
        title: "Vehicle Prep & Teardown",
        description: "Purification wash, decontamination, and safe removal of badges and trims for flush coverage.",
      },
      {
        title: "Color Film Installation",
        description: "Tension-balanced wet installation ensuring uniform color distribution without stretching distortion.",
      },
      {
        title: "Edge Sealing & Inspection",
        description: "Post-heating all wrapped borders and inspecting under multi-angle studio lighting.",
      },
    ],
    recommendedFor:
      "Automotive enthusiasts wanting a custom, head-turning color change combined with real stone-chip protection and reversible factory paint preservation.",
    images: [
      {
        src: "/images/services/color-ppf.webp",
        alt: "Bespoke color PPF application combining color transformation with TPU protection",
        caption: "Color PPF Transformation",
      },
      {
        src: "/services/color-ppf/color-ppf-2.webp",
        alt: "Full vehicle body coverage in high-gloss color paint protection film",
        caption: "Deep Gloss Finish & Seamless Edge Wrap",
      },
    ],
    faqs: [
      {
        question: "What is the difference between Color PPF and conventional styling films?",
        answer:
          "Conventional PVC styling films are thin cosmetic layers designed solely for aesthetic changes, offering minimal stone-chip defense and often showing orange-peel texture. Color PPF is authentic thermoplastic polyurethane (TPU) infused with rich pigments. It delivers genuine impact protection, self-healing properties, and deep paint-like gloss without orange peel, combining aesthetic customization with heavy-duty defense.",
      },
      {
        question: "Can Color PPF be removed without harming the original paint?",
        answer:
          "Yes. Color PPF utilizes automotive-safe acrylic adhesives engineered for clean long-term reversibility on sound factory paint finishes. When you decide to change styles or restore the original vehicle appearance, the film can be removed without leaving stubborn adhesive residue or damaging the underlying factory clear coat.",
      },
      {
        question: "How do I maintain and wash a car protected with Color PPF?",
        answer:
          "Maintenance is straightforward and similar to clear PPF. Wash the car weekly or bi-weekly using clean microfiber wash mitts and dedicated pH-neutral car wash soap. Avoid harsh petroleum-based solvent cleaners, automatic brush car washes, and placing high-pressure water nozzles too close to wrapped panel seams.",
      },
      {
        question: "What finishes and colors are available in Color PPF?",
        answer:
          "Color PPF is available in an extensive spectrum of finishes, including ultra-deep high-gloss solid tones, metallic and pearlescent finishes, stealth satin, and matte textures. During your studio consultation, our team will showcase physical sample swatches under true-color inspection lighting to help select the perfect aesthetic match for your vehicle.",
      },
    ],
  },
  {
    id: "sun-films",
    slug: "sun-films",
    title: "Sun Films",
    metaTitle: "Sun Films in Hyderabad | CARBON",
    metaDescription:
      "High-rejection nano-ceramic automotive window films reducing solar heat and UV radiation for driving comfort in Hyderabad. Schedule your consultation.",
    tagline: "Advanced nano-ceramic automotive window films for solar rejection, UV defense, and cabin comfort.",
    shortDescription:
      "Upgrade cabin comfort and privacy with automotive window films selected for your vehicle. Depending on the film specification, enjoy reduced solar heat and glare, UV protection, and a cleaner, more refined appearance. All installations must comply with applicable Indian vehicle-window tint regulations.",
    description:
      "Our Sun Films service provides premium automotive window films specifically engineered to elevate cabin comfort, reduce glare, and protect vehicle interiors from the harsh tropical sun. Utilizing advanced nano-ceramic and infrared-rejecting technology, these films reject a substantial portion of solar heat without relying on illegal dark dyes. The non-metallized construction ensures zero interference with electronic systems including GPS, cellular signals, and RFID toll tags. Depending on film specification, occupants enjoy up to 99% UV radiation blocking—preventing leather upholstery fading and dashboard cracking while minimizing eye fatigue during daytime driving. All film recommendations and installations are executed with strict adherence to applicable Indian vehicle-window tint regulations, balancing optical transparency, legal compliance, and thermal comfort.",
    image: "/images/services/sun-films.webp",
    benefits: [
      "Blocks up to 99% of harmful UV radiation, protecting occupants' skin and interior leather/dash trims",
      "Substantial infrared heat reduction, significantly lowering cabin temperatures in direct sunlight",
      "Reduces harsh sun glare and headlight reflection for improved driving clarity and comfort",
      "Non-metallic nano-ceramic construction with zero interference with mobile, GPS, or RFID systems",
      "Installed in full alignment with applicable Indian motor vehicle glass transparency regulations",
    ],
    included: [
      "Detailed film consultation reviewing thermal rejection specs and regulatory transparency guidelines",
      "Multi-stage mechanical glass cleaning and micro-particulate scraping on all window panes",
      "Exterior precision heat shrinking for seamless, bubble-free contouring on curved glass",
      "Interior slip installation performed in a dedicated low-dust detailing bay",
      "Micro-edge shaved finishing along frameless or roll-down window top edges",
      "Post-installation moisture check and curing guidelines",
    ],
    process: [
      {
        title: "Glass Preparation",
        description: "Deep mechanical scrubbing and blade decontamination of interior and exterior glass.",
      },
      {
        title: "Thermal Contouring",
        description: "Heat-shrinking the film on the glass exterior to mirror exact curvature and eliminate tension.",
      },
      {
        title: "Clean Room Application",
        description: "Slip installation on interior glass using filtered solutions and precision squeegeeing.",
      },
      {
        title: "Edge Finishing",
        description: "Micro-edge shaving and heat-setting of all borders for a clean, factory-like aesthetic.",
      },
    ],
    recommendedFor:
      "Vehicle owners seeking relief from solar heat, protection against leather fading and interior cracking, and reduced driving glare while remaining compliant with vehicle tint regulations.",
    faqs: [
      {
        question: "How do automotive sun films reduce cabin heat?",
        answer:
          "Advanced nano-ceramic window films incorporate microscopic ceramic nanoparticles that specifically target and reject infrared heat waves—the primary source of thermal solar energy. By rejecting significant infrared radiation and blocking 99% of harmful ultraviolet rays, the film keeps cabin temperatures noticeably cooler and reduces air conditioning load without requiring dark illegal tints.",
      },
      {
        question: "What are the legal regulations regarding vehicle window films in India?",
        answer:
          "Automotive window tint installations in India are subject to Central Motor Vehicle Rules (CMVR) and relevant Supreme Court directives concerning glass transparency and safety standards. Our studio specialists will guide you through compliant film choices, ensuring your installation balances thermal heat reduction, driving visibility, and regulatory adherence.",
      },
      {
        question: "Will nano-ceramic sun film interfere with GPS, mobile, or FASTag signals?",
        answer:
          "No. Unlike older metallic or sputtered window films that can block electromagnetic frequencies, modern nano-ceramic sun films are completely non-metallic. They do not cause interference with mobile reception, GPS navigation, satellite radio, or FASTag toll transponders mounted on your windshield.",
      },
      {
        question: "How long does sun film installation take, and what is the post-care?",
        answer:
          "A full window film installation usually takes three to five hours in our dedicated dust-controlled bay. After installation, we advise keeping windows rolled up for 48 to 72 hours to allow the mounting moisture to evaporate completely. Clean the interior glass using only soft microfiber towels and ammonia-free glass cleaners.",
      },
    ],
  },
  {
    // TODO(owner): Review and approve drafted copy for Car Wrapping
    id: "car-wrapping",
    slug: "car-wrapping",
    title: "Car Wrapping",
    metaTitle: "Car Wrapping in Hyderabad | CARBON",
    metaDescription:
      "Premium full-body vinyl car wrapping, custom accents, and bespoke colors in Hyderabad. Inquire at CARBON - The Detailing Studio.",
    tagline: "Bespoke color transformation and aesthetic customization with premium cast vinyl films.",
    shortDescription:
      "Transform your vehicle's identity with precision cast vinyl wraps. Choose from ultra-gloss, stealth satin, brushed metallic, or bespoke design accents while fully preserving factory paint.",
    description:
      "Our Car Wrapping service at CARBON - The Detailing Studio delivers complete aesthetic personalization engineered to the highest automotive standards. Using premium multi-layer cast vinyl from global leaders such as 3M, Avery Dennison, and Inozetek, our wrap technicians redefine your vehicle's color palette with showroom-level gloss, stealth satin, deep matte, or metallic textures. Unlike cosmetic roadside jobs, every wrap at CARBON begins with exhaustive surface decontamination, multi-stage paint cleansing, and careful removal of badges, lights, and non-structural exterior trim to allow seamless deep edge tucking. This meticulous edge-wrapping technique eliminates visible factory paint seams around door apertures, hood margins, and bumper recesses, ensuring the finished result resembles a factory-sprayed bespoke finish rather than a temporary sticker. Beyond visual impact, cast vinyl serves as an effective barrier against sun fading, minor swirl marks, bird droppings, and superficial road abrasion. Crucially, the process is 100% reversible; high-grade automotive adhesives release cleanly without leaving stubborn residue or compromising factory clear coats, preserving your vehicle's resale value and underlying OEM finish.",
    image: "/images/services/car-wrapping.webp",
    benefits: [
      "Complete reversible color transformation preserving original factory paint underneath",
      "Expansive selection of finishes including ultra-gloss, stealth satin, matte, and metallic",
      "UV-stable multi-layer cast vinyl providing defense against sun fading and minor road abrasions",
      "Precision edge wrapping around panel gaps, door shuts, and trim borders for an OEM look",
      "Protects original clear coat against light swirl marks, bird droppings, and tree sap",
    ],
    included: [
      "In-studio color swatch consultation under true-color LED lighting",
      "Full exterior decontamination wash, clay bar purification, and solvent panel wipe",
      "Safe disassembly of emblems, lamps, and exterior moldings for seamless border tucking",
      "Full-body panel-by-panel tension-balanced vinyl application in dust-controlled bays",
      "Precision edge trimming and post-heat cycle stabilization (90°C+ thermal edge sealing)",
      "Reassembly, torque check of components, and final 24-hour settling inspection",
    ],
    process: [
      {
        title: "Consultation & Swatch Selection",
        description: "Review physical film swatches, finishes, and accent combinations under studio inspection lighting.",
      },
      {
        title: "Decontamination & Teardown",
        description: "Intensive foam wash, iron dissolution, clay bar treatment, and trim disassembly for deep edge access.",
      },
      {
        title: "Precision Wrap Application",
        description: "Hand-laid cast vinyl installation in climate-controlled bays with zero-stretch distortion across body curves.",
      },
      {
        title: "Thermal Edge Setting",
        description: "Post-heating all wrapped margins with digital temperature regulation to lock adhesive memory.",
      },
    ],
    recommendedFor:
      "Owners seeking a bold, distinctive color change, matte or satin restyling, or commercial luxury branding while keeping factory paint intact and reversible.",
    images: [
      {
        src: "/images/services/car-wrapping.webp",
        alt: "Full-body luxury car vinyl wrap transformation at CARBON - The Detailing Studio",
        caption: "Bespoke Cast Vinyl Color Change",
      },
      {
        src: "/gallery/gallery-14.webp",
        alt: "Custom color vinyl application with seamless edge tucking in Hyderabad",
        caption: "Precision Edge-Tucked Finish",
      },
    ],
    faqs: [
      {
        question: "How long does a full vehicle vinyl wrap last in Hyderabad?",
        answer:
          "High-grade cast vinyl films installed at CARBON typically last between 3 to 5 years when properly maintained. In Hyderabad's sunny climate, regular hand washing with pH-neutral shampoo and parking in shaded or indoor areas helps maximize film longevity and prevents premature UV degradation.",
      },
      {
        question: "Will car wrapping damage my vehicle's original factory paint?",
        answer:
          "No. Premium cast vinyl wraps utilize automotive-specific acrylic adhesives engineered for safe, clean removal on sound OEM paint. When removed professionally, the film leaves no adhesive residue and leaves the underlying factory clear coat in its preserved original state.",
      },
      {
        question: "Can I ceramic coat over a vinyl wrap?",
        answer:
          "Yes. Applying a specialized vinyl-safe ceramic coating over your wrap enhances hydrophobicity, makes washing significantly easier, prevents staining from road grime and bird droppings, and extends the visual lifespan of both gloss and satin wrap finishes.",
      },
      {
        question: "How long does a full vehicle wrap installation take?",
        answer:
          "A comprehensive full-body vehicle wrap generally requires 4 to 6 business days. This timeframe covers multi-stage exterior decontamination, careful trim teardown, panel-by-panel application, edge post-heating, reassembly, and overnight settling inspection.",
      },
    ],
  },
  {
    // TODO(owner): Review and approve drafted copy for Body Kits & Aero
    id: "bodykits",
    slug: "bodykits",
    title: "Body Kits & Aero",
    metaTitle: "Body Kits & Aerodynamics in Hyderabad | CARBON",
    metaDescription:
      "Precision carbon fiber aero styling, splitters, diffusers, and widebody installations in Hyderabad. Consult with CARBON Studio.",
    tagline: "Aggressive styling and engineered aerodynamic enhancements crafted from carbon fiber and high-grade composites.",
    shortDescription:
      "Elevate your vehicle's road presence and aerodynamic efficiency with premium front splitters, rear diffusers, side skirts, ducktail spoilers, and widebody styling packages.",
    description:
      "The Body Kits & Aerodynamics service at CARBON - The Detailing Studio brings motorsport-inspired road presence and authentic composite craftsmanship to luxury, performance, and sports vehicles. We source and install world-class aerodynamic packages crafted from pre-preg dry carbon fiber, wet carbon composites, and high-impact polyurethane from respected global tuners. Whether you are looking for subtle OEM+ enhancements—such as a front bumper splitter, carbon mirror caps, side skirt extensions, and a rear trunk spoiler—or complete widebody conversions with aggressive rear diffusers, our master technicians ensure uncompromising precision. Every aerodynamic component undergoes dry test-fitting before final installation, verifying millimeter-accurate panel gap alignment, uniform shut lines, and structural rigidity. Custom bracketry, stainless-steel fasteners, and structural automotive bonding agents are utilized to ensure all aerodynamic elements withstand high-speed highway airflow without vibration, detachment, or paint damage. All composite components can be paired with Paint Protection Film (PPF) or nano-ceramic coatings to safeguard delicate carbon fiber weaves against stone chips, rock fragments, and clear coat UV yellowing.",
    image: "/images/services/bodykits.webp",
    benefits: [
      "Authentic pre-preg carbon fiber, forged composite, and high-tensile polyurethane hardware",
      "Engineered aerodynamic downforce management reducing high-speed vehicle lift",
      "Millimeter-accurate dry test fitting ensuring factory-level panel gap integration",
      "Corrosion-resistant stainless fasteners and structural automotive bonding methodology",
      "Optional PPF and ceramic protection for delicate exposed carbon fiber weaves",
    ],
    included: [
      "Aerodynamic consultation and digital styling catalog review for your vehicle make and model",
      "Dry-fitting alignment check evaluating bumper contours, mounting points, and panel clearances",
      "Professional surface preparation and non-invasive structural mounting bracket installation",
      "Precision torque fastening with vibration-dampening hardware and automotive sealants",
      "Integration of sensor cutouts, radar apertures, and parking camera alignments",
      "High-speed structural rigidity verification and multi-point handover inspection",
    ],
    process: [
      {
        title: "Styling Consultation",
        description: "Evaluating compatible aero kits, carbon fiber weave styles (twill vs forged), and fitment parameters.",
      },
      {
        title: "Dry Test Alignment",
        description: "Pre-mounting all splitters, diffusers, and skirts to verify exact panel gaps and contour symmetry.",
      },
      {
        title: "Structural Installation",
        description: "Securing components with stainless fasteners, OEM clip points, and high-shear bonding compounds.",
      },
      {
        title: "Finishing & Alignment Check",
        description: "Re-calibrating parking sensors, testing high-speed clearance, and applying protective finishing coats.",
      },
    ],
    recommendedFor:
      "Sports coupes, luxury performance sedans, and high-end SUVs seeking an aggressive road stance, aerodynamic stability, and bespoke carbon fiber craftsmanship.",
    images: [
      {
        src: "/images/services/bodykits.webp",
        alt: "Custom carbon fiber body kit and aerodynamic splitter installation on performance coupe",
        caption: "Pre-Preg Carbon Fiber Aero Package",
      },
      {
        src: "/gallery/gallery-7.webp",
        alt: "Performance aerodynamic styling and bodykit fitment at CARBON studio Hyderabad",
        caption: "Precision Splitter & Diffuser Fitment",
      },
    ],
    faqs: [
      {
        question: "Does installing a body kit void my vehicle manufacturer warranty?",
        answer:
          "Cosmetic and aerodynamic exterior bolt-on components installed professionally without structural chassis cutting or electrical splicing typically do not void factory mechanical or powertrain warranties. During consultation, our specialists review your vehicle's warranty status to recommend fully compliant, non-invasive mounting solutions.",
      },
      {
        question: "What is the difference between dry carbon and wet carbon fiber?",
        answer:
          "Dry carbon fiber (pre-preg) is cured under intense heat and pressure inside an autoclave, producing an ultra-lightweight, exceptionally rigid component with an air-bubble-free weave pattern. Wet carbon uses resin poured manually over fiber sheets; it offers striking visual appeal at a lower price point but carries slightly more weight.",
      },
      {
        question: "Will front splitters or low body kits scrape on Hyderabad speed breakers?",
        answer:
          "We carefully assess your vehicle's ride height, suspension travel, and local road conditions before recommending specific aero heights. For aggressive low-stance packages, we provide reinforced skid plates or advise on suspension lift compatibility to ensure trouble-free daily drivability.",
      },
      {
        question: "Can carbon fiber body kits be protected with Paint Protection Film (PPF)?",
        answer:
          "Yes. Front splitters, side skirts, and mirrors are vulnerable to high-speed road debris. We highly recommend wrapping exposed carbon fiber parts in clear TPU PPF to shield the clear resin from rock chips, surface cracking, and UV degradation.",
      },
    ],
  },
  {
    // TODO(owner): Review and approve drafted copy for Car Restoration
    id: "restoration",
    slug: "restoration",
    title: "Car Restoration",
    metaTitle: "Car Restoration in Hyderabad | CARBON",
    metaDescription:
      "Complete classic, modern-classic, and vintage automotive restoration in Hyderabad. Mechanical and aesthetic rebuilds at CARBON.",
    tagline: "Comprehensive preservation, nut-and-bolt revival, and heritage detailing for timeless automotive icons.",
    shortDescription:
      "Bespoke restoration services bringing vintage, classic, and collector automobiles back to pristine showroom glory with period-correct craftsmanship.",
    description:
      "The Car Restoration program at CARBON - The Detailing Studio is dedicated to the preservation, revival, and rejuvenation of historic, vintage, and modern-classic automobiles. Every classic automobile represents a unique chapter in automotive design and engineering history. Our master restoration craftsmen take a preservation-first philosophy, combining archival research, traditional metalcraft, and cutting-edge detailing science to return beloved vehicles to museum-grade condition. The restoration scope can range from comprehensive aesthetic revivals—including multi-stage paint rejuvenation, chrome brightwork restoration, and interior leather hide reconditioning—to complete bare-metal teardowns, corrosion remediation, electrical harness rebuilding, and suspension overhauls. We specialize in sourcing authentic period-correct hardware, trim moldings, and materials from global heritage specialist networks. Metal panels with surface corrosion are meticulously treated and leveled using lead-loading or metal-finishing techniques before receiving multiple coats of epoxy primer and period-matched polyurethane paint. Inside the cabin, dried or cracked vintage leather is conditioned or faithfully re-trimmed with authentic grain patterns and hand-stitching. The completed restoration preserves mechanical authenticity, elevates functional reliability, and revitalizes the timeless elegance of your historic automobile for generations to come.",
    image: "/images/services/restoration.webp",
    benefits: [
      "Preservation-first methodology prioritizing authentic period-correct restoration standards",
      "Bare-metal rust remediation, structural sheet-metal leveling, and epoxy sealing",
      "Hand-matched period-accurate paint refinishing with deep optical clarity",
      "Vintage leather hide rejuvenation, carpet replacement, and hand-stitched upholstery",
      "Brightwork restoration including multi-step brass, nickel, and chrome mirror polishing",
    ],
    included: [
      "Comprehensive archival vehicle inspection, structural assessment, and photo cataloging",
      "Gentle disassembly, cataloging, and secure climate-controlled storage of original components",
      "Ultrasonic cleansing and mechanical restoration of brightwork, trim, and fasteners",
      "Corrosion elimination and lead-free bodywork leveling under specialized lighting",
      "Multi-stage period-matched paint refinishing in our climate-controlled heated spray booth",
      "Interior cabin rejuvenation using authentic leather nourishment and period-correct fabrics",
      "Final mechanical road testing, electrical diagnostics, and collector handover portfolio",
    ],
    process: [
      {
        title: "Archival Assessment",
        description: "Detailed multi-point structural inspection, historical documentation, and restoration blueprinting.",
      },
      {
        title: "Disassembly & Preservation",
        description: "Careful component labeling, cataloging, and ultrasonic purification of delicate vintage parts.",
      },
      {
        title: "Metalwork & Paint Rebuild",
        description: "Remediating corrosion, epoxy priming, and laying multi-stage period-matched clear coats.",
      },
      {
        title: "Reassembly & Heritage Detailing",
        description: "Re-trimming interior leathers, polishing brightwork, and completing comprehensive road calibration.",
      },
    ],
    recommendedFor:
      "Collectors, enthusiasts, and custodians of vintage, classic, and modern-classic automobiles seeking authentic craftsmanship and long-term investment preservation.",
    images: [
      {
        src: "/images/services/restoration.webp",
        alt: "Classic Ferrari surface refinement and heritage restoration at CARBON studio",
        caption: "Classic Heritage Paint Refinement",
      },
      {
        src: "/gallery/gallery-6.webp",
        alt: "Vintage automobile detailing and surface revival in Hyderabad",
        caption: "Comprehensive Historic Rejuvenation",
      },
    ],
    faqs: [
      {
        question: "How long does a classic car restoration take at CARBON?",
        answer:
          "Restoration timelines depend heavily on vehicle condition, parts availability, and the chosen scope of work. Aesthetic detailing and paint rejuvenations typically require 2 to 4 weeks, whereas complete frame-on or nut-and-bolt restorations can span 3 to 9 months of dedicated, meticulous craftsmanship.",
      },
      {
        question: "Do you maintain period authenticity during the restoration?",
        answer:
          "Yes. Our philosophy emphasizes period-correct authenticity. We research original factory build sheets, color codes, stitch patterns, and finishes to ensure your restored automobile retains its collector integrity and historical pedigree.",
      },
      {
        question: "Can modern protective films (PPF) be applied to a freshly restored classic car?",
        answer:
          "Once new paintwork has fully cured (typically 30 to 45 days after baking in our booth), modern optically clear TPU Paint Protection Film can be custom-installed on vulnerable front-end panels to protect your restored collector finish from stone chips and road debris.",
      },
      {
        question: "How do I get an estimate for a restoration project?",
        answer:
          "Due to the unique requirements of vintage and historic vehicles, we conduct an in-person vehicle examination at our Jubilee Hills studio or arrange a secure flatbed inspection to provide a structured, transparent milestone-based estimate.",
      },
    ],
  },
  {
    // TODO(owner): Review and approve drafted copy for Paint Refinishing
    id: "paint-refinishing",
    slug: "paint-refinishing",
    title: "Paint Refinishing",
    metaTitle: "Paint Refinishing in Hyderabad | CARBON",
    metaDescription:
      "Precision factory-grade paint refinishing, panel respray, and color matching in Hyderabad. Schedule inspection at CARBON.",
    tagline: "Computerized color-matching and down-draft heated booth refinishing restoring flawless clear coat depth.",
    shortDescription:
      "Factory-calibrated automotive paint respray, spot repairs, and clear coat restoration executed in dedicated heated down-draft spray environments.",
    description:
      "Our Paint Refinishing service at CARBON - The Detailing Studio provides factory-level panel respraying, color-blending, and scratch remediation engineered to eliminate visible repairs. When road debris, deep key scratches, parking scrapes, or clear coat oxidation penetrate beyond the safe depth of machine polishing, professional paint refinishing becomes essential. Our studio is equipped with computerized spectrophotometer color analysis technology that reads your vehicle's exact paint pigmentation, metallic flake density, and clear coat depth, accounting for natural sun aging and paint batch variances. Refinishing is executed in an advanced sealed down-draft spray booth equipped with positive air filtration to prevent airborne dust contamination. We exclusively use premium automotive polyurethane paint systems, OEM-approved basecoats, and ultra-high-solid (UHS) scratch-resistant clear coats that replicate the exact factory orange-peel texture and gloss depth of European, Japanese, and American luxury marques. After application, components undergo controlled infrared baking cycles that achieve full chemical curing, followed by microscopic wet sanding and rotary polishing to blend newly sprayed panels seamlessly with adjacent bodywork. The resulting finish is visually undetectable, structurally durable, and backed by comprehensive paint adhesion warranties.",
    image: "/images/services/paint-refinishing.webp",
    benefits: [
      "Spectrophotometer computerized pigment and metallic flake matching for seamless color blend",
      "Sealed down-draft spray booth with positive-pressure HEPA filtration eliminating dust nibs",
      "Ultra-high-solid (UHS) polyurethane clear coats restoring OEM-grade gloss and hardness",
      "Controlled infrared curing cycles ensuring optimal paint cross-linking and durability",
      "Post-paint wet sanding and multi-stage jewel polishing for invisible repair borders",
    ],
    included: [
      "Digital spectrophotometer paint code formulation and spray-card color matching test",
      "Panel preparation, feather-edging of damaged areas, and high-build anti-corrosive primer",
      "Computerized color basecoat application in climate-controlled down-draft spray booth",
      "Multi-coat application of premium ultra-high-solid clear coat",
      "Infrared thermal baking cycle adhering to strict temperature curing parameters",
      "Micro-fine wet sanding (2000-3000 grit) and rotary finish polishing",
    ],
    process: [
      {
        title: "Digital Color Matching",
        description: "Analyzing paint pigment and pearl flake density with digital spectrophotometers against OEM formulations.",
      },
      {
        title: "Panel Preparation",
        description: "Denting leveling, feathering scratches, masking adjacent panels, and laying corrosion-inhibiting primer.",
      },
      {
        title: "Down-Draft Spray Application",
        description: "Spraying basecoat and ultra-high-solid clear coat in a dust-free positive-pressure heated booth.",
      },
      {
        title: "Infrared Curing & Polishing",
        description: "IR lamp curing followed by precision wet sanding to blend new clear coat seamlessly with factory panels.",
      },
    ],
    recommendedFor:
      "Vehicles with deep stone chips, parking scrapes, panel resprays, vandalism scratches, or localized clear coat oxidation requiring factory-invisible restoration.",
    images: [
      {
        src: "/images/services/paint-refinishing.webp",
        alt: "Precision automotive paint refinishing and panel respray in down-draft spray booth",
        caption: "Factory-Calibrated Paint Refinishing",
      },
      {
        src: "/gallery/gallery-2.webp",
        alt: "Flawless clear coat finish after panel refinishing and optical machine polishing",
        caption: "Seamless Clear Coat Depth & Gloss",
      },
    ],
    faqs: [
      {
        question: "How do you ensure the newly sprayed paint matches my car's existing panels?",
        answer:
          "We utilize computerized spectrophotometer scanning directly on your vehicle's adjacent panels. This measures actual pigment degradation and flake density under real-world lighting, allowing our technicians to formulate a custom blend rather than relying solely on generic factory paint codes.",
      },
      {
        question: "How long after paint refinishing can I wash or wax my vehicle?",
        answer:
          "Because our panels are fully cured under infrared baking lamps in our booth, light hand washing with pH-neutral soap is safe after 7 days. However, sealant, ceramic coating, or PPF application should wait approximately 30 days to allow deep solvents to finish outgassing.",
      },
      {
        question: "Is panel refinishing better than spot repair or touch-up?",
        answer:
          "Touch-up pens and localized spot blending often leave noticeable ridges or dull spots over time. Full panel refinishing or precision edge-to-edge clear coat blending ensures a seamless, uniform optical reflection indistinguishable from original factory paint.",
      },
      {
        question: "How long does paint refinishing take for a single panel?",
        answer:
          "A single panel respray typically takes 2 to 3 business days. This timeframe covers panel prep, priming, booth spraying, controlled infrared baking, and final wet-sanding and jewel-polishing to achieve factory orange-peel alignment.",
      },
    ],
  },
  {
    // TODO(owner): Review and approve drafted copy for Performance Upgrades
    id: "performance-upgrades",
    slug: "performance-upgrades",
    title: "Performance Upgrades",
    metaTitle: "Stage 1 & 2 Performance in Hyderabad | CARBON",
    metaDescription:
      "Stage 1 & 2 ECU tuning, high-flow exhaust, intake, and handling upgrades in Hyderabad. Engineered calibrations at CARBON Studio.",
    tagline: "Unleash responsive horsepower, torque gains, and acoustic perfection with precision-engineered Stage 1 & Stage 2 tuning.",
    shortDescription:
      "Engineered powertrain enhancement packages including Stage 1 and Stage 2 ECU/TCU remapping, free-flowing performance exhaust systems, and sport intake hardware.",
    description:
      "Our Performance Upgrades division at CARBON - The Detailing Studio combines cutting-edge automotive calibration science with premium aftermarket hardware to unlock your vehicle's true performance potential. We deliver tailored Stage 1 and Stage 2 ECU and TCU tuning calibrations engineered specifically for turbocharged, supercharged, and naturally aspirated engines from German, British, Italian, and Japanese performance manufacturers. Stage 1 calibrations optimize air-fuel ratios, ignition timing, and boost parameters within conservative factory safety margins, delivering significant horsepower and torque gains, sharpening throttle response, and smoothing power delivery without requiring physical hardware modifications. For enthusiasts seeking heightened dynamics, our Stage 2 packages integrate high-flow downpipes, sport catalytic converters, free-flowing stainless or titanium cat-back exhaust systems, upgraded intercoolers, and cold-air intake induction kits. Every software calibration is accompanied by comprehensive pre-and-post diagnostic scanning, live data logging of air-mass flow, intake temperatures, and exhaust gas temperatures to verify mechanical health. Transmission (TCU) software upgrades increase clutch clamping pressure, optimize shift speeds, and elevate torque limits for seamless power delivery. All calibrations are customized for Indian environmental conditions and fuel octanes (95 and 99 RON), ensuring robust reliability, exhilarating performance, and refined everyday drivability.",
    image: "/images/services/performance-upgrades.webp",
    benefits: [
      "Substantial horsepower and torque enhancements safely calibrated within OEM thermal thresholds",
      "Sharpened throttle responsiveness, reduced turbo lag, and broader mid-range torque curves",
      "Stage 2 hardware integration including sports exhausts, downpipes, and high-flow cold air intakes",
      "Transmission (TCU) tuning delivering faster gear changes and optimized shift points",
      "Calibrated specifically for Indian climate conditions and commercial 95/99 RON premium fuels",
    ],
    included: [
      "Pre-tune vehicle health diagnostic scan, spark plug evaluation, and live sensor health check",
      "Custom Stage 1 or Stage 2 ECU software calibration mapped to vehicle hardware configuration",
      "Live diagnostic data logging verifying AFR, fuel trims, ignition timing, and boost levels",
      "Transmission TCU remap optimizing shift speed and torque limit thresholds (where applicable)",
      "Installation of aftermarket performance hardware (sport intake, exhaust, or intercooler)",
      "Post-calibration road testing and customer diagnostic handover report",
    ],
    process: [
      {
        title: "Diagnostic Health Check",
        description: "Full OBD scanner evaluation, sensor data review, and mechanical health inspection before tuning.",
      },
      {
        title: "Calibration Mapping",
        description: "Programming custom ECU/TCU software tables calibrated for local ambient temperatures and fuel grades.",
      },
      {
        title: "Hardware Integration",
        description: "Installing performance bolt-on components (downpipes, sport exhaust, cold air intakes, heat exchangers).",
      },
      {
        title: "Live Data Logging & Validation",
        description: "Road load data-logging verifying lambda safety margins, boost curves, and smooth gear transitions.",
      },
    ],
    recommendedFor:
      "Performance car owners, turbocharged sports sedans, and hot hatches seeking increased horsepower, responsive overtaking capability, and an enriched acoustic exhaust note.",
    images: [
      {
        src: "/images/services/performance-upgrades.webp",
        alt: "Stage 1 and Stage 2 ECU performance tuning and diagnostic calibration at CARBON studio",
        caption: "Engineered ECU Calibration & Data Logging",
      },
      {
        src: "/gallery/gallery-9.webp",
        alt: "BMW M2 performance tuning and exhaust hardware installation in Hyderabad",
        caption: "Powertrain Upgrades & Performance Refinement",
      },
    ],
    faqs: [
      {
        question: "What is the difference between Stage 1 and Stage 2 tuning?",
        answer:
          "Stage 1 is a software-only calibration that safely increases boost, optimizes ignition timing, and sharpens throttle response without requiring mechanical hardware changes. Stage 2 requires supporting hardware upgrades—such as a high-flow downpipe, free-flowing exhaust, and upgraded air intake—to extract higher power gains while keeping exhaust gas temperatures within safe parameters.",
      },
      {
        question: "Will Stage 1 or Stage 2 tuning reduce engine reliability?",
        answer:
          "When calibrated properly by experienced engineers using conservative safety margins and fueled with quality petrol (95 or 99 RON), Stage 1 and Stage 2 tunes maintain robust engine reliability for daily driving. We conduct thorough pre-tune diagnostics to confirm your vehicle is in healthy mechanical condition before tuning.",
      },
      {
        question: "Can the vehicle be reverted back to stock factory software?",
        answer:
          "Yes. We archive your vehicle's original factory software calibration file before applying any remap. The vehicle can be cleanly reverted back to 100% factory original software settings at any time at our studio.",
      },
      {
        question: "Do you offer transmission (TCU) tuning alongside ECU remapping?",
        answer:
          "Yes. For vehicles equipped with dual-clutch (DSG/PDK) or modern automatic (ZF8) transmissions, matching TCU software optimizes shift speeds, increases clutch clamping pressure to prevent slip under higher torque, and raises rev limiters for a more engaging driving experience.",
      },
    ],
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
    idealFor: "Deep clean & paint enhancement",
    services: [
      "Everything in Essential",
      "Single-stage paint enhancement",
      "Interior deep clean",
      "Leather conditioning",
      "Engine bay cleaning",
      "Headlight clarity polish",
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
      "Trim UV protection",
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
      "Interior ceramic protection",
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
    question: "What services does CARBON - The Detailing Studio offer?",
    answer:
      "CARBON specializes in 11 comprehensive automotive transformation services in Hyderabad: Paint Protection Film (PPF), Color PPF, Nano-Ceramic Coating, Graphene Coating, Automotive Sun Films, Interior & Exterior Detailing, Vinyl Car Wrapping, Body Kits & Aerodynamics, Classic Car Restoration, Precision Paint Refinishing, and Stage 1 & 2 Performance Upgrades.",
  },
  {
    question: "What is Paint Protection Film (PPF) and how does it protect my car?",
    answer:
      "PPF (Paint Protection Film) is an optically transparent, self-healing thermoplastic polyurethane (TPU) film installed across painted surfaces. It forms a high-tensile physical shield absorbing stone chips, highway gravel, parking scuffs, bug acids, and chemical fallout, preserving your vehicle's pristine factory paint with zero orange-peel texture.",
  },
  {
    question: "How long does Paint Protection Film (PPF) installation take?",
    answer:
      "A complete full-body PPF installation typically requires 3 to 5 business days. This timeframe ensures multi-stage paint decontamination, pre-installation machine polishing, precision computer-cut plotting or bespoke hand edge-tucking, and a mandatory 24-hour setting inspection to guarantee zero edge lifting.",
  },
  {
    question: "What is ceramic coating and how does it protect automotive paint?",
    answer:
      "Ceramic coating is a liquid silicon dioxide (SiO2) nano-polymer that chemically cross-links with the vehicle's factory clear coat, curing into a sacrificial glass-like shield. It delivers intense candy-like gloss, high UV oxidation defense, chemical resistance against acid rain and bird droppings, and intense hydrophobic water beading that keeps your vehicle cleaner for longer.",
  },
  {
    question: "What is graphene coating and how does it compare to ceramic coating?",
    answer:
      "Graphene coating incorporates reduced graphene oxide matrices into the nano-protective layer. Graphene's honeycomb molecular structure provides superior thermal heat dissipation that significantly lowers surface temperatures under Hyderabad's intense sunlight, substantially reducing the risk of mineral water-spot etching while delivering an exceptionally slick, deep gloss finish.",
  },
  {
    question: "What is vinyl car wrapping and how long does it last?",
    answer:
      "Vinyl car wrapping allows complete exterior color transformation and bespoke styling using premium multi-layer cast films (such as 3M and Avery Dennison). It lasts 3 to 5 years, is 100% reversible without damaging factory paint, and is available in ultra-gloss, stealth satin, matte, and metallic finishes. Explore our dedicated Car Wrapping service for more details.",
  },
  {
    question: "What body kits and aerodynamic styling packages do you install?",
    answer:
      "We source and install authentic pre-preg carbon fiber splitters, diffusers, side skirts, trunk spoilers, and custom widebody aerodynamic kits from respected international tuners. Every package is precision dry-fitted and torqued to ensure OEM panel gap alignment and high-speed highway stability. Explore our Body Kits & Aero service for full details.",
  },
  {
    question: "What does classic car restoration entail at CARBON?",
    answer:
      "Our Car Restoration program provides museum-grade revival for historic, vintage, and modern-classic vehicles. Services include bare-metal rust remediation, structural leveling, period-correct paint respray, brightwork and chrome replating, vintage leather hide rejuvenation, and mechanical preservation with strict adherence to period authenticity.",
  },
  {
    question: "What paint refinishing and panel repair services are available?",
    answer:
      "Our Paint Refinishing service delivers computerized spectrophotometer color-matching and factory-standard panel respraying executed in a climate-controlled down-draft heated spray booth. We use ultra-high-solid (UHS) clear coats and infrared curing to achieve invisible, factory-grade clear coat blending and scratch elimination.",
  },
  {
    question: "What are Stage 1 and Stage 2 performance upgrades?",
    answer:
      "Stage 1 is a precision ECU software calibration that unlocks horsepower, broader torque curves, and sharper throttle response within conservative factory safety margins. Stage 2 integrates free-flowing exhaust downpipes, high-flow air intakes, and intercoolers paired with matching TCU transmission tuning. Explore our Performance Upgrades service for details.",
  },
  {
    question: "How do I get an inspection, consultation, or price quote?",
    answer:
      "You can request a consultation by completing our website booking form, messaging our specialists on WhatsApp (+91 7416393300), calling us directly at +91 9959517361, or visiting our Jubilee Hills studio. Because every car's paint condition and owner goals differ, we conduct an individual multi-point inspection to provide an accurate, transparent proposal.",
  },
  {
    question: "Do I need an appointment before visiting the studio?",
    answer:
      "While studio walk-in visits are welcome during regular hours for initial facility tours, scheduling an appointment in advance allows our transformation specialists to reserve a dedicated clean bay and provide undivided attention to evaluating your vehicle.",
  },
  {
    question: "Where is CARBON - The Detailing Studio located?",
    answer:
      "CARBON - The Detailing Studio is conveniently located at Plot No. 183, Road No. 52, BNR Hills, Jubilee Hills, Hyderabad, Telangana – 500033. You can access one-click GPS driving directions via the Google Maps link located in our footer and contact section.",
  },
];export interface Testimonial {
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
    vehicle: "Luxury Sedan",
    service: "PPF & Ceramic Coating",
    review:
      "Exceptional craftsmanship and attention to detail. The PPF installation was flawless and the ceramic coating finish is absolutely stunning. My vehicle has never looked better.",
  },
  {
    id: "t2",
    name: "Customer Review",
    vehicle: "Luxury SUV",
    service: "Complete Detailing",
    review:
      "Carbon transformed my vehicle inside and out. The multi-stage paint correction brought back a mirror finish I didn't think was possible. Professional team, premium results.",
  },
  {
    id: "t3",
    name: "Customer Review",
    vehicle: "Sports Car",
    service: "Graphene Coating",
    review:
      "The graphene coating finish exceeded all expectations. The team was knowledgeable, transparent about the process, and the water-spot resistance and gloss are incredible. Highly recommended.",
  },
];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/gallery/gallery-1.webp",
    alt: "Ferrari 488 GTB Full Body Paint Protection Film & Detailing",
    category: "PPF",
  },
  {
    id: "g2",
    src: "/gallery/gallery-2.webp",
    alt: "Audi Q7 Exterior Deep Clean & Multi-Stage Paint Correction",
    category: "DETAILING",
  },
  {
    id: "g3",
    src: "/gallery/gallery-3.webp",
    alt: "Porsche Brake Caliper & Wheel Detailing Refinement",
    category: "DETAILING",
  },
  {
    id: "g4",
    src: "/gallery/gallery-4.webp",
    alt: "Porsche Red Brake Calipers & Alloy Wheel Refinement",
    category: "DETAILING",
  },
  {
    id: "g5",
    src: "/gallery/gallery-5.webp",
    alt: "Ferrari Underbody Cleansing & Wheel Arch Refinement on Hydraulic Lift",
    category: "DETAILING",
  },
  {
    id: "g6",
    src: "/gallery/gallery-6.webp",
    alt: "Classic Ferrari F430 Surface Refinement & Multi-Stage Paint Correction",
    category: "DETAILING",
  },
  {
    id: "g7",
    src: "/gallery/gallery-7.webp",
    alt: "BMW M2 & Lamborghini Huracan at Carbon Studio",
    category: "PPF",
  },
  {
    id: "g8",
    src: "/gallery/gallery-8.webp",
    alt: "Classic Ferrari F430 Complete Studio Detailing & Finish",
    category: "DETAILING",
  },
  {
    id: "g9",
    src: "/gallery/gallery-9.webp",
    alt: "BMW M2 Studio Handover & Protective Finish",
    category: "PPF",
  },
  {
    id: "g10",
    src: "/gallery/gallery-10.webp",
    alt: "Mercedes-Maybach Luxury Detailing & VIP Studio Handover",
    category: "DETAILING",
  },
  {
    id: "g11",
    src: "/gallery/gallery-11.webp",
    alt: "Purple Audi RS Ultra-Gloss Nano Ceramic Coating & Wheel Protection",
    category: "CERAMIC COATING",
  },
  {
    id: "g12",
    src: "/gallery/gallery-12.webp",
    alt: "Dust-Controlled Dedicated PPF Installation Bay",
    category: "PPF",
  },
  {
    id: "g13",
    src: "/gallery/gallery-13.webp",
    alt: "Range Rover Velar Deep Black Gloss Paint Correction & Protection",
    category: "DETAILING",
  },
  {
    id: "g14",
    src: "/gallery/gallery-14.webp",
    alt: "Lamborghini Huracan Spyder Custom Color PPF & Detailing",
    category: "PPF",
  },
  {
    id: "g15",
    src: "/gallery/gallery-15.webp",
    alt: "BMW Precision TPU Paint Protection Film Installation",
    category: "PPF",
  },
  {
    id: "g16",
    src: "/gallery/gallery-16.webp",
    alt: "Range Rover Custom Bulk Film Application & Edge Tucking",
    category: "PPF",
  },
];

export const galleryCategories = [
  "ALL",
  "PPF",
  "CERAMIC COATING",
  "DETAILING",
];
