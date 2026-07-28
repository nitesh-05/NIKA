import express from "express";
import { askAI } from "../ai/ollama.js";
import { executeTool } from "../tools/dispatcher.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    // Ask AI
    const ai = await askAI(message);

    console.log("AI Response:", ai);

    // Tool Call
    if (ai.type === "tool") {
      const result = await executeTool(
        ai.tool,
        ai.arguments
      );

      return res.json({
        success: true,
        reply: result,
      });
    }

    // Normal Chat
    return res.json({
      success: true,
      reply: ai.response,
    });

  } catch (err) {
    console.error("Chat Route Error:", err);

    return res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
});

export default router;