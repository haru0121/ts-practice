// 型としてエクスポートされたクラスをtypeを付けずにインポート
import { PI, square, Rectangle, type Point, type LengthUnit } from "./calc.js";

// NG. 値としての利用は許可されない
const rect = new Rectangle(5, 10);
// >> 'Rectangle' cannot be used as a value because it was exported using 'export type'.

// OK. 型としての利用は許される
const rect1: Rectangle = {
  width: 3,
  height: 6,
  getArea() {
    return this.width * this.height;
  },
};
