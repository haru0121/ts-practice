class DataStorage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T {
    return this.items[index];
  }

  getAllItems(): T[] {
    return [...this.items];
  }
}

class DataStorageLogger<T> extends DataStorage<T> {
  printAllItems(): void {
    const allItems = this.getAllItems();
    console.log("Stored items:", allItems);
  }

  // 0番目に保存したデータを取得するメソッドを追加
  getFirstItem(): T {
    return this.getItem(0);
  }
}

// このnumber型がスーパークラスの型引数にも渡る
let numberStorage = new DataStorageLogger<number>();
numberStorage.add(85);
numberStorage.add(90);
console.log(numberStorage.getFirstItem()); // 85

// NG. スーパークラスのaddメソッドのパラメータの型が、number型になっているためエラー
numberStorage.add("12");
// >> Argument of type 'string' is not assignable to parameter of type 'number'.
