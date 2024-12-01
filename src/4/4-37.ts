class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  // ゲッターの定義
  get radius(): number {
    console.log("半径を取得");
    return this._radius;
  }

  // セッターの定義
  set radius(value: number) {
    if (value <= 0) {
      throw new Error("不正な値です。0より大きい値を入力してください。");
    }
    console.log("半径を設定");
    this._radius = value;
  }
}

const circle = new Circle(3);

// ゲッターの実行
console.log(circle.radius);
// ログ出力：
// >> 半径を取得
// >> 3

// セッターの実行
circle.radius = 5;
// >> 半径を設定

// NG. 負の値をセットしようとするとエラーが発生
circle.radius = -1;
// >> Error: 不正な値です。0より大きい値を入力してください。
