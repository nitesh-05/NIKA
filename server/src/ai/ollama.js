import ollama from "ollama";
import { SYSTEM_PROMPT } from "./prompts.js";

export async function askAI(message) {
  const response = await ollama.chat({
    model: "llama3.2",
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  try {
    return JSON.parse(response.message.content);
  } catch {
    return {
      type: "chat",
      response: response.message.content,
    };
  }
}