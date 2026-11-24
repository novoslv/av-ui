import type { CSSProperties } from "react";
import styles from "./Swatch.module.css";

export interface SwatchProps {
  /** Any CSS colour string. This is data, not styling. */
  colour: string;
  /** Accessible name. Without it the swatch is decorative. */
  label?: string;
  /** Hatched "nothing selected" look. Overrides `colour`. */
  empty?: boolean;
}

export function Swatch({ colour, label, empty }: SwatchProps) {
  const style = { "--swatch": colour } as CSSProperties;
  const cls = empty ? `${styles.swatch} ${styles.empty}` : styles.swatch;
  if (label) {
    return <span className={cls} style={style} role="img" aria-label={label} />;
  }
  return <span className={cls} style={style} aria-hidden="true" />;
}
