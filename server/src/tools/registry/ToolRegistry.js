class ToolRegistry {
  constructor() {
    this.tools = new Map();
  }

  register(tool) {
    this.tools.set(tool.name, tool);
  }

  get(name) {
    return this.tools.get(name);
  }

  getAll() {
    return [...this.tools.values()];
  }

  has(name) {
    return this.tools.has(name);
  }
}

export const registry = new ToolRegistry();