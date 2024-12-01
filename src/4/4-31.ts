class SuperClass {
  method(value: number): string {
    return `SuperClass method: ${value}`;
  }
}

class SubClass extends SuperClass {
  method(value: string): string {
    return `SuperClass method: ${value}`;
  }
}
// >> Property 'method' in type 'SubClass' is not assignable to the same property in base type 'SuperClass'.
//  >> Type '(value: string) => string' is not assignable to type '(value: number) => string'.
//   >> Types of parameters 'value' and 'value' are incompatible.
//    >> Type 'number' is not assignable to type 'string'.
