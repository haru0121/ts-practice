interface Person {
  name: string;
  age: number;
  speak(word: string): void;
}

const alice: Person = {
  name: "Alice",
  age: 25,
  speak(word) {
    console.log(word);
  },
};

alice.speak("Wonderful!!");
