interface Product {
  [key: `product_${number}`]: string;
}

// OK
const productA: Product = {
  product_1: "foo",
  product_2: "bar",
  product_10: "baz",
};

// NG
const productB: Product = {
  product_1: "foo",
  product_2: "bar",
  product_dx: "baz", // Error
};

// >> Object literal may only specify known properties, and 'product_dx' does not exist in type 'Product'.
