import type { CSSProperties, ReactNode } from "react";
import styles from "./ButtonRow.module.css";

export interface ButtonRowProps {
  children: ReactNode;
  /** Number of equal columns. Defaults to the number of buttons. */
  columns?: number;
}

export function ButtonRow({ children, columns }: ButtonRowProps) {
  const style = columns ? ({ "--cols": columns } as CSSProperties) : undefined;
  return (
    <div className={styles.row} style={style}>
      {children}
    </div>
  );
}
