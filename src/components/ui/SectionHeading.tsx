import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ number, label, title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${align === "center" ? styles.center : ""} reveal`}>
      <div className={styles.meta}>
        <span className={styles.number}>{number}</span>
        <span className={styles.divider}></span>
        <span className={styles.label}>{label}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
