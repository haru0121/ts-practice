class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(greeting: string): void {
    console.log(
      `${greeting}, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}
