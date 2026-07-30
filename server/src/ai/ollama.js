import ollama from "ollama";
import { SYSTEM_PROMPT } from "./prompts.js";
import { memory } from "../agent/memory.js";
import { config } from "../config/config.js";
import { parseAIResponse } from "./parser.js";

export async function askAI(userMessage) {
  try {
    // Save user message
    memory.add("user", userMessage);

    const messages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      ...memory.getMessages(),
    ];

    const response = await ollama.chat({
      model: config.model,
      messages,

      // Do NOT use format:"json"
      options: {
        temperature: 0,
      },
    });

    const aiReply = response.message.content;

    console.log("RAW AI RESPONSE:");
    console.log(aiReply);

    const parsed = parseAIResponse(aiReply);

    // Save ONLY chat responses
    if (parsed.type === "chat") {
      memory.add("assistant", parsed.response);
    }

    return parsed;
  } catch (error) {
    console.error("Ollama Error:", error);
    throw error;
  }
}