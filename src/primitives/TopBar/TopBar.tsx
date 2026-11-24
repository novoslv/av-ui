import type { ReactNode } from "react";
import styles from "./TopBar.module.css";

export interface TopBarProps {
  /** Left side: file name, resolution, fps. */
  children: ReactNode;
  /** Right side slot, for example indicator dots. */
  end?: ReactNode;
}

export function TopBar({ children, end }: TopBarProps) {
  return (
    <div className={styles.bar}>
      <span className={styles.meta}>{children}</span>
      {end ? <span className={styles.end}>{end}</span> : null}
    </div>
  );
}
