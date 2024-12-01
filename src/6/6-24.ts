type RGB = [red: number, green: number, blue: number];

interface Color {
  // 型の記述が重複
  red: RGB | string;
  green: RGB | string;
  blue: RGB | string;
}

let color: Color;
