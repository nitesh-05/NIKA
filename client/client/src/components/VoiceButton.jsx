import { startRecording, stopRecording } from "../voice/recorder";
import { uploadVoice } from "../voice/api";
import { speak } from "../voice/speech";
import { useVoice } from "../context/VoiceContext";

export default function VoiceButton() {
  const { setStatus } = useVoice();

  const handleVoice = async () => {

    setStatus("listening");

    await startRecording();

    setTimeout(async () => {

      const audio = await stopRecording();

      setStatus("thinking");

      const result = await uploadVoice(audio);

      console.log(result);
      console.log(result.reply);
      console.log(typeof result.reply);

      setStatus("speaking");

      speak(result.reply, () => {
        setStatus("idle");
      });

    }, 5000);

  };

  return (
    <button onClick={handleVoice}>
      🎤 Talk
    </button>
  );
}