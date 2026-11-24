import type { ReactNode } from "react";
import styles from "./IconButton.module.css";

export interface IconButtonProps {
  /** Glyph or icon, for example "?". */
  children: ReactNode;
  /** Accessible name, for example "Explain Trails". */
  label: string;
  onClick?: () => void;
  pressed?: boolean;
  disabled?: boolean;
}

export function IconButton({
  children,
  label,
  onClick,
  pressed,
  disabled,
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={styles.icon}
      aria-label={label}
      aria-pressed={pressed}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
