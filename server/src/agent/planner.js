import { askAI } from "../ai/ollama.js";

export async function createPlan(userMessage) {
  const response = await askAI(`
Convert the following request into a JSON array of tasks.

User:

${userMessage}

Return ONLY JSON.

Example:

[
 {
   "tool":"open_app",
   "arguments":{
      "app":"chrome"
   }
}
]
`);

  return response;
}