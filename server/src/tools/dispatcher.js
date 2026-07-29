import { registry } from "./registry/ToolRegistry.js";

export async function executeTool(name, args) {
  if (!registry.has(name)) {
    throw new Error(`Unknown tool: ${name}`);
  }

  const tool = registry.get(name);

  console.log("Running Tool:", tool.name);

  return await tool.execute(args);
}