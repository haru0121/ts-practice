// オブジェクトリテラルで生成したオブジェクトを代入
const person = {
  name: "Alice",
  age: 30,
};

// 型推論の結果
// {
//   name: string; 　name プロパティは string 型
//   age: number;    age プロパティは number 型
// }

person.age = "30";
// >> Type 'string' is not assignable to type 'number'.
