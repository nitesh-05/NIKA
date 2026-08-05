import {
  getMode,
  setMode,
  resetMode,
} from "./agent/modeManager.js";

console.log(getMode());

setMode("trading");

console.log(getMode());

resetMode();

console.log(getMode());