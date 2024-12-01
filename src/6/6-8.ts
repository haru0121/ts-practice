function getLastItem<T>(array: T[]): T {
  return array[array.length - 1];
}

const numbers = [1, 2, 3, 4, 5]; // number[] 型

// 型引数を明示的にnumber型に指定
let lastNumber = getLastItem<number>(numbers);

// NG.
let lastString = getLastItem<string>(numbers);
// >> Argument of type 'number[]' is not assignable to parameter of type 'string[]'.
//  >> Type 'number' is not assignable to type 'string'.
