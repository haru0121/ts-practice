interface ClassMethodDecoratorContext<
  This = unknown, // メソッドが定義されるクラスの型
  // デコレート対象メソッドの型
  Value extends (this: This, ...args: any) => any = (
    this: This,
    ...args: any
  ) => any
> {
  readonly kind: "method"; // デコレータされたクラスメンバーの種類
  readonly name: string | symbol; // デコレートされたメンバーの名前
  readonly static: boolean; // 静的なメンバーかどうか
  readonly private: boolean; // プライベートなメンバーかどうか
  readonly access: {
    has(object: This): boolean; // オブジェクトのプロパティに、デコレート対象と同じ名前のものが存在するか
    get(object: This): Value; // デコレータが適用されたメンバの現在の値を取得するために使用
  };
  addInitializer(initializer: (this: This) => void): void;
}
