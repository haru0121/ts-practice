// オーバーロードのシグネチャ
function getLastItem(array: number[]): number;
function getLastItem(array: string[]): string;
// 必要に応じて他の型のオーバーロードを追加する...

// 関数本体
function getLastItem(array: any[]): any {
  return array[array.length - 1];
}

const numbers = [1, 2, 3, 4, 5];
let lastNumber = getLastItem(numbers); // 5 number型

const strings = ["a", "b", "c"];
let lastString = getLastItem(strings); // "c" string型
