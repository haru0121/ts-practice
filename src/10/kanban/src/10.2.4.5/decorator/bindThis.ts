export function bound<This, Args extends any[], Return>(
  _originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  // addInitializerにフックしたい関数を渡す。
  context.addInitializer(function (this: any) {
    // thisはインスタンスを参照する。context.nameは対象のメソッド名
    this[context.name] = this[context.name].bind(this); // メソッド内のthisをインスタンスに束縛
  });
}
