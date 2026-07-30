import edgeTTS from "edge-tts";
import path from "path";
import fs from "fs";

const OUTPUT_DIR = "tts";

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

export async function textToSpeech(text) {

    const file = path.join(
        OUTPUT_DIR,
        `reply-${Date.now()}.mp3`
    );

    await edgeTTS.save({
        text,
        voice: "en-US-AriaNeural",
        file
    });

    return file;
}