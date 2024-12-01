function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

greet.call(undefined, 123); // Error
// >> Argument of type 'number' is not assignable to parameter of type 'string'.
