import ollama from "ollama";
import { SYSTEM_PROMPT } from "./prompts.js";
import { memory } from "../agent/memory.js";
import { config } from "../config/config.js";

export async function askAI(userMessage) {
  try {
    // Save user message
    memory.add("user", userMessage);

    // Build conversation
    const messages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      ...memory.getMessages(),
    ];

    // Ask Ollama
    const response = await ollama.chat({
      model: config.model,
      messages,
    });

    const aiReply = response.message.content;

    // Save AI response
    memory.add("assistant", aiReply);

    // Try parsing JSON
    try {
      return JSON.parse(aiReply);
    } catch {
      return {
        type: "chat",
        response: aiReply,
      };
    }
  } catch (error) {
    console.error("Ollama Error:", error);

    throw error;
  }
}