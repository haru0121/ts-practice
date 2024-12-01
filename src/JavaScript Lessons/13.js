/*
  アロー関数と関数式
*/

// 従来の関数宣言
function add(x, y) {
  return x + y;
}

// 関数式(無名関数を変数に代入)
// const add = function (x, y) {
//   return x + y;
// };

// アロー関数式
// const add = (x, y) => x + y;

// ホイスティングされているのでエラーにならない
Hoisted();

// 関数宣言によって宣言された関数はホイスティングされる
function Hoisted() {
  console.log("Hoisted!");
}

// 関数式はホイスティングされないため、宣言前に実行しようとするとエラーになる
notHoisted(); // TypeError: notHoisted is not a function

const notHoisted = function () {
  console.log("Not Hoisted!");
};
