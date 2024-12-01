/*
  スプレッド構文
*/

// 配列の展開
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
console.log(arr2);

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// オブジェクトの展開
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
console.log(obj2);

const original = { a: 1, b: 2, c: 3 };
const copied = { ...original }; // { a: 1, b: 2, c: 3 }
