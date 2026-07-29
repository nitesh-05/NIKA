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

  // Open Notepad
  if (text.includes("open notepad")) {
    return {
      type: "tool",
      tool: "open_app",
      arguments: {
        app: "notepad",
      },
    };
  }

  // Create Folder
if (
  text.startsWith("create folder") ||
  text.startsWith("make folder")
) {
  let command = message
    .replace(/create folder/i, "")
    .replace(/make folder/i, "")
    .trim();

 
  // Desktop (supports "on desktop" and "in desktop")
let match = command.match(/(.+)\s+(?:on|in)\s+desktop$/i);

if (match) {
  return {
    type: "tool",
    tool: "create_folder",
    arguments: {
      path: `Desktop ${match[1].trim()}`
    }
  };
}

  // AI Projects in Documents
  match = command.match(/(.+)\s+(?:on|in)\s+documents?$/i);

if (match) {
  return {
    type: "tool",
    tool: "create_folder",
    arguments: {
      path: `Documents ${match[1].trim()}`
    }
  };
}

  // AI Projects in Downloads
  match = command.match(/(.+)\s+(?:on|in)\s+downloads?$/i);

if (match) {
  return {
    type: "tool",
    tool: "create_folder",
    arguments: {
      path: `Downloads ${match[1].trim()}`
    }
  };
}

  // Default
  return {
    type: "tool",
    tool: "create_folder",
    arguments: {
      path: command
    }
  };
}

  // Delete Folder
  if (text.startsWith("delete folder ")) {
    const folder = message.replace(/delete folder/i, "").trim();

    return {
      type: "tool",
      tool: "delete_folder",
      arguments: {
        path: folder,
      },
    };
  }

  // Open Folder
  if (text.startsWith("open folder ")) {
    const folder = message.replace(/open folder/i, "").trim();

    return {
      type: "tool",
      tool: "open_folder",
      arguments: {
        path: folder,
      },
    };
  }

  return null;
}