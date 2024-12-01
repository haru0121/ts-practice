class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const john = new Person("John Doe", 25);

// NG. パラメータageはnumber型である必要があるためエラー
const jane = new Person("Jane Smith", "30");
// >> Argument of type 'string' is not assignable to parameter of type 'number'.
