import { Question } from "../interfaces/Question";

export class Quiz {
  questions: Question[];

  constructor(questions: Question[]) {
    this.questions = questions;
  }

  hasNext(): boolean {
    return this.questions.length > 0;
  }

  getNext(): Question {
    const idx = Math.floor(Math.random() * this.questions.length);
    const [question] = this.questions.splice(idx, 1);
    return question;
  }

  lefts(): number {
    return this.questions.length;
  }
}
