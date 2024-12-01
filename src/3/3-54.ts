type Shape = "circle" | "square" | "triangle";

// すべてのケースを処理するための関数
function handleShapes(shape: Shape) {
  switch (shape) {
    case "circle":
      // 円を処理する
      break;
    case "square":
      // 正方形を処理する
      break;
    case "triangle":
      // 三角形を処理する
      break;
    default:
      // shape　が網羅的ににチェックされたていれば、default ケースには決して到達しない
      const exhaustiveCheck: never = shape;
      throw new Error(`未処理の形状: ${exhaustiveCheck}`);
  }
}

// 関数の使用例
handleShapes("circle"); // OK
handleShapes("hexagon"); // NG
// Argument of type '"hexagon"' is not assignable to parameter of type 'Shape'.
