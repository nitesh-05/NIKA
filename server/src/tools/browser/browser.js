import { chromium } from "playwright";

let browser = null;
let page = null;

export async function getPage() {

  try {

    // Browser doesn't exist OR is disconnected
    if (!browser || !browser.isConnected()) {

      browser = await chromium.launch({
        headless: false,
      });

      const context = await browser.newContext();

      page = await context.newPage();

      browser.on("disconnected", () => {
        console.log("Browser closed");

        browser = null;
        page = null;
      });

    }

    // Page closed?
    if (!page || page.isClosed()) {

      const context = await browser.newContext();

      page = await context.newPage();

    }

    return page;

  } catch (err) {

    browser = null;
    page = null;

    throw err;

  }

}