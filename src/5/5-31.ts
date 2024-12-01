interface Rectangle {
  width: number;
  height: number;
}

interface Circle {
  radius: number;
}

// 新たにSquare型を追加
interface Square {
  width: number; // 正方形を表すSquareは一辺の長さの情報だけでよい
}

// 型エイリアスでユニオン型を定義
type Shape = Rectangle | Square | Circle;

function printArea(shape: Shape) {
  if ("width" in shape) {
    // shapeは Rectangle | Square型として扱われる
    console.log(`Area: ${shape.width * shape.height}`);
    // NG
    // >> Property 'height' does not exist on type 'Rectangle | Square'.
    //  >> Property 'height' does not exist on type 'Square'.
  }
  // 以下、省略
}
