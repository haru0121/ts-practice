const employee = {
  id: "e001",
  name: "Alice",
  department: "Engineering",
};

// keyofとtypeofを組み合わせると、明示的な型情報がなくても変数から直接キー情報を抽出できる
function getEmployeeDetail(key: keyof typeof employee) {
  return employee[key];
}

// keyof typeof employee の型
// '"name" | "id" | "department"

console.log(getEmployeeDetail("name")); //"Alice"

// NG
console.log(getEmployeeDetail("age"));
// >> Argument of type '"age"' is not assignable to parameter of type '"id" | "name" | "department"'.
