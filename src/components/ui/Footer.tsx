import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        
        {/* Google Maps Studio Location Section */}
        <div className={styles.mapSection}>
          <div className={styles.mapHeader}>
            <div className={styles.mapTitleWrapper}>
              <span className={styles.mapEyebrow}>STUDIO LOCATION</span>
              <h3 className={styles.mapTitle}>VISIT THE CARBON STUDIO</h3>
              <p className={styles.mapSubtitle}>Hyderabad, Telangana, India • 17.4253° N, 78.3951° E</p>
            </div>
            <a 
              href="https://www.google.com/maps/place/CARBON/@17.4253809,78.3925916,1858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb91cd034b5469:0x580848e2ba547d27!8m2!3d17.4253809!4d78.3951665!16s%2Fg%2F11x9bphbmx!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.directionsBtn}
            >
              <span>GET DIRECTIONS</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://maps.google.com/maps?q=CARBON+Hyderabad+17.4253809,78.3951665&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CARBON Automotive Transformation Studio Location"
              className={styles.mapIframe}
            />
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
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#transformations">Transformations</Link></li>
              <li><Link href="#studio">Studio</Link></li>
              <li><Link href="#reviews">Reviews</Link></li>
              <li><Link href="#contact">Contact</Link></li>
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
              <li><a href="https://www.google.com/maps/place/CARBON/@17.4253809,78.3951665,952m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb91cd034b5469:0x580848e2ba547d27!8m2!3d17.4253809!4d78.3951665!16s%2Fg%2F11x9bphbmx?entry=ttu" target="_blank" rel="noopener noreferrer">Google Maps</a></li>
              <li><a href="#booking">WhatsApp</a></li>
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
