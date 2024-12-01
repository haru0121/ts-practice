interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// User型から'id'と'name'のプロパティを持つ新しい型を作成
type UserPreview = Pick<User, "id" | "name">;
// {
//   id: number;
//   name: string
// }

// OK.
const userPreview: UserPreview = {
  id: 1,
  name: "Alice",
  // emailとageプロパティは含まれない
};
