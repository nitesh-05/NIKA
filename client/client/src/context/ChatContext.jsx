import { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {




    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Hello 👋 I'm Nexus AI."
        }
    ]);

        useEffect(() => {
    console.log("Messages Updated:", messages);
}, [messages]);
    return (
        <ChatContext.Provider
            value={{
                messages,
                setMessages,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
}

export const useChat = () => useContext(ChatContext);