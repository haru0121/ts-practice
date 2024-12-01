/*
  分割代入
*/

////  配列の分割代入

const nums = [1, 2, 3];

// 分割代入;
const [a, b] = nums;

console.log(a); // 1
console.log(b); // 2

// 残余構文と分割代入
// const nums = [1, 2, 3, 4, 5];

// const [a, b, ...rest] = nums;

// console.log(a); // 1
// console.log(b); // 2
// console.log(rest); // [3, 4, 5]

//// オブジェクトの分割代入

const john = {
  name: "John",
  age: 20,
  gender: "male",
};

// 分割代入
const { name, age, gender } = john;

console.log(name); // 'John'
console.log(age); // 20
console.log(gender); // 'male'

// 別名の変数に分割代入
const { name: lastName } = john;

console.log(lastName); // 'John'

//// 関数のパラメータとしての分割代入

// パラメータを分割代入で指定
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: "Bob", age: 25 };
displayUser(user); // "Name: Bob, Age: 25"
