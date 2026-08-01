import { createContext, useContext, useState } from "react";

const VoiceContext = createContext();

export function VoiceProvider({ children }) {

  const [status, setStatus] = useState("idle");

  const [conversation, setConversation] = useState([]);

  const [volume, setVolume] = useState(0);

  return (
    <VoiceContext.Provider
      value={{
        status,
        setStatus,
        volume,
        setVolume,
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