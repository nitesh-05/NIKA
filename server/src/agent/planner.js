import { askAI } from "../ai/ollama.js";

export async function createTask(userMessage) {
  return await askAI(userMessage);
}