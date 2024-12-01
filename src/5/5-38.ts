// 引数がstring型かをチェックするユーザー定義型ガード
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printValue(inputVal: number | string) {
  if (isString(inputVal)) {
    // ユーザー定義型ガードによって、inputValはこのブロック内ではstring型として扱われる。
    console.log(inputVal.toUpperCase());
  } else {
    console.log(inputVal.toFixed(2));
  }
}
