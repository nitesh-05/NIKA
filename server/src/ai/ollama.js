import ollama from "ollama";

export async function askAI(message) {
  const response = await ollama.chat({
    model: "llama3.2",
    messages: [
      {
        role: "system",
        content: "You are NIKA AI, a smart personal assistant.",
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return response.message.content;
}