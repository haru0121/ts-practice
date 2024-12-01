type ImmutablePerson = {
  readonly name: string;
  age: number;
};

const alice: ImmutablePerson = {
  name: "Alice",
  age: 30,
};

// OK. 値の変更が可能
alice.age = 31;

// NG. 読み取り専用プロパティに値の変更は許可されない。
alice.name = "Jane";
// >> Cannot assign to 'name' because it is a read-only property.
