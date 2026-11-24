import styles from "./TextInput.module.css";

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  /** Accessible name. */
  label: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
}

export function TextInput({
  value,
  onChange,
  label,
  placeholder,
  disabled,
  maxLength,
}: TextInputProps) {
  return (
    <input
      type="text"
      className={styles.input}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      aria-label={label}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
}
