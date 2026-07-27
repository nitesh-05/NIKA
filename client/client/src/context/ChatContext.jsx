import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Hello 👋 I'm Nexus AI."
        }
    ]);

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