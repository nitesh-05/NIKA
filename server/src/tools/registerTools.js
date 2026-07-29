import { registry } from "./registry/ToolRegistry.js";

import { openAppTool } from "./apps/openAppTool.js";

import { createFolderTool } from "./filesystem/createFolderTool.js";
import { deleteFolderTool } from "./filesystem/deleteFolderTool.js";
import { renameFolderTool } from "./filesystem/renameFolderTool.js";
import { openFolderTool } from "./filesystem/openFolderTool.js";

registry.register(openAppTool);

registry.register(createFolderTool);
registry.register(deleteFolderTool);
registry.register(renameFolderTool);
registry.register(openFolderTool);

console.log("✅ All tools registered");