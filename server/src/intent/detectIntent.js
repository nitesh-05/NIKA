import { normalizeApp } from "./normalizer.js";

export function detectIntent(message) {

  const text = message.toLowerCase().trim();

  if (text.startsWith("open ")) {

    const app = text.replace("open ", "");

    return {
      type: "tool",
      tool: "open_app",
      arguments: {
        app: normalizeApp(app)
      }
    };
  }

  return null;
}