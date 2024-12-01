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
