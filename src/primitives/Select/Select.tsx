import styles from "./Select.module.css";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: readonly SelectOption[];
  value: string;
  onChange: (value: string) => void;
  /** Accessible name. */
  label: string;
  disabled?: boolean;
}

export function Select({
  options,
  value,
  onChange,
  label,
  disabled,
}: SelectProps) {
  return (
    <select
      className={styles.select}
      value={value}
      disabled={disabled}
      aria-label={label}
      onChange={(e) => onChange(e.currentTarget.value)}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
