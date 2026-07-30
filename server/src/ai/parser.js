export function parseAIResponse(text) {
  try {
    let cleaned = text.trim();

    cleaned = cleaned.replace(/```json/gi, "");
    cleaned = cleaned.replace(/```/g, "");
    cleaned = cleaned.trim();

    const parsed = JSON.parse(cleaned);

    if (!parsed.type) {
      return {
        type: "chat",
        response: "I couldn't understand the request.",
      };
    }

    return parsed;
  } catch (err) {
    console.error("Parser Error:", err);

    return {
      type: "chat",
      response: text,
    };
  }
}