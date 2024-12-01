import readlinePromises from "readline/promises";

import type { UserInterface, Color } from "../interfaces/UserUnterface";

import chalk from "chalk";
import figlet from "figlet";

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const CLI: UserInterface = {
  async input() {
    const input = await rl.question("文字または単語を推測してください: ");
    return input.replaceAll(" ", "").toLowerCase();
  },
  clear() {
    console.clear();
  },
  destroy() {
    rl.close();
  },
  output(message: string, color: Color = "white") {
    console.log(chalk[color](message), "\n");
  },
  outputAnswer(message: string) {
    console.log(figlet.textSync(message, { font: "Big" }), "\n");
  },
};
