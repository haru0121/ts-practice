// 説明の簡略化のために、パラメータがany型に指定されているデコレータ（再掲）
function logged(originalMethod: any, context: any) {
  function loggedMethod(this: any, ...args: any[]) {
    console.log(`${context.name}メソッド呼び出し！`);
    const result = originalMethod.call(this, ...args);
    console.log(`${context.name}メソッド終了!`);
    return result;
  }

  return loggedMethod;
}
