import { exec } from "child_process";
import { Tool } from "../base/Tool.js";
import { resolveUserPath } from "./pathResolver.js";

export const openFolderTool = new Tool({
  name: "open_folder",

  description: "Open a folder in Windows Explorer.",

  schema: {
    path: "string",
  },

  async execute(args) {
    const folder = resolveUserPath(args.path);

    exec(`explorer "${folder}"`);

    return `Opening folder: ${folder}`;
  },
});