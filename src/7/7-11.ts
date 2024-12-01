type Decorator = (
  target: Input, // 1つ目のパラメータ
  // 2つ目のパラメータ
  context: {
    kind: string; // デコレータを適用する対象の種類（例："method", "class"など）
    name: string | symbol; // デコレータを適用する対象の名前

    // デコレータが適用されるクラスのメンバーに対する直接的なアクセスを提供
    access: {
      // デコレート対象と同じ名前のものが存在するか
      has?(target: unknown): boolean;
      // デコレータが適用されたメンバの現在の値を取得するために使用
      get?(target: unknown): unknown;
      // デコレータが適用されたメンバに新しい値を設定するために使用
      set?(target: unknown, value: unknown): void;
    };
    private?: boolean; // privateなメンバーかどうか？
    static?: boolean; // staticなメンバーかどうか？
    addInitializer?(initializer: () => void): void;
  }
) => Output | void; // 戻り値の型
