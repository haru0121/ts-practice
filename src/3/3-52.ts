// 戻り値の型が void の関数型
type ReturnVoid = () => void;

// OK. 実際には string 型の値を返す関数の代入
const greetWorld: ReturnVoid = () => {
  return "Hello, World!";
};

// result の型は void として扱われ、関数の戻り値の型情報は無視される
const result = greetWorld(); // void 型

// NG. TypeScript は、result の型を void と見なしているため、string 型のメソッドは使えない
console.log(result.toUpperCase());
// >> Property 'toUpperCase' does not exist on type 'void'.
