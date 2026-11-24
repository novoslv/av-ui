import type { ReactNode } from "react";
import { IconButton } from "../IconButton";
import { Toggle } from "../Toggle";
import styles from "./PanelHeader.module.css";

export interface PanelHeaderProps {
  name: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  /** Accessible name of the toggle, for example "Trails on or off". */
  toggleLabel: string;
  helpPressed: boolean;
  onHelp: () => void;
  /** Accessible name of the "?" button, for example "Explain Trails". */
  helpLabel: string;
  /** Extra buttons placed before the "?" (for example Presets). */
  actions?: ReactNode;
}

/** Effect name, optional actions, the "?" help button and the on/off toggle. */
export function PanelHeader({
  name,
  enabled,
  onToggle,
  toggleLabel,
  helpPressed,
  onHelp,
  helpLabel,
  actions,
}: PanelHeaderProps) {
  return (
    <div className={styles.head}>
      <span className={styles.name}>{name}</span>
      {actions}
      <IconButton label={helpLabel} pressed={helpPressed} onClick={onHelp}>
        ?
      </IconButton>
      <Toggle checked={enabled} onChange={onToggle} label={toggleLabel} />
    </div>
  );
}
