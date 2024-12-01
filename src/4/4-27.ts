class Parent {
  parentMethod() {
    // スーパークラスのメソッド
  }
}

// Parentクラスを継承
class Child extends Parent {
  childMethod() {
    // サブクラスのメソッド
  }
}

const childObj = new Child();
childObj.parentMethod(); // 継承したスーパークラスのメソッドを呼び出せる
childObj.childMethod();
