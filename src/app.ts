import rowData from './data/questions.test.json' with { type: 'json' };
import readlinePromises from 'readline/promises';
import chalk from 'chalk';
import figlet from 'figlet';
class Quiz {
    questions: Question[];
    constructor(questions:Question[]) {
        this.questions = questions;
    }
    hasNext():boolean {
        return this.questions.length > 0;
    }
    getNext():Question {
        const idx = Math.floor(Math.random() * this.questions.length);
        const [question] = this.questions.splice(idx, 1);
        return question
    }
    lefts():number {
        return this.questions.length;
    }
}

export interface Question {
    word: string;
    hint: string;
}
const questions: Question[] = rowData;
const quiz = new Quiz(questions);

interface UserInterface {
    input(): Promise<string>;
    clear(): void;
    destroy(): void;
    output(msg: string,color?:string): void;
    outputAnswer(msg: string): void;
}
type Color = "red" | "green" | "yellow" | "white" ;
const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});
const CLI:UserInterface = {
    async input() {
        const input = await rl.question('Enter your answer: ');
        return input.replaceAll(' ', '').toLowerCase();
    },
    clear() {
        console.clear();
    },
    destroy() {
        rl.close();
    },
    output(msg:string,color:Color = "white") {
        console.log(chalk[color](msg));

    },
    outputAnswer(msg:string) {
       console.log(figlet.textSync(msg, {
           font: 'Big',
       }),"\n");
    }
}
class Stage {
    answer: string;
    leftAttempts: number = 5;
    question: Question;

    constructor(question: Question) {
        this.question = question;
        this.answer = new Array(question.word.length).fill('_').join('');
    }

    decrementAttempts():number {
        return --this.leftAttempts;
    }
    updateAnswer(userInput:string=""):void{
        if(!userInput) return;

        const regex = new RegExp(userInput, 'g');
        const answerArray = this.answer.split('');

        let matches : RegExpExecArray | null;

        while((matches = regex.exec(this.question.word))){
            const foundIdx = matches.index;
            answerArray.splice(foundIdx,userInput.length,...userInput);

            this.answer = answerArray.join('');
        }
    }
    isTooLong(userInput:string):boolean {
        return userInput.length > this.question.word.length;

    }
    isIncludes(userInput:string):boolean {
        return this.question.word.includes(userInput);
    }
    isCorrect():boolean {
        return this.answer === this.question.word;
    }
    isGameOver():boolean {
        return this.leftAttempts === 0;
    }
}
class Message{
    ui: UserInterface;
    constructor(ui:UserInterface) {
        this.ui = ui;
    }
    askQuestion(stage:Stage):void{
        this.ui.output(`Hint:${stage.question.hint}`,"yellow");
        this.ui.output(stage.answer.replaceAll('',' ').trim());
        this.ui.output(`(残りの試行回数:${stage.leftAttempts})`,"green");
    }
    leftQuestions(quiz:Quiz):void{
        this.ui.output(`残りの問題数:${quiz.lefts()}`,"yellow");
    }
    start(){
        return this.ui.output('Hangman Game');
    }
    enterSomething(){
        this.ui.output('何か入力してください',"red");
    }
    notInclude(input:string){
        this.ui.output(`${input}は含まれていません`,"red");
    }
    notCorrect(input:string) {
        this.ui.output(`${input}は正解ではありません`, "red");
    }
    hit(input:string){
        this.ui.output(`${input}は正解です`,"green");
    }
    correct(question:Question){
        this.ui.output(`${question.word}正解です！`,"green");
    }
    gameOver(question:Question){
        this.ui.output(`正解は${question.word}でした`,"red");
    }
    end(){
        this.ui.output('終了です');
    }
}
const message = new Message(CLI);
interface GameState{
    stage:Stage;
    done:boolean;
}
class Game{
    quiz:Quiz;
    message:Message;
    stage:Stage;
    ui:UserInterface;
    constructor(quiz:Quiz,message:Message,ui:UserInterface) {
        this.quiz = quiz;
        this.message = message;
        this.ui = ui;
        this.stage = new Stage(this.quiz.getNext());
    }
    shouldEnd():boolean {
        if(this.stage.isGameOver()){
            return true;
        }
        if(!this.quiz.hasNext()&&this.stage.isCorrect()){
            return true;
        }
        return false;
    }
    next(isCorrect:boolean):GameState{
        if(!isCorrect){
            this.stage.decrementAttempts();
        }

        if(this.shouldEnd()){
            return {stage:this.stage,done:true};
        }

        if(isCorrect){
            this.stage = new Stage(this.quiz.getNext());
        }
        return {stage:this.stage,done:false};
    }
    async start():Promise<void>{
        this.ui.clear();
        this.message.start();

        let state:GameState = {stage:this.stage,done:false};

        while(!state.done){
            if(state.stage === undefined) break;

            const {stage} = state;

            this.message.leftQuestions(this.quiz);
            this.message.askQuestion(stage);

            const userInput = await this.ui.input();

            if(!userInput){
                this.message.enterSomething();
                state = this.next(false);
                continue;
            }

            stage.updateAnswer(userInput);

            if(stage.isCorrect()){
                this.message.correct(stage.question);
                state = this.next(true);
                continue;
            }

            if(stage.isTooLong(userInput)){
                this.message.notCorrect(userInput);
                state = this.next(false);
                continue;
            }

            if(stage.isIncludes(userInput)){
                this.message.hit(userInput);
                continue;
            }

            this.message.notInclude(userInput);
            state = this.next(false);
        }

        if(state.stage.isGameOver()){
            this.message.gameOver(state.stage.question);
        }

        this.message.end();
        this.ui.destroy();
    }
}
const game = new Game(quiz,message,CLI);

game.start();