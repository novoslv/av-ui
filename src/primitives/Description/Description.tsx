import styles from "./Description.module.css";

export interface DescriptionProps {
  children: string;
}

/** Muted plain-language text (effect descriptions, hints). */
export function Description({ children }: DescriptionProps) {
  return <p className={styles.desc}>{children}</p>;
}
