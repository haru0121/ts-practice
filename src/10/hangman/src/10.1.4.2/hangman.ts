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

// 確認
while (quiz.hasNext()) {
  console.log(quiz.getNext());
  console.log(quiz.hasNext());
  console.log(quiz.lefts());
}
