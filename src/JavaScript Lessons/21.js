/*
  残余引数
*/

// 残余引数を用いた可変長引数関数
function sum(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10

// 残余引数は、他の固定引数と組み合わせることもできます。

function myFunc(x, y, ...args) {
  console.log(x);
  console.log(y);
  console.log(args); // 配列にまとめられる
}

myFunc(1, 2, 3, 4, 5);
// ログ出力
// 1
// 2
// [3, 4, 5]
