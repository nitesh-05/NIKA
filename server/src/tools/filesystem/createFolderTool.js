import fs from "fs";
import path from "path";
import { Tool } from "../base/Tool.js";

export const createFolderTool = new Tool({
  name: "create_folder",

  description: "Create a new folder on the local computer.",

  aliases: [
    "create folder",
    "make folder",
    "new folder",
  ],

  examples: [
    "Create folder AI Projects",
    "Make folder Notes",
  ],

  schema: {
    path: "string",
  },

  async execute(args) {
    try {
      const folderPath = path.resolve(args.path);

      if (fs.existsSync(folderPath)) {
        return `Folder already exists: ${folderPath}`;
      }

      fs.mkdirSync(folderPath, { recursive: true });

      return `Folder created: ${folderPath}`;
    } catch (err) {
      return `Failed to create folder: ${err.message}`;
    }
  },
});