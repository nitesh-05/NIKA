import { openChrome } from "./apps/chrome.js";
import { openVSCode } from "./apps/vscode.js";
import { openNotepad } from "./apps/notepad.js";
import { openCalculator } from "./apps/calculator.js";

export const ToolRegistry = {
  chrome: openChrome,

  vscode: openVSCode,

  notepad: openNotepad,

  calculator: openCalculator
};