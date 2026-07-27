import Message from "./Message";

import { useChat } from "../context/ChatContext";

export default function ChatWindow() {

    const { messages } = useChat();

    return (

        <div className="flex-1 overflow-y-auto p-5 space-y-4">

            {messages.map((message, index) => (

                <Message

                    key={index}

                    sender={message.sender}

                    text={message.text}

                />

            ))}

        </div>

    );

}