import type { ReactNode } from "react";
import styles from "./Card.module.css";

export interface CardProps {
  label: string;
  /** An <svg> using currentColor. It is sized by the card. */
  icon: ReactNode;
  /** The effect is switched on (shows the dot, brightens the card). */
  on?: boolean;
  /** This card is the one whose controls are shown. */
  current?: boolean;
  onSelect?: () => void;
  /** Accessible name, for example "Show Trails controls". */
  ariaLabel?: string;
}

export function Card({
  label,
  icon,
  on,
  current,
  onSelect,
  ariaLabel,
}: CardProps) {
  return (
    <div
      className={on ? `${styles.card} ${styles.on}` : styles.card}
      aria-current={current ? "true" : undefined}
    >
      <button
        type="button"
        className={styles.select}
        aria-label={ariaLabel ?? label}
        onClick={onSelect}
      >
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
        <span>{label}</span>
      </button>
      <span className={styles.dot} aria-hidden="true" />
    </div>
  );
}
