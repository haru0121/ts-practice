interface Person {
  name: string;
  age: number;
  hobbies: string[];
}

const person: Person = {
  name: "John",
  age: 18,
  hobbies: ["cooking", "tennis"],
};

// keyof Person は、"name" | "age" | "hobbies" 型
function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

// string | number | string[]型
getProperty(person, "name"); // "John"
