/*
  DOM とイベントリスナ
*/

// HTML内を探索した際に一番最初に見つかるbutton要素を取得
const button = document.querySelector("button");

// button要素にイベントリスナを追加
button.addEventListener("click", function (event) {
  alert("Button was clicked!");
});
