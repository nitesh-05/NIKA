import { executeTool } from "../tools/dispatcher.js";

export async function executePlan(plan) {
  const results = [];

  for (const task of plan) {
    const result = await executeTool(
      task.tool,
      task.arguments
    );

    results.push(result);
  }

  return results;
}