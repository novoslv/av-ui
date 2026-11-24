import {
  Card,
  CardRow,
  ControlStack,
  Description,
  Field,
  Panel,
  PanelHeader,
  Slider,
  Stack,
} from "../../src";

const noop = () => {};
const icon = (
  <svg viewBox="0 0 36 36" fill="currentColor" aria-hidden="true">
    <circle cx="18" cy="18" r="8" />
  </svg>
);

export default {
  open: (
    <div style={{ width: 368 }}>
      <Panel id="panel">
        <CardRow label="Effects">
          <Card label="Trails" icon={icon} on current onSelect={noop} />
          <Card label="Crumble" icon={icon} onSelect={noop} />
          <Card label="Erosion" icon={icon} onSelect={noop} />
          <Card label="Fourth" icon={icon} onSelect={noop} />
        </CardRow>
        <ControlStack>
          <Stack>
            <PanelHeader
              name="Trails"
              enabled
              onToggle={noop}
              toggleLabel="Trails on or off"
              helpPressed
              onHelp={noop}
              helpLabel="Explain Trails"
            />
            <Description>
              Anything that moves leaves a glowing ghost behind it.
            </Description>
            <Field
              label="Tail length"
              output="0.955"
              description="How long."
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
          </Stack>
        </ControlStack>
      </Panel>
    </div>
  ),
};
