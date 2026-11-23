import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import styles from "./PPFDeepDive.module.css";

// TODO(owner): review complete technical copy, warranty periods, and price range placeholders below before public marketing push.

export default function PPFDeepDive() {
  return (
    <section className={styles.deepDive} id="ppf-deep-dive">
      <div className="container">
        {/* SECTION 1: WHAT IS PPF */}
        <div className={styles.sectionBlock}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>DEFINITIVE PHYSICAL ARMOR</span>
            <h2 className={styles.h2Title}>What is PPF (Paint Protection Film)?</h2>
            <p className={styles.h2Subtitle}>
              An advanced optical elastomer engineered to preserve factory clear coat against brutal road hazards.
            </p>
          </div>
          <div className={styles.prose}>
            <p>
              Paint Protection Film (PPF)—often referred to as clear bra—is a specialized, optically transparent urethane film installed directly over the painted exterior panels of your vehicle. Engineered using advanced high-tensile thermoplastic polyurethane (TPU), PPF represents the pinnacle of physical automotive defense. Unlike thin liquid coatings or wax products that measure only 1 to 3 microns in thickness, premium TPU film measures between 175 to 200+ microns (7.5 to 8.5 mils), providing an elastomeric shock-absorbing cushion against high-velocity highway projectiles.
            </p>
            <p>
              Originally formulated for military helicopter rotor blade protection in harsh desert conditions, automotive-grade TPU has evolved into a multi-layered marvel of modern chemical engineering. The uppermost stratum comprises a shape-memory elastomeric polymer with high cross-link density. Below this lies the heavy-duty aliphatic TPU core responsible for absorbing kinetic impact forces without tearing or shearing. The bottom layer features an optically pure acrylic adhesive system designed to anchor securely to factory clear coats while remaining 100% reversible years later without leaving adhesive residue or lifting factory paint.
            </p>
            <p>
              For car owners in Hyderabad, where daily road conditions involve sudden highway construction debris, gravel splatter on the Outer Ring Road (ORR), dense Jubilee Hills traffic, and intense summer ultraviolet radiation, PPF acts as an invisible suit of armor that takes the damage so your factory paint never has to.
            </p>
          </div>
        </div>

        {/* SECTION 2: BENEFITS OF PPF */}
        <div className={styles.sectionBlock}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>ENGINEERED ADVANTAGES</span>
            <h2 className={styles.h2Title}>Key Benefits of Paint Protection Film</h2>
            <p className={styles.h2Subtitle}>
              Why elite automotive collectors, supercar drivers, and daily commuters choose TPU protection.
            </p>
          </div>
          <div className={styles.cardGrid}>
            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Stone Chip & Debris Defense</h3>
              <p className={styles.cardText}>
                The thick, energy-dissipating polyurethane structure absorbs direct impacts from flying gravel, construction pebbles, and tire kick-up at highway speeds, preventing deep paint chips down to the metal or primer.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Thermal Self-Healing Topcoat</h3>
              <p className={styles.cardText}>
                Fine wash swirls, micro-scratches from improper wiping, and light surface abrasions naturally vanish when exposed to ambient warmth, warm water, or Hyderabad&apos;s afternoon sunlight as polymer chains re-align.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>UV & Chemical Oxidation Block</h3>
              <p className={styles.cardText}>
                Infused with premium aliphatic UV stabilizers that prevent clear coat discoloration, clear coat failure, and yellowing, while repelling acidic bird droppings, bug splatter, and industrial tree sap fallout.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 14 14" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Parking Scuff & Scratch Shield</h3>
              <p className={styles.cardText}>
                Protects bumper corners, door edges, and rocker panels from tight multi-level parking scuffs, careless door dings, and pedestrian contact in crowded urban commercial zones.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Maximum Resale Value Retention</h3>
              <p className={styles.cardText}>
                Original factory paint can only be applied once at the assembly plant. Repainted panels diminish luxury car values by 15% to 30%. PPF guarantees 100% OEM paint verification upon resale inspection.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Stain & Water-Spot Resistance</h3>
              <p className={styles.cardText}>
                Hydrophobic topcoat matrices repel mineral-heavy groundwater and hard washing water, preventing stubborn calcium and mineral etching into clear coat layers during humid monsoon cycles.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: PPF TYPES */}
        <div className={styles.sectionBlock}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>FINISH OPTIONS</span>
            <h2 className={styles.h2Title}>PPF Types: Gloss, Matte, and Color PPF</h2>
            <p className={styles.h2Subtitle}>
              Tailor the exact aesthetic personality of your vehicle without sacrificing physical protection.
            </p>
          </div>
          <div className={styles.typesGrid}>
            <div className={styles.typeCard}>
              <span className={styles.typeBadge}>FACTORY PRESERVATION</span>
              <h3 className={styles.typeTitle}>High-Gloss Clear PPF</h3>
              <p className={styles.typeDesc}>
                The traditional benchmark in invisible protection. High-gloss TPU enhances natural clear coat optical depth and metallic flake clarity while remaining virtually indistinguishable from bare paint.
              </p>
              <ul className={styles.typeList}>
                <li>Optically clear 100% aliphatic TPU core</li>
                <li>Glass-like depth & high gloss enhancement</li>
                <li>Self-healing instant elastomeric topcoat</li>
                <li>Invisible tucked edge-wrapping finish</li>
              </ul>
            </div>

            <div className={styles.typeCard}>
              <span className={styles.typeBadge}>STEALTH SATIN CONVERSION</span>
              <h3 className={styles.typeTitle}>Matte / Satin PPF</h3>
              <p className={styles.typeDesc}>
                Features an optical frosted topcoat that transforms factory glossy paintwork into an aggressive, stealth satin finish. Highlights vehicle body sculpting and character lines while delivering identical impact defense.
              </p>
              <ul className={styles.typeList}>
                <li>Converts any gloss paint to frozen satin</li>
                <li>Eliminates glare while highlighting body lines</li>
                <li>Identical 200+ micron stone chip armor</li>
                <li>Easier to maintain than factory matte paint</li>
              </ul>
            </div>

            <div className={styles.typeCard}>
              <span className={styles.typeBadge}>BESPOKE RESTYLING</span>
              <h3 className={styles.typeTitle}>Color PPF</h3>
              <p className={styles.typeDesc}>
                The revolutionary alternative to vinyl wrap. Infused with deep, rich automotive-grade color pigments within genuine high-tensile TPU. Offers dramatic color changes paired with real rock chip protection.
              </p>
              <ul className={styles.typeList}>
                <li>Zero orange peel, high-gloss paint look</li>
                <li>Genuine TPU impact protection (unlike vinyl)</li>
                <li>Self-healing surface properties</li>
                <li>Completely reversible without clear coat damage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 4: OUR INSTALLATION PROCESS */}
        <div className={styles.sectionBlock}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>SURGICAL PRECISION</span>
            <h2 className={styles.h2Title}>Our PPF Installation Process</h2>
            <p className={styles.h2Subtitle}>
              Executed inside specialized dust-controlled bays by certified transformation technicians.
            </p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>01</div>
              <h3 className={styles.stepTitle}>Multi-Stage Decontamination</h3>
              <p className={styles.stepText}>
                pH-neutral foam bath, chemical iron fallout dissolution, tar extraction, and synthetic clay bar treatment clear embedded contaminants from the clear coat.
              </p>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNum}>02</div>
              <h3 className={styles.stepTitle}>Paint Correction & Polish</h3>
              <p className={styles.stepText}>
                Single-stage machine polish under 5000K high-CRI inspection lighting removes factory swirl marks so paint under the film is flawless before sealing.
              </p>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNum}>03</div>
              <h3 className={styles.stepTitle}>Precision Plotting & Tailoring</h3>
              <p className={styles.stepText}>
                Digital CAD template plotting combined with bespoke panel wrapping ensures maximum surface coverage with wrapped borders wherever panel seams permit.
              </p>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNum}>04</div>
              <h3 className={styles.stepTitle}>Clean Bay Application</h3>
              <p className={styles.stepText}>
                Installation inside dedicated dust-filtered bays using slip and tack solutions, squeegeed with surgical precision to eliminate air bubbles and silvering.
              </p>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNum}>05</div>
              <h3 className={styles.stepTitle}>Edge Wrapping & Tucking</h3>
              <p className={styles.stepText}>
                Film borders are gently wrapped around hood edges, fender lips, and door returns to deliver a seamless, invisible finish with zero exposed cut lines.
              </p>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNum}>06</div>
              <h3 className={styles.stepTitle}>Post-Heating & QC Inspection</h3>
              <p className={styles.stepText}>
                Controlled infrared heat-setting anchors adhesive memory along complex curves, followed by a mandatory 24-hour cure inspection before client handover.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: WHICH CARS NEED PPF */}
        <div className={styles.sectionBlock}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>SUITABILITY & DEMAND</span>
            <h2 className={styles.h2Title}>Which Cars Need PPF in Hyderabad?</h2>
            <p className={styles.h2Subtitle}>
              From luxury sedans and flagship SUVs to modern supercars and high-mileage commuters.
            </p>
          </div>
          <div className={styles.prose}>
            <p>
              While every vehicle benefits from physical armor, Paint Protection Film is especially critical for specific driving profiles and vehicle categories:
            </p>
            <p>
              <strong>1. Brand New Luxury Cars & Supercars:</strong> Modern European luxury vehicles (Porsche, Mercedes-Benz, BMW, Audi, Land Rover, Ferrari, Lamborghini) utilize eco-friendly waterborne clear coats required by strict environmental regulations. These factory finishes are softer and significantly more susceptible to stone chipping and wash swirls than finishes from previous decades. Installing PPF directly from showroom delivery protects original paint from mile one.
            </p>
            <p>
              <strong>2. Highway & Expressway Commuters:</strong> Drivers frequently traveling the Hyderabad Outer Ring Road (ORR), Rajiv Rahadari, or the Bangalore highway encounter sustained speeds above 100 km/h where airborne gravel and road construction sand act like miniature sandblasters against frontal impact zones.
            </p>
            <p>
              <strong>3. Dark & Deep Metallic Colors:</strong> Black, deep navy, mineral gray, and ruby red paint finishes show swirl marks, dust scratches, and stone chip primer spots immediately. Clear PPF preserves optical depth while erasing swirls through self-healing.
            </p>
            <p>
              <strong>4. High-Performance SUVs:</strong> Upright frontal fascias on luxury SUVs like the Range Rover, Mercedes G-Wagon, Land Rover Defender, and BMW X7 present large, vertical target profiles for stone impacts that require robust TPU defense.
            </p>
          </div>
        </div>

        {/* SECTION 6: CARE & MAINTENANCE */}
        <div className={styles.sectionBlock}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>LONGEVITY PROTOCOL</span>
            <h2 className={styles.h2Title}>PPF Care and Maintenance Guidelines</h2>
            <p className={styles.h2Subtitle}>
              Simple maintenance protocols ensuring your protective film stays crystal clear for a decade.
            </p>
          </div>
          <div className={styles.prose}>
            <p>
              Maintaining a vehicle protected with Paint Protection Film is simple, but adhering to the following professional protocols ensures maximum durability:
            </p>
            <p>
              <strong>• Initial 7-Day Cure Window:</strong> Do not wash the vehicle or run it through rain for 7 days after installation. This allows microscopic moisture under the film to fully evaporate and adhesive bonds to achieve full tensile strength.
            </p>
            <p>
              <strong>• Two-Bucket Hand Wash Method:</strong> Always use a two-bucket wash technique with grit guards, a plush microfiber wash mitt, and pH-neutral car shampoo. Never use abrasive wash brushes found at automated petrol bunk car washes.
            </p>
            <p>
              <strong>• Pressure Washer Safe Distances:</strong> When using high-pressure sprayers, maintain a minimum distance of 2 to 3 feet from the bodywork. Never aim high-pressure water jets directly at panel seam edges or wrapped corners at point-blank range.
            </p>
            <p>
              <strong>• No Abrasive Polishes or Compounds:</strong> Never machine-polish PPF with abrasive rotary pads or aggressive cutting compounds. The elastomeric self-healing topcoat should only be treated with dedicated PPF sealants or ceramic spray toppers.
            </p>
            <p>
              <strong>• Complimentary Studio Annual Inspections:</strong> Visit CARBON Studio every 6 to 12 months for an edge and seam check-up, topcoat decontamination, and gloss rejuvenation.
            </p>
          </div>
        </div>

        {/* SECTION 7: PPF VS CERAMIC COATING COMPARISON TABLE */}
        <div className={styles.sectionBlock}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>TECHNICAL SHOWDOWN</span>
            <h2 className={styles.h2Title}>PPF vs Ceramic Coating: The Key Differences</h2>
            <p className={styles.h2Subtitle}>
              Understand physical impact defense versus liquid chemical protection to choose the right strategy.
            </p>
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.featureCol}>Attribute</th>
                  <th className={styles.highlightCol}>Paint Protection Film (PPF)</th>
                  <th>Ceramic Coating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.featureCol}>Primary Purpose</td>
                  <td className={styles.highlightCol}>Physical impact absorption & scratch armor</td>
                  <td>Chemical defense, UV protection & extreme gloss</td>
                </tr>
                <tr>
                  <td className={styles.featureCol}>Material & Thickness</td>
                  <td className={styles.highlightCol}>High-tensile TPU (~175 to 200+ microns)</td>
                  <td>Liquid SiO2/SiC nano-layer (~1 to 3 microns)</td>
                </tr>
                <tr>
                  <td className={styles.featureCol}>Stone Chip Defense</td>
                  <td className={styles.highlightCol}>Exceptional (absorbs high-speed gravel impacts)</td>
                  <td>Zero (cannot stop physical projectile chips)</td>
                </tr>
                <tr>
                  <td className={styles.featureCol}>Self-Healing Capabilities</td>
                  <td className={styles.highlightCol}>Yes (swirls vanish with heat / warm water)</td>
                  <td>No (scratches remain in clear coat / coating)</td>
                </tr>
                <tr>
                  <td className={styles.featureCol}>Chemical & UV Resistance</td>
                  <td className={styles.highlightCol}>High (aliphatic UV blockers built into core)</td>
                  <td>Exceptional (resists pH 2–12 chemical etching)</td>
                </tr>
                <tr>
                  <td className={styles.featureCol}>Water Beading & Hydrophobicity</td>
                  <td className={styles.highlightCol}>Very High (integrated ceramic topcoat)</td>
                  <td>Extreme (contact angles up to 110°+)</td>
                </tr>
                <tr>
                  <td className={styles.featureCol}>Average Lifespan</td>
                  <td className={styles.highlightCol}>5 to 10 Years (warranty backed)</td>
                  <td>2 to 5 Years (depends on maintenance)</td>
                </tr>
                <tr>
                  <td className={styles.featureCol}>Reversibility</td>
                  <td className={styles.highlightCol}>100% cleanly peelable without paint damage</td>
                  <td>Requires mechanical abrasive machine polishing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.prose} style={{ marginTop: "1.5rem" }}>
            <p>
              <em>Pro Tip:</em> You do not have to choose between them! At CARBON, our premier protection package applies a ceramic coating directly on top of installed self-healing PPF. This delivers the gold-standard hybrid: absolute physical stone chip defense paired with intense glass-like hydrophobicity and dirt-shedding slickness.
            </p>
          </div>
        </div>

        {/* SECTION 8: PPF COST IN HYDERABAD */}
        <div className={styles.sectionBlock}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>TRANSPARENT PRICING</span>
            <h2 className={styles.h2Title}>PPF Cost in Hyderabad</h2>
            <p className={styles.h2Subtitle}>
              Transparent pricing factors and verified package estimates for vehicles in Telangana.
            </p>
          </div>
          <div className={styles.prose}>
            <p>
              The cost of professional Paint Protection Film installation in Hyderabad varies according to three primary variables: vehicle size and panel complexity, coverage scope (front-impact protection versus complete full-body wrap), and film warranty tier (5, 7, or 10-year TPU technology).
            </p>
          </div>
          <div className={styles.priceBox}>
            <div className={styles.priceNote}>
              {"// TODO(owner): review and confirm verified studio pricing ranges below"}
            </div>
            <div className={styles.priceGrid}>
              <div className={styles.priceTier}>
                <h3 className={styles.priceTierName}>Front Impact Package</h3>
                <div className={styles.priceValue}>₹XX,XXX – ₹XX,XXX*</div>
                <p className={styles.priceDesc}>
                  Covers front bumper, entire hood, front fenders, side mirrors, and headlights. Ideal for highway gravel protection on daily drivers.
                </p>
              </div>

              <div className={styles.priceTier}>
                <h3 className={styles.priceTierName}>Track Pack / Extended</h3>
                <div className={styles.priceValue}>₹X,XX,XXX – ₹X,XX,XXX*</div>
                <p className={styles.priceDesc}>
                  Includes front impact zones plus rocker panels, A-pillars, roof leading edge, and rear wheel splash zones. Ideal for sports cars.
                </p>
              </div>

              <div className={styles.priceTier}>
                <h3 className={styles.priceTierName}>Full Body Comprehensive</h3>
                <div className={styles.priceValue}>₹X,XX,XXX – ₹X,XX,XXX*</div>
                <p className={styles.priceDesc}>
                  Every painted panel wrapped with tucked edges, including doors, roof, trunk, and quarter panels. Ultimate luxury protection.
                </p>
              </div>
            </div>
            <p className={styles.priceDesc}>
              *Prices depend on vehicle model, existing paint condition requiring pre-installation correction, and film warranty tier. For an exact proposal, visit our Jubilee Hills studio for a complimentary multi-point paint inspection.
            </p>
          </div>
        </div>

        {/* SECTION 9: RELATED GUIDES */}
        <div className={styles.sectionBlock}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>IN-DEPTH RESEARCH</span>
            <h2 className={styles.h2Title}>Related PPF Guides & Comparison Articles</h2>
            <p className={styles.h2Subtitle}>
              Explore our comprehensive editorial guides to make an informed decision for your vehicle.
            </p>
          </div>
          <div className={styles.guidesGrid}>
            <Link href="/ppf-cost-in-hyderabad" className={styles.guideCard}>
              <div>
                <span className={styles.guideTag}>PRICING GUIDE</span>
                <h3 className={styles.guideTitle}>PPF Cost in Hyderabad: 2026 Price Guide</h3>
                <p className={styles.guideSnippet}>
                  Detailed breakdown of PPF package prices, vehicle segment costs, warranty tiers, and why cheap PVC films cost more in the long run.
                </p>
              </div>
              <span className={styles.guideLinkText}>
                Read Price Guide →
              </span>
            </Link>

            <Link href="/ppf-vs-ceramic-coating" className={styles.guideCard}>
              <div>
                <span className={styles.guideTag}>COMPARISON ANALYSIS</span>
                <h3 className={styles.guideTitle}>PPF vs Ceramic Coating: Which Is Better?</h3>
                <p className={styles.guideSnippet}>
                  Side-by-side comparison of scratch resistance, stone chip protection, chemical defense, cost, and how combining both yields the ultimate finish.
                </p>
              </div>
              <span className={styles.guideLinkText}>
                Read Comparison →
              </span>
            </Link>

            <Link href="/ppf-for-luxury-cars-hyderabad" className={styles.guideCard}>
              <div>
                <span className={styles.guideTag}>LUXURY & EXOTICS</span>
                <h3 className={styles.guideTitle}>PPF for Luxury & Sports Cars in Hyderabad</h3>
                <p className={styles.guideSnippet}>
                  Why soft European clear coats on Porsche, Ferrari, BMW, and Mercedes demand surgical, dust-free clean bay PPF installation.
                </p>
              </div>
              <span className={styles.guideLinkText}>
                Read Luxury Guide →
              </span>
            </Link>
          </div>
        </div>

        {/* SECTION 10: VISIBLE CTA WITH WHATSAPP AND CALL */}
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>Protect Your Vehicle With PPF Today</h2>
          <p className={styles.ctaText}>
            Visit our dedicated clean-bay studio in Jubilee Hills, Hyderabad for a complimentary paint inspection, digital template walkthrough, and customized proposal.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/#booking" className={styles.primaryCta}>
              Book Consultation Slot
            </Link>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappCta}
              aria-label="Chat with PPF specialist on WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              WhatsApp: +91 7416393300
            </a>
            <a
              href={`tel:${siteConfig.telephoneRaw}`}
              className={styles.callCta}
              aria-label="Call CARBON studio directly"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call: +91 74163 93300
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
