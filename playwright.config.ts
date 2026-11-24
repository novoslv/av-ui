import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  testMatch: "**/*.spec.ts",
  snapshotPathTemplate: "tests/__screenshots__/{arg}{ext}",
  webServer: {
    command: "npm run tokens && npm run dev -- --port 5180",
    url: "http://localhost:5180",
    reuseExistingServer: true,
  },
  use: {
    baseURL: "http://localhost:5180",
    viewport: { width: 400, height: 820 },
    deviceScaleFactor: 2,
  },
});
