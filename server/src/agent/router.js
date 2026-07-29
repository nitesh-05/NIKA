export function detectIntent(message) {
  const text = message.toLowerCase().trim();

  // Open Chrome
  if (
    text.includes("open google") ||
    text.includes("open chrome")
  ) {
    return {
      type: "tool",
      tool: "open_app",
      arguments: {
        app: "chrome",
      },
    };
  }

  // Create Folder
  if (
    text.startsWith("create folder ") ||
    text.startsWith("make folder ")
  ) {
    const folderName = message
      .replace(/create folder/i, "")
      .replace(/make folder/i, "")
      .trim();

    return {
      type: "tool",
      tool: "create_folder",
      arguments: {
        path: folderName,
      },
    };
  }

  return null;
}