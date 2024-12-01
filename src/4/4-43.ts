interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}
// >> Class 'Circle' incorrectly implements interface 'Shape'.
//  >>  Property 'getArea' is missing in type 'Circle' but required in type 'Shape'.
