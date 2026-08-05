import { setMode } from "../agent/modeManager.js";

export function detectWakeWord(message) {

  const text = message.toLowerCase().trim();

  // Activate Trading Mode

  if (
    text.includes("activate trading mode") ||
    text.includes("trading mode on") ||
    text.includes("enable trading mode")
  ) {

    setMode("trading");

    return {
      success: true,
      type: "mode",
      speech:
        "Trading mode activated.",
      display:
        "📈 Trading Mode Activated",
      mode: "trading",
    };
  }

  // Deactivate Trading Mode

  if (
    text.includes("deactivate trading mode") ||
    text.includes("trading mode off") ||
    text.includes("disable trading mode")
  ) {

    setMode("desktop");

    return {
      success: true,
      type: "mode",
      speech:
        "Trading mode disabled.",
      display:
        "💻 Desktop Mode Activated",
      mode: "desktop",
    };
  }

  return null;
}