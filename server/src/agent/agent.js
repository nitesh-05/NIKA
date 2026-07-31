import { createTask } from "./planner.js";
import { executeTask } from "./executor.js";
import { detectIntent } from "../intent/detectIntent.js";


export async function runAgent(userMessage) {

  const directIntent = detectIntent(userMessage);

  if (directIntent) {
    const observation = await executeTask(directIntent);

    if (observation.success) {
      return observation.result;
    }

    return "Task failed.";
  }


  const plan = await createTask(userMessage);

  console.log("Agent Plan:", plan);

  // Normal Chat
  if (plan.type === "chat") {
    return {
      type: "chat",
      response: plan.response,
    };
  }

  // Single Tool
  if (plan.type === "tool") {
    const observation = await executeTask(plan);

    if (observation.success) {
      return {
        type: "tool",
        response: observation.result,
      };
    }

    return "Task failed.";
  }

  // Multi Step Plan
  if (plan.type === "plan") {
    const results = [];

    for (const step of plan.steps) {
      const observation = await executeTask(step);

      if (observation.success) {
        results.push("✅ " + observation.result);
      } else {
        results.push("❌ Failed");
      }
    }
    return {
      type: "plan",
      response: results.join("\n"),
    };
  }

  return {
    type: "chat",
    response: "Unknown AI response.",
  };
}