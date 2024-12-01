function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const numStringPair = createPair(123, "hello"); // [number, string]型
const numPair = createPair(123, 456); // [number, number]型
