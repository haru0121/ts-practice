// 変数valは型推論によりstring型になる。
let val = "10";

// number|string型が求められる変数にstring型の変数を代入
const age: number | string = val; // OK
