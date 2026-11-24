import styles from "./Toast.module.css";

export interface ToastProps {
  message: string;
}

export function Toast({ message }: ToastProps) {
  return (
    <div className={styles.toast} role="status">
      {message}
    </div>
  );
}
