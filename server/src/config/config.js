import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 5000,

  model: process.env.OLLAMA_MODEL || "llama3.2",

  env: process.env.NODE_ENV || "development",
};