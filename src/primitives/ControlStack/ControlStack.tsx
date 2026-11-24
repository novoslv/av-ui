import type { ReactNode } from "react";
import styles from "./ControlStack.module.css";

export interface ControlStackProps {
  children: ReactNode;
}

/** The scrolling controls area (about 30% of the screen height). */
export function ControlStack({ children }: ControlStackProps) {
  return <div className={styles.stack}>{children}</div>;
}
