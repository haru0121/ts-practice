// デコレータに型パラメータを導入
function logged<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  // 型パラメータを指定してany型から置き換える
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  // This, Args, Returnを指定して共通化
  function loggedMethod(this: This, ...args: Args): Return {
    console.log(`${context.name.toString()}メソッド呼び出し！`);
    const result = originalMethod.call(this, ...args);
    console.log(`${context.name.toString()}メソッド終了!`);
    return result;
  }

  return loggedMethod;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @logged
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person("John");
person.greet();
