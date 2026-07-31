import { createContext, useContext, useState } from "react";

const VoiceContext = createContext();

export function VoiceProvider({ children }) {

  const [status, setStatus] = useState("idle");

  const [conversation, setConversation] = useState([]);

  return (
    <VoiceContext.Provider
      value={{
        status,
        setStatus,
        conversation,
        setConversation,
      }}
    >
      {children}
    </VoiceContext.Provider>
  );
}

export function useVoice() {
  return useContext(VoiceContext);
}