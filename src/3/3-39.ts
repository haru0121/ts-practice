let value1: unknown = 1; // unknown 型なのでどんな値でも代入可能

// NG
let value2: number = value1; // unknown 型の変数を代入することはできない
// >> Type 'unknown' is not assignable to type 'number'.
