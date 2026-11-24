import type { ReactNode } from "react";
import styles from "./Panel.module.css";

export interface PanelProps {
  children: ReactNode;
  /** For aria-controls on the button that opens it. */
  id?: string;
}

/** The collapsible area above the dock buttons. */
export function Panel({ children, id }: PanelProps) {
  return (
    <section id={id} className={styles.panel}>
      {children}
    </section>
  );
}
