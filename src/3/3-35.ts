type Foo = [first: number, second?: string, ...rest: any[]];

let a: Foo = [1]; // first要素のみの配列を代入可能
let b: Foo = [1, "hello"]; // firstとsecond要素のみ
let c: Foo = [1, "hello", true, 10, "world"]; // first, second要素の他に、...restに複数の要素を割り当てる場合
