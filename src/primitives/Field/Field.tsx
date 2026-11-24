import type { ReactNode } from "react";
import styles from "./Field.module.css";

export interface FieldProps {
  label: string;
  /** Current value as text, shown on the right in mono. */
  output?: string;
  /** Something in place of the value, for example a <Toggle />. */
  trailing?: ReactNode;
  description?: string;
  /** Hide descriptions unless the "?" button is on. */
  showDescription?: boolean;
  children?: ReactNode;
}

/** Label + value, the plain-language description, then the control. */
export function Field({
  label,
  output,
  trailing,
  description,
  showDescription = false,
  children,
}: FieldProps) {
  return (
    <div className={styles.field}>
      <div className={styles.lab}>
        <span className={styles.name}>{label}</span>
        {output !== undefined && (
          <output className={styles.output}>{output}</output>
        )}
        {trailing}
      </div>
      {description && showDescription && (
        <p className={styles.desc}>{description}</p>
      )}
      {children}
    </div>
  );
}
