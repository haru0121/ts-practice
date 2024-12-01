abstract class Animal {
  // 抽象メソッドは、具体的な実装を持たせてはいけない
  abstract makeSound(): void;

  move(): void {
    console.log("The animal is moving.");
  }
}
