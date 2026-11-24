import type { ReactNode } from "react";
import styles from "./PickGrid.module.css";

export interface PickGridProps {
  /** Left column label, for example "Colour" or "Ignore". */
  label: string;
  /** Right column label, for example "Tolerance". Leave out for none. */
  secondLabel?: string;
  description?: string;
  showDescription?: boolean;
  /** Left control: a Swatch and a Select. */
  pick: ReactNode;
  /** Right control: the tolerance Slider. */
  slider?: ReactNode;
  /** Muted line below, for example "Takes reds and oranges". */
  readout?: string;
}

/** The Colour + Tolerance pair (and the Ignore row) of the sand effects. */
export function PickGrid({
  label,
  secondLabel,
  description,
  showDescription = false,
  pick,
  slider,
  readout,
}: PickGridProps) {
  return (
    <div className={styles.field}>
      <div className={styles.grid}>
        <span className={styles.label}>{label}</span>
        {secondLabel ? (
          <span className={styles.label}>{secondLabel}</span>
        ) : (
          <span />
        )}
        {description && showDescription && (
          <p className={styles.desc}>{description}</p>
        )}
        <div className={styles.pick}>{pick}</div>
        {slider ?? <span />}
      </div>
      {readout !== undefined && (
        <output className={styles.readout}>{readout}</output>
      )}
    </div>
  );
}
