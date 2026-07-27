import { detectIntent } from "../ai/intent.js";

import { executeAppCommand } from "./appCommands.js";

export async function executeCommand(message) {
  const intent = await detectIntent(message);

  console.log(intent);

  if (intent.intent === "open_app") {
    return executeAppCommand(intent.app);
  }

  return null;
}