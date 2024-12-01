function loggedClass<This extends { new (...args: any[]): {} }>(
  target: This,
  context: ClassDecoratorContext<This>
) {
  // 元のクラスを継承した無名クラスを返す
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log(
        `${context.name} クラスに ${args.join(", ")} を渡してインスタンス化`
      );
    }
  };
}
