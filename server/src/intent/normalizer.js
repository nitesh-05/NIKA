const APP_ALIASES = {
  google: "chrome",
  "google chrome": "chrome",
  browser: "chrome",
  "chrome browser": "chrome",
  chrome: "chrome",

  vscode: "vscode",
  code: "vscode",
  "visual studio code": "vscode",

  calc: "calculator",
  calculator: "calculator",

  "text editor": "notepad",
  notepad: "notepad",
};

export function normalizeApp(name) {
  if (!name) return "";

  const key = name.toLowerCase().trim();

  return APP_ALIASES[key] || key;
}