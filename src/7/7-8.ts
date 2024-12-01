function logged(originalMethod: any, context: any) {
  function loggedMethod(this: any, ...args: any[]) {
    // contextオブジェクトから対象のnameを取得して表示
    console.log(`${context.name}メソッド呼び出し！`);
    const result = originalMethod.call(this, ...args);
    console.log(`${context.name}メソッド終了!`);
    return result;
  }

  return loggedMethod;
}

function bound(_originalMethod: any, context: any) {
  // addInitializerにフックしたい関数を渡す。
  context.addInitializer(function (this: any) {
    // thisはインスタンスを参照する。context.nameは対象のメソッド名
    this[context.name] = this[context.name].bind(this); // メソッド内のthisをインスタンスに束縛
  });
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @bound // boundデコレータの適用
  @logged
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person("John");
setTimeout(person.greet, 1000);

// ログ出力内容
// >> greetメソッド呼び出し！
// >> Hello, my name is John.
// >> greetメソッド終了!
