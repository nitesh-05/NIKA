import dotenv from "dotenv";
import "./tools/registerTools.js";
import { config } from "./config/config.js";
import { logger } from "./logger/logger.js";

dotenv.config();
console.log("API Key:", process.env.OPENAI_API_KEY);
import express from "express";
import { askAI } from "./ai/ollama.js";

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(config.port, () => {
  logger.success(
    `Server running on http://localhost:${config.port}`
  );
});