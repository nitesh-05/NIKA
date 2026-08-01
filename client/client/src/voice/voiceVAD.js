let silenceTimer = null;

const SILENCE_THRESHOLD = 0.02;

const SILENCE_DURATION = 1000;

export function detectSilence(volume, onSilence) {

  if (volume > SILENCE_THRESHOLD) {

    clearTimeout(silenceTimer);

    silenceTimer = null;

    return;

  }

  if (!silenceTimer) {

    silenceTimer = setTimeout(() => {

      silenceTimer = null;

      onSilence();

    }, SILENCE_DURATION);

  }

}

export function resetSilenceDetection() {

  clearTimeout(silenceTimer);

  silenceTimer = null;

}