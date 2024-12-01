/*
  オプショナルチェーン演算子と null 合体演算子
*/

//// オプショナルチェーン演算子

// 1. プロパティアクセス

const personA = {
  name: "John",
  address: {
    city: "Boston",
  },
};

console.log(personA.address.city); // Boston
console.log(personA.address.zipCode); // undefined（アクセス可能だが、プロパティが存在しない）

// NG
console.log(personA.profile.age); // エラー: Cannot read properties of undefined（reading 'age'）
// OK. オプショナルチェーン演算子を使用
console.log(personA.profile?.age); // undefined（エラーが発生しない）

// 2. 関数やメソッドの呼び出し

const personB = {
  greet: () => {
    console.log("Hello!");
  },
};

personB.greet?.(); // "Hello!"
personB.goodbye?.(); // 何も起こらない（エラーが発生しない）

// 3. 配列のアクセス
const colors = ["red", "blue", "green"];

console.log(colors?.[1]); // blue
console.log(colors?.[10]); // undefined（エラーが発生しない）

//// null 合体演算子

const result1 = null ?? "default";
console.log(result1); // "default"

const result2 = 0 ?? "default";
console.log(result2); // 0

const personC = {
  name: "John",
  profile: {
    age: 20,
  },
};

const age = personC.profile?.age ?? "unknown";
console.log(age); // 20

const gender = personC.profile?.gender ?? "unknown";
console.log(gender); // "unknown"
