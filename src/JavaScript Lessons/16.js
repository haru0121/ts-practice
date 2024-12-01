/*
  JavaScript のプライベートクラスメンバー
*/

class Example {
  #privateField = "This is a private field";

  getPrivateField() {
    return this.#privateField;
  }
}

const obj = new Example();
console.log(obj.#privateField); // Error
console.log(obj.getPrivateField()); // This is a private field
