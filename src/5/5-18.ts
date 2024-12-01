interface Person {
  name: string;
  age: number;
}

// インターフェイスの拡張によって、自動的にStudentはPersonのサブタイプになる
interface Student extends Person {
  club: string;
}

let fn3 = (person: Person) => {
  console.log(`That person's name is ${person.name} (${person.age}).`);
};

// 新たに定義
let fn6 = (student: Student, gender: string) => {
  console.log(
    `That student's name is ${student.name}(${student.age},${gender}) and enjoys ${student.club}`
  );
};
// fn6 は関数型: (student: Student, gender: string) => void

// OK
fn6 = fn3;
// 互換性の条件1：fn6のパラメータの型 <: fn3のパラメータの型
// 互換性の条件2：fn3のパラメータの数 < fn6のパラメータの数

fn6({ name: "Alice", age: 18, club: "chess" }, "female");
// ログ：That person's name is Alice (18).
