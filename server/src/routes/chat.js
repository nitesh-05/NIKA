import express from "express";
import { runAgent } from "../agent/agent.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {

    const { message } = req.body;

    const reply = await runAgent(message);

    return res.json({
      success: true,
      reply,
    });

  } catch (err) {

    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });

  }
});

export default router;