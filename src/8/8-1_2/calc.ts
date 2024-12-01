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

// 名前付きエクスポート
export { PI, square, Rectangle };
