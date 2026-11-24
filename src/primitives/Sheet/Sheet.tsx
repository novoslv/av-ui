import type { ReactNode } from "react";
import styles from "./Sheet.module.css";

export interface SheetProps {
  open: boolean;
  children: ReactNode;
  /** Opaque backdrop (for forms). Default is the see-through scrim. */
  solid?: boolean;
}

export function Sheet({ open, children, solid }: SheetProps) {
  if (!open) return null;
  return (
    <div className={solid ? `${styles.sheet} ${styles.solid}` : styles.sheet}>
      {children}
    </div>
  );
}
