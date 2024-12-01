import fs from "fs";
import path from "path";

import { CLI } from "./utils/CLI";
import { Question } from "./interfaces/Question";
import { Quiz } from "./models/Quiz";
import { Message } from "./models/Message";
import { Game } from "./models/Game";

import rawData from "../data/questions.test.json";

const questions: Question[] = rawData;

const quiz = new Quiz(questions);
const message = new Message(CLI);
const game = new Game(quiz, message, CLI);

// ゲーム開始
game.start();
