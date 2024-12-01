type Name = {
  name: string;
};

type Age = {
  age: number;
};

// インターセクション型
type NameAndAge = Name & Age;
// { name: sting; age: number }

let alice: NameAndAge;
alice = { name: "Alice", age: 30 }; // OK
alice = { name: "Alice" }; // NG
// >> Type '{ name: string; }' is not assignable to type 'NameAndAge'.
//  >> Property 'age' is missing in type '{ name: string; }' but required in type 'Age'.
