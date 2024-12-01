interface IStorage<T> {
  add(item: T): void;
  getItem(index: number): T;
  getAllItems(): T[];
}

// NG. IStorageを正しく実装できていない。
class DataStorage<T> implements IStorage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T {
    return this.items[index];
  }

  // getAllItemsメソッドが欠如しているためエラー
}
// >> Class 'DataStorage<T>' incorrectly implements interface 'IStorage<T>'.
//  >> Property 'getAllItems' is missing in type 'DataStorage<T>' but required in type 'IStorage<T>'.
