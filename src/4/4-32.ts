class Parent {
  constructor(name: string) {
    console.log(`Parent: ${name}`);
  }
}

class Child extends Parent {
  constructor(name: string, age: number) {
    super(name);
    console.log(`Child: name => ${name}, age => ${age}`);
  }
}

const child = new Child("Child", 10);
// 実行結果
// Parent: Child
// Child: name => Child, age => 10
