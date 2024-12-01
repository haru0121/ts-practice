class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  // このメソッドに機能を追加したい
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
