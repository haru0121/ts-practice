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

const person = new Person("John");

// OK. オブジェクトのメソッドとして実行。thisはpersonオブジェクトに束縛される。
person.greet(); // Hello, my name is John.

// NG. コールバック関数として実行すると undefined
setTimeout(person.greet, 1000); // Hello, my name is undefined.
