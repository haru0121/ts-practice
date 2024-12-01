// パラメータの型にany型の配列を指定
function getLastItem(array: any[]) {
  return array[array.length - 1];
}

const numbers = [1, 2, 3, 4, 5];
let lastNumber = getLastItem(numbers); // 5 だが、型はany型になる

const strings = ["a", "b", "c"];
let lastString = getLastItem(strings); // "c" だが、型はany型になる
