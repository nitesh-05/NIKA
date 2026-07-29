import os from "os";
import path from "path";

const HOME = os.homedir();

export function resolveUserPath(inputPath) {
  if (!inputPath) {
    return process.cwd();
  }

  const original = inputPath.trim();
  const text = original.toLowerCase();

  if (text.startsWith("desktop")) {
    const remaining = original.substring(7).trim();
    return path.join(HOME, "Desktop", remaining);
  }

  if (text.startsWith("documents")) {
    const remaining = original.substring(9).trim();
    return path.join(HOME, "Documents", remaining);
  }

  if (text.startsWith("downloads")) {
    const remaining = original.substring(9).trim();
    return path.join(HOME, "Downloads", remaining);
  }

  // Absolute path
  if (/^[a-zA-Z]:\\/.test(original)) {
    return original;
  }

  // Relative path
  return path.resolve(original);
}