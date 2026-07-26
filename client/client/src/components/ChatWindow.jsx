import Message from "./Message";

export default function ChatWindow() {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-5">
      <Message
        sender="ai"
        text="Hello Nitesh 👋"
      />
      <Message
        sender="ai"
        text="How can I help you today?"
      />
    </div>
  );
}