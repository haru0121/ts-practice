/*
  デフォルト引数
*/

function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet(); // "Hello, Guest"
greet("Alice"); // "Hello, Alice"

// デフォルト引数に関数呼び出しの結果を設定
function logRandomNumber(num = Math.random()) {
  console.log(num);
}

logRandomNumber(); // 実行するたびに異なる値をとる

// 前に（左側で）定義された引数を、その後のデフォルト引数で利用
function totalWithTip(x, tip = x * 0.1) {
  return x + tip;
}

console.log(totalWithTip(1000)); // 1100
console.log(totalWithTip(1000, 150)); // 1150
