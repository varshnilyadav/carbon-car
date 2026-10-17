import Link from "next/link";
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
                <span className={styles.brandSub}>AUTO DETAILING STUDIO</span>
              </div>

              <p className={styles.brandDesc}>
                Hyderabad&apos;s leading automotive transformation studio. We don&apos;t just wash cars; we protect and restore your investment with world-class graphene coatings, PPF, and obsessive attention to detail.
              </p>

              <div className={styles.infoCardsList}>
                {/* Call Us */}
                <a href="tel:+919959517361" className={styles.infoCard}>
                  <div className={styles.infoIconBox}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className={styles.infoCardContent}>
                    <span className={styles.infoCardLabel}>Call Us</span>
                    <span className={styles.infoCardValue}>+91 9959517361</span>
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
                    <span className={styles.infoCardLabel}>Hours</span>
                    <span className={styles.infoCardValue}>10:00 AM - 7:00 PM (Everyday)</span>
                  </div>
                </div>

                {/* Address */}
                <a
                  href="https://maps.app.goo.gl/mFHht68AYNDtpZAD8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoCard}
                >
                  <div className={styles.infoIconBox}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className={styles.infoCardContent}>
                    <span className={styles.infoCardLabel}>Address</span>
                    <span className={styles.infoCardValue}>CARBON Studio, Hyderabad, Telangana</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Map Wrapper */}
            <div className={`${styles.mapWrapper} map-wrapper`}>
              <iframe
                src="https://maps.google.com/maps?q=CARBON+Hyderabad+17.425366,78.395036&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CARBON Automotive Transformation Studio Location"
                className={styles.mapIframe}
              />
              <div className={`${styles.mapOverlayBorder} map-overlay-border`} />
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          
          <div className={styles.brand}>
            <h2 className={styles.logo}>CARBON</h2>
            <p className={styles.tagline}>HYDERABAD&apos;S AUTOMOTIVE TRANSFORMATION STUDIO</p>
            <div className={styles.techDetail}>
              <span className={styles.coord}>17.4253° N, 78.3951° E</span>
              <span className={styles.rule}></span>
            </div>
          </div>

          <div className={styles.links}>
            <h3 className={styles.columnTitle}>EXPLORE</h3>
            <ul className={styles.list}>
              <li><Link href="/#home">Home</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#transformations">Transformations</Link></li>
              <li><Link href="/#studio">Studio</Link></li>
              <li><Link href="/#reviews">Reviews</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
              <li><Link href="/sitemap">Sitemap</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3 className={styles.columnTitle}>SERVICES</h3>
            <ul className={styles.list}>
              <li><Link href="/services/interior-exterior-detailing">Interior & Exterior Detailing</Link></li>
              <li><Link href="/services/graphene-coating">Graphene Coating</Link></li>
              <li><Link href="/services/ceramic-coating">Ceramic Coating</Link></li>
              <li><Link href="/services/ppf">Paint Protection Film (PPF)</Link></li>
              <li><Link href="/services/color-ppf">Color PPF</Link></li>
              <li><Link href="/services/sun-films">Sun Films</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3 className={styles.columnTitle}>CONNECT</h3>
            <ul className={styles.list}>
              <li><a href="https://www.instagram.com/carbon.hyd/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.facebook.com/Carbon.hyd/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://maps.app.goo.gl/mFHht68AYNDtpZAD8" target="_blank" rel="noopener noreferrer">Google Maps</a></li>
              <li><a href="https://wa.me/919959517361" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="tel:+919959517361">+91 9959517361</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} CARBON — All Rights Reserved.</p>
          <div className={styles.carbonTexture}></div>
        </div>
      </div>
    </footer>
  );
}
