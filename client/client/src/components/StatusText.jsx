import { useVoice } from "../context/VoiceContext";

export default function StatusText() {

  const { status } = useVoice();

  const map = {
    idle: "Ready",
    listening: "🎤 Listening...",
    thinking: "🤔 Thinking...",
    speaking: "🔊 Speaking..."
  };

  return (
    <h2>{map[status]}</h2>
  );
}