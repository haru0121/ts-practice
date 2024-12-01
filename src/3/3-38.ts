let value1: any = 1; // any型
value1 = "noTypeCheck"; // any型
value1.nocheck(); // 型チェックが行われないのでエラーなし

let value2: any = [1, 2, 3]; // any型
let value3 = value1 + value2; // 型チェックが行われないのでエラーなし
