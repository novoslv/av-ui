import { Tabs } from "../../src/primitives/Tabs";

const noop = () => {};
const two = [
  { id: "effects", label: "Effects" },
  { id: "mod", label: "Mod" },
];
const three = [...two, { id: "presets", label: "Presets" }];

export default {
  "two-first": (
    <Tabs items={two} value="effects" onChange={noop} label="Panel" />
  ),
  "two-second": <Tabs items={two} value="mod" onChange={noop} label="Panel" />,
  three: <Tabs items={three} value="mod" onChange={noop} label="Panel" />,
};
