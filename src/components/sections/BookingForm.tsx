"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Magnetic from "@/components/motion/Magnetic";
import Reveal from "@/components/motion/Reveal";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("loading");

    setTimeout(() => {
      setSubmitState("success");
      setTimeout(() => {
        setSubmitState("idle");
        setFormData({
          name: "",
          phone: "",
          vehicle: "",
          service: "",
          message: "",
        });
      }, 4000);
    }, 900);
  };

  return (
    <section className={`section ${styles.booking}`} id="booking">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <SectionHeading
              number="07"
              label="CONSULTATION"
              title="READY TO TRANSFORM YOUR CAR?"
              subtitle="Schedule a consultation at the Carbon Studio to discuss your vision, inspect your vehicle, and engineer a custom transformation plan."
            />

            <Reveal y={20} duration={0.6} delay={0.15}>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>STUDIO LOCATION</span>
                  <p className={styles.contactText}>Hyderabad, Telangana, India</p>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>ENQUIRIES & CALL</span>
                  <p className={styles.contactText}>
                    <a
                      href="tel:+919959517361"
                      style={{ color: "var(--color-off-white)", display: "block", marginBottom: "4px" }}
                    >
                      +91 9959517361
                    </a>
                    <a
                      href="https://wa.me/919959517361"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--color-accent)" }}
                    >
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>HOURS</span>
                  <p className={styles.contactText}>
                    Monday - Saturday<br />
                    10:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className={styles.formContainer}>
            {submitState === "success" ? (
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
                  {/* Name Field */}
                  <div
                    className={`${styles.inputGroup} ${
                      focusedField === "name" || formData.name ? styles.floated : ""
                    }`}
                  >
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <label htmlFor="name" className={styles.floatingLabel}>
                      YOUR FULL NAME
                    </label>
                    <span className={styles.animatedUnderline} />
                  </div>

                  {/* Phone Field */}
                  <div
                    className={`${styles.inputGroup} ${
                      focusedField === "phone" || formData.phone ? styles.floated : ""
                    }`}
                  >
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <label htmlFor="phone" className={styles.floatingLabel}>
                      PHONE NUMBER
                    </label>
                    <span className={styles.animatedUnderline} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  {/* Vehicle Field */}
                  <div
                    className={`${styles.inputGroup} ${
                      focusedField === "vehicle" || formData.vehicle ? styles.floated : ""
                    }`}
                  >
                    <input
                      type="text"
                      id="vehicle"
                      required
                      value={formData.vehicle}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("vehicle")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <label htmlFor="vehicle" className={styles.floatingLabel}>
                      VEHICLE MAKE & MODEL
                    </label>
                    <span className={styles.animatedUnderline} />
                  </div>

                  {/* Service Dropdown */}
                  <div
                    className={`${styles.inputGroup} ${
                      focusedField === "service" || formData.service ? styles.floated : ""
                    }`}
                  >
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="" disabled hidden></option>
                      <option value="interior-exterior-detailing">Interior & Exterior Detailing</option>
                      <option value="graphene-coating">Graphene Coating</option>
                      <option value="ceramic-coating">Ceramic Coating</option>
                      <option value="ppf">Paint Protection Film (PPF)</option>
                      <option value="color-ppf">Color PPF</option>
                      <option value="sun-films">Sun Films</option>
                      <option value="other">Multiple Services / Consultation</option>
                    </select>
                    <label htmlFor="service" className={styles.floatingLabel}>
                      PRIMARY SERVICE
                    </label>
                    <span className={styles.animatedUnderline} />
                  </div>
                </div>

                {/* Message Field */}
                <div
                  className={`${styles.inputGroup} ${
                    focusedField === "message" || formData.message ? styles.floated : ""
                  }`}
                >
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <label htmlFor="message" className={styles.floatingLabel}>
                    MESSAGE / REQUIREMENTS
                  </label>
                  <span className={styles.animatedUnderline} />
                </div>

                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    className={`${styles.submitBtn} ${
                      submitState === "loading" ? styles.submitLoading : ""
                    }`}
                    disabled={submitState === "loading"}
                  >
                    {submitState === "loading" ? (
                      <>
                        <span className={styles.spinner} />
                        PROCESSING...
                      </>
                    ) : (
                      <>
                        REQUEST CONSULTATION
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
