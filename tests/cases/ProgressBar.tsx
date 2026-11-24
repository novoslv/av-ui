import { ProgressBar } from "../../src/primitives/ProgressBar";

const frame = { width: 368 } as const;

export default {
  empty: (
    <div style={frame}>
      <ProgressBar value={0} label="Rendering" />
    </div>
  ),
  half: (
    <div style={frame}>
      <ProgressBar value={0.5} label="Rendering" />
    </div>
  ),
  full: (
    <div style={frame}>
      <ProgressBar value={1} label="Rendering" />
    </div>
  ),
};
