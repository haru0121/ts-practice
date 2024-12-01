// 色名を抜き出して新たにユニオン型を定義s
type primaryColors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

// レコード型による定義
let color: Record<primaryColors, RGB | string>;
