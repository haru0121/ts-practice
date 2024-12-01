function getLastItem<T>(array: T[]): T {
  return array[array.length - 1];
}

const numbers = [1, 2, 3, 4, 5];
let lastNumber = getLastItem(numbers); // 5 number型
