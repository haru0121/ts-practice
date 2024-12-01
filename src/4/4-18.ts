class Person {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    // >> Property 'name' does not exist on type 'Person'.
    // >> Property 'age' does not exist on type 'Person'.
  }
}
