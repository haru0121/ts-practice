class DataStorage<T = number> {
  private items: T[] = [];

  // コンストラクタを追加
  constructor(initialItems?: T[]) {
    if (initialItems) {
      this.items.push(...initialItems);
    }
  }
  // 以降省略
}

// 初期値を渡してインスタンス化
let stringStorage = new DataStorage(["Ryu", "Ken"]);
