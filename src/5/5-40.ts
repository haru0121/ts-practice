// TypeScriptはDOM APIの種類から戻り値の型をある程度推論するが、具体的なHTML要素までは絞り込めない
const someElementA = document.querySelector(".someClass");
// Element | null 型

// 型アサーションによる型の変更。開発者が具体的なHTML要素を知っている場合
const someElementB = document.querySelector(".someClass") as HTMLInputElement;
// HTMLInputElement 型

console.log("someElementB:", someElementB.value);
