import { registry } from "./registry/ToolRegistry.js";

export async function executeTool(name,args){

    const tool=registry.get(name);

    if(!tool){

        throw new Error("Tool not found");

    }

    return await tool.execute(args);

}