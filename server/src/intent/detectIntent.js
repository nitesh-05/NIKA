import { normalizeApp } from "./normalizer.js";
import { normalizeWebsite } from "./websiteNormalizer.js";
import { WEBSITES } from "../tools/browser/websites.js";


export function detectIntent(message) {

  const text = message.toLowerCase().trim();

  // search command
  if (text.startsWith("search ")) {

    const query = message.replace(/^search/i, "").trim();

    return {
        type: "tool",
        tool: "search_google",
        arguments: {
            query,
        },
    };
}

  // Open command
  if (text.startsWith("open ")) {

   let target = text
  .replace("open ", "")
  .trim()
  .toLowerCase()
  .replace(/[^\w\s]/g, "");

  target = target.replace(/(.+)\s+\1$/i, "$1");

  target = normalizeWebsite(target);

    // Website
    if (WEBSITES[target]) {
      return {
        type: "tool",
        tool: "open_website",
        arguments: {
          site: target,
        },
      };
    }

    // Desktop Application
    return {
      type: "tool",
      tool: "open_app",
      arguments: {
        app: normalizeApp(target),
      },
    };
  }

  return null;
}