function addNumbers(a, b) {
  return a + b;
}

// 引数として number 型の値を受け取った場合
let result = addNumbers(1, 2); // 3
console.log(result);

// 引数として string 型の値を受け取った場合
result = addNumbers("1", "2"); // "12"
console.log(result);

// 引数として number 型とstring型を受け取った場合
result = addNumbers(2, "4"); // "24"
console.log(result);
