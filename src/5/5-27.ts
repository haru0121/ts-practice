// ケース1
let x = Math.random() > 0.5 ? 1 : "Hello";
// string | number 型

if (x === "Hello") {
  // OK。このブロック内では、xは"Hello"型として扱われる
  x.toUpperCase();
}

// NG
x.toUpperCase();

// ケース2
function fn(strOrNum: string | number, strOrBool: string | boolean) {
  // この条件が真になるのは、どちらもstring型の場合のみ
  if (strOrNum === strOrBool) {
    // このブロック内では、どちらの変数もstring型として扱われる
    strOrNum.toUpperCase();
    strOrBool.toUpperCase();
  } else {
    console.log(strOrNum); // string | number 型
    console.log(strOrBool); // string | boolean 型
  }
}
