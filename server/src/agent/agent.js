import { detectWakeWord } from "../intent/detectWakeWord.js";
import { modeRouter } from "./modeRouter.js";
import { getMode } from "./modeManager.js";
import { createTask } from "./planner.js";
import { executeTask } from "./executor.js";
import { detectIntent } from "../intent/detectIntent.js";

export async function runAgent(userMessage) {
  const wakeWord = detectWakeWord(userMessage);

if (wakeWord) {
    return wakeWord;
}

const currentMode = getMode();

console.log("Current Mode:", currentMode);

  const directIntent = detectIntent(userMessage);

  if (directIntent) {

    const observation = await executeTask(directIntent);

    return {
      success: observation.success,

      type: "tool",

      speech: observation.success
        ? `Sure! ${observation.result}.`
        : "Sorry, I couldn't complete that task.",

      display: observation.success
        ? observation.result
        : "Task Failed",

      task: directIntent,

      data: observation,
    };

  }

  const plan = await createTask(userMessage);

  console.log("Agent Plan:", plan);

  // ---------------- CHAT ----------------

  if (plan.type === "chat") {

    return {

      success: true,

      type: "chat",

      speech: plan.response,

      display: plan.response,

      task: null,

      data: null,

    };

  }

  // ---------------- SINGLE TOOL ----------------

  if (plan.type === "tool") {

    const observation = await executeTask(plan);

    return {

      success: observation.success,

      type: "tool",

      speech: observation.success
        ? `Done! ${observation.result}.`
        : "Task failed.",

      display: observation.result,

      task: plan,

      data: observation,

    };

  }

  // ---------------- MULTI TOOL ----------------

  if (plan.type === "plan") {

    const results = [];

    for (const step of plan.steps) {

      const observation = await executeTask(step);

      results.push(

        observation.success

          ? observation.result

          : "Task Failed"

      );

    }

    return {

      success: true,

      type: "plan",

      speech: "All requested tasks have been completed.",

      display: results.join("\n"),

      task: plan,

      data: results,

    };

  }

  return {

    success: false,

    type: "chat",

    speech: "Sorry, I couldn't understand.",

    display: "Unknown Response",

    task: null,

    data: null,

  };

}