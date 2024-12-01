// オーバーロードのシグネチャ
function addNumbers(a: number, b: number): number;
function addNumbers(a: string, b: string): string;
function addNumbers(a: number, b: string): string;
function addNumbers(a: string, b: number): string;

// 関数本体
function addNumbers(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

let result = addNumbers("1", "2"); // result は string 型として推論される
// string 型と推論されているためエラーにならない
console.log(result.includes("1")); // true
