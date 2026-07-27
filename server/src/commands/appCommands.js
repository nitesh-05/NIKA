import {
  openChrome,
  openVSCode,
  openNotepad,
} from "../automation/appLauncher.js";

export async function executeAppCommand(app) {
  switch (app) {
    case "chrome":
      openChrome();
      return "Opening Chrome";

    case "vscode":
      openVSCode();
      return "Opening VS Code";

    case "notepad":
      openNotepad();
      return "Opening Notepad";

    default:
      return null;
  }
}