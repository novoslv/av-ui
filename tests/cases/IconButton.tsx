import { IconButton } from "../../src/primitives/IconButton";

const noop = () => {};

export default {
  default: (
    <IconButton label="Explain Trails" onClick={noop}>
      ?
    </IconButton>
  ),
  pressed: (
    <IconButton label="Explain Trails" pressed onClick={noop}>
      ?
    </IconButton>
  ),
  disabled: (
    <IconButton label="Explain Trails" disabled>
      ?
    </IconButton>
  ),
};
