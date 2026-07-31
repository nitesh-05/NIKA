import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { ChatProvider } from "./context/ChatContext";
import { VoiceProvider } from "./context/VoiceContext";

function AppProviders({ children }) {
    return (
        <ChatProvider>
            <VoiceProvider>
                {children}
            </VoiceProvider>
        </ChatProvider>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <AppProviders>
        <App />
    </AppProviders>

);