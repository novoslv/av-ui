import type { ReactNode } from "react";
import styles from "./Dock.module.css";

export interface DockProps {
  children: ReactNode;
}

export function Dock({ children }: DockProps) {
  return <div className={styles.dock}>{children}</div>;
}
