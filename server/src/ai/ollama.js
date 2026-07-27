import ollama from "ollama";

import {
  addMessage,
  getHistory,
} from "./memory.js";

export async function askAI(message) {
  try {
    // Save user message
    addMessage("user", message);

    // Get complete conversation
    const messages = getHistory();

    // Send to Ollama
    const response = await ollama.chat({
      model: "llama3.2",
      messages,
    });

    // AI Reply
    const aiReply = response.message.content;

    // Save AI reply
    addMessage("assistant", aiReply);

    return aiReply;
  } catch (error) {
    console.error("Ollama Error:", error);
    throw error;
  }
}