interface FruitStock {
  [i: string]: number;
}

const fruit: FruitStock = {};
fruit.apple = 3;
fruit.orange = 5;

fruit.banana = "many"; // Error
// >> Type 'string' is not assignable to type 'number'.
