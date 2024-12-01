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

class Stage {
  answer: string;
  leftAttempts: number = 5;
  question: Question;

  constructor(question: Question) {
    this.question = question;
    // answerにブランク "_" の羅列を設定
    this.answer = new Array(question.word.length).fill("_").join("");
  }

  // 試行回数を1減少
  decrementAttempts(): number {
    return --this.leftAttempts;
  }

  updateAnswer(userInput: string = ""): void {
    if (!userInput) return; // 空文字の場合、以降の処理は行わない

    const regex = new RegExp(userInput, "g"); // 入力を正規表現として使用
    const answerArry = this.answer.split(""); // 文字列を配列に変換

    let matches: RegExpExecArray | null; // 正規表現での検索結果を格納する変数

    // 入力と一致する箇所がなくなるまで繰り返す。
    while ((matches = regex.exec(this.question.word))) {
      /**
       * "n" で "union" を検索した際の matches の例
       * 1ループ目：[ 'n', index: 1, input: 'union', groups: undefined ]
       * 2ループ目：[ 'n', index: 4, input: 'union', groups: undefined ]
       */
      const foundIdx = matches.index;
      // 対象のインデックスから、一致した箇所を入力された文字と置き換え
      answerArry.splice(foundIdx, userInput.length, ...userInput);

      this.answer = answerArry.join(""); // 配列を文字列に変換
    }
  }

  // 入力が単語の長さを超えているか判定
  isTooLong(userInput: string): boolean {
    return userInput.length > this.question.word.length;
  }

  // 単語にユーザー入力が含まれるか判定
  isIncludes(userInput: string): boolean {
    return this.question.word.includes(userInput);
  }

  // 解答が単語のすべての文字列と一致したか判定
  isCorrect(): boolean {
    return this.answer === this.question.word;
  }

  // 試行回数が0か判定
  isGameOver(): boolean {
    return this.leftAttempts === 0;
  }
}

const questions: Question[] = rawData;

// 確認
testQuestion();
// 確認用関数。一度だけ入力を受け付ける。
async function testQuestion() {
  CLI.clear();

  const quiz = new Quiz(questions);
  const stage = new Stage(quiz.getNext());

  CLI.output(stage.question.hint, "yellow"); // ヒントの表示
  CLI.outputAnswer(stage.answer); // answerの初期状態の表示

  const userInput = await CLI.input();

  stage.updateAnswer(userInput); // answerの更新
  CLI.outputAnswer(stage.answer); // answerの表示

  CLI.destroy();
}
