class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Personクラスを指定
let john: Person;

// 型チェックOK
john = {
  name: "John Doe",
  age: 25,
};
