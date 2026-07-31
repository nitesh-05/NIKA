export function speak(text, onFinished) {

  console.log("TEXT:", text);
  if (!text) {
    console.log("No text");
    return;
  }
  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  const voices = speechSynthesis.getVoices();

  const voice =
    voices.find(v => v.name.includes("Google UK English Female")) ||
    voices.find(v => v.name.includes("Zira")) ||
    voices.find(v => v.name.includes("Google US English")) ||
    voices[0];

  if (voice) {
    utterance.voice = voice;
  }

  utterance.lang = detectLanguage(text);

  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  utterance.onstart = () => {
    console.log("🔊 Speaking...");
  };

  utterance.onend = () => {

    console.log("✅ Speech Finished");

    if (onFinished) {
      onFinished();
    }

  };

  utterance.onerror = (e) => {
    console.error(e);

    if (onFinished) {
      onFinished();
    }
  };

  speechSynthesis.speak(utterance);

}

function detectLanguage(text) {

  const hindi = /[\u0900-\u097F]/;

  if (hindi.test(text)) {
    return "hi-IN";
  }

  return "en-US";
}