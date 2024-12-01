interface Vehicle {
  speed: number;
  model: string | null;
}

interface Car extends Vehicle {
  engineType: string;
  model: string; // model プロパティをオーバーライド
}
