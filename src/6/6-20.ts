class DataStorage<T extends number | string> {
  private items: T[] = [];

  // 以下省略
}

// NG. number型かstring型に制約されているためエラー
let stringStorage = new DataStorage<boolean>();
// >> Type 'boolean' does not satisfy the constraint 'string | number'.
