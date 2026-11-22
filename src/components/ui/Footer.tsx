import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        
        {/* Google Maps Studio Location Section - Matching Reference Structure */}
        <div className={styles.mapSection}>
          <div className={styles.mapGrid}>
            {/* Left Column: Brand & Details */}
            <div className={styles.mapContent}>
              <div className={styles.brandHeader}>
                <span className={styles.brandName}>CARBON</span>
                <span className={styles.brandDivider}></span>
                <span className={styles.brandSub}>THE DETAILING STUDIO</span>
              </div>

              <p className={styles.brandDesc}>
                Hyderabad&apos;s leading automotive transformation studio. We don&apos;t just wash cars; we protect and elevate your vehicle with advanced graphene coatings, self-healing PPF, and obsessive attention to detail.
              </p>

              <div className={styles.infoCardsList}>
                {/* Call Us */}
                <a href={`tel:${siteConfig.telephoneRaw}`} className={styles.infoCard} aria-label="Call CARBON detailing studio">
                  <div className={styles.infoIconBox}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className={styles.infoCardContent}>
                    <span className={styles.infoCardLabel}>Call Us</span>
                    <span className={styles.infoCardValue}>{siteConfig.telephoneDisplay}</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoCard}
                  aria-label="Chat with CARBON on WhatsApp"
                >
                  <div className={styles.infoIconBox}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <div className={styles.infoCardContent}>
                    <span className={styles.infoCardLabel}>WhatsApp</span>
                    <span className={styles.infoCardValue}>{siteConfig.whatsappDisplay}</span>
                  </div>
                </a>

                {/* Hours */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIconBox}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className={styles.infoCardContent}>
                    <span className={styles.infoCardLabel}>Studio Hours</span>
                    <span className={styles.infoCardValue}>{siteConfig.hours.display}</span>
                  </div>
                </div>

                {/* Address */}
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className={styles.infoCard}
                  aria-label="View CARBON studio location on Google Maps"
                >
                  <div className={styles.infoIconBox}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className={styles.infoCardContent}>
                    <span className={styles.infoCardLabel}>Studio Address</span>
                    <span className={styles.infoCardValue}>{siteConfig.address.fullAddress}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Map Wrapper */}
            <div className={`${styles.mapWrapper} map-wrapper`}>
              <iframe
                src={`https://maps.google.com/maps?q=CARBON+Hyderabad+${siteConfig.geo.latitude},${siteConfig.geo.longitude}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CARBON Studio Location in Jubilee Hills Hyderabad"
                className={styles.mapIframe}
              />
              <div className={`${styles.mapOverlayBorder} map-overlay-border`} />
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          
          <div className={styles.brand}>
            <p className={styles.logo}>CARBON</p>
            <p className={styles.tagline}>THE DETAILING STUDIO • HYDERABAD</p>
            <div className={styles.techDetail}>
              <span className={styles.coord}>17.4254° N, 78.3950° E</span>
              <span className={styles.rule}></span>
            </div>
          </div>

          <div className={styles.links}>
            <p className={styles.columnTitle}>EXPLORE</p>
            <ul className={styles.list}>
              <li><Link href="/#home" aria-label="CARBON Studio Home">Home</Link></li>
              <li><Link href="/#about" aria-label="About CARBON Studio">About</Link></li>
              <li><Link href="/#services" aria-label="Detaling & Protection Services">Services</Link></li>
              <li><Link href="/#transformations" aria-label="Car Transformations Gallery">Transformations</Link></li>
              <li><Link href="/#studio" aria-label="The Carbon Detailing Lab">Studio</Link></li>
              <li><Link href="/#reviews" aria-label="Verified Customer Reviews">Reviews</Link></li>
              <li><Link href="/#contact" aria-label="Studio Location and Contact">Contact</Link></li>
              <li><Link href="/sitemap" aria-label="Website Architecture Sitemap">Sitemap</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <p className={styles.columnTitle}>SERVICES</p>
            <ul className={styles.list}>
              <li><Link href="/services/ppf" title="Paint Protection Film (PPF) in Hyderabad">PPF in Hyderabad</Link></li>
              <li><Link href="/services/interior-exterior-detailing">Interior & Exterior Detailing</Link></li>
              <li><Link href="/services/graphene-coating">Graphene Coating</Link></li>
              <li><Link href="/services/ceramic-coating">Ceramic Coating</Link></li>
              <li><Link href="/services/color-ppf">Color PPF</Link></li>
              <li><Link href="/services/sun-films">Sun Films</Link></li>
              <li><Link href="/services/car-wrapping">Car Wrapping</Link></li>
              <li><Link href="/services/bodykits">Body Kits & Aero</Link></li>
              <li><Link href="/services/restoration">Car Restoration</Link></li>
              <li><Link href="/services/paint-refinishing">Paint Refinishing</Link></li>
              <li><Link href="/services/performance-upgrades">Performance Upgrades</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <p className={styles.columnTitle}>CONNECT</p>
            <ul className={styles.list}>
              <li><a href={siteConfig.instagramUrl} target="_blank" rel="me noopener noreferrer" aria-label="CARBON on Instagram">Instagram</a></li>
              <li><a href={siteConfig.facebookUrl} target="_blank" rel="me noopener noreferrer" aria-label="CARBON on Facebook">Facebook</a></li>
              <li><a href={siteConfig.googleMapsUrl} target="_blank" rel="me noopener noreferrer" aria-label="CARBON Google Maps Business Listing">Google Maps</a></li>
              <li><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with CARBON on WhatsApp">{siteConfig.whatsappDisplay}</a></li>
              <li><a href={`tel:${siteConfig.telephoneRaw}`} aria-label="Call CARBON studio">{siteConfig.telephoneDisplay}</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} CARBON - The Detailing Studio. All Rights Reserved.</p>
          <div className={styles.carbonTexture}></div>
        </div>
      </div>
    </footer>
  );
}
