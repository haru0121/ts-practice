/*
  ES Modules と CommonJS
*/

//// エクスポート

module.exports = {
  myFunction: function () {
    /* ... */
    console.log("myFuncton is called.");
  },
  myVal: 123,
};

// または単一の関数をエクスポートする場合
// module.exports = function () {
//   /* ... */
// };
