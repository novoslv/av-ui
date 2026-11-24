import { Button, ButtonRow, FileButton } from "../../src/primitives/Button";

const noop = () => {};

export default {
  solid: <Button onClick={noop}>Save video</Button>,
  "solid-lg": (
    <Button size="lg" onClick={noop}>
      Load a video
    </Button>
  ),
  ghost: (
    <Button variant="ghost" onClick={noop}>
      Random
    </Button>
  ),
  "ghost-expanded": (
    <Button variant="ghost" expanded onClick={noop}>
      Effects
    </Button>
  ),
  "ghost-sm": (
    <Button variant="ghost" size="sm" onClick={noop}>
      Presets
    </Button>
  ),
  record: (
    <Button tone="record" onClick={noop}>
      Export
    </Button>
  ),
  disabled: <Button disabled>Export</Button>,
  "ghost-disabled": (
    <Button variant="ghost" disabled>
      Random
    </Button>
  ),
  file: <FileButton onFile={noop}>Load</FileButton>,
  row: (
    <div style={{ width: 368 }}>
      <ButtonRow>
        <FileButton onFile={noop}>Load</FileButton>
        <Button variant="ghost" onClick={noop}>
          Random
        </Button>
        <Button variant="ghost" expanded onClick={noop}>
          Effects
        </Button>
        <Button disabled>Export</Button>
      </ButtonRow>
    </div>
  ),
};
