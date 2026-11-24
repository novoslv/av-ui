import type { ReactNode } from "react";
import styles from "./ListRow.module.css";

export interface ListRowProps {
  label: string;
  /** Buttons on the right. */
  actions?: ReactNode;
}

/** One entry of a list (a saved preset): a name and its buttons. */
export function ListRow({ label, actions }: ListRowProps) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      {actions && <span className={styles.actions}>{actions}</span>}
    </div>
  );
}
