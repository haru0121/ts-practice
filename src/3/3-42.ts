const person = {
  age: 25,
  firstName: Math.random() > 0.5 ? "Alice" : null,
};

// NG. firstNameプロパティがnullである可能性がるためエラー
console.log(person.firstName.toUpperCase());
// >> 'person.firstName' is possibly 'null'.

// OK
console.log(person.firstName?.toUpperCase());
