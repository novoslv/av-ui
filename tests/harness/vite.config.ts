import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

// Test-only harness: renders one primitive state per URL for screenshots.
// It is not shipped and is not a gallery. Review happens in Figma + the apps.
export default defineConfig({
  root: resolve(root, "tests/harness"),
  plugins: [react()],
  resolve: { alias: { "@": resolve(root, "src") } },
  server: { fs: { allow: [root] } },
});
