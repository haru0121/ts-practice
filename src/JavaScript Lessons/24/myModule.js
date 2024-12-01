/*
  ES Modules の export/import
*/

// export

//// 1. 名前付きエクスポート
// 個別にエクスポート
export const myVariable = "some value";
export function myFunction() {
  /* ... */
}

// or まとめてエクスポート
export { myVariable, myFunction };

//// 2. デフォルトエクスポート
// 無名関数をデフォルトエクスポート
export default function () {
  /* ... */
}

// or
// const myFunction = () => {
//   /* ... */
// };
// export default myFunction;

//// 3. 別名でエクスポート
const myVariable = "some value";
export { myVariable as publicVal };
