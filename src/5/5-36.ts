type RGB = [red: number, green: number, blue: number]; // ラベル付きTuple型

interface Color {
  red: RGB | string;
  green: RGB | string;
  blue: RGB | string;
}

const color = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Color; // satisfiesキーワードによる型の指定

// OK
const greenNormalized = color.green.toUpperCase();

// NG
const typoColor = {
  red: [255, 0, 0],
  green: "#00ff00",
  bleu: [0, 0, 255], // Error
} satisfies Color;

// >> Object literal may only specify known properties, and 'bleu' does not exist in type 'Color'.
