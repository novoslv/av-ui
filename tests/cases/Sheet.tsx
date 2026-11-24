import { Sheet } from "../../src/primitives/Sheet";

const frame = { position: "relative", width: 368, height: 240 } as const;

export default {
  open: (
    <div style={frame}>
      <Sheet open>
        <span>Sheet content</span>
      </Sheet>
    </div>
  ),
  solid: (
    <div style={frame}>
      <Sheet open solid>
        <span>Sheet content</span>
      </Sheet>
    </div>
  ),
  closed: (
    <div style={frame}>
      <Sheet open={false}>
        <span>Hidden</span>
      </Sheet>
    </div>
  ),
};
