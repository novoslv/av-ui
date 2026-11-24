import type { CSSProperties } from "react";
import styles from "./Swatch.module.css";

export interface SwatchProps {
  /** Any CSS colour string. This is data, not styling. */
  colour: string;
  /** Accessible name. Without it the swatch is decorative. */
  label?: string;
}

export function Swatch({ colour, label }: SwatchProps) {
  const style = { "--swatch": colour } as CSSProperties;
  if (label) {
    return (
      <span
        className={styles.swatch}
        style={style}
        role="img"
        aria-label={label}
      />
    );
  }
  return <span className={styles.swatch} style={style} aria-hidden="true" />;
}
