import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.videoBackground}>
        {/* We use an image here as a fallback/primary since we generated a high quality one.
            If a video is provided later, it can be seamlessly added here. */}
        <Image 
          src="/hero-bg.jpg" 
          alt="Carbon Automotive Transformation Studio" 
          fill
          priority
          className={styles.bgMedia}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.eyebrowWrapper}>
          <span className={styles.eyebrow}>
            HYDERABAD&apos;S AUTOMOTIVE TRANSFORMATION STUDIO
          </span>
        </div>
        
        <h1 className={styles.title}>
          ENGINEERED TO <br/>
          <span className={styles.highlight}>TRANSFORM.</span>
        </h1>
        
        <p className={styles.subtitle}>
          Precision detailing. Performance upgrades. Bespoke styling.<br/>
          Complete automotive transformation.
        </p>
        
        <div className={styles.actions}>
          <a href="#booking" className={styles.primaryBtn}>BOOK YOUR TRANSFORMATION</a>
          <a href="#services" className={styles.secondaryBtn}>EXPLORE SERVICES</a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>
    </section>
  );
}
