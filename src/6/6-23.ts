interface User {
  name: string;
  email: string;
  age?: number;
}

let user1: User = {
  name: "John",
  email: "abc@email.com",
  age: 18,
};

// 関数の2つ目パラメータに、Partial<User>を指定
function updateUser(user: User, fieldsToUpdate: Partial<User>) {
  return { ...user, ...fieldsToUpdate };
}

// emailのみを持つオブジェクトを渡すことが可能
user1 = updateUser(user1, {
  email: "xyz@email.com",
});

console.log(user1); // { name: 'John', email: 'xyz@email.com', age: 18 }
