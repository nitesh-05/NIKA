import express from "express";
import upload from "../middleware/upload.js";

import { speechToText } from "../voice/speechToText.js";
import { runAgent } from "../agent/agent.js";
import { memory } from "../agent/memory.js";
// import { textToSpeech } from "../voice/textToSpeech.js";

const router = express.Router();

router.post(
  "/",
  upload.single("audio"),
  async (req, res) => {
    try {
        console.log("Voice.js=>",req.file);
      const audioPath = req.file.path;

      console.log("Audio:", audioPath);

      const text = await speechToText(audioPath);

      console.log("Speech:", text);

      memory.clear();
      const reply = await runAgent(text);
    //   const audioFile = await textToSpeech(reply);

      return res.json({
        success: true,
        speech: text,
        reply,
        // audio: audioFile
      });

    } catch (err) {

      console.error(err);

      return res.status(500).json({
        success: false,
        message: err.message,
      });

    }
  }
);

export default router;