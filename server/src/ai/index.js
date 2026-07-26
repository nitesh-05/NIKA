import dotenv from "dotenv";
dotenv.config();

import { askAI as ollamaAI } from "./ollama.js";
import { askAI as openaiAI } from "./openai.js";

const provider = process.env.AI_PROVIDER;

export async function askAI(message) {
    console.log("AI_PROVIDER =", process.env.AI_PROVIDER);
  switch (provider) {
    case "ollama":
      return ollamaAI(message);

    case "openai":
      return openaiAI(message);

    default:
      throw new Error("Unknown AI Provider");
  }
}