import { registry } from "../tools/registry/ToolRegistry.js";

export function buildSystemPrompt() {
  const tools = registry.getAll();

  let prompt = `
You are NIKA AI.

Return ONLY valid JSON.

Supported Tools:

`;

  for (const tool of tools) {
    prompt += `
Tool: ${tool.name}

Description:
${tool.description}

Schema:
${JSON.stringify(tool.schema, null, 2)}

`;
  }

  prompt += `
Chat Response:

{
"type":"chat",
"response":"..."
}

Return ONLY JSON.
`;

  return prompt;
}