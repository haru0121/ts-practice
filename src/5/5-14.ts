let fn1 = () => ({ name: "John" });
// 関数型：() => { name: string; }

let fn2 = () => ({ name: "John", age: 30 });
// 関数型：() => { name: string; age: number; }

// OK
fn1 = fn2;
// fn2の戻り値の型 <: fn1の戻り値の型 であるため、fn1にfn2が代入可能。

// NG
fn2 = fn1;
// >> Type '() => { name: string; }' is not assignable to type '() => { name: string; age: number; }'.
//  >> Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'.
