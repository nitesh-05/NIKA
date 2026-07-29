import fs from "fs";
import path from "path";
import { Tool } from "../base/Tool.js";
import { resolveUserPath } from "./pathResolver.js";

export const renameFolderTool = new Tool({
  name: "rename_folder",

  description: "Rename a folder.",

  schema: {
    oldPath: "string",
    newName: "string",
  },

  async execute(args) {
    const oldFolder = resolveUserPath(args.oldPath);

    if (!fs.existsSync(oldFolder)) {
      return "Folder not found.";
    }

    const newFolder = path.join(
      path.dirname(oldFolder),
      args.newName
    );

    fs.renameSync(oldFolder, newFolder);

    return `Renamed to ${newFolder}`;
  },
});