import type { ReactNode } from "react";
import styles from "./Stack.module.css";

export interface StackProps {
  children: ReactNode;
  /** sm = 8, md = 14, lg = 20 (design tokens). */
  gap?: "sm" | "md" | "lg";
}

/** Vertical stack with a token gap. */
export function Stack({ children, gap = "md" }: StackProps) {
  return <div className={`${styles.stack} ${styles[gap]}`}>{children}</div>;
}
