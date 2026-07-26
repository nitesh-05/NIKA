import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;

  console.log("Message:", message);

  res.json({
    success: true,
    reply: `You said: ${message}`,
  });
});

export default router;