import { Field } from "../../src/primitives/Field";
import { Slider } from "../../src/primitives/Slider";
import { Toggle } from "../../src/primitives/Toggle";

const noop = () => {};
const w = { width: 368 };

export default {
  slider: (
    <div style={w}>
      <Field
        label="Tail length"
        output="0.955"
        description="How long the ghosts stay before they fade away."
        showDescription
      >
        <Slider
          value={0.955}
          min={0.85}
          max={0.995}
          step={0.001}
          onChange={noop}
          label="Tail length"
        />
      </Field>
    </div>
  ),
  "no-description": (
    <div style={w}>
      <Field
        label="Tail length"
        output="0.955"
        description="Hidden until ? is on."
      >
        <Slider
          value={0.955}
          min={0.85}
          max={0.995}
          step={0.001}
          onChange={noop}
          label="Tail length"
        />
      </Field>
    </div>
  ),
  toggle: (
    <div style={w}>
      <Field
        label="Bounce"
        description="Grains hit the edge of the picture and bounce back."
        showDescription
        trailing={<Toggle checked onChange={noop} label="Bounce" />}
      />
    </div>
  ),
};
