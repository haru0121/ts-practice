type RGB = [red: number, green: number, blue: number]; // ラベル付きTuple型

interface Color {
  red: RGB | string;
  green: RGB | string;
  blue: RGB | string;
}
