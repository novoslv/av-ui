import { Toggle } from "../../src";

const noop = () => {};

export default {
  off: <Toggle checked={false} onChange={noop} label="Off" />,
  on: <Toggle checked onChange={noop} label="On" />,
  disabled: (
    <Toggle checked={false} disabled onChange={noop} label="Disabled" />
  ),
};
