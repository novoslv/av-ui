import { TextInput } from "../../src";

const noop = () => {};

export default {
  empty: <TextInput value="" onChange={noop} label="Name" placeholder="Name" />,
  filled: <TextInput value="Warm trails" onChange={noop} label="Name" />,
  disabled: <TextInput value="Locked" onChange={noop} label="Name" disabled />,
};
