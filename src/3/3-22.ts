type Address = {
  street: string;
  city: string;
  zipCode: string;
};

type Employee = {
  id: number;
  name: string;
  address: Address; // 型エイリアスを指定
};
