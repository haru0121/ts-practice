/*
  コンストラクタ関数とクラス
*/

// コンストラクタ関数
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return "Hello, my name is " + this.name + "!";
  };
}

// クラス構文
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, my name is ${this.name}!`;
//   }
// }

const alice = new Person("Alice", 25);
console.log(alice.greet()); // "Hello, my name is Alice!"
