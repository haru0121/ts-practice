/*
  Promise
*/

//// then メソッド

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (0.5 > Math.random()) {
      resolve("非同期処理が成功！");
    } else {
      reject(new Error("非同期処理のエラー"));
    }
  }, 1000);
});

promise.then(
  (result) => {
    console.log(result); // '非同期処理が成功！' と出力される
  },
  (error) => {
    console.error(error.message); // '非同期処理のエラー' と出力される
  }
);

//// catch メソッド
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("非同期処理のエラー発生"));
//   }, 1000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error.message); // '非同期処理のエラー発生' と出力される
//   });

// finally メソッド
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("非同期処理が成功！");
//   }, 1000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .finally(() => {
//     console.log("非同期処理が完了しました。"); // 成功・失敗にかかわらず、このメッセージが出力される
//   });
