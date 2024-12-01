class Person {
  private _name = "John";

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}
