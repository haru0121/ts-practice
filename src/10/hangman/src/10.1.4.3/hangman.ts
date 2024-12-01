import readlinePromises from "readline/promises";

import chalk from "chalk";
import figlet from "figlet";

import rawData from "../data/questions.test.json";

interface Question {
  word: string;
  hint: string;
}

class Quiz {
  questions: Question[];
  constructor(questions: Question[]) {
    this.questions = questions;
  }

  // 次の質問が存在するか確認
  hasNext(): boolean {
    return this.questions.length > 0;
  }
  // ランダムに質問を取得して、その質問をリストから削除
  getNext(): Question {
    const idx = Math.floor(Math.random() * this.questions.length);
    const [question] = this.questions.splice(idx, 1);
    return question;
  }
  // 残りの質問数を取得
  lefts(): number {
    return this.questions.length;
  }
}

const questions: Question[] = rawData;
const quiz = new Quiz(questions);

type Color = "red" | "green" | "yellow" | "white";
interface UserInterface {
  input(): Promise<string>;
  clear(): void;
  destroy(): void;
  output(message: string, color?: Color): void;
  outputAnswer(message: string): void;
}

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const CLI: UserInterface = {
  async input() {
    const input = await rl.question("文字または単語を推測してください: ");
    return input.replaceAll(" ", "").toLowerCase();
  },
  clear() {
    console.clear(); // コンソール画面のクリア
  },
  destroy() {
    rl.close(); // readlineインターフェイスの終了
  },
  output(message: string, color: Color = "white") {
    console.log(chalk[color](message), "\n");
  },
  outputAnswer(message) {
    console.log(figlet.textSync(message, { font: "Big" }), "\n");
  },
};

// 確認
testQuestion();
// 確認用関数
async function testQuestion() {
  CLI.clear();
  const userInput = await CLI.input();

  CLI.output(userInput, "green");
  CLI.outputAnswer(userInput);

  CLI.destroy();
}
