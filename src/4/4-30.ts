class SuperClass {
  prop: number = 10;
}

class SubClass extends SuperClass {
  prop: string = "20"; // SuperClassのプロパティをオーバーライド.
}
// >> Property 'prop' in type 'SubClass' is not assignable to the same property in base type 'SuperClass'.
// >> 　Type 'string' is not assignable to type 'number'.
