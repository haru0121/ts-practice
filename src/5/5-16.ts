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
// fn3 は関数型: (person: Person) => void

let fn4 = (student: Student) => {
  console.log(
    `That student's name is ${student.name} (${student.age}) and enjoys ${student.club}`
  );
};
// fn4 は関数型: (student: Student) => void

// NG. パラメータの型に注目すると、Student型 <: Person型　なので条件を満たさない。
fn3 = fn4;

// OK.
fn4 = fn3;

// fn4のパラメータの型はStudent型のため、Student型のオブジェクトを渡す必要がある。
fn4({ name: "John", age: 30, club: "tennis" });
// ログ：That person's name is John (30).
