// デコレータファクトリの定義
function logged(headMessage = "[LOG]：") {
  // メソッドデコレータを定義して返却
  return function actualDecorator(originalMethod: any, context: any) {
    function loggedMethod(this: any, ...args: any[]) {
      // デコレータファクトリに渡した値をデコレータ内で使用する。
      console.log(`${headMessage} ${context.name}メソッド呼び出し！`);
      const result = originalMethod.call(this, ...args);
      console.log(`${headMessage} ${context.name}メソッド終了!`);
      return result;
    }

    return loggedMethod;
  };
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

  // デコレータファクトリに引数を渡して実行
  @bound
  @logged("[INFO]:")
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person("John");
person.greet();

// ログ出力内容
// >> [INFO]: greetメソッド呼び出し！
// >> Hello, my name is John.
// >> [INFO]: greetメソッド終了!
