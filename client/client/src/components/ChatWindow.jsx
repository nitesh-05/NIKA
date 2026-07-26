import Message from "./Message";

export default function ChatWindow({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">

      {messages.map((msg, index) => (
        <Message
          key={index}
          sender={msg.sender}
          text={msg.text}
        />
      ))}

    </div>
  );
}