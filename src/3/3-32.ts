let person: [string, number] = ["Alice", 30];

// NG
person = ["Alice", 30, 1993];
// >> Type '[string, number, number]' is not assignable to type '[string, number]'.
//  Source has 3 element(s) but target allows only 2.
