class Person {
  name: string;
  protected saving: number;

  constructor(name: string, saving: number) {
    this.name = name;
    this.saving = saving;
  }
}

class Employee extends Person {
  private salary: number;

  constructor(name: string, saving: number, salary: number) {
    super(name, saving);
    this.salary = salary;
  }

  public introduce() {
    console.log(
      // サブクラスの内部ではsavingにアクセス可能
      `I'm ${this.name}. My salary is ${this.salary} and my saving is ${this.saving}`
    );
  }
}

const john = new Employee("John", 1000, 30);

john.introduce();
// I'm John. My salary is 30 and my saving is 1000.

// NG. savingはprotectedなのでクラスの外部からはアクセスできない
console.log(john.saving);
// >> Property 'saving' is protected and only accessible within class 'Person' and its subclasses.
