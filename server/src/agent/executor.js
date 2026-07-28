import { executeTool } from "../tools/dispatcher.js";
import { observe } from "./observer.js";

export async function executeTask(task) {
  const result = await executeTool(
    task.tool,
    task.arguments
  );

  return observe(result);
}