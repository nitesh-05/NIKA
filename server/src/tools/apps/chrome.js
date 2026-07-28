import { exec } from "child_process";

export async function openChrome() {
  exec("start chrome");

  return {
    success: true,
    message: "Chrome opened successfully.",
  };
}