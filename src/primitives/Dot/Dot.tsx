import styles from "./Dot.module.css";

export interface DotProps {
  on: boolean;
  variant?: "fg" | "accent";
  /** Accessible name, for example "Kick". */
  label: string;
}

export function Dot({ on, variant = "fg", label }: DotProps) {
  const cls = [styles.dot, styles[variant], on ? styles.on : ""].join(" ");
  return <span className={cls} role="img" aria-label={label} title={label} />;
}
