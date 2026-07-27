import { exec } from "child_process";

export function openChrome() {
  exec('start chrome');
}

export function openVSCode() {
  exec('code');
}

export function openNotepad() {
  exec('notepad');
}