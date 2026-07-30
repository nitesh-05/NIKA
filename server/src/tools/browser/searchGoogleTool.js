import { Tool } from "../base/Tool.js";
import { getPage } from "./browser.js";

export const searchGoogleTool = new Tool({
  name: "search_google",

  description: "Search anything on Google.",

  schema: {
    query: "string",
  },

  async execute(args) {
    const page = await getPage();

    await page.goto("https://www.google.com");

    // Accept cookies if shown
    try {
      await page.getByRole("button", { name: /accept/i }).click({
        timeout: 3000,
      });
    } catch {}

    await page.locator("textarea[name='q']").fill(args.query);

    await page.keyboard.press("Enter");

    await page.waitForLoadState("networkidle");

    return `Searched Google for "${args.query}"`;
  },
});