class Circle {
  static PI: number = 3.14;
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    // メソッドからstaticプロパティのアクセスは可能
    return Circle.PI * this.radius * this.radius;
  }
}

console.log(Circle.PI); // 3.14

const circleA = new Circle(5);
console.log(circleA.getArea()); // 78.5

const circleB = new Circle(10);
console.log(circleB.getArea()); // 314
