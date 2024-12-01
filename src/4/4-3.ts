interface Person {
  name: string;
  age: number;
}

// 変数 john に Person インターフェイスを指定
let john: Person = {
  name: "John",
  age: 30,
};

// NG
john = "John";
// >> Type 'string' is not assignable to type 'Person'.

// NG
john = {
  name: "John",
  age: "30",
  // >> Type 'string' is not assignable to type 'number'.
};
