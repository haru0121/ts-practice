function isString(value: unknown): boolean {
  return typeof value === "string";
}

function printValue(inputVal: number | string) {
  if (isString(inputVal)) {
    // NG。inputValがstring型に絞り込めていない。
    console.log(inputVal.toUpperCase());
    // >> Property 'toUpperCase' does not exist on type 'string | number'.
  } else {
    // NG
    console.log(inputVal.toFixed(2));
    // >> Property 'toFixed' does not exist on type 'string | number'.
  }
}
