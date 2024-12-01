class Person {
  public name: string; // 明示的にpublicと指定
  age: number; // デフォルトでpublic

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet() {
    console.log(
      // 内部でnameとageにアクセス
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const john = new Person("John", 25);

// クラスの外部からアクセス
console.log(john.name); // John
console.log(john.age); // 25
john.greet(); // Hello, my name is John and I'm 25 years old.
