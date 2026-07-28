import { exec } from "child_process";

export async function openNotepad() {
  exec("notepad");

  return {
    success: true,
    message: "Notepad opened successfully.",
  };
}