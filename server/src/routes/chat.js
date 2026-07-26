import express from "express";

import { askAI } from "../ai/index.js";

const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const { message } = req.body;

        const reply = await askAI(message);

        res.json({
            success: true,
            reply,
        });

    } catch (error) {

        console.log("error", error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

});

export default router;