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
let fn5 = (person: Person, gender: string) => {
  console.log(
    `That person's name is ${person.name}(${person.age}, ${gender}).`
  );
};
// fn5 は関数型: (person: Person, gender: string) => void

// NG. fn3のパラメータの数 < fn5のパラメータの数　なので条件を満たさない。
fn3 = fn5;

// OK
fn5 = fn3;

//　fn5は関数型としてパラメータを2つ持つため、引数を2つ渡す必要がある。
fn5({ name: "Jane", age: 25 }, "female");
// ログ：That person's name is Jane (25).
