import { PickGrid, Select, Slider, Swatch } from "../../src";

const noop = () => {};
const w = { width: 368 };
const options = [
  { value: "-1", label: "Any colour" },
  { value: "0", label: "Reds" },
  { value: "225", label: "Blues" },
];
const band =
  "linear-gradient(to right, var(--colour-hue-0), var(--colour-hue-1), var(--colour-hue-2))";

export default {
  colour: (
    <div style={w}>
      <PickGrid
        label="Colour"
        secondLabel="Tolerance"
        description="Colour picks which colour turns to sand."
        showDescription
        pick={
          <>
            <Swatch colour="hsl(0 90% 55%)" />
            <Select
              options={options}
              value="0"
              onChange={noop}
              label="Colour"
            />
          </>
        }
        slider={
          <Slider
            variant="band"
            band={band}
            value={0.5}
            min={0}
            max={1}
            step={0.01}
            onChange={noop}
            label="Colour tolerance"
          />
        }
        readout="Takes reds and oranges"
      />
    </div>
  ),
  ignore: (
    <div style={w}>
      <PickGrid
        label="Ignore"
        description="Keeps one colour out of the sand."
        showDescription
        pick={
          <>
            <Swatch colour="" empty />
            <Select
              options={options}
              value="-1"
              onChange={noop}
              label="Ignore"
            />
          </>
        }
      />
    </div>
  ),
  "no-description": (
    <div style={w}>
      <PickGrid
        label="Ignore"
        description="Hidden."
        pick={
          <>
            <Swatch colour="" empty />
            <Select
              options={options}
              value="-1"
              onChange={noop}
              label="Ignore"
            />
          </>
        }
      />
    </div>
  ),
};
