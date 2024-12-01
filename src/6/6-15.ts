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

// DataStorage<string>クラスを継承
class DataStorageLogger extends DataStorage<string> {
  printAllItems(): void {
    const allItems = this.getAllItems();
    console.log("Stored items:", allItems);
  }
}

let stringStorage = new DataStorageLogger();
stringStorage.add("Type");
stringStorage.add("Script");
stringStorage.printAllItems(); // ログ出力： Stored items: [ 'Type', 'Script' ]
