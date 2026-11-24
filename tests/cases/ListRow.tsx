import { Button, ListRow, SheetPanel, Stack, TextInput } from "../../src";

const noop = () => {};

export default {
  row: (
    <div style={{ width: 360 }}>
      <ListRow
        label="Warm trails"
        actions={
          <>
            <Button variant="ghost" onClick={noop}>
              Load
            </Button>
            <Button variant="ghost" onClick={noop}>
              Delete
            </Button>
          </>
        }
      />
    </div>
  ),
  "long-name": (
    <div style={{ width: 360 }}>
      <ListRow
        label="A very long preset name that has to be cut off with an ellipsis"
        actions={
          <Button variant="ghost" onClick={noop}>
            Load
          </Button>
        }
      />
    </div>
  ),
  "sheet-panel": (
    <div style={{ width: 360 }}>
      <SheetPanel title="Presets">
        <Stack>
          <TextInput
            value=""
            onChange={noop}
            label="Preset name"
            placeholder="Name"
          />
          <Button onClick={noop}>Save current settings</Button>
        </Stack>
      </SheetPanel>
    </div>
  ),
};
