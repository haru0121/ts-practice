interface Person {
  name: string;
  age: number;
  hobbies: string[];
}

type PersonKeys = keyof Person;
// "name" | "age" | "hobbies" 型
