type Person = {
  name: string;
  age: number;
};

// OK
const john: Person = {
  name: "John",
  age: 25,
};

// NG
const alice: Person = {
  name: "Alice",
  age: 30,
  gender: "female", // Person 型にはない、余分な gender プロパティ含まれるためエラー
};
// >> Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
