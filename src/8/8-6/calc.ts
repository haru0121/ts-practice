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

// Rectangleの前にtypeを記述してエクスポート
export { PI, square, type Rectangle, type Point, type LengthUnit };
