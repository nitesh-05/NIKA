import ollama from "ollama";

export async function detectIntent(message) {
  const prompt = `
You are an Intent Detection Engine.

Your job is to return ONLY valid JSON.

Supported intents:

1. open_app
2. chat

Supported apps:

chrome
vscode
notepad

Examples

User:
Open Chrome

Output:

{
 "intent":"open_app",
 "app":"chrome"
}

User:

Launch VS Code

Output:

{
 "intent":"open_app",
 "app":"vscode"
}

User:

What is AI?

Output:

{
 "intent":"chat"
}

Now detect:

${message}
`;

  const response = await ollama.chat({
    model: "llama3.2",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  try {
    return JSON.parse(response.message.content);
  } catch {
    return {
      intent: "chat",
    };
  }
}