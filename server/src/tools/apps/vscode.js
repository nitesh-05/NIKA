import { exec } from "child_process";

export async function openVSCode() {
  exec("code");

  return {
    success: true,
    message: "VS Code opened successfully.",
  };
}