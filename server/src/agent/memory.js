class Memory {
  constructor(maxHistory = 20) {
    this.maxHistory = maxHistory;

    this.messages = [];
  }

  add(role, content) {
    this.messages.push({
      role,
      content,
    });

    // Keep only the latest messages
    if (this.messages.length > this.maxHistory) {
      this.messages.shift();
    }
  }

  getMessages() {
    return [...this.messages];
  }

  clear() {
    this.messages = [];
  }
}

export const memory = new Memory();