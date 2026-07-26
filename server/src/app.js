import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/chat", chatRoutes);


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to NIKA AI"
    });
});

export default app;