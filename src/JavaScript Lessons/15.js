/*
  クラスと this
*/

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet(greeting) {
//     console.log(`${greeting}, my name is ${this.name}.`);
//   }
// }

class Person {
  name = "John"; // トップレベルで初期値の設定が可能
  age;
  constructor(name, age) {
    this.name = name; // 上書き可能
    this.age = age;
  }

  greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}.`);
  }
}

// インスタンス化
const alice = new Person("Alice", 30);
const jane = new Person("Jane", 25);

alice.greet("Hello"); // Hello, my name is Alice.
jane.greet("Hi"); // Hi, my name is Jane.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   incrementAge() {
//     this.age += 1;
//   }

//   displayAge() {
//     console.log(`I am ${this.age} years old.`);
//   }
// }

// const bob = new Person("Bob", 20);
// bob.incrementAge();
// bob.displayAge(); // "I am 21 years old."
