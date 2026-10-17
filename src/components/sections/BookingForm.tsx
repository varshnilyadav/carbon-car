"use client";

import { useState } from "react";
import { useReveal } from "../ui/useReveal";
import SectionHeading from "../ui/SectionHeading";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className={`section ${styles.booking}`} id="booking" ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          
          <div className={`${styles.info} reveal`}>
            <SectionHeading
              number="07"
              label="CONSULTATION"
              title="READY TO TRANSFORM YOUR CAR?"
              subtitle="Schedule a consultation at the Carbon Studio to discuss your vision, inspect your vehicle, and engineer a custom transformation plan."
            />
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>STUDIO LOCATION</span>
                <p className={styles.contactText}>Hyderabad, Telangana, India</p>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>ENQUIRIES</span>
                <p className={styles.contactText}>@carbon.hyd</p>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>HOURS</span>
                <p className={styles.contactText}>Monday - Saturday<br/>10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className={`${styles.formContainer} reveal`} style={{ transitionDelay: "0.2s" }}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3>REQUEST RECEIVED</h3>
                <p>A Carbon specialist will contact you shortly to confirm your consultation.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">NAME</label>
                    <input type="text" id="name" required placeholder="Your full name" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="phone">PHONE</label>
                    <input type="tel" id="phone" required placeholder="Your phone number" />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="vehicle">VEHICLE MAKE & MODEL</label>
                    <input type="text" id="vehicle" required placeholder="e.g. Porsche 911 GT3" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="service">PRIMARY SERVICE</label>
                    <select id="service" required defaultValue="">
                      <option value="" disabled>Select a service</option>
                      <option value="ppf">Paint Protection Film</option>
                      <option value="ceramic">Ceramic Coating</option>
                      <option value="detailing">Premium Detailing</option>
                      <option value="wrapping">Vinyl Wrapping</option>
                      <option value="performance">Performance Upgrades</option>
                      <option value="bodykits">Bodykits & Styling</option>
                      <option value="restoration">Restoration</option>
                      <option value="other">Not Sure / Multiple</option>
                    </select>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message">MESSAGE / REQUIREMENTS</label>
                  <textarea id="message" rows={4} placeholder="Tell us about your transformation goals..."></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  REQUEST CONSULTATION
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
