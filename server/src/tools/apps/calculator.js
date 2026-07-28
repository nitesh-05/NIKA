import { exec } from "child_process";

export async function openCalculator() {
  exec("calc", (error) => {
    if (error) {
      console.error("Error opening Calculator:", error);

      return {
        success: false,
        message: "Failed to open Calculator.",
      };
    }
  });

  return {
    success: true,
    message: "Calculator opened successfully.",
  };
}