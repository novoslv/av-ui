import { Dock } from "../../src/primitives/Dock";

const frame = { position: "relative", width: 368, height: 120 } as const;

export default {
  default: (
    <div style={frame}>
      <Dock>
        <span>Dock content</span>
      </Dock>
    </div>
  ),
};
