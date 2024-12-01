// 方法①：他の要素とまとめてインポート
import { PI, square, Rectangle, Point, LengthUnit } from "./calc.js";

// 方法②：typeキーワードによって、型だけを明示的にまとめてインポート
// import { PI, square, Rectangle } from "./calc.js";
// import type { Point, LengthUnit } from "./calc.js";

// 方法③：型名の前にtypeを明記してインポート
// import { PI, square, Rectangle, type Point, type LengthUnit } from "./calc.js";

// インポートした型の利用
const pointA: Point = { x: 1, y: 1 };
let unit: LengthUnit = "mm";
