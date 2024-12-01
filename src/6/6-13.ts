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

let numberStorage = new DataStorage<number>();
numberStorage.add(10);
console.log(numberStorage.getItem(0)); // 10

// 型引数にstring型を指定してインスタンス化
let stringStorage = new DataStorage<string>();
stringStorage.add("Hello");
console.log(stringStorage.getItem(0)); // "Hello"
