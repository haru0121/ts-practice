function addNumbers(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

let result = addNumbers("1", "2"); // "xy"

// NG. string 型のメソッドを呼び出そうとするとエラー
result.includes("1");
// >> Property 'includes' does not exist on type 'string | number'.
//  >> Property 'includes' does not exist on type 'number'.
