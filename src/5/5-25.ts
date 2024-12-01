function fn1() {
  let x; // any型
  x = 123;
  x = "abc";
  return x;
}

let x = fn1(); // string型
x = 1; // NG
// Type 'number' is not assignable to type 'string'.

function fn2() {
  let list = []; // any[]型
  list.push(1);
  list.push("Jane");
  return list;
}

const list = fn2(); // (string | number)[]
list.push(true); // NG
// >> Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
