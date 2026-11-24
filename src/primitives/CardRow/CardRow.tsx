import type { ReactNode } from "react";
import styles from "./CardRow.module.css";

export interface CardRowProps {
  children: ReactNode;
  /** Accessible name of the group, for example "Effects". */
  label: string;
}

/** Horizontally scrolling row of cards, scrollbar hidden. */
export function CardRow({ children, label }: CardRowProps) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: a fieldset can't be a scrolling flex row
    <div className={styles.row} role="group" aria-label={label}>
      {children}
    </div>
  );
}
