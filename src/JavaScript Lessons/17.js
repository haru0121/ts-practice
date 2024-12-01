/*
  typeof、in、instanceof 演算子
*/

//// typeof 演算子

console.log('"JavaScript" -> ', typeof "JavaScript"); // "string"
console.log("12 -> ", typeof 12); // "number"
console.log("14n -> ", typeof 14n); // "bigint"
console.log("true -> ", typeof true); // "boolean"
console.log('Symbol("id") -> ', typeof Symbol("id")); // "symbol"
console.log("undefined -> ", typeof undefined); // "undefined"
console.log("function () {} -> ", typeof function () {}); // "function"
console.log("null -> ", typeof null); // "object" （これは歴史的な理由からの挙動です）
console.log("{ a: 1 } -> ", typeof { a: 1 }); // "object"
console.log("[1, 2, 3] -> ", typeof [1, 2, 3]); // "object"（配列もオブジェクトの一種です）

//// in 演算子

// オブジェクト
// const game = {
//   maker: "Nintendo",
//   model: "N64",
//   year: 1996,
// };

// console.log("model" in game); // true
// console.log("price" in game); // false

// // 配列
// const colors = ["red", "green", "blue"];

// console.log(0 in colors); // true
// console.log(3 in colors); // false

// console.log("toString" in {}); // true

//// instanceof 演算子

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Wan!");
//   }
// }

// const gon = new Dog("Gon");

// console.log(gon instanceof Dog); // true
// console.log(gon instanceof Animal); // true
