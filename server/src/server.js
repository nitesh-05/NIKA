import dotenv from "dotenv";

dotenv.config();
console.log("API Key:", process.env.OPENAI_API_KEY);
import express from "express";
import { askAI } from "./ai/openai.js";

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on ${PORT}`);
});