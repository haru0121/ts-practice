type Person = {
  name: string;
  age: number;
};

const alice = {
  name: "Alice",
  age: 30,
  gender: "female",
};

const aliceAsPerson: Person = alice; // OK
