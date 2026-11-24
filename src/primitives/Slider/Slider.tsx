import type { CSSProperties } from "react";
import styles from "./Slider.module.css";

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  /** Accessible name. */
  label: string;
  /** default = accent fill, hue = rainbow track, band = custom gradient. */
  variant?: "default" | "hue" | "band";
  /** CSS gradient for the band variant (data, for example the matched hues). */
  band?: string;
  disabled?: boolean;
  id?: string;
}

export function Slider({
  value,
  onChange,
  min,
  max,
  step = 1,
  label,
  variant = "default",
  band,
  disabled,
  id,
}: SliderProps) {
  const percent = max > min ? ((value - min) / (max - min)) * 100 : 0;
  const style = {
    "--p": `${percent}%`,
    "--h": value,
    "--band": band,
  } as CSSProperties;
  const cls =
    variant === "default"
      ? styles.slider
      : `${styles.slider} ${styles[variant]}`;

  return (
    <input
      id={id}
      type="range"
      className={cls}
      style={style}
      value={value}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      aria-label={label}
      onChange={(e) => onChange(e.currentTarget.valueAsNumber)}
    />
  );
}
