interface Person {
  name: string;
}

class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let person: Person;
person = new Student("Jane");
