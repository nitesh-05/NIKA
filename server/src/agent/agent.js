import { createTask } from "./planner.js";
import { executeTask } from "./executor.js";

export async function runAgent(userMessage) {

  const plan = await createTask(userMessage);

  if (plan.type === "chat") {
    return plan.response;
  }

  const observation = await executeTask(plan);

  if (observation.success) {
    return observation.result;
  }

  return "Task failed.";
}