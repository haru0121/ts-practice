class Person {
  readonly name: string; // 読み取り専用
  age: number;
  hobbies?: string[]; // オプショナル

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(greeting: string) {
    console.log(
      `${greeting}, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}
