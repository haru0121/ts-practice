class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(greeting: string): void {
    console.log(
      `${greeting}, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const john = new Person("John Doe", 25);
// OK
john.greet("Hello");
// ログ出力： Hello, my name is John Doe and I'm 25 years old.

// NG. 必要な引数を渡していないためエラー
john.greet();
// >> Expected 1 arguments, but got 0.
//  >> An argument for 'greeting' was not provided.

// NG. 引数の型が異なるためエラー
john.greet(["Hello"]);
// >> Argument of type 'string[]' is not assignable to parameter of type 'string'.
