interface Person {
  name: string;
  age?: number;
}

// ageプロパティを省略できる
const bob: Person = {
  name: "Bob",
};
