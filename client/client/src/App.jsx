import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import VoiceButton from "./components/VoiceButton";
import VoiceOrb from "./components/VoiceOrb";
import StatusText from "./components/StatusText";
import VoiceWave from "./components/VoiceWave";

export default function App() {

    return (

        <div className="h-screen bg-gray-950 text-white flex flex-col">

            <Header />
           
           <VoiceWave/>
            <ChatWindow />
            <VoiceOrb/>

            <ChatInput />
             

            <StatusText/>
            <VoiceButton />
            

        </div>

    );

}