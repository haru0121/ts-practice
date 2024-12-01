const PI = 3.14;

function square(x: number) {
  return x ** 2;
}

class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

interface Point {
  x: number;
  y: number;
}

type LengthUnit = "m" | "cm" | "mm";

// 方法①：ほかの要素とまとめてエクスポート
export { PI, square, Rectangle, Point, LengthUnit };

// 方法②：export typeで、型だけをまとめてエクスポート
// export { PI, square, Rectangle };
// export type { Point, LengthUnit };

// 方法③：型名の前にtypeを明記してエクスポート
// export { PI, square, Rectangle, type Point, type LengthUnit };
