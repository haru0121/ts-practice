let age = 22;
age.toUpperCase(); // number型にはない不正なメソッドの呼び出し
// >> Property 'toUpperCase' does not exist on type 'number'.

let firstName = "Alice";
firstName.toFixed(); // string型にはない不正なメソッドの呼び出し
// >> Property 'toFixed' does not exist on type 'string'. Did you mean 'fixed'?

let isCompleted = true;
isCompleted + isCompleted; // boolean型には許可されていない + 演算子を適用
// >> Operator '+' cannot be applied to types 'boolean' and 'boolean'.
