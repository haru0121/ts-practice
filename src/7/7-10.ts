function A() {
  console.log("A ファクトリ 評価");
  return function (originalMethod: any, context: any) {
    console.log("A デコレータ 呼び出し");
  };
}

function B() {
  console.log("B ファクトリ 評価");
  return function (originalMethod: any, context: any) {
    console.log("B デコレータ 呼び出し");
  };
}

function C(originalMethod: any, context: any) {
  console.log("C デコレータ 呼び出し");
}

class ExampleClass {
  @A() // デコレータファクトリ
  @B() // デコレータファクトリ
  @C // デコレータ
  method() {}
}
