/*
  let、const および var
*/

// var で宣言された変数（アクセス可能）
console.log(x); // undefined
var x = 1;
console.log(x); // 1

// let で宣言された変数（アクセス不可能）
console.log(y); // Uncaught ReferenceError: Cannot access 'y' before initialization
let y = 2;

// // const で宣言された変数（アクセス不可能）
console.log(z); // Uncaught ReferenceError: Cannot access 'z' before initialization
const z = 3;
