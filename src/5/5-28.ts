function printValue(value: string | number) {
  if (typeof value === "string") {
    // valueはstring型として扱われる。
    console.log(value.toUpperCase());
  } else {
    // valueは必然的にnumber型として扱われる
    console.log(value.toFixed(2));
  }
}
