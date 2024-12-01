// ①これまでの書き方
// class Person {
//   name: string;
//   protected age: number;
//   private address: string;

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   introduce() {
//     console.log(
//       `I'm ${this.name} and ${this.age} years old. I live at ${this.address}`
//     );
//   }
// }

// ②省略記法
class Person {
  constructor(
    // コンストラクタのパラメータにアクセス修飾子をつけることで、自動的にメンバー変数が宣言される
    public name: string,
    protected age: number,
    private address: string
  ) {}

  introduce() {
    console.log(
      `I'm ${this.name} and ${this.age} years old. I live at ${this.address}`
    );
  }
}
