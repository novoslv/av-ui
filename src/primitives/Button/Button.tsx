import type { ReactNode } from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  /** solid = white pill (CTA), ghost = outlined pill. */
  variant?: "solid" | "ghost";
  /** record turns a solid button red (for example while recording). */
  tone?: "default" | "record";
  /** sm = compact (as tall as the round help button), for panel headers. */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** For toggling a panel: sets aria-expanded and the accent state. */
  expanded?: boolean;
  controls?: string;
  id?: string;
}

export function buttonClass(
  variant: "solid" | "ghost",
  tone: "default" | "record",
  size: "sm" | "md" | "lg",
): string {
  return [
    styles.button,
    styles[variant],
    tone === "record" && variant === "solid" ? styles.record : "",
    size === "sm" ? styles.sm : variant === "solid" ? styles[size] : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  children,
  onClick,
  variant = "solid",
  tone = "default",
  size = "md",
  disabled,
  expanded,
  controls,
  id,
}: ButtonProps) {
  return (
    <button
      id={id}
      type="button"
      className={buttonClass(variant, tone, size)}
      disabled={disabled}
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
