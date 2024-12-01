import isOdd from "is-odd";

console.log(isOdd(2)); // false
console.log(isOdd("3")); // true

// 上記のコードをコンパイルせずに、直接 ts-node で実行する場合は、--files オプションをつけて実行してください。
// ts-node はスクリプト実行の高速化を目的として必要なファイルのみを読み込みます。ts-node のみで実行した場合は、自作の is-odd モジュールの宣言ファイルが読み込まれないためエラーとなります。
// node_modules/@types内の宣言ファイルは、--filesオプションの有無にかかわらず読み込まれます。
