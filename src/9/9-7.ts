class Japanese {
  name: string;
  nationality = "JPN";
  age: number; // Error
  // >> Property 'age' has no initializer and is not definitely assigned in the constructor.

  constructor(name: string, age: number) {
    this.name = name;
  }
}
