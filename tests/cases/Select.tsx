import { Select } from "../../src/primitives/Select";

const noop = () => {};
const options = [
  { value: "-1", label: "Any colour" },
  { value: "0", label: "Reds" },
  { value: "225", label: "Blues" },
];

export default {
  default: (
    <Select options={options} value="0" onChange={noop} label="Colour" />
  ),
  disabled: (
    <Select
      options={options}
      value="-1"
      onChange={noop}
      label="Colour"
      disabled
    />
  ),
};
