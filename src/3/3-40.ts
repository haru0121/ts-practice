let value1: unknown = 1; // unknown 型

// NG
console.log(value1 + 1); // unknown 型の変数との+演算は許可されない
// >> 'value1' is of type 'unknown'.
