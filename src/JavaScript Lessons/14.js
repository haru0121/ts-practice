/*
  コールバック関数
*/

function greet(name, callback) {
  const greeting = callback();
  console.log(greeting + name);
}

function goodMorning() {
  return "Good morning! ";
}
function goodNight() {
  return "Good night! ";
}

greet("John", goodMorning); // Good morning! John
greet("Alice", goodNight); // Good night! Alice

setTimeout(function () {
  console.log("実行後、2秒後ににメッセージを表示");
}, 2000);
