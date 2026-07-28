import { executeTool } from "../tools/dispatcher.js";
import { observe } from "./observer.js";

export async function executeTask(task) {
  console.log("Task:", task);
  const result = await executeTool(
    task.tool,
    task.arguments
  );
  console.log("Tool Result:", result);

  return observe(result);
}