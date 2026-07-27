import { useState } from "react";

import api from "../services/api";

import { useChat } from "../context/ChatContext";

export default function ChatInput() {

    const [message, setMessage] = useState("");

    const { setMessages } = useChat();

    const sendMessage = async () => {

        if (!message.trim()) return;

        setMessages(prev => [

            ...prev,

            {
                sender: "user",
                text: message,
            }

        ]);

        try {

            const response = await api.post("/chat", {

                message,

            });

            setMessages(prev => [

                ...prev,

                {
                    sender: "ai",
                    text: response.data.reply,
                }

            ]);

            setMessage("");

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="border-t border-gray-700 p-5">

            <div className="flex gap-3">

                <input

                    value={message}

                    onChange={(e) => setMessage(e.target.value)}

                    className="flex-1 rounded-lg bg-gray-900 px-4 py-3"

                />

                <button

                    onClick={sendMessage}

                    className="bg-blue-600 px-6 rounded"

                >

                    Send

                </button>

            </div>

        </div>

    );

}