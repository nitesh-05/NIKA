import { normalizeApp } from "./normalizer.js";
import { normalizeWebsite } from "./websiteNormalizer.js";
import { WEBSITES } from "../tools/browser/websites.js";

export function detectIntent(message) {

  const text = message
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, "");

  // ---------------- SEARCH ----------------

  const searchMatch = text.match(
    /(?:please\s+)?(?:can\s+you\s+)?(?:search)\s+(.+)/i
  );

  if (searchMatch) {

    return {
      type: "tool",
      tool: "search_google",
      arguments: {
        query: searchMatch[1].trim(),
      },
    };

  }

  // ---------------- OPEN ----------------

  const openMatch = text.match(
    /(?:please\s+)?(?:can\s+you\s+)?(?:could\s+you\s+)?(?:nika\s+)?open\s+(.+)/i
  );

  if (openMatch) {

    let target = openMatch[1]
      .trim()
      .replace(/^the\s+/i, "");

    target = normalizeWebsite(target);

    if (WEBSITES[target]) {

      return {
        type: "tool",
        tool: "open_website",
        arguments: {
          site: target,
        },
      };

    }

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