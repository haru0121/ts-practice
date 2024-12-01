interface Person {
  name: string;
  age: number;
}

let john = { name: "John", age: 30, gender: "male" };

function introduce(person: Person) {
  console.log(`Hello, I'm ${person.name}`);
}

introduce(john); // OK
