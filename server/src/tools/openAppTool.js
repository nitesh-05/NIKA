// import {
//   openChrome,
//   openVSCode,
//   openNotepad,
// } from "../automation/appLauncher.js";

// export async function openAppTool(args) {
//   const app = args.app.toLowerCase().trim();

//   if (
//     app.includes("chrome") ||
//     app.includes("google") ||
//     app.includes("browser")
//   ) {
//     openChrome();
//     return "Opening Chrome";
//   }

//   if (
//     app.includes("code") ||
//     app.includes("vscode") ||
//     app.includes("visual studio")
//   ) {
//     openVSCode();
//     return "Opening VS Code";
//   }

//   if (app.includes("notepad")) {
//     openNotepad();
//     return "Opening Notepad";
//   }

//   return `Unknown Application: ${args.app}`;
// }