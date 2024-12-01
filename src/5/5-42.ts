let obj = {
  x: 10,
  y: "hello",
} as const;

// constアサーションで変更後の型
// {
//  readonly x: 10;
//  readonly y: "hello";
// }
