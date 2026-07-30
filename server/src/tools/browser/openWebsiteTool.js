import { Tool } from "../base/Tool.js";
import { getPage } from "./browser.js";
import { WEBSITES } from "./websites.js";

export const openWebsiteTool = new Tool({

  name: "open_website",

  description: "Open websites in browser",

  schema: {
    site: "string",
  },

  async execute(args) {

    const site = args.site.toLowerCase().trim();

    const url = WEBSITES[site];

    if (!url) {
      return `Unknown website: ${site}`;
    }

    const page = await getPage();

    console.log("Opening:", url);

    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });

    return `Opened ${site}`;

  }

});