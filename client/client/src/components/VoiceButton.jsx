import { startRecording, stopRecording } from "../voice/recorder";
import { uploadVoice } from "../voice/api";

export default function VoiceButton() {

  const handleVoice = async () => {

    await startRecording();

    alert("Recording...");

    setTimeout(async () => {

      const audio = await stopRecording();

      // const result = await uploadVoice(audio);
      const result = await uploadVoice(audio);

// const player = new Audio(
//     "http://localhost:5000/" + result.audio
// );

// player.play();

      console.log("Speech:", result.speech);

console.log("Reply:", result.reply);

alert(result.reply);

    }, 5000);

  };

  return (
    <button onClick={handleVoice}>
      🎤 Talk
    </button>
  );
}