import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
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
              <li><Link href="#services">PPF</Link></li>
              <li><Link href="#services">Bodykits</Link></li>
              <li><Link href="#services">Performance</Link></li>
              <li><Link href="#services">Restoration</Link></li>
              <li><Link href="#services">Paint & Detailing</Link></li>
              <li><Link href="#services">Ceramic Coating</Link></li>
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
