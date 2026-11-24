import { Button, PanelHeader } from "../../src";

const noop = () => {};
const w = { width: 368 };

export default {
  on: (
    <div style={w}>
      <PanelHeader
        name="Trails"
        enabled
        onToggle={noop}
        toggleLabel="Trails on or off"
        helpPressed={false}
        onHelp={noop}
        helpLabel="Explain Trails"
      />
    </div>
  ),
  "off-help": (
    <div style={w}>
      <PanelHeader
        name="Beat Crumble"
        enabled={false}
        onToggle={noop}
        toggleLabel="Beat Crumble on or off"
        helpPressed
        onHelp={noop}
        helpLabel="Explain Beat Crumble"
      />
    </div>
  ),
  actions: (
    <div style={w}>
      <PanelHeader
        name="Edge Erosion"
        enabled
        onToggle={noop}
        toggleLabel="Edge Erosion on or off"
        helpPressed={false}
        onHelp={noop}
        helpLabel="Explain Edge Erosion"
        actions={
          <Button variant="ghost" onClick={noop}>
            Presets
          </Button>
        }
      />
    </div>
  ),
};
