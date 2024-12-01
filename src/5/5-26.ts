let x = Math.random() > 0.5 ? 1 : "Hello, TypeScript";
// string | number 型

// NG。xの型がnumber型の可能性があるため
x.toUpperCase();
// >> Property 'toUpperCase' does not exist on type 'string | number'.
//  >> Property 'toUpperCase' does not exist on type 'number'.

// 代入する値の型からxの型を絞り込む
x = "narrowing"; // string 型

// OK。string型に絞り込まれているため
x.toUpperCase();

// 代入する値の型からxの型を絞り込む
x = 123;

// OK。number型に絞り込まれているため
x.toFixed();
