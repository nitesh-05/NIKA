export default function ChatInput() {
  return (
    <div className="border-t border-gray-700 p-5">

      <div className="flex gap-3">

        <input
          className="flex-1 rounded-lg bg-gray-900 px-4 py-3 outline-none"
          placeholder="Type a message..."
        />

        <button
          className="bg-blue-600 px-6 rounded-lg"
        >
          Send
        </button>

      </div>

    </div>
  );
}