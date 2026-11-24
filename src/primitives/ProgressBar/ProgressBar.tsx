import type { CSSProperties } from "react";
import styles from "./ProgressBar.module.css";

export interface ProgressBarProps {
  /** 0 to 1. */
  value: number;
  /** Accessible name, for example "Rendering". */
  label: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  const clamped = Math.min(1, Math.max(0, value));
  return (
    <div
      className={styles.bar}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped * 100)}
    >
      <div
        className={styles.fill}
        style={{ "--p": `${clamped * 100}%` } as CSSProperties}
      />
    </div>
  );
}
