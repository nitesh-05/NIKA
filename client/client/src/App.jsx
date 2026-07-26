import { useState } from "react";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

function App() {

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello Nitesh 👋......",
    },
  ]);

  return (
    <div className="h-screen bg-gray-950 text-white flex flex-col">
      <Header />

      <ChatWindow messages={messages} />

      <ChatInput
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
}

export default App;