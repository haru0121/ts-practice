/*
第8章のサンプルコードの実行は、コンパイル後の main.js ファイルを node コマンドで実行してください。
*/

import { PI, square, Rectangle } from "./calc.js"; // 拡張子に.jsを指定

console.log(PI); // 3.14

const result = square(3);
console.log(result); // 9

const rect = new Rectangle(5, 10);
console.log(rect.getArea()); // 50
