interface Pair<T> {
  first: T;
  second: T;
}

// 型引数にstring型を指定
let stringPair: Pair<string> = {
  first: "Ryu",
  second: "Ken",
};

// 型引数にnumber型を指定
let numberPair: Pair<number> = {
  first: 1,
  second: 2,
};

// NG. 型引数を渡していないのでエラー
let dataPair: Pair;
// Generic type 'Pair<T>' requires 1 type argument(s).
