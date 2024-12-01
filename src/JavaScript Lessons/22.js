/*
  bind、call、apply メソッド
*/

function showThis() {
  console.log(this);
}

// 関数を直接呼び出す
showThis();
// ログ出力
// Windowオブジェクト（ブラウザ環境でのグローバルオブジェクト） or
// globalオブジェクト（Node.js環境）

const obj = {
  showThis,
};

// オブジェクトのメソッドとして関数を呼び出す
obj.showThis(); // obj自体が表示

//// bind メソッド

const john = {
  name: "John",
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

// johnのgreetメソッドの参照を新しい変数greetに保存
const freeGreet = john.greet;
// thisのコンテキストが失われているため、エラーになるか意図しない結果になる
freeGreet();

// bindメソッドに渡したオブジェクトがthisに束縛された新しい関数が作成される
const boundedGreet = john.greet.bind(john);
boundedGreet(); // "Hello, my name is John."

//// call メソッド

// function greet(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const bob = { name: "Bob" };
// // thisと引数の束縛と呼び出し
// greet.call(bob, "Hello"); // "Hello, Bob!"

//// apply メソッド

// function greet(greeting, message) {
//   console.log(`${greeting}, ${this.name}! ${message}`);
// }

// const alice = { name: "Alice" };
// greet.apply(alice, ["Hi", "How are you?"]);
// "Hi, Alice! How are you?"
