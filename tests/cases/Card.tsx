import { Card } from "../../src/primitives/Card";

const noop = () => {};
const icon = (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="8" cy="18" r="6" opacity=".18" />
    <circle cx="13" cy="18" r="6.5" opacity=".35" />
    <circle cx="19.5" cy="18" r="7" opacity=".6" />
    <circle cx="27" cy="18" r="7.5" fill="currentColor" />
  </svg>
);

export default {
  off: <Card label="Trails" icon={icon} onSelect={noop} />,
  on: <Card label="Trails" icon={icon} on onSelect={noop} />,
  current: <Card label="Trails" icon={icon} current onSelect={noop} />,
  "current-on": <Card label="Trails" icon={icon} current on onSelect={noop} />,
};
