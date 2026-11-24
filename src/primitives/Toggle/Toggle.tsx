import styles from "./Toggle.module.css";

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Accessible name, for example "Trails on or off". */
  label: string;
  disabled?: boolean;
  id?: string;
}

export function Toggle({
  checked,
  onChange,
  label,
  disabled,
  id,
}: ToggleProps) {
  return (
    <input
      id={id}
      type="checkbox"
      role="switch"
      aria-checked={checked}
      className={styles.toggle}
      checked={checked}
      disabled={disabled}
      aria-label={label}
      onChange={(e) => onChange(e.currentTarget.checked)}
    />
  );
}
