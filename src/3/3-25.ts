type Person = {
  name: string;
  age?: number; // ageはオプショナル
};

// OK
const alice: Person = {
  name: "Alice",
  age: 28,
};

// OK. オプショナルなageプロパティが存在しなくても問題ない
const bob: Person = {
  name: "Bob",
};
