/*
  正規表現
*/

//// 正規表現リテラル
let regex = /apple/g;

//// RegExpクラスから動的に正規表現を生成
// let pattern = "apple";
// let flag = "g";

// let regex = new RegExp(pattern, flag);

console.log(regex);

//// RegExp オブジェクトのメソッド
// test メソッド
console.log(/hello/.test("hello world")); // true

// exec メソッド
console.log(/world/.exec("hello world")); // [ 'world', index: 6, input: 'hello world', groups: undefined ]

//// String オブジェクト（文字列）のメソッド
// match メソッド
console.log("hello world".match(/hello/)); // [ 'hello', index: 0, input: 'hello world', groups: undefined ]

//search メソッド
console.log("hello world".search(/world/)); // 6
