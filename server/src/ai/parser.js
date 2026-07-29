export function parseAIResponse(text) {
  try {
    // Remove markdown code fences
    let cleaned = text.trim();

    cleaned = cleaned.replace(/^```json/i, "");
    cleaned = cleaned.replace(/^```/i, "");
    cleaned = cleaned.replace(/```$/i, "");
    cleaned = cleaned.trim();

    // Parse JSON
    return JSON.parse(cleaned);
  } catch (err) {
    console.error("Parser Error:", err);

    return {
      type: "chat",
      response: text,
    };
  }
}