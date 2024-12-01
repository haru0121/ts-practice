class Person {
  // privateなプロパティとして設定
  #age = 20;

  // Getterの設定
  get age() {
    return this.#age;
  }

  // Setterの設定
  set age(val) {
    this.#age = val;
  }
}
