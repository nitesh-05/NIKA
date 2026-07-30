import { exec } from "child_process";
import { Tool } from "../base/Tool.js";

export const openAppTool = new Tool({
  name: "open_app",

  description: "Open installed Windows applications.",

  aliases: [
    "open chrome",
    "launch browser",
    "start chrome",
    "open google",
    "open vscode",
    "open calculator",
    "open notepad",
  ],

  examples: [
    "Open Chrome",
    "Launch Browser",
    "Open VS Code",
    "Open Calculator",
    "Open Notepad",
  ],

  schema: {
    app: "string",
  },

  async execute(args) {
    let app = args.app.toLowerCase().trim();

    // ------------------------
    // Normalize application names
    // ------------------------

    const aliases = {
      google: "chrome",
      "google chrome": "chrome",
      browser: "chrome",
      "chrome browser": "chrome",
      chrome: "chrome",

      code: "vscode",
      vscode: "vscode",
      "visual studio code": "vscode",
      "code editor": "vscode",

      calc: "calculator",
      calculator: "calculator",

      "text editor": "notepad",
      texteditor: "notepad",
      notepad: "notepad",
    };

    app = aliases[app] || app;

    switch (app) {
      case "chrome":
        exec("start chrome");
        return "Opening Chrome";

      case "vscode":
        exec("code");
        return "Opening VS Code";

      case "notepad":
        exec("notepad");
        return "Opening Notepad";

      case "calculator":
        exec("calc");
        return "Opening Calculator";

      default:
        return `Unknown application: ${args.app}`;
    }
  },
});