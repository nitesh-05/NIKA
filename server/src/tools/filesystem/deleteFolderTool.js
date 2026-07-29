import fs from "fs";
import { Tool } from "../base/Tool.js";
import { resolveUserPath } from "./pathResolver.js";

export const deleteFolderTool = new Tool({
  name: "delete_folder",

  description: "Delete a folder.",

  schema: {
    path: "string",
  },

  async execute(args) {
    const folder = resolveUserPath(args.path);

    if (!fs.existsSync(folder)) {
      return "Folder does not exist.";
    }

    fs.rmSync(folder, {
      recursive: true,
      force: true,
    });

    return `Deleted folder: ${folder}`;
  },
});