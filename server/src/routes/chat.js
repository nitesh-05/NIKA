import express from "express";

import { askAI } from "../ai/ollama.js";

import { executeCommand } from "../commands/commandRouter.js";

const router = express.Router();

router.post("/", async (req, res) => {

    const { message } = req.body;

    try {

        const command = await executeCommand(message);

        if (command) {

            return res.json({

                success: true,

                reply: command,

            });

        }

        const aiReply = await askAI(message);

        res.json({

            success: true,

            reply: aiReply,

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: err.message,

        });

    }

});

export default router;