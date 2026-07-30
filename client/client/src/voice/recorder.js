let recorder;
let chunks = [];

export async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
  });

  recorder = new MediaRecorder(stream);

  chunks = [];

  recorder.ondataavailable = (e) => {
    chunks.push(e.data);
  };

  recorder.start();
}

export function stopRecording() {
  return new Promise((resolve) => {
    recorder.onstop = () => {
      const blob = new Blob(chunks, {
        type: "audio/webm",
      });

      resolve(blob);
    };

    recorder.stop();
  });
}