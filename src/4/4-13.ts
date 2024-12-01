// 拡張元となるインターフェイス
interface Vehicle {
  speed: number;
}

// Car は Vehicle を拡張したインターフェイス
interface Car extends Vehicle {
  engineType: string;
  volume: number;
}

// OK
const superCar: Car = {
  speed: 240,
  engineType: "V8",
  volume: 4000,
};

// NG. 拡張元の Vehicle に存在するspeedプロパティが欠けているためエラー
const sportsCar: Car = {
  engineType: "V4",
  volume: 3000,
};
// >> Property 'speed' is missing in type '{ engineType: string; volume: number; }' but required in type 'Car'.
