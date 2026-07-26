import { useState } from "react";
import api from "../services/api";

export default function ChatInput({ messages, setMessages }) {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Show user message immediately
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    try {
      const response = await api.post("/chat", {
        message,
      });

      // Show AI reply
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: response.data.reply,
        },
      ]);

      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
};

  return (
    <div className="border-t border-gray-700 p-5">
      <div className="flex gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded-lg bg-gray-900 px-4 py-3 outline-none"
          placeholder="Type message..."
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 px-6 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}