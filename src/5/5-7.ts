type Name = {
  name: string;
};

type Age = {
  age: number;
};

// ユニオン型を定義
type NameOrAge = Name | Age;
// { name: string} | { age: number }

let john: NameOrAge;
john = { name: "John" }; // OK
john = { age: 25 }; // OK
