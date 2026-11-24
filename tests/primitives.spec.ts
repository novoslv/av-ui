import { expect, test } from "@playwright/test";

// One screenshot per primitive state. Cases come from tests/cases/*.tsx.
test("primitive screenshots", async ({ page }) => {
  await page.goto("/");
  const ids: string[] = JSON.parse(
    (await page.locator("#root").getAttribute("data-cases")) ?? "[]",
  );
  expect(ids.length).toBeGreaterThan(0);

  for (const id of ids) {
    await page.goto(`/?case=${encodeURIComponent(id)}`);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("#case")).toHaveScreenshot(
      `${id.replace("/", "-")}.png`,
    );
  }
});
