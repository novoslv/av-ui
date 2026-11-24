import type { ReactNode } from "react";
import { buttonClass } from "./Button";

export interface FileButtonProps {
  children: ReactNode;
  onFile: (file: File) => void;
  accept?: string;
  variant?: "solid" | "ghost";
  size?: "md" | "lg";
}

/** A button that opens the file picker (a label wrapping a hidden input). */
export function FileButton({
  children,
  onFile,
  accept = "video/*",
  variant = "ghost",
  size = "md",
}: FileButtonProps) {
  return (
    <label className={buttonClass(variant, "default", size)}>
      {children}
      <input
        type="file"
        accept={accept}
        hidden
        onChange={(e) => {
          const file = e.currentTarget.files?.[0];
          if (file) onFile(file);
          e.currentTarget.value = "";
        }}
      />
    </label>
  );
}
