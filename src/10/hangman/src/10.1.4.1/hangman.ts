import rawData from "../data/questions.test.json";

interface Question {
  word: string;
  hint: string;
}

const questions: Question[] = rawData;

// 確認
console.log(questions);
