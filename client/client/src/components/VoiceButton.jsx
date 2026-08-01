import { startRecording } from "../voice/recorder";
import { uploadVoice } from "../voice/api";
import { speak } from "../voice/speech";
import { useVoice } from "../context/VoiceContext";
import { useChat } from "../context/ChatContext";
import { useState } from "react";

export default function VoiceButton() {
  const { setMessages } = useChat();

  // const { setStatus, setVolume } = useVoice();

  const voice = useVoice();
  console.log("Voice Context:", voice);
  const {
  setStatus,
  setVolume,
} = voice;

  const handleVoice = async () => {

    setStatus("listening");

    const audio =
await startRecording(

(volume)=>{

setVolume(volume);

}

);

    setStatus("thinking");

    const result = await uploadVoice(audio);

    setMessages(prev => [
      ...prev,
      ...(result.speech
        ? [{
          sender: "user",
          text: result.speech,
        }]
        : []),
      ...(result.reply
        ? [{
          sender: "ai",
          text: result.reply,
        }]
        : []),
    ]);

    console.log("REPLY",result)
    setStatus("speaking");

  

      setStatus("idle");
speak(result.reply);
  

  };

  return (
    <button onClick={handleVoice}>
      🎤 Talk
    </button>
  );
}