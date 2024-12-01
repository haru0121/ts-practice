// オブジェクトリテラルで生成したオブジェクトを代入
const person = {
  name: "Alice",
  age: 30,
};

// 型推論の結果
// {
//   name: string; 　name プロパティは string 型
//   age: number;    age プロパティは number 型

console.log(person.address);
// >> Property 'address' does not exist on type '{ name: string; age: number; }'.
