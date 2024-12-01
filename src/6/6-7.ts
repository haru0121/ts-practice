function getLastItem<T>(array: T[]): T {
  return array[array.length - 1];
}

const numbers = [1, 2, 3, 4, 5]; // number[] 型

// ジェネリック関数を呼び出すとき、明示的には型に関する情報を指定していない。
let lastNumber = getLastItem(numbers); // 正しく number型と推論される。
