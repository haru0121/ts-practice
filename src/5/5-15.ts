interface Person {
  name: string;
  age: number;
}

// インターフェイスの拡張によって、自動的にStudentはPersonのサブタイプになる
interface Student extends Person {
  club: string;
}
// Studentインターフェイスの構造
// {
//   name: string;
//   age: number;
//   club: string;
// }
