export default function Message({
  sender,
  text,
}) {

  const ai = sender === "ai";

  return (

    <div
      className={`flex ${ai ? "justify-start" : "justify-end"}`}
    >

      <div
        className={`max-w-xl px-5 py-3 rounded-xl
        ${ai
          ? "bg-gray-800"
          : "bg-blue-600"
        }`}
      >

        {text}

      </div>

    </div>

  );
}