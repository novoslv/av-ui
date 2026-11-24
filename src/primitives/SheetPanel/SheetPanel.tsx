import type { ReactNode } from "react";
import styles from "./SheetPanel.module.css";

export interface SheetPanelProps {
  title: string;
  children: ReactNode;
}

/** Titled content column inside a Sheet. */
export function SheetPanel({ title, children }: SheetPanelProps) {
  return (
    <div className={styles.panel} role="dialog" aria-label={title}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
