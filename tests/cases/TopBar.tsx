import { Dot } from "../../src/primitives/Dot";
import { TopBar } from "../../src/primitives/TopBar";

const frame = { position: "relative", width: 368, height: 60 } as const;

export default {
  default: (
    <div style={frame}>
      <TopBar
        end={
          <>
            <Dot on={false} variant="accent" label="Trigger" />
            <Dot on variant="fg" label="Kick" />
          </>
        }
      >
        clip.mov · 1080×1920 · 60 fps
      </TopBar>
    </div>
  ),
  "long-name": (
    <div style={frame}>
      <TopBar>
        a-very-long-file-name-that-must-truncate-with-an-ellipsis-0001.mov ·
        1080×1920 · 60 fps
      </TopBar>
    </div>
  ),
};
