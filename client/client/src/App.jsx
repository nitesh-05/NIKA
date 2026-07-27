import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

export default function App() {

    return (

        <div className="h-screen bg-gray-950 text-white flex flex-col">

            <Header />

            <ChatWindow />

            <ChatInput />

        </div>

    );

}