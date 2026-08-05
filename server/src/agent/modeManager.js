let currentMode = "desktop";

export function getMode() {
  return currentMode;
}

export function setMode(mode) {
  currentMode = mode;
}

export function resetMode() {
  currentMode = "desktop";
}