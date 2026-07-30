import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.js";
import voiceRoute from "./routes/voice.js";

const app = express();

app.use(cors());
app.use(express.json());

// Serve generated speech files
app.use("/tts", express.static("tts"));


app.use("/api/chat", chatRoutes);
app.use("/api/voice", voiceRoute);


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to NIKA AI"
    });
});

export default app;