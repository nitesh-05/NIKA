import {
  createAnalyzer,
  getVolume,
  destroyAnalyzer,
} from "./voiceAnalyzer";

import {
  detectSilence,
  resetSilenceDetection,
} from "./voiceVAD";

let recorder;
let stream;
let chunks = [];
let volumeTimer;

export async function startRecording(onVolume) {

  stream = await navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
    },
  });

  recorder = new MediaRecorder(stream);

  chunks = [];

  recorder.ondataavailable = (e) => {

    if (e.data.size > 0) {

      chunks.push(e.data);

    }

  };

  await createAnalyzer(stream);

  recorder.start();

  console.log("🎤 Recording Started");

  return new Promise((resolve) => {

    volumeTimer = setInterval(() => {

      const volume = getVolume();
      onVolume(volume);

      console.log(
        "🎤",
        volume.toFixed(3)
      );

      detectSilence(volume, () => {

        console.log("🤫 Silence");

        recorder.stop();

      });

    }, 100);

    recorder.onstop = () => {

      console.log("🛑 Recording Stopped");

      clearInterval(volumeTimer);

      resetSilenceDetection();

      destroyAnalyzer();

      stream.getTracks().forEach(track => track.stop());

      const blob = new Blob(chunks, {
        type: "audio/webm",
      });

      resolve(blob);

    };

  });

}