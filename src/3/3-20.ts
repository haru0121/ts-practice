type Book = {
  title: string;
  author: string;
  publishedIn: number;
};

// Error
const book: Book = {
  title: "こころ",
  author: "夏目漱石",
  // publishedInプロパティが欠けているためエラー
};
// >> Property 'publishedIn' is missing in type '{ title: string; author: string; }' but required in type 'Book'.
