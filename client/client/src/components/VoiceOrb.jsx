import { useVoice } from "../context/VoiceContext";
import "./VoiceOrb.css";

export default function VoiceOrb() {

  const { status } = useVoice();

  return (
    <div className={`orb ${status}`}></div>
  );
}