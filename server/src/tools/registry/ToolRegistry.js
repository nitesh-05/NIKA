class ToolRegistry{

    constructor(){

        this.tools=new Map();

    }

    register(tool){

        this.tools.set(tool.name,tool);

    }

    get(name){

        return this.tools.get(name);

    }

}

export const registry=new ToolRegistry();