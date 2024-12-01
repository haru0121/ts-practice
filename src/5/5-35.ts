type RGB = [red: number, green: number, blue: number]; // ラベル付きTuple型

interface Color {
  red: RGB | string;
  green: RGB | string;
  blue: RGB | string;
}

// Colorで型注釈
const color: Color = {
  red: [255, 0, 0],
  green: "#00ff00", // string | RGB 型
  blue: [0, 0, 255],
};

// NG!!
const greenNormalized = color.green.toUpperCase();
// >> Property 'toUpperCase' does not exist on type 'string | RGB'.
//  >> Property 'toUpperCase' does not exist on type 'RGB'.
