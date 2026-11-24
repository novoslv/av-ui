import type { ReactNode } from "react";
import styles from "./Sheet.module.css";

export interface SheetProps {
  open: boolean;
  children: ReactNode;
}

export function Sheet({ open, children }: SheetProps) {
  if (!open) return null;
  return <div className={styles.sheet}>{children}</div>;
}
