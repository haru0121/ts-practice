class SuperClass {
  prop: number = 10;
}

class SubClass extends SuperClass {
  prop: number = 20; // SuperClassのプロパティをオーバーライド.
}
