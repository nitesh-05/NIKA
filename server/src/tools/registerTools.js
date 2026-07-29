import { registry } from "./registry/ToolRegistry.js";

import { openAppTool } from "./apps/openAppTool.js";
import { createFolderTool } from "./filesystem/createFolderTool.js";

registry.register(openAppTool);
registry.register(createFolderTool);

console.log("✅ Tools Registered");