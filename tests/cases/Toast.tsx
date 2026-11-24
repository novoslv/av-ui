import { Toast } from "../../src/primitives/Toast";

const frame = { position: "relative", width: 368, height: 140 } as const;

export default {
  short: (
    <div style={frame}>
      <Toast message="Saved" />
    </div>
  ),
  long: (
    <div style={frame}>
      <Toast message="Float render targets are not supported here, so the trails fall back to 8-bit." />
    </div>
  ),
};
