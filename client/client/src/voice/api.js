import axios from "axios";

export async function uploadVoice(blob) {
  const formData = new FormData();

  formData.append("audio", blob, "voice.webm");

  const res = await axios.post(
    "http://localhost:5000/api/voice",
    formData
  );

  return res.data;
}