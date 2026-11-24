# av-ui

Shared design system for the AV apps (Clip FX, MMV, ...). Figma is the source of
truth for tokens; primitives live in `src/primitives/`.

```ts
import "av-ui/fonts.css";
import "av-ui/tokens.css";
import "av-ui/style.css";
import { Button, Slider } from "av-ui";
```

Install pinned to a tag: `"av-ui": "github:novoslv/av-ui#v0.1.0"`.

## Commands

- `npm run build` builds tokens, the library and the types into `dist/`
- `npm run lint` runs Biome and Stylelint (no raw colours or px outside tokens)
- `npm test` runs the per-state screenshot tests; `npm run test:update`
  refreshes the goldens after an intended change

Rules: `tokens/tokens.json` is generated from Figma, never hand-edited in
normal work. Primitives take no `className` or `style` props.
