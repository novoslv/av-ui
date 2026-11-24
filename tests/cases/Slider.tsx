import { Slider } from "../../src/primitives/Slider";

const noop = () => {};
const band =
  "linear-gradient(to right, var(--colour-line) 30%, var(--colour-accent) 30% 70%, var(--colour-line) 70%)";

export default {
  low: (
    <Slider
      value={0.1}
      min={0}
      max={1}
      step={0.01}
      onChange={noop}
      label="Amount"
    />
  ),
  mid: (
    <Slider
      value={0.5}
      min={0}
      max={1}
      step={0.01}
      onChange={noop}
      label="Amount"
    />
  ),
  full: (
    <Slider
      value={1}
      min={0}
      max={1}
      step={0.01}
      onChange={noop}
      label="Amount"
    />
  ),
  disabled: (
    <Slider
      value={0.5}
      min={0}
      max={1}
      step={0.01}
      onChange={noop}
      label="Amount"
      disabled
    />
  ),
  hue: (
    <Slider
      variant="hue"
      value={200}
      min={0}
      max={360}
      onChange={noop}
      label="Hue"
    />
  ),
  band: (
    <Slider
      variant="band"
      band={band}
      value={0.5}
      min={0}
      max={1}
      step={0.01}
      onChange={noop}
      label="Tolerance"
    />
  ),
};
