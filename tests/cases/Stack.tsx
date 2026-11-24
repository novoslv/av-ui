import { Description, Stack } from "../../src";

const w = { width: 368 };

export default {
  md: (
    <div style={w}>
      <Stack>
        <Description>One line of text.</Description>
        <Description>Another line, fourteen pixels below.</Description>
      </Stack>
    </div>
  ),
  sm: (
    <div style={w}>
      <Stack gap="sm">
        <Description>Tight stack.</Description>
        <Description>Eight pixels apart.</Description>
      </Stack>
    </div>
  ),
  lg: (
    <div style={w}>
      <Stack gap="lg">
        <Description>Loose stack.</Description>
        <Description>Twenty pixels apart.</Description>
      </Stack>
    </div>
  ),
};
