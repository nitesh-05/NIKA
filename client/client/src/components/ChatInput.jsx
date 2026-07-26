import { useState } from "react";
import api from "../services/api";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      const response = await api.post("/chat", {
        message,
      });

      console.log(response.data);

      alert(response.data.reply);

      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border-t border-gray-700 p-5">
      <div className="flex gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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