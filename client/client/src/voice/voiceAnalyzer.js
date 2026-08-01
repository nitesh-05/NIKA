let audioContext;
let analyser;
let dataArray;

export async function createAnalyzer(stream) {
  audioContext = new AudioContext();

  const source =
    audioContext.createMediaStreamSource(stream);

  analyser = audioContext.createAnalyser();

  analyser.fftSize = 512;

  source.connect(analyser);

  dataArray = new Uint8Array(
    analyser.frequencyBinCount
  );
}

export function getVolume() {

  if (!analyser) return 0;

  analyser.getByteTimeDomainData(dataArray);

  let sum = 0;

  for (let i = 0; i < dataArray.length; i++) {

    const x = (dataArray[i] - 128) / 128;

    sum += x * x;

  }

  return Math.sqrt(sum / dataArray.length);

}

export function destroyAnalyzer() {

  if (audioContext) {

    audioContext.close();

    audioContext = null;

  }

}