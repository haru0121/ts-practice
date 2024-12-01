const person = {
  name: "John",
  age: 30,
  hobbies: ["tennis", "cooking"],
};

// 既存の変数から型を取得して、パラメータの型として指定
function greet(p: typeof person) {
  console.log(`My name is ${p.name}!`);
}

// パラメータ p の型
// {
//   name: string;
//   age: number;
//   hobbies: string[];
// }

// NG
greet({ name: "Alice", age: 22 });
// >> Argument of type '{ name: string; age: number; }' is not assignable to parameter of type '{ name: string; age: number; hobbies: string[]; }'.
//  >> Property 'hobbies' is missing in type '{ name: string; age: number; }' but required in type '{ name: string; age: number; hobbies: string[]; }'.
