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

function getSpecificProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// 戻り値は、string型
getSpecificProperty(person, "name"); // "John"
