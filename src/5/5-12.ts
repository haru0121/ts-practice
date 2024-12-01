interface Person {
  name: string;
  age: number;
}
let person: Person;

// ケース1
let john = {
  name: "John",
  age: 30,
  gender: "male", // Personにはないプロパティが存在する
};

// OK。変数johnの各プロパティの型 <: Personの各プロパティ
person = john;

// ケース2
let jane = {
  name: "Jane",
  age: "25", // string型はPersonのageの型のサブタイプではない
};

// NG
person = jane;
// >> Type '{ name: string; age: string; }' is not assignable to type 'Person'.
//  >> Types of property 'age' are incompatible.
//   >> Type 'string' is not assignable to type 'number'.

// ケース3
let alice = {
  name: "Alice",
  // Personに存在するプロパティageが欠如している
};

// NG
person = alice;
// >> Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.
